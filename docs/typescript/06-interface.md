# Concept
  Une interface définit un contrat de structure (propriétés / méthodes) sans implémentation.
  Une classe implémente une interface pour garantir qu’elle respecte ce contrat.
  L’interface n’existe qu’à la compilation TypeScript : aucun impact au runtime.

# Exemple
  Contrat structurel vérifié à la compilation.

  Propriétés requises par défaut.

  Compatible avec classes et objets littéraux.

  interface MediaData {
    budget: number;
  }

  const a: MediaData = { budget: 0 }  