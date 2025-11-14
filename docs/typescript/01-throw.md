# Concept
  throw

  throw sert à signaler une erreur et interrompre immédiatement l’exécution d’une fonction.

  Exemple :
    throw new Error('Message');

  Dès que throw est exécuté :
    la fonction s’arrête instantanément
    aucune ligne après throw ne s’exécute
    une erreur “remonte” vers l’appelant  

# Exemple    

  function diviser(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division par zéro');
    }
    return a / b;
  }

  function runOk() {
    try {
      console.log('résultat:', diviser(10, 2));
      console.log('résultat:', diviser(10, 0));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('erreur:', error.message);
      } else {
        console.log('erreur:', String(error));
      }
    }
  }

  function runNotOk() {
    console.log('résultat:', diviser(10, 2));
    console.log('résultat:', diviser(10, 0));
  }

  runOk();
  runNotOk();
