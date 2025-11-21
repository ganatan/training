
# Vue stratégique – Bounded Contexts
  [Catalog]  ── fournit les infos de base (films, personnes, pays)
    │
    │ (utilise le catalog pour savoir ce qu'on vend)
    ▼
  [Inventory] ── gère les supports physiques et le stock
    │
    │ (utilise inventory + prices pour créer des ventes)
    ▼
  [Sales] ── gère les ventes (commandes, lignes, montants)

# Ranger ton besoin dedans :
  Catalog
    Réalisateur
    Pays du réalisateur
    Film ou série
    Acteurs
  Inventory
    Support physique (DVD, Blu-ray, Blu-ray HD)
    Stock
  Sales
    Ventes  

# Catalog BC – Modèle conceptuel
  Agrégats / entités

  Catalog
    Title (Aggregate Root)
      - idTitle
      - title
      - type (FILM | SERIE)
      - releaseYear
      - credits: Credit[]          # lien vers les personnes
    Person
      - idPerson
      - fullName
      - birthDate?
      - birthCountry: CountryCode
    Credit (Value Object)
      - personId
      - role (DIRECTOR | ACTOR | COMPOSER | OTHER)
    Country
      - code: CountryCode
      - name
    CountryCode (Value Object)
      - value (FR, US, etc.)    

# Inventory BC – Modèle conceptuel
    Inventory
      MediaItem (Aggregate Root)
      - idItem
      - titleId        # référence vers Catalog.Title
      - supportType    # DVD | BLURAY | BLURAY_HD
      - locationId     # magasin / entrepôt
      - status         # AVAILABLE | RESERVED | SOLD | DAMAGED | LOST
    Location
      - idLocation
      - name
      - type (STORE | WAREHOUSE)
    SupportType (Value Object / Enum)
      - value (DVD, BLURAY, BLURAY_HD)   

# Sales BC – Modèle conceptuel
  Sales
    Order (Aggregate Root)
      - idOrder
      - customerId?
      - createdAt
      - status (DRAFT | CONFIRMED | PAID | CANCELLED)
      - lines: OrderLine[]
      - totalAmount: Money
    OrderLine (Value Object)
      - lineId
      - mediaItemId     # ce qu'on vend (lien vers Inventory.MediaItem)
      - unitPrice: Money
      - quantity        # souvent 1 si on vend des exemplaires uniques
      - lineAmount: Money
    Money (Value Object)
      - amount
      - currency
    Customer
      - idCustomer
      - name
      - email         