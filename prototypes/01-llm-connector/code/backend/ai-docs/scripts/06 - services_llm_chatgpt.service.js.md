# Tutoriel : Utilisation de l'API OpenAI avec Node.js

Dans ce tutoriel, nous allons voir comment utiliser l'API OpenAI pour générer des réponses automatiques en fonction d'un style et d'une longueur définis. Nous utiliserons Node.js et la bibliothèque axios pour effectuer les requêtes HTTP.

## Code complet

Voici le code complet que nous allons détailler :

```js
import axios from 'axios';

const styleMap = {
  //...
};

const lengthMap = {
  //...
};

async function reply(type, input) {
  //...
}

export default reply;
```

## Détails du code

### Importation des dépendances

```js
import axios from 'axios';
```

Nous utilisons la bibliothèque `axios` pour effectuer des requêtes HTTP. Elle nous permettra de communiquer avec l'API OpenAI.

### Définition des styles et longueurs

```js
const styleMap = {
  //...
};

const lengthMap = {
  //...
};
```

Ces deux objets définissent les différents styles et longueurs de réponses que notre fonction peut générer. Ils sont utilisés pour construire l'invite que nous enverrons à l'API OpenAI.

### Fonction de réponse

```js
async function reply(type, input) {
  //...
}
```

C'est la fonction principale de notre code. Elle prend en entrée un type (qui peut être 'summary' ou autre chose) et un objet `input` qui doit contenir un `name`, un `style` et une `length`. Elle utilise ces informations pour construire une invite et obtenir une réponse de l'API OpenAI.

### Gestion des erreurs

```js
catch (error) {
  //...
}
```

Cette partie du code gère les erreurs qui peuvent survenir lors de la communication avec l'API OpenAI. Elle affiche un message d'erreur approprié en fonction du code d'erreur reçu.

### Exportation de la fonction

```js
export default reply;
```

Finalement, nous exportons notre fonction `reply` pour pouvoir l'utiliser dans d'autres parties de notre application.

## Conclusion

Ce code vous permet d'interagir avec l'API OpenAI et de générer des réponses automatiques en fonction de différents styles et longueurs. Vous pouvez l'adapter à vos besoins en ajoutant de nouveaux styles et longueurs, ou en modifiant la fonction `reply` pour qu'elle accepte d'autres types d'entrées.