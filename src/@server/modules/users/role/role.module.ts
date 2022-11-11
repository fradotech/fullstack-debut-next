import logger from "../../../common/utils/logger";
import { RoleApp } from "./apps/role.app";

export const RoleModule = () => {
  const crud = new RoleApp()

  logger('Module', `Role Module`)

  return {
    crud
  }
}