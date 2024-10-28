'use strict';

class GanatanClient {
  name = 'ganatan';
  constructor(dbClient) {
    this.name = 'ganatanaaaa';
  }

  async connect() {
    return true;
  }

  async close() {
    // this.client.release();
  }
  show() {
    // this.client.release();
  }
}

module.exports = GanatanClient;
