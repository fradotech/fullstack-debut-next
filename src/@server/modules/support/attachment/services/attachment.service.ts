import { Repository } from 'typeorm'
import { Exception } from '../../../../common/exceptions/index.exception'
import { IAppAttachment } from '../interfaces/attachment.interface'
import { AttachmentUploadRequest } from '../requests/attachment-upload.request'

export class AttachmentService {
  constructor(
    private readonly attachmentRepo: Repository<IAppAttachment>,
  ) {}

  async create(
    fileUrl: string,
    req: AttachmentUploadRequest,
  ): Promise<IAppAttachment> {
    try {
      const data = this.attachmentRepo.create({
        fileUrl,
        module: req.module,
      })

      return await this.attachmentRepo.save(data)
    } catch (error) {
      Exception.unprocessable(error)
    }

    return {
      id: '',
      fileUrl,
      module: req.module,
    }
  }
}
