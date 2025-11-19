
# 1990 — Domain Model (Eric Evans + autres précurseurs)

  séparation métier / infrastructure
  entités, services métier
  
# 2003 — Domain-Driven Design (Eric Evans)
  Eric Evans formalise :
    Ubiquitous Language (langage commun métier/devs)
    Entities, Value Objects
    Domain Services
    Bounded Contexts
    Anti-Corruption Layer
    Aggregates
    Repositories (interfaces)
    DDD met l'accent sur le métier, pas l’architecture technique.

# 2005–2010 — Onion Architecture (Jeffrey Palermo)
  Principe :
    Le domaine au centre
    Autour : application
    Tout autour : infrastructure

# 2012 — Hexagonal Architecture (Ports & Adapters, Alistair Cockburn)
  le domaine au centre
    ports = interfaces
    adapters = implémentations (DB, HTTP, UI)
    C’est la base du concept “dépendance inversée”.

# 2012 — Clean Architecture (Uncle Bob Martin)
  Robert C. Martin synthétise Onion + Hexagonal + DDD dans un modèle unifié.
  Le domaine au centre
    Une couche application
    Une couche interface (web, CLI, UI)
    Une couche infrastructure
    Tout est dépendant du domaine, jamais l’inverse
    C’est le modèle le plus populaire aujourd’hui.    