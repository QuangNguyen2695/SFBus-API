import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
  StreamableFile,
} from '@nestjs/common'
import { InjectConnection, InjectModel } from '@nestjs/mongoose'
import { FastifyReply, FastifyRequest } from 'fastify'
import { GridFSBucket, ObjectId } from 'mongodb'
import { Connection, Model, mongo } from 'mongoose'
import { FileUploadDocument } from './schema/upload.schema'
import { FileUploadDto } from './dto/upload.dto'

type Request = FastifyRequest
type Response = FastifyReply

@Injectable()
export class UploadService {
  private readonly bucket: any

  constructor(
    @InjectModel(FileUploadDocument.name) private readonly fileModel: Model<FileUploadDto>,
    @InjectConnection() private readonly connection: Connection,
  ) {
    this.bucket = new mongo.GridFSBucket(this.connection.db)
  }

  async upload(request: any): Promise<{ ids: string[] }> {
    const files = [];
    for await (const part of request.files()) {
      if (part.type === 'file') {
        const id = new ObjectId();
        const uploadStream = this.bucket.openUploadStreamWithId(
          id,
          part.filename,
          {
            contentType: part.mimetype,
          },
        );

        part.file.pipe(uploadStream);
        files.push(id.toString());
      }
    }

    return { ids: files };
  }

  async download(
    id: string,
    request: Request,
    response: Response,
  ): Promise<StreamableFile> {
    try {
      if (!ObjectId.isValid(id)) {
        throw new BadRequestException(null, 'InvalidVideoId')
      }

      const oId = new ObjectId(id)
      const fileInfo = await this.fileModel.findOne({ _id: id }).exec()

      if (!fileInfo) {
        throw new NotFoundException(null, 'VideoNotFound')
      }

      if (request.headers.range) {
        const range = request.headers.range.substr(6).split('-')
        const start = parseInt(range[0], 10)
        const end = parseInt(range[1], 10) || null
        const readstream = this.bucket.openDownloadStream(oId, {
          start,
          end,
        })

        response.status(206)
        response.headers({
          'Accept-Ranges': 'bytes',
          'Content-Type': fileInfo.contentType,
          'Content-Range': `bytes ${start}-${end ? end : fileInfo.length - 1}/${fileInfo.length
            }`,
          'Content-Length': (end ? end : fileInfo.length) - start,
          'Content-Disposition': `attachment; filename="${fileInfo.filename}"`,
        })

        return new StreamableFile(readstream)
      } else {
        const readstream = this.bucket.openDownloadStream(oId)

        response.status(200)
        response.headers({
          'Accept-Range': 'bytes',
          'Content-Type': fileInfo.contentType,
          'Content-Length': fileInfo.length,
          'Content-Disposition': `attachment; filename="${fileInfo.filename}"`,
        })

        response.send(readstream)
      }
    } catch (e) {
      console.error(e)
      throw new ServiceUnavailableException()
    }
  }

  getList() {
    return this.fileModel.find().exec()
  }

  async viewFile(
    id: string,
    request: Request,
    response: Response,
  ): Promise<StreamableFile> {
    try {
      if (!ObjectId.isValid(id)) {
        throw new BadRequestException(null, 'InvalidFileId');
      }

      const oId = new ObjectId(id);
      const fileInfo = await this.fileModel.findOne({ _id: id }).exec();

      if (!fileInfo) {
        throw new NotFoundException(null, 'FileNotFound');
      }

      const readstream = this.bucket.openDownloadStream(oId);

      response.status(200);
      response.headers({
        'Accept-Ranges': 'bytes',
        'Content-Type': fileInfo.contentType,
        'Content-Length': fileInfo.length,
        'Content-Disposition': `inline; filename="${fileInfo.filename}"`,
      });

      return new StreamableFile(readstream);
    } catch (e) {
      console.error(e);
      throw new ServiceUnavailableException();
    }
  }
}