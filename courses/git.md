
# Installation
sudo apt-get --yes install git

# Désinstallation
sudo apt-get --yes purge git


# configuration
## Voir la configuration
git config --list

## Configurer le compte par défaut
git config --global user.email "user_email"
git config --global user.name "user_name"

# Configure l'utilisation de notepad
git config --global core.editor "notepad"


# Création du fichier README
echo "# essai" >> README.md

# Initialisation du dépôt
git init

# Ajoute le fichier README à l’index
git add README.md

# Ajoute les derniers fichiers modifiés
git add *

# Commit
git commit -m "first commit"

# Remote sans identifiant
git remote add origin https://github.com/user-name/example.git

# Remote avec identifiant
git remote add origin https://user-name:user-password@github.com/user-name/example.git

# Push
git push -u origin master

# Pull
git pull