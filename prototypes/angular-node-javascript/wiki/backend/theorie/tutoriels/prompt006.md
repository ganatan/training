Pourquoi faire un build en Node.js ?
Contrairement aux applications front-end comme Angular ou React, une application Node.js n'a pas besoin d'un build au sens traditionnel. Cependant, un build peut être utile dans plusieurs cas :

Transpiler le code ES6+ vers une version plus compatible (ex: ES5) pour fonctionner sur des environnements plus anciens.
Minifier et optimiser le code pour réduire le temps de chargement en production.
Supprimer les fichiers inutiles et s’assurer que seuls les fichiers nécessaires sont inclus dans le déploiement.
Utiliser Webpack ou Babel pour packager les modules et optimiser les performances.
Créer un bundle exécutable unique, surtout pour un environnement où les fichiers node_modules ne doivent pas être inclus directement.