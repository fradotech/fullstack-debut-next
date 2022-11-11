import { EntityManager, Repository } from "typeorm";
import logger from "../../../common/utils/logger";
import { DataSourceOptions } from "../../../database/config/options.db";
import { UserCrudApp } from "./apps/user.app";
import { AppUser } from "./entities/user.entity";
import { IAppUser } from "./interfaces/user.interface";
import { UserIndexService } from "./services/user-index.service";
import { UserService } from "./services/user.service";

export const UserModule = () => {
  const repo = new Repository<IAppUser>(AppUser, new EntityManager(DataSourceOptions))
  const crud = new UserCrudApp(new UserIndexService(repo), new UserService(repo))

  logger('Module', `User Module`)

  return {
    crud
  }
}