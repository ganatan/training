# Concepts
  Une classe Java définit des champs, des méthodes et un constructeur.
  Les champs sont en général private pour respecter l’encapsulation.
  L’accès aux champs se fait via des getters et setters.
  Le constructeur initialise l’objet et s’exécute à chaque new.
  Une classe peut hériter d’une autre via extends.
  Le constructeur de l’enfant doit appeler super(...).
  Une méthode du parent peut être redéfinie dans l’enfant.
  L’annotation @Override vérifie que la méthode existe bien dans le parent.
  super.method() permet d’appeler l’implémentation parent.
  toString() sert à afficher un objet (équivalent Java du JSON.stringify).
