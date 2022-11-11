import { EntityManager, Repository } from 'typeorm';
import { DataSourceOptions } from '../../../database/options.db';
import { AppAttachment } from './entities/attachment.entity';
import { IAppAttachment } from './interfaces/attachment.interface';
import { AttachmentService } from './services/attachment.service';

export const AttachmentModule = () => {
  const repo = new Repository<IAppAttachment>(AppAttachment, new EntityManager(DataSourceOptions))
  const crud = new AttachmentService(repo)

  return {
    crud
  }
}