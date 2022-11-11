import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from "next";
import { createMiddlewareDecorator, NextFunction } from "next-api-decorators";
import { config } from '../../../../../config';
import { Exception } from '../../../../common/exceptions/index.exception';
import { server } from '../../../../server';

export const guardRoleAll = async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
  try {
    await server()
    const token = req.headers.authorization?.split(' ')[1];
    const user = jwt.verify(token || '', config.auth.jwt.secretKey)
    !user && Exception.unauthorized()
  } catch (error) {
    // eslint-disable-next-line
    console.log(error)
    Exception.unauthorized(error as string)
  }

  next();
}

export const GuardRoleAll = createMiddlewareDecorator(guardRoleAll);