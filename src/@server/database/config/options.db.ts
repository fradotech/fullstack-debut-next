import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { config } from "../../../config";
import { entities } from "./entities.db";

export const DataSourceOptions = new DataSource({
  type: 'mysql',
  host: config.database.host,
  port: +config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  logging: false,
  entities,
  // dropSchema: config.server.nodeEnv !== 'production',
  // ssl: {
  //   rejectUnauthorized: false,
  //   ca: config.database.sslCa
  // }
})