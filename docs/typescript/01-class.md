# Concepts
  Une classe est un modèle qui définit des propriétés, des méthodes et un constructeur.
  Le constructeur initialise l’objet et s’exécute à chaque new.
  L’héritage se fait avec extends, ce qui permet de réutiliser et spécialiser une classe parent.
  super() appelle le constructeur du parent et doit être utilisé avant this dans l’enfant.
  Une méthode du parent peut être redéfinie avec override, garantissant une signature correcte.
  super.method() permet d’exécuter la version parent dans une méthode redéfinie.
  TypeScript permet d’initialiser les propriétés directement dans la classe (name = '').
  Les getters/setters avec les mots-clés get et set permettent d’exposer une propriété avec logique interne.
  La classe définit aussi le type de l’objet, ce qui donne un typage strict (let movie: Movie).
  Une instance existe réellement au runtime et peut être affichée via console.log ou JSON.stringify.

# class
  Classe (TypeScript / JavaScript)

  Une classe est un modèle (un plan) qui permet de créer des objets.
    Elle définit :
      des propriétés (données)
      des méthodes (comportements)
      éventuellement un constructor (initialisation des valeurs)

    Une classe existe au runtime (elle génère du JavaScript exécuté).

# Exemple de Base
  class Media {
    name: string;
  }

  class Movie extends Media {
  }

  let media: Movie = new Movie();


# Exemple constructor et heritage

  class Media {
    name: string;
    constructor(name: string) {
      console.log('00000000001:Media:constructor');
      this.name = name;
    }
  }

  class Movie extends Media {
    constructor(name: string) {
      super(name);
      console.log('00000000001:Movie:constructor');
      this.name = name;
    }

  }

  let media: Media = new Media('Aliens');
  let movie: Movie = new Movie('Exodus');


# Règle TypeScript / ES6

  Cas	                            Mot-clé	      Rôle

  Surcharger le constructeur	    super()	      Appeler le constructeur de la classe parente
  Redéfinir une méthode héritée	  override	    Remplacer une méthode de la classe parente


# Exemple surcharge

  class Media {
    title: string;
    constructor(title: string) {
      this.title = title;
    }

    getLabel() {
      return this.title;
    }
  }

  class Movie extends Media {
    budget: number;
    constructor(title: string, budget: number) {
      super(title)
      this.budget = budget;
    }
    override getLabel() {
      return this.title + this.budget;
    }
  }