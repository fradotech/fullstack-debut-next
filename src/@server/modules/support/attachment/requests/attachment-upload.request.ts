import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class AttachmentUploadRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  module!: string
}
