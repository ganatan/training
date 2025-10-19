# Commandes de Base
  npm install -g @angular/cli
  ng new angular-starter
  ng --version
  ng version


# 2/ Creation d'une application Angular
  
  Avec Zone.js (option N)	Mode historique	Angular “écoute” tous les événements (click, timer, HTTP…) via Zone.js et relance un cycle de détection global	

  Zoneless (option Y)	Mode moderne	Angular ne s’appuie plus sur Zone.js : il ne déclenche le CD que quand un signal change	Angular 17+ (stable à partir de 19)

# 5/ Bundler
    ≤ v16	          Webpack 5 via Angular CLI	                    compilation lente mais robuste
    v17 → v20	      esbuild + Rollup	compilation ultra-rapide    remplace Webpack
    v21 (à venir)	  Builder stable zoneless + esbuild pipeline	  Webpack totalement retiré  