'use strict';

const { dbClients1 } = require('./db-clients1');
const { dbClients2 } = require('./db-clients2');
const dbClients3 = require('./db-clients3');
const { clients1, clients2 } = require('./db-clients4');
const dbClients5 = require('./db-clients5');

console.log('00000000001:' + JSON.stringify(dbClients1));
console.log('00000000002:' + JSON.stringify(dbClients2));
console.log('00000000003:' + JSON.stringify(dbClients3));
console.log('00000000004:' + JSON.stringify(clients1));
console.log('00000000005:' + JSON.stringify(clients2));
console.log('00000000006:' + JSON.stringify(dbClients5));
