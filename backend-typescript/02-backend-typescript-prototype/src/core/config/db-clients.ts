const DB_CLIENTS = {
  PG: 'pg',
  MYSQL: 'mysql',
  MOCK: 'mock',
} as const;

export default DB_CLIENTS;
export type DbClientType = typeof DB_CLIENTS[keyof typeof DB_CLIENTS];
