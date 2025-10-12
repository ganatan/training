
# Installation de Mongodb
  
  https://www.mongodb.com/try/download/community


  Télécharger la version "MongoDB Community Server".

  mongodb-windows-x86_64-8.2.1-signed.msi
  
    Complete
    Run service as Network Service user

    D:\hal\MongoDB\Server\8.2\data\
    D:\hal\MongoDB\Server\8.2\log\

# Principes
  Compass = GUI MongoDB    

  Clique Add new connection.
  Dans URI mets au choix:
    Sans auth: mongodb://localhost:27017
    Avec auth admin: mongodb://admin:admin@localhost:27017/?authSource=admin