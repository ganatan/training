import dotenv from 'dotenv';
import DB_CLIENTS, { DbClientType } from './db-clients';

dotenv.config();

const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  dbClient: (process.env.DB_CLIENT || DB_CLIENTS.MOCK) as DbClientType,
};

export default config;
