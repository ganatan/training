
Projet : BoxyMovies — Desktop & Web Analytics

BoxyMovies est un outil d’analyse et de visualisation de données cinéma, pensé comme une application :

Desktop (Electron)

Web (Angular 21, hébergée sur boxymovies.com)

Les deux versions partagent :

les mêmes entités (Movie, Director, Genre…)

les mêmes use cases (AnalyzeMovies, CompareDirectors…)

les mêmes règles métier

le même backend Node pour parsing, stats, logique métier

C’est DDD + Clean Architecture, dans un monorepo Nx.