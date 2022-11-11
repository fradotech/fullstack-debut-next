import jwt from 'jsonwebtoken';
import { createParamDecorator } from 'next-api-decorators';
import { EntityManager, Repository } from 'typeorm';
import { Exception } from '../../../../common/exceptions/index.exception';
import { DataSourceOptions } from '../../../../database/options.db';
import { AppUser } from '../entities/user.entity';
import { IAppUser } from '../interfaces/user.interface';

export const UserLogged = createParamDecorator<IAppUser | null>(
  // eslint-disable-next-line 
  // @ts-ignore
  async (req) => {
    const userRepo = new Repository<IAppUser>(AppUser, new EntityManager(DataSourceOptions))

    try {
      const token = req.headers.authorization?.split(' ')[1];
      const user: any = jwt.decode(token || '')
      !user && Exception.unauthorized()

      return await userRepo.findOne({ where: { id: user.id } })
    } catch (error) {
      // eslint-disable-next-line 
      console.log(error)
      Exception.unauthorized(error as string)
    }

    return null
  }
);