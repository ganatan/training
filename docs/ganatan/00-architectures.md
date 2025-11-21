
# Architectures : Résumé + Code + Date

1. Monolithique Simple
  Date : Années 1960-1970 (début du développement logiciel)
  Code :
  typescript// Tout dans un seul fichier/service
  directorService.getAll() { return db.query('SELECT *').map(formatUI); }

2. Layered (En Couches)
  Date : Années 1990 (popularisé par les architectures 3-tiers)
  Code :
  typescript// Séparation technique horizontale
  UI → Business.getDirectors() → DataAccess.findAll() → DB

3. Hexagonale (Ports & Adapters)
  Date : 2005 (Alistair Cockburn)
  Code :
  typescript// Domaine isolé via interfaces
  class GetDirectors { constructor(private repo: DirectorRepository) {} }
  class SqliteRepo implements DirectorRepository { findAll() {...} }

4. Clean Architecture
  Date : 2012 (Robert C. Martin "Uncle Bob")
  Code :
  typescript// Dépendances vers le centre
  Entities ← UseCases(repo: Interface) ← Controllers ← Frameworks

5. DDD avec Bounded Contexts
  Date : 2003 (Eric Evans, livre "Domain-Driven Design")
  Code :
  typescript// Organisation par domaine métier
  libs/cinema/directors/domain/director.entity.ts
  libs/cinema/films/domain/film.entity.ts

6. Feature-Sliced Design (FSD)
  Date : 2020 (communauté frontend russe)
  Code :
  typescript// Par niveau d'abstraction
  pages/directors → widgets/list → features/create → entities/director

7. Microservices
  Date : ~2011 (Netflix, Martin Fowler popularise en 2014)
  Code :
  typescript// Services indépendants
  directors-service:3001/api/directors
  films-service:3002/api/films

```

---

## Timeline Visuelle
```
1960s  [ Monolithique ]
1990s                    [ Layered ]
2003                                  [ DDD ]
2005                                        [ Hexagonale ]
2011                                              [ Microservices ]
2012                                                    [ Clean Architecture ]
2020                                                              [ FSD ]