import { IsNotEmpty, IsString } from 'class-validator'

export class FindAttachmentRequest {
  @IsNotEmpty()
  @IsString()
  fileUrl!: string

  @IsNotEmpty()
  @IsString()
  module!: string
}
