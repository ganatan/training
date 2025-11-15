# Concept
  Il sert à créer des types simples, des unions, des intersections, des fonctions, des tuples et des types avancés.

# Exemple  
  
  - type crée un alias de type
  type Movie = {
    title: string
    year: number
  }

  - type peut faire des unions
  type Id = string | number  

  - type peut définir une fonction
  type Fn = (value: number) => string