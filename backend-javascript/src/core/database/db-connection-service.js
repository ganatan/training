'use strict';

class DBConnectionService {
  constructor(dbFactory, config) {
    console.log('00000000001:DBConnectionService:constructor:');
    this.dbFactory = dbFactory;
    this.config = config;
  }

  createClient() {
    const dbConfig = this.config[process.env.NODE_ENV || 'development'];

    return this.dbFactory.createClient(dbConfig);
  }
}

module.exports = DBConnectionService;
