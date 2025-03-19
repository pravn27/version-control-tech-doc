---
sidebar_position: 3
---

# Git Aliases

**Git Aliases for Efficient Software Development**

> Git aliases help streamline workflows by shortening commonly used commands. This guide provides step-by-step setup instructions and examples of frequently used aliases.

---

## Steps to configure Git Aliases

**Step 1: Open or Create the `.gitconfig` File**

To configure global Git aliases, open the `.gitconfig` file:

```sh
nano ~/.gitconfig   # For Linux/macOS
notepad %USERPROFILE%\.gitconfig  # For Windows (Git Bash)
```

Alternatively, use Git commands to add aliases directly:

```sh
git config --global alias.<name> "<command>"
```

---

**Step 2: Define Essential Git Aliases**

**1. Basic Shortcuts**

```ini
[alias]
    co = checkout
    br = branch
    ci = commit -m
    st = status -sb
    last = log -1 HEAD --stat
```

✅ **Example Usage:**

```sh
git co main  # Instead of git checkout main
git br       # Show list of branches
git ci "Initial commit"  # Instead of git commit -m "Initial commit"
git st       # Show concise status
git last     # Show details of the last commit
```

---

**2. Improved Git Log Commands**

```ini
    lg = log --oneline --graph --decorate --all
    hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
    undos = reset --soft HEAD~1
```

✅ **Example Usage:**

```sh
git lg       # Visualize the commit history
git hist     # Show a detailed log of commits
git undos    # Undo the last commit (keeps changes staged)
```

---

**3. Fetching, Pulling, and Pushing**

```ini
    fp = fetch --prune
    up = pull --rebase
    pu = push -u origin HEAD
```

✅ **Example Usage:**

```sh
git fp       # Fetch remote changes and prune deleted branches
git up       # Pull changes with rebase instead of merge
git pu       # Push current branch to origin
```

---

**4. Creating and Merging Branches**

```ini
    nb = checkout -b
    mg = merge
    rb = rebase
```

✅ **Example Usage:**

```sh
git nb feature-x   # Create and switch to a new branch 'feature-x'
git mg main        # Merge 'main' branch into the current branch
git rb main        # Rebase the current branch onto 'main'
```

---

**5. Cleaning and Resetting**

```ini
    cl = clean -df
    rst = reset --hard
    amend = commit --amend --no-edit
```

✅ **Example Usage:**

```sh
git cl        # Remove untracked files
git rst       # Reset all changes to the last commit
git amend     # Modify the last commit without changing the message
```

---

**Step 3: Verify and Use Aliases**

After adding aliases, check the configuration:

```sh
git config --list | grep alias
```

To list all aliases in a formatted table:

```sh
git config --global --list | grep alias | awk -F'=' '{printf "%-20s %s\n", $1, $2}'
```

Or create an alias for listing aliases:

```sh
git config --global alias.aliases '!git config --global --list | grep alias'
```

✅ **Usage:**

```sh
git aliases
```

---

## Git aliases used frequently, which config in .gitconfig file

```ini
[alias]
    # clone
    cl = clone

    # branch
    br = branch

    # checkout
    co = checkout

    # create new branch & checkout
    nb = checkout -b

    # status
    st = status
    stl = status --long --ignored
    stdd = !git status -s && git diff --stat
    sta = !git status -sb && git rev-list --left-right --count origin/$(git rev-parse --abbrev-ref HEAD)...HEAD

    # add the files
    a = add
    al = add .

    # commits
    cm = commit -m

    # push
    pushoc = !git push origin $(git rev-parse --abbrev-ref HEAD)

    # pull from branch
    pullob = !git pull origin

    # logs and history
    lg = log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short

    # list aliases
    la = "!git config --global --list | grep alias | awk -F\"=\" '{printf \"%-20s %s\\n\", $1, $2}' "
```
