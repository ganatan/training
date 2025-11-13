# Concept
  Le mot-clé ici est callback → littéralement appel de retour.
  C’est une fonction passée en paramètre à une autre fonction, pour être exécutée plus tard.

  C’est une idée essentielle de la programmation fonctionnelle :
    “Les fonctions sont des valeurs comme les autres.”
  
  Autrement dit, tu peux :
    stocker une fonction dans une variable,
    la passer en argument,
    la retourner depuis une autre fonction.

# Exemple sans parametre
  function hello() {
    console.log('00000000001:hello')
  }

  function getCallbacks(callback: () => void) {
    console.log('00000000001:getCallbacks')
    callback();
  }

  getCallbacks(hello);

# Exemple avec parametre

  function hello(newName: string): void {
    console.log('00000000001:hello:' + newName)
  }

  function getItems(callback: () => void) {
    console.log('00000000001:getItems')
    callback()
  }

  getItems(() => hello('Mcp'))
