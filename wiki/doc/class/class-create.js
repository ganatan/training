// import PostgreSQLClient from './class-pg-client';
const PostgreSQLClient = require('./class-pg-client');

const dbClient = { name: 'pg' }

let postgreSQLClient = new PostgreSQLClient(dbClient)
console.log('00000000001:' + postgreSQLClient);