

# Concepts

➡️ Electron reste officiellement en CommonJS parce que c’est SIMPLE, FIABLE et COMPATIBLE.
➡️ ESM marche, mais demande une architecture maîtrisée (comme toi).



  2. Electron + Node : support ESM = tardif et encore fragile
    Electron s’appuie sur une version interne de Node.js.
    Node a ajouté le support ESM progressivement, avec beaucoup de breaking changes.
    Electron a dû suivre, avec un retard technique.
    Aujourd’hui encore, Electron explique dans sa doc ESM :
    (traduction résumée)

    « ESM est supporté, mais certaines APIs internes et certains loaders sont encore en évolution. CommonJS reste la voie la plus simple pour garantir une compatibilité maximale. »

    C’est vrai, surtout pour :
      preload scripts
      contextIsolation
      modules natifs
      packaging avec Forge ou Builder
      import de ressources locales
      process de build Nx, Vite, Webpack, Rollup

  Ces zones sont encore moins stables en ESM.

  ✅ 3. Les outils Electron officiels utilisent encore CJS
  Par exemple :

    electron . s'attend par défaut à un main.js CJS
    Electron Forge génère un main.js CJS
    Electron Builder part du principe que ton entry point est CJS

  Tous les guides officiels utilisent :
  const { app, BrowserWindow } = require('electron')

  Si toute la doc passait en ESM maintenant, cela casserait la moitié des starters, tutoriels, boilerplates, etc.

  ✅ 4. Le plus gros problème : ESM casse le preload
  Exemple officiel :
  // preload.js
  const { contextBridge } = require('electron')

  → CJS obligatoire (pour des raisons de sécurité)
  Si tu forces "type": "module" au root, alors tous tes preload scripts doivent devenir .cjs, ou tu dois configurer un loader spécial.
  Electron a donc choisi la seule solution stable : tout documenter en CJS.

  ✅ 5. Electron supporte ESM depuis Electron 28, mais ce n'est pas encore universel
  Electron dit clairement :

  “We support ESM, but CommonJS remains the recommended default.”

  Pourquoi ?
  Parce que Node lui-même plante encore sur certains cas ESM, par exemple :

