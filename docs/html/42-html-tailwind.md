# Concepts

  Tailwind est un framework CSS utilitaire où chaque classe représente une propriété unique.
  Il évite les CSS complexes en permettant de construire l’UI directement dans le HTML.
  Le moteur génère uniquement les classes utilisées pour rester ultra-léger.
  En v4, Tailwind adopte un compilateur Oxide (Rust) et simplifie tout avec @import "tailwindcss".


# Historique 
  v1 (2019) : sortie officielle, framework utility-first, classes statiques massives.
  v2 (2020) : dark mode natif, palette élargie, amélioration du design.
  v3 (2021) : moteur JIT par défaut, CDN officiel, arbitrary values.
  v3.4 (2023) : dernière version majeure compatible CDN.
  v4 (2024–2025) : moteur Oxide en Rust, compilation obligatoire, nouvelle syntaxe @import "tailwindcss".
  v4.1+ (2025) : optimisations, bundle léger, configuration simplifiée.

# Tailwind github
  
  https://github.com/tailwindlabs/tailwindcss

  https://github.com/tailwindlabs/tailwindcss/releases

# Tailwind via cdn
  
  https://github.com/tailwindlabs/tailwindcss

  https://tailwindcss.com/docs/installation/play-cdn

  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

# Tailwind via CLI

  https://tailwindcss.com/docs/installation/tailwind-cli

  npm install -g tailwindcss @tailwindcss/cli

  tailwindcss -version
  tailwindcss --version

  Fichier de base css

    @import "tailwindcss";

# Compilation directement dans HTML

  npm init -y
  npm install -D tailwindcss@latest

  tailwindcss -i .\42-html-tailwind.src.css -o .\42-html-tailwind.css --minify

  tailwindcss -i .\42-html-tailwind.src.css -o .\42-html-tailwind.css --minify ≈ tailwindcss v4.1.15


# Exemple de code

  - styles.css
    @import url("tailwindcss");

    $primary: #0ea5e9;

    .btn {
      @apply px-4 py-2 rounded text-white;
      background-color: $primary;
    }

    .card {
      @apply p-4 rounded-lg shadow;
      h1 { @apply text-xl font-semibold; }
      p { @apply text-sm text-gray-600; }
      color:red;
    }

  - Commandes
    npm i -D sass tailwindcss
    npx sass styles.scss styles.pre.css
    npx tailwindcss -i styles.pre.css -o styles.css --minify      

  - index.html

    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="styles.css">
    </head>
    <body class="min-h-screen bg-gray-50 flex items-center justify-center">
      <div class="card">
        <h1>Titre</h1>
        <p>Texte</p>
        <button class="btn">Action</button>
      </div>
    </body>
    </html>
    
