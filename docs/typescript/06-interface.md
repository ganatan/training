# Concept
  Une interface définit un contrat de structure (propriétés / méthodes) sans implémentation.
  Une classe implémente une interface pour garantir qu’elle respecte ce contrat.
  L’interface n’existe qu’à la compilation TypeScript : aucun impact au runtime.
  Une interface peut etendre une ou plusieurs interfaces

# Exemple
  Contrat structurel vérifié à la compilation.

  Propriétés requises par défaut.

  Compatible avec classes et objets littéraux.

  interface MediaData {
    budget: number;
  }

  const a: MediaData = { budget: 0 }  

# Implements  

  interface Person {
    name: string;
  }

  interface Media {
    title: string,
    budget: number,
  }

  interface Movie extends Person, Media {
    releaseDate: Date,
  }


  let movie: Movie = {
    name: 'Aliens',
    title: 'ALIENS',
    budget: 1234,
    releaseDate: new Date(),
  };
  console.log('00000000001:' + JSON.stringify(movie));