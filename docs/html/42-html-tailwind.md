# Tailwind via cdn

  https://tailwindcss.com/docs/installation/play-cdn

  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

# Tailwind via CLI

  https://tailwindcss.com/docs/installation/tailwind-cli

  npm install -g tailwindcss @tailwindcss/cli

  tailwindcss -version
  tailwindcss --version

  Fichier de base css

    @import "tailwindcss";

# Compilation
  
   tailwindcss -i .\42-html.src.css -o .\42-html.css --minify ≈ tailwindcss v4.1.14

# Example

  tailwindcss -i .\42-html-tailwind.src.css -o .\42-html-tailwind.css --minify

  tailwindcss -i .\42-html-tailwind.src.css -o .\42-html-tailwind.css --minify ≈ tailwindcss v4.1.14



# Example de ode

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
    
