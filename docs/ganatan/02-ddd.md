# DDD
  Domain-Driven Design (DDD)
    Méthode pour construire des logiciels complexes en prenant le domaine métier comme élément central.

    Code doit refléter le métier, pas la base de données, pas le framework, pas l’infrastructure.

    DDD = manière de penser, structurer et parler du système, en alignant développeurs et experts métier.


# histoire
  Avant 2000 :
    Applications monolithiques lourdes
    Beaucoup de code couplé à la base SQL
    Domaines très complexes (banque, aviation, industrie) mal représentés dans le code
    Logique métier dispersée dans DAO, contrôleurs, services techniques

  Résultat :
    impossible de maintenir l’application à long terme.
    DDD est apparu pour résoudre la complexité profonde du métier.

# Resume    

  1. L’ESSENTIEL (le cœur du DDD)
    Le DDD sert à maîtriser la complexité métier, pas à faire du CRUD.
    Le logiciel doit être aligné sur la réalité métier, grâce à un modèle vivant dans le code.
    Toute l’équipe (devs + experts métier) utilise un langage commun qui se reflète dans les noms de classes, méthodes, concepts.
    On découpe le système en Bounded Contexts, chacun avec son modèle cohérent.
    On protège le domaine des détails techniques (DB, HTTP, ORM) via une architecture en couches :
    Domain → Application → Infrastructure → Interfaces
    Le modèle métier évolue en continu via un cycle d’apprentissage (“knowledge crunching”).
    L’objectif final : un domaine central solide, compréhensible, testé, et facile à faire évoluer sur plusieurs années.

  2. LES CONCEPTS (stratégiques + tactiques)

  🔹 Ubiquitous Language
    Langage commun et rigoureux utilisé partout.
    Le code est le modèle métier.

  🔹 Bounded Context
    Un périmètre logique où un modèle est valide.
    Exemple : “Catalogue Cinéma” ≠ “Facturation des Films”.

  🔹 Context Map
    Vue globale des relations entre BCs.
    Patterns de relations : Shared Kernel, Customer/Supplier, ACL, Conformist, Separate Ways.

  🔹 Core / Supporting / Generic Subdomains
      Core = valeur métier principale
      Supporting = nécessaire mais pas différenciant
      Generic = commodités techniques (auth, log, paiement…)
      Concepts tactiques
      Ceux qu’on met dans le code au sein d’un BC.

  🔹 Entities
    Identité stable.
    Exemple : Director, Film, Actor.

  🔹 Value Objects
    Immuables, définis par leur valeur.
    Exemple : Year, CountryCode, Duration.

  🔹 Domain Services
    Logique métier qui ne tient à aucune entité.
    Exemple : “calculer la filmographie complète d’un réalisateur”.

  🔹 Aggregates + Aggregate Roots
    Regroupement cohérent d’entités/VO garantissant la consistance.
    Accès uniquement via la Root.

  🔹 Repositories
    Interfaces pour charger/stocker les agrégats.
    Interface dans le domaine, implémentation en infra.

  🔹 Factories
    Création d’objets complexes en respectant les invariants.

  3. BEST PRACTICES (les règles d’or)

    ✔ Le code doit refléter le jargon métier
      Pas de traduction douteuse (“User” / “Client” / “Person”).
      Une notion = un mot = une classe.

    ✔ Protéger le domaine du technique
      Domaine ne doit pas connaître :
        SQL
        HTTP
        JSON
        ORM
        Electron
        Nest/Express
        Le domaine = pur TypeScript.

    ✔ Un modèle par Bounded Context
      Jamais de modèle “universel”.
      Chaque BC a sa définition propre des concepts.

    ✔ Agrégats petits et cohérents
      Un agrégat = une invariance.
      Pas des graphes d’objets géants.

    ✔ Use cases explicites
      Ne jamais écrire la logique métier dans :
      les controllers
      les services techniques
      les handlers HTTP
      Toujours dans :
      application/use-cases/...

    ✔ Repositories = interfaces
      Tu isoles le domaine du stockage.
      Tu peux remplacer Postgres par Mongo sans toucher au domaine.

    ✔ Iteration : refactoriser le modèle
      Le modèle évolue avec la compréhension métier.
      Pas une spec figée au début du projet.

    ✔ Privilégier les Value Objects
      Ils limitent les erreurs, garantissent les invariants, et simplifient le code.

  4. PATTERNS (implémentation DDD/Clean Architecture)
  
  Architecture en couches
    domain
    application
    infrastructure
    interfaces

  Patterns DDD
    Entity
    Value Object
    Aggregate
    Aggregate Root
    Repository
    Domain Service
    Factory
    Domain Event

  Patterns stratégiques
    Bounded Context
    Context Map
    Shared Kernel
    ACL (Anti-Corruption Layer)
    Customer/Supplier
    Conformist

  Patterns de modélisation
    Specification Pattern
    Policy Pattern
    Domain Events + Event Handlers
    CQRS (parfois utilisé avec DDD)

  Patterns organisationnels
    BC = équipe
    Core Domain = équipe senior
    Supporting Domain = équipe plus junior

# Version ultra courte (10 secondes, pour entretien)
  DDD : modéliser le métier, pas la technique.
  Ubiquitous Language : même langage dans le code et dans les réunions.
  Bounded Contexts : chaque sous-domaine a son modèle propre.
  Tactical Patterns : Entities, Value Objects, Aggregates, Repositories, Services.
  Clean Architecture : Domain → Application → Infrastructure → Interfaces.
  Le domaine est pur, isolé, stable, évolutif.
  Le DDD permet de maîtriser la complexité des systèmes longs, vivants et changeants.