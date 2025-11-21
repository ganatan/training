# Creation d'une lib Angular
nx g @nx/angular:lib libs/frontend/catalog

tsconfig.base.json
    "paths": {
      "@angular-node-electron/catalog": ["libs/frontend/catalog/src/index.ts"]
    }

# Creation domains
  nx g @nx/node:lib catalog-domain --directory=backend --unitTestRunner=jest
