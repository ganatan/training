# Liste des branches
  git branch -a

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
