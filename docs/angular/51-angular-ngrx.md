# Concepts

  Une application Angular, c’est comme une maison avec plusieurs pièces (Home, Contact, About).

  NgRx met un grand classeur au milieu de la maison pour que toutes les pièces aient la même version des informations.

# Rôle de chaque élément 
  
  Mot	            Rôle

  Store	          Le grand classeur où toutes les infos sont rangées
  Action	        Un post-it disant : "je veux changer ça"
  Reducer	        Le bibliothécaire qui met à jour proprement le classeur
  Selector	      Tu viens prendre juste l’info dont tu as besoin
  Effect	        Quelqu’un sort de la maison appeler une API
                  puis revient mettre la réponse dans le classeur

# Liste des intervenants (dans NgRx)

  Store         stocke l’état global
  Actions       décrivent ce qui se passe
  Reducers      créent un nouvel état à partir des actions
  Selectors     lisent exactement la donnée dont on a besoin
  Effects       gèrent l’asynchrone (appel backends, timers, websockets)

# Historique

  Année	      Technologie	              Créateurs                     Rôle

  2009	      Rx (Reactive Extensions)	Microsoft (Erik Meijer)	      Programmation réactive 

  2012–2013	  RxJS (portage vers JS)	  Microsoft / Communauté	      Observables en JS
  
  2015	      Redux	                    Dan Abramov & Andrew Clark	  Store global, immutabilité
                                                                      Actions → reducers

  2016	      NgRx	                    Rob Wormald (Google Angular)  Adaptation de Redux pour
                                                                      Angular, basé sur RxJS

# angular-ngrx

# Documentation

  https://ngrx.io/guide/store#installation
  
  https://ngrx.io/guide/store/install

# Installation

  ng g c pages/home
  ng g c pages/about
  ng g c pages/contact

  npm install @ngrx/store
  npm install @ngrx/store-devtools
