export class FileUploadDto {
    name: string;
    length: number;
    chunkSize: number
    filename: string
    md5: string
    contentType: string
}
