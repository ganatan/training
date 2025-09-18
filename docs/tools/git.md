# Creation d'un repo
  git init -b main
  echo "# mon-repo" > README.md
  git add README.md
  git commit -m "init Repo"
  git branch --show-current

# Renommer une branche
  git branch -M main
  
# Selection d'une branche
  git checkout feature-001  

# Creation d'une branche
  git checkout -b feature-001  

# Suppression d'une branche
  git branch -d feature-001  

# Liste des branches
  - Branches locales
  git branch -a
  
  - Branches distantes
  git branch -r     # affiche les branches distantes

# Liste des remote
  git remote -v

# Liste des commits
  
  - Affichage en ligne
    git log --oneline --graph --decorate --all

  - Affichage en ligne avec heure minute
    git log --pretty=format:"%h %ad %s" --date=format:"%Y-%m-%d %H:%M"  

# Supprimer le dernier commit et pas les modifications
  
  git reset --soft HEAD~1
  git log --oneline --graph --decorate --all    

# Ajouter un remote
  - Creer 
    remote_name         nom du remote
    user_name           nom de l'utilisateur
    repo_name           nom du repo
  
    git remote add remote_name https://gitlab.com/user_name/repo_name.git

  Example    
    git remote add gitlab https://gitlab.com/ganatan/repo001.git

# Renommer un remote
  - Renommer origin en github
    git remote rename origin github
    git remote rename origin gitlab

# Infos sur le remote
  git remote show github
  git remote show gitlab


# Push
  git fetch github main
  git pull github main

# Effacer historiques des repo local
  git remote remove github
  git remote remove gitlab