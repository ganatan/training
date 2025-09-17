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