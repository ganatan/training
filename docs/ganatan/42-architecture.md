boxymovies/
├─ apps/
│  ├─ boxymovies-web/         → Angular 21 (UI Web)
│  ├─ boxymovies-desktop/     → Electron (main + preload)
│  ├─ boxymovies-api/         → Node 20 (REST + parsing + stats)
│
├─ libs/
│  ├─ domain/                 → Entités + Value Objects + Domain Services
│  │   ├─ movie/
│  │   │    ├─ Movie.ts
│  │   │    ├─ MovieId.ts
│  │   │    └─ MovieRating.ts
│  │   ├─ director/
│  │   │    ├─ Director.ts
│  │   │    └─ DirectorStats.ts
│  │   ├─ genre/
│  │   │    └─ Genre.ts
│  │   └─ common/
│  │        └─ ValueObject.ts
│  │
│  ├─ application/            → Use Cases (orchestrateurs métier)
│  │   ├─ movie/
│  │   │    ├─ AnalyzeMovies.usecase.ts
│  │   │    └─ CompareMovies.usecase.ts
│  │   └─ director/
│  │        └─ AnalyzeDirectorTrends.usecase.ts
│  │
│  ├─ infrastructure/         → Impl. techniques dépendantes
│  │   ├─ parsers/            → CSV / JSON loaders
│  │   │    ├─ CsvMovieParser.ts
│  │   │    └─ JsonMovieParser.ts
│  │   ├─ filesystem/
│  │   │    └─ FileLoader.ts
│  │   ├─ stats/
│  │   │    └─ StatsEngine.ts
│  │   └─ adapters/
│  │        ├─ ApiMovieRepository.ts
│  │        └─ ElectronFileAdapter.ts
│  │
│  ├─ ui/                     → Composants Angular transverses
│      ├─ charts/
│      ├─ tables/
│      └─ filters/
│
├─ tools/
│  └─ scripts/
│      ├─ generate-version.ts
│      └─ generate-project-structure.ts
│
└─ package.json



# Fonctionnalités cibles
  Version Desktop (Electron)
    charger fichiers JSON/CSV de datasets cinéma
    analyser localement (Node → StatsEngine)
    afficher tendances, moyennes, distributions
    comparer des réalisateurs ou films
    exporter un rapport (PDF, JSON, CSV)
  Version Web (Angular 21)
    affichage des analyses
    graphiques Tailwind + Angular
    filtres, tri, recherche
    comparaison entre films / réalisateurs
    version vitrine publique (demo)

# Architecture métier (DDD)
  Entités (Domain Layer)
    Movie
    Director
    Genre
    Rating
    StatsResult
    DirectorTrends

  Domain Services
    MovieAnalyticsService
    DirectorAnalyticsService

  Use Cases (Application Layer)
    AnalyzeMoviesUseCase
    CompareDirectorsUseCase
    ExtractTrendsUseCase

  Infrastructure
    parsers (CSV / JSON)
    file loader (Electron → filesystem)
    stats engine (Node)
    repositories (API / FS)