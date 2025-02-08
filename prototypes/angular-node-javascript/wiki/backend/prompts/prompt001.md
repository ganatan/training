# initialisation

Donne-moi un fichier app.js très simple qui contient une API renvoyant une liste de 12 réalisateurs américains avec les informations suivantes :

name : leur nom
city : leur ville de naissance
Le fichier doit être en JavaScript.

Tout le code doit être en anglais.
Les données doivent être en anglais.

Pas de commentaires dans le code.

Réponds en français.

La réponse doit tenir sur un seul écran et ne pas utiliser de canevas sur le côté.




const express = require('express');
const app = express();
const port = 3000;

const directors = [
  { name: 'Steven Spielberg', city: 'Cincinnati' },
  { name: 'Martin Scorsese', city: 'New York' },
  { name: 'Quentin Tarantino', city: 'Knoxville' },
  { name: 'Christopher Nolan', city: 'London' },
  { name: 'Francis Ford Coppola', city: 'Detroit' },
  { name: 'James Cameron', city: 'Kapuskasing' },
  { name: 'David Fincher', city: 'Denver' },
  { name: 'Tim Burton', city: 'Burbank' },
  { name: 'Clint Eastwood', city: 'San Francisco' },
  { name: 'Wes Anderson', city: 'Houston' },
  { name: 'Spike Lee', city: 'Atlanta' },
  { name: 'George Lucas', city: 'Modesto' }
];

app.get('/directors', (req, res) => {
  res.json(directors);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});