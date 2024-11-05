
# Git Course

## Installation

```bash
# installation
sudo apt-get --yes install git   
```

To uninstall Git:

```bash
sudo apt-get --yes purge git
```

---

## Configuration

### View current configuration

```bash
git config --list
```

### Configure user account

```bash
git config --global user.email "user_email"
git config --global user.name "user_name"
```

### Set default editor (example with Notepad)

```bash
git config --global core.editor "notepad"
```

---

## Initializing a Git Repository

### Create a README file and add it to the repository

```bash
echo "# test" >> README.md
```

### Initialize the repository

```bash
git init
```

### Add files to tracking

Add a specific file to the index:

```bash
git add README.md
```

Add all modified files:

```bash
git add *
```

### Commit changes

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

## Commit Management

### Undo the last commit (keeping changes staged)

```bash
git commit --amend
```

### Check project status

```bash
git status
```

### Stage files

```bash
git add *
```

### Check differences between files

```bash
git diff
```

### Create a commit with a message

```bash
git commit -m "feature01"
```

### Stage and commit in one command

```bash
git commit -a -m "feature01"
```

### View commit history

With an editor:

```bash
git log
```

On a single line:

```bash
git log --oneline
```

Detailed view on a single line for a file:

```bash
git log --oneline -p index.html
```

### Restore a project state

To position on a specific commit:

```bash
git checkout <commit_id>
```

To return to the current state:

```bash
git checkout master
```

---

## Branch Management

### Create a new branch

```bash
git branch prototype
```

### List branches

```bash
git branch
```

### Switch to a branch

```bash
git checkout prototype
```

### Switch back to the main branch

```bash
git checkout master
```

---

## Additional Commands

### Undo a specific commit

```bash
git revert <commit_id>
```

### Unstage a file

```bash
git reset HEAD <file>
```

### Merge branches

```bash
git merge <branch_name>
```

### Retrieve a file from a specific commit and commit changes

```bash
git checkout <commit_id> <file>
git commit -a -m "new commit"
```
