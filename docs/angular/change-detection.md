Le Change Detection (CD) est le mécanisme de synchronisation entre ton modèle (données TypeScript) et ta vue (template HTML).

Angular maintient un arbre de vues (View Tree) où chaque composant est un nœud.
Chaque nœud garde les valeurs précédentes de ses bindings.

Lorsqu’un événement (click, timer, HTTP, Promise, etc.) se produit,
Zone.js intercepte l’événement et déclenche un cycle de détection :

Lorsqu’un événement (click, timer, HTTP, Promise, etc.) se produit,
Zone.js intercepte l’événement et déclenche un cycle de détection :

Angular parcourt l’arbre de composants du haut vers le bas.

Pour chaque propriété liée ({{expr}}, [input]), il évalue expr.

Si la nouvelle valeur diffère de la précédente, Angular met à jour le DOM.

Il s’arrête quand tout l’arbre est traité.

Ce cycle s’appelle le Change Detection Cycle.