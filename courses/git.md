
# Git

## Installation

```bash
sudo apt-get --yes install git
```

```bash
sudo apt-get --yes purge git
```

---

## Configuration de Git

### Voir la configuration actuelle

```bash
git config --list
```

### Configurer le compte utilisateur

```bash
git config --global user.email "user_email"
git config --global user.name "user_name"
```

### Configurer l'éditeur par défaut (exemple avec Notepad)

```bash
git config --global core.editor "notepad"
```

---

## Initialisation d'un dépôt Git

### Créer un fichier README et l'ajouter au dépôt

```bash
echo "# essai" >> README.md
```

### Initialiser le dépôt

```bash
git init
```

### Ajouter des fichiers au suivi

Ajouter un fichier spécifique à l'index :

```bash
git add README.md
```

Ajouter tous les fichiers modifiés :

```bash
git add *
```

### Committer les changements

```bash
git commit -m "first commit"
```

### Ajouter une remote

Sans identifiants :

```bash
git remote add origin https://github.com/user-name/example.git
```

Avec identifiants :

```bash
git remote add origin https://user-name:user-password@github.com/user-name/example.git
```

### Envoyer les changements vers le dépôt distant

```bash
git push -u origin master
```

### Récupérer les mises à jour du dépôt distant

```bash
git pull
```

---

## Gestion des commits

### Annuler le dernier commit (en gardant les modifications en stage)

```bash
git commit --amend
```

### Vérifier l'état du projet

```bash
git status
```

### Ajouter les fichiers au stage

```bash
git add *
```

### Vérifier les différences entre les fichiers

```bash
git diff
```

### Créer un commit avec un message

```bash
git commit -m "feature01"
```

### Ajouter et committer en une seule commande

```bash
git commit -a -m "feature01"
```

### Afficher l'historique des commits

Avec un éditeur :

```bash
git log
```

Sur une seule ligne :

```bash
git log --oneline
```

Sur une seule ligne avec détails pour un fichier :

```bash
git log --oneline -p index.html
```

### Restaurer un état du projet

Pour se positionner sur un commit spécifique :

```bash
git checkout <commit_id>
```

Pour revenir à l'état actuel :

```bash
git checkout master
```

---

## Gestion des branches

### Créer une nouvelle branche

```bash
git branch prototype
```

### Lister les branches

```bash
git branch
```

### Basculer sur une branche

```bash
git checkout prototype
```

### Revenir sur la branche principale

```bash
git checkout master
```

---

## Commandes additionnelles

### Annuler un commit spécifique

```bash
git revert <commit_id>
```

### Annuler la mise en stage d'un fichier

```bash
git reset HEAD <fichier>
```

### Fusionner des branches

```bash
git merge <nom_de_branche>
```

### Récupérer un fichier à partir d'un commit et committer les modifications

```bash
git checkout <commit_id> <fichier>
git commit -a -m "nouveau commit"
```
