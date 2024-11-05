
# Git Course

## Setup

```bash
# installation
sudo apt-get --yes install git   
```

```bash
# uninstallation
sudo apt-get --yes purge git
```

---

## Configuration

```bash
git config --list
```

```bash
# user account
git config --global user.email "user_email"
git config --global user.name "user_name"
```

```bash
# Set default editor
git config --global core.editor "notepad"
```

---

## Branch

```bash
# List branches
git branch
git branch -a
```

```bash
# Create a new branch
git branch new-branch
```

```bash
# Switch to a branch
git checkout new-branch
git checkout main
```

```bash
# Delete a branch
git branch -d new-branch

# Delete a branch (force)
git branch -D new-branch
```
---


## Initializing

```bash
git init
```

```bash
echo "# test" >> README.md
```

```bash
git add README.md
```

```bash
git add *
```

```bash
git commit -m "first commit"
```

### Add a remote

Without credentials:

```bash
git remote add origin https://github.com/user-name/example.git
```

With credentials:

```bash
git remote add origin https://user-name:user-password@github.com/user-name/example.git
```

### Push changes to the remote repository

```bash
git push -u origin master
```

### Pull updates from the remote repository

```bash
git pull
```

---

## Commits

```bash
# Undo the last commit
git commit --amend
```

```bash
# Check project status
git status
```

```bash
# Stage files
git add *
```

```bash
# Check differences between files
git diff
```

```bash
# Create a commit with a message
git commit -m "feature01"
```

```bash
# Stage and commit in one command
git commit -a -m "feature01"
```

```bash
# View commit history
git log
```

```bash
# View commit history oneline
git log --oneline
```

```bash
git log --oneline -p index.html
```

```bash
# Restore To position on a specific commit:
git checkout <commit_id>
```

```bash
# Return to the current state:
git checkout master
```

```bash
# Undo a specific commit
git revert <commit_id>
```

```bash
# Unstage a file
git reset HEAD <file>
```

## Merge branches

```bash
git merge <branch_name>
```

```bash
# Retrieve a file from a specific commit and commit changes
git checkout <commit_id> <file>
git commit -a -m "new commit"
```
