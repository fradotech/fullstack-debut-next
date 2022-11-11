import { Column, Entity } from 'typeorm'
import { BaseEntity } from '../../../../infrastructure/base/base.entity'
import { IAppAttachment } from '../interfaces/attachment.interface'

@Entity()
export class AppAttachment extends BaseEntity implements IAppAttachment {
  @Column()
  fileUrl!: string

  @Column()
  module!: string
}
