import jwt from 'jsonwebtoken';
import { config } from '../../../../../config';
import { IAppUser } from '../../user/interfaces/user.interface';

export const JwtService = {
  sign: (user: IAppUser) => {
    return user.token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      config.auth.jwt.secretKey,
      {
        expiresIn: config.auth.jwt.expiredInseconds
      })
  },
}