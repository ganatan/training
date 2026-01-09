# Concept

  private en TypeScript n’est pas vraiment privé : il apparaît dans le JSON et reste accessible au runtime.

  #budget est le seul vrai champ privé (comme en Java), totalement invisible et protégé.

  Pour contrôler la valeur d’un champ (ex : limites 0–1000), un setter est obligatoire.

  Pour lire proprement la valeur, un getter est la solution naturelle.

  Pour choisir ce qui apparaît dans le JSON, on utilise une méthode toJSON().

# Setter / Getter avec vrai champ privé

  Rendre un champ private avec #

  class Media {
    #budget: number;
    constructor() {
      console.log('00000000001:Media:constructor');
    }
    set budget(value: number) {
      this.#budget = value > 10 ? 50 : 78;
    }
    get budget() {
      return this.#budget;
    }
    
    toJSON() {
      return {
        budget: this.#budget
      };
    }
  }

  let media: Media = new Media();
  media.budget = 2;

  console.log('000000000001:' + JSON.stringify(media));





# Setter / Getter

  class Media {
    private _budget: number;
    constructor() {
      console.log('00000000001:Media:constructor');
    }
    set budget(value: number) {
      this._budget = value > 10 ? 50 : 78;
    }
    get budget() {
      return this._budget;
    }
  }

  let media: Media = new Media();
  media.budget = 2;

