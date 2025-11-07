# Balise Input
	balise input

# Attribut
	
	Attribut					Utilité 

	type							définit le comportement du champ
	name							clé envoyée au backend
	value							valeur actuelle
	placeholder				texte indicatif
	required					champ obligatoire
	id								pour associer un label et accessibilité
	autocomplete			contrôle l’auto-complétion navigateur


# Attribut Type

	type						Comportement

	text						Saisie texte libre (par défaut)
	email						Saisie format email + validation automatique
	password				Cache la saisie (•••)
	number					Saisie numérique (flèches + min/max possibles)
	date						Sélecteur de date natif
	checkbox				Case à cocher (true / false)
	radio						Sélection exclusive dans un groupe
	file						Ouverture explorateur pour choisir un fichier
	hidden					Champ invisible mais envoyé au backend
	submit					Bouton permettant de soumettre un formulaire
	reset						Réinitialise tous les champs du formulaire
	button					Bouton personnalisé sans action par défaut

# Exemple de base
	<label for="mail">Email</label>
	<input type="email" id="mail" name="email" required />	