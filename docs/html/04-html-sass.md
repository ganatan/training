
# Sass/SCSS
  Sass = Syntactically Awesome Style Sheets
  Préprocesseur CSS qui ajoute des fonctionnalités de programmation au CSS

  Sass (Syntactically Awesome Style Sheets)
    Préprocesseur CSS (un outil) qui transforme du code écrit dans un langage étendu (SCSS ou Sass) en CSS standard que le navigateur peut comprendre.

# Dates de sortie
  HTML : 1993 (HTML 1.0), HTML5 en 2014
  CSS : 1996 (CSS 1), CSS3 en 2011-2012
  Sass : 2006 (syntaxe indentée originale)
  SCSS : 2010 (syntaxe CSS-like ajoutée à Sass 3)

# Théorie
  Sass et SCSS = même préprocesseur CSS, uniquement la syntaxe diffère.
  Sass utilise l'indentation sans accolades/points-virgules
  SCSS utilise la syntaxe CSS classique avec {} et ;.
  Standard actuel : SCSS (compatible CSS, défaut Angular).

# Installation de sass
    
    npm install -g sass

# Compilation
    sass 04-html-sass.scss 04-html-sass.css

    Sass génère deux fichiers :
      04-html-sass.css
        le code CSS compilé
      04-html-sass.css.map
        fichier JSON qui décrit quelle ligne SCSS correspond à quelle ligne CSS.