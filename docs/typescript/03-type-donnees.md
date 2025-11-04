# Concept

  En TypeScript, on utilise les types primitifs en minuscule (number, string, boolean).

  Les versions en majuscules (Number, String, Boolean) sont des objets wrappers JavaScript → à éviter.

# Liste des Types en Typescript

  TypeScript	            Description	                        Exemple

  string	                Chaîne de caractères	            'Hello'

  number	                Nombre (entier ou flottant)	        42, 3.14

  boolean	                Vrai ou faux	                    true, false

  string[]	            Tableau de chaînes	                ['a', 'b']

  number[]	            Tableau de nombres	                [1, 2, 3]

  any	                    Type libre	                        let x: any = 'test'

  void	                Aucune valeur retournée	            function f(): void {}

  null / undefined	    Valeurs nulles ou indéfinies	    null, undefined

  object	                Objet générique	                    { id: 1, name: 'X' }

  Record<string, number>	Objet clé/valeur typé	            { a: 1, b: 2 }

  T / <T>	                Type générique	                    function id<T>(x: T): T { return x }

  unknown	                Type inconnu                        plus sûr que any