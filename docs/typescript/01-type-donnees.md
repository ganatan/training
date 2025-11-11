# Concept

  En TypeScript, on utilise les types primitifs en minuscule (number, string, boolean).

  Les versions en majuscules (Number, String, Boolean) sont des objets wrappers JavaScript → à éviter.

# Liste des Types en Typescript

  TypeScript	            Description	                      Exemple

  string	                Chaîne de caractères	            'Hello'

  number	                Nombre (entier ou flottant)	      42, 3.14

  boolean	                Vrai ou faux	                    true, false

  string[]	              Tableau de chaînes	              ['a', 'b']

  number[]	              Tableau de nombres	              [1, 2, 3]

  any	                    Type libre	                      let x: any = 'test'

  void	                  Aucune valeur retournée	          function f(): void {}

  null / undefined	      Valeurs nulles ou indéfinies	    null, undefined

  object	                Objet générique	                  { id: 1, name: 'X' }

  Record<string, number>	Objet clé/valeur typé	            { a: 1, b: 2 }

  T / <T>	                Type générique	                  function id<T>(x: T): T { return x }

  unknown	                Type inconnu                      plus sûr que any


# Exemple de code

  const franchise: boolean = true;
  const budget: number = 1000;
  const title: string = 'Exodus';
  let movies: string[] = ['Aliens', 'Exodus'];


  enum Rating { G = 'G', PG13 = 'PG-13', R = 'R' }
  type Fn = <T>(v: T) => T;

  class MovieClass {
    // name: string;
    // budget: number;
    // constructor(name: string, budget: number) {
    //   this.name = name;
    //   this.budget = budget;
    // }
    constructor(public name: string, public budget: number) { }
  };


  type MovieType = {
    name: string,
    budget: number
  };

  let movieType: MovieType = {
    name: 'Aliens',
    budget: 7000,
  }

  let movieObject = {
    name: 'Legend',
    budget: 4000
  };


  let movieClass: MovieClass = new MovieClass('Blackhawk Down', 9000);

  console.log('00000000001:boolean:' + franchise);
  console.log('00000000001:number::' + budget);
  console.log('00000000001:string:' + title);
  console.log('00000000001:fromtype:' + JSON.stringify(movieType));
  console.log('00000000001:fromclass:' + JSON.stringify(movieClass));
  console.log('00000000001:fromarray:' + JSON.stringify(movies));
  console.log('00000000001:object:' + JSON.stringify(movieObject));

