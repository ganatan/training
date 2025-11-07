# Définition (interpolation Angular)

  L’interpolation consiste à afficher dans le template une valeur provenant du composant en utilisant la syntaxe {{ }}.
  Le flux est unidirectionnel (component → template).

# Usage	Syntaxe

  Afficher une propriété	              {{ variable }}

  Évaluer une expression	              {{ a + b }}

  Appeler une méthode	                  {{ getValue() }}

  Accéder à un objet	                  {{ user.name }}

  Utiliser un pipe	                    {{ date

  Interpolation dans un attribut	      <img src="{{ imageUrl }}">  

  # Exemples

  <h1>{{ title }}</h1>
  <br><br>

  <p>{{ 1 + 2 }}</p>
  <br><br>

  <p>{{ username.toUpperCase() }}</p>
  <br><br>

  <p>{{ getCount() }}</p>
  <br><br>

  <p>{{ user.firstname }} {{ user.lastname }}</p>
  <br><br>

  <img src="{{ imageUrl }}">
  <br><br>

  <p>{{ today | date:'dd/MM/yyyy' }}</p>
