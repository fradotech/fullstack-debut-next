import logger from '../../common/utils/logger';
import { seeders } from '../seeds/seed.module';
import { DataSourceOptions } from './options.db';

export async function connectDabatase() {
  await DataSourceOptions.initialize()
    .then(async (res) => res)
    .catch((error) => logger(error))

  await seeders()
};