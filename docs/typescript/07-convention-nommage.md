
# Conventions de nommage en TypeScript

Classes, interfaces, enums, types alias
  # PascalCase
  class Movie, interface Named, enum Status, type MediaItem

Variables, fonctions, constantes non globales, propriétés, paramètres
  # camelCase
  let budget, function getItems(), const movieCount

Constantes globales ou valeurs immuables
  # SCREAMING_SNAKE_CASE
  const MAX_RETRIES = 3

Fichiers
  # kebab-case
  media.service.ts, movie.controller.ts

Interfaces
  # PascalCase
  Named

Types génériques
  # lettres majuscules courtes
  T, K, V, E


# Exemples
  interface Named { name: string }
  class Movie implements Named { name: string }
  const MAX_ITEMS = 10
  function loadMovies(): void {}