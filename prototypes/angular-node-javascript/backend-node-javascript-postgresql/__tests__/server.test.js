import server from '../src/server.js';

describe('Démarrage du serveur', () => {
  it('Le serveur démarre et écoute correctement', async () => {
    expect(server.listening).toBe(true);
  });

  afterAll(() => {
    server.close();
  });
});
