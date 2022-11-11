import { initializeTransactionalContext } from "typeorm-transactional-cls-hooked";
import { config } from "../config";
import logger from "./common/utils/logger";
import { connectDabatase } from "./database/config/connect.db";

export async function server() {
  await connectDabatase()
  initializeTransactionalContext()

  logger('Start Server', `API server start at ${config.server.hostApi}`)
}