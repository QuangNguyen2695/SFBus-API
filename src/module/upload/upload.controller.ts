import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
  StreamableFile,
  UseGuards,
} from '@nestjs/common'
import {
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'
import { FastifyReply, FastifyRequest } from 'fastify'
import { UploadService } from './upload.service'
import { Roles } from '@/decorators/roles.decorator'
import { JwtAuthGuard } from '@/guards/jwt-auth.guard'
import { RolesGuard } from '@/guards/roles.guard'
import { FileUploadDto } from './dto/upload.dto'

type Request = FastifyRequest
type Response = FastifyReply


@ApiTags('File')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @ApiOperation({
    summary: 'Upload a file.',
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: { file: { type: 'string', format: 'binary' } },
          },
        },
      },
    },
  })
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({
    schema: {
      properties: {
        id: {
          type: 'string',
          example: '5e2b4cb75876c93e38b6e6aa',
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Post('upload-file')
  uploadFile(@Req() request: Request): Promise<{ ids: string[] }> {
    console.log("🚀 ~ UploadController ~ uploadFile ~ request:", request)
    return this.uploadService.upload(request)
  }

  @ApiOperation({
    summary: 'Get a list of all uploaded files.',
  })
  @ApiOkResponse({
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: '5e2b447e4aadb800bccfb339' },
          length: { type: 'number', example: 730416 },
          chunkSize: { type: 'number', example: 261120 },
          uploadDate: { type: 'Date', example: '2020-01-24T19:24:46.366Z' },
          filename: { type: 'string', example: 'IMG_0359.jpeg' },
          md5: { type: 'string', example: 'ba230f0322784443c84ffbc5b6160c30' },
          contentType: { type: 'string', example: 'image/jpeg' },
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get('get-all-files')
  getAllFiles(): Promise<FileUploadDto[]> {
    return this.uploadService.getList()
  }

  @ApiOperation({ summary: 'Download a file.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user')
  @Get(':id')
  async downloadFile(
    @Param('id') id: string,
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<StreamableFile> {
    const file = await this.uploadService.download(id, request, response);
    if (!file) {
      throw new NotFoundException('File not found');
    }
    return file;
  }

  @ApiOperation({ summary: 'View a file online.' })
  @Get('view/:id')
  viewFile(
    @Param('id') id: string,
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<StreamableFile> {
    return this.uploadService.viewFile(id, request, response);
  }
}