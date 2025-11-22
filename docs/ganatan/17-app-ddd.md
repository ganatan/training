# Creation d'une lib Angular
nx g @nx/angular:lib libs/frontend/catalog

tsconfig.base.json
    "paths": {
      "@angular-node-electron/catalog": ["libs/frontend/catalog/src/index.ts"]
    }

# Creation domains
  Catalog-domain
  Inventory-domain
  Sales-domain


# Verification des dir crees sans les creer
  nx g @nx/node:lib catalog-domain --directory=backend --dry-run

# Créer la lib domaine backend pour Catalog
  nx g @nx/node:lib --directory=libs/catalog-domain

# Créer la lib partagée pour les DTO Catalog
  nx g @nx/node:lib --directory=shared/catalog-contract 

# Créer la lib application service backend pour Catalog 
# Use cases (application service)
  nx g @nx/node:lib --directory=libs/catalog-application

# Créer la lib infrastructure service backend pour Catalog 
  nx g @nx/node:lib --directory=libs/catalog-infrastructure

  nx g @nx/node:lib --directory=libs/inventory-domain
  nx g @nx/node:lib --directory=shared/inventory-contract 
  nx g @nx/node:lib --directory=libs/inventory-application
  nx g @nx/node:lib --directory=libs/inventory-infrastructure

# Deplacement 

  nx g @nx/workspace:move --project catalog-domain libs/catalog/domain
  nx g @nx/workspace:move --project catalog-application libs/catalog/application
  nx g @nx/workspace:move --project catalog-infrastructure libs/catalog/infrastructure
  nx g @nx/workspace:move --project catalog-contract libs/catalog/contract

  nx g @nx/workspace:move --project inventory-domain libs/inventory/domain
  nx g @nx/workspace:move --project inventory-application libs/inventory/application
  nx g @nx/workspace:move --project inventory-infrastructure libs/inventory/infrastructure
  nx g @nx/workspace:move --project inventory-contract libs/inventory/contract


  nx g @nx/workspace:move --project catalog-domain libs/contexts/catalog/domain
  nx g @nx/workspace:move --project catalog-application libs/contexts/catalog/application
  nx g @nx/workspace:move --project catalog-infrastructure libs/contexts/catalog/infrastructure
  nx g @nx/workspace:move --project catalog-contract libs/contexts/catalog/contract

  nx g @nx/workspace:move --project inventory-domain libs/contexts/inventory/domain
  nx g @nx/workspace:move --project inventory-application libs/contexts/inventory/application
  nx g @nx/workspace:move --project inventory-infrastructure libs/contexts/inventory/infrastructure
  nx g @nx/workspace:move --project inventory-contract libs/contexts/inventory/contract


# Resume
  Frontend Angular     →   appelle  →   Backend API (Express/Nest)
  Backend API          →   appelle  →   Use Cases
  Use Cases            →   utilisent →   Domain (entities + repos)
  Use Cases            →   retournent →  Contracts (DTO)  


  Frontend Angular → Contracts seulement
  Backend API → Use Cases
  Use Cases → Domain + Contracts
  Domain → uniquement Entities + Repository
  Contracts → Types communs Front/Back