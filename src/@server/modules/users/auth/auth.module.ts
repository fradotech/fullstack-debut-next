import { EntityManager, Repository } from "typeorm";
import logger from "../../../common/utils/logger";
import { DataSourceOptions } from "../../../database/config/options.db";
import { server } from "../../../server";
import { AppUser } from "../user/entities/user.entity";
import { IAppUser } from "../user/interfaces/user.interface";
import { UserService } from "../user/services/user.service";
import { AuthApp } from "./apps/auth.app";

export const AuthModule = () => {
  server()
  const userRepo = new Repository<IAppUser>(AppUser, new EntityManager(DataSourceOptions))
  const auth = new AuthApp(new UserService(userRepo))

  logger('Module', `Auth Module`)

  return {
    auth
  }
}