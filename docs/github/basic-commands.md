---
sidebar_position: 2
---

# Basic Commands

## List of Basic Commands Frequently Used

## Frequently Used Git Commands

Below is a list of commonly used Git commands along with their descriptions, examples, and aliases (if available):

| Command                            | Description                                                           | Example                                                      | Aliases  |
| ---------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------ | -------- |
| `git init`                         | Initialize a new Git repository                                       | `git init`                                                   |          |
| `git clone [remote-url]`           | Clone an existing repository from remote                              | `git clone https://github.com/user/repo.git`                 | `cl`     |
| `git status`                       | Show the working directory status of modified files                   | `git status`                                                 | `st`     |
| `git add [path of files]`          | Add files to the staging area                                         | `git add filename1 filename2`                                | `a`      |
| `git add .`                        | Add all modified files to the staging area                            | `git add .`                                                  | `al`     |
| `git commit`                       | Commit changes to the repository                                      | `git commit -m "Proper / Meaningful Commit message"`         | `cm`     |
| `git commit --amend`               | Update or modify the very latest commit message                       | `git commit --amend`                                         |          |
| `git push origin [branch-name]`    | Push changes to a remote repository branch                            | `git push origin main`                                       | `pushoc` |
| `git pull origin [branch-name]`    | Fetch and merge changes from a remote repository                      | `git pull origin main`                                       | `pullob` |
| `git branch`                       | List, create, or delete branches                                      | `git branch`                                                 | `br`     |
| `git branch [branch-name]`         | Create a new branch                                                   | `git branch feature-branch`                                  |          |
| `git checkout`                     | Switch branches or restore working tree files                         | `git checkout branch-name`                                   | `co`     |
| `git checkout -b [branch-name]`    | Create and switch to a new branch                                     | `git checkout -b feature/NO-2311-SearchBar`                  | `nb`     |
| `git merge [branch-name]`          | Merge a specified branch into the current branch                      | `git merge branch-name`                                      |          |
| `git log`                          | Show commit logs                                                      | `git log`                                                    | `lg`     |
| `git diff`                         | Show changes between commits, commit and working tree, etc.           | `git diff`                                                   |          |
| `git reset`                        | Reset the current HEAD to the specified state                         | `git reset --hard HEAD`                                      |          |
| `git reset --hard`                 | Discard all local changes and reset to the most recent commit history | `git reset --hard`                                           |          |
| `git rm`                           | Remove files from the working directory and staging area              | `git rm filename`                                            |          |
| `git fetch`                        | Download objects and refs from another repository                     | `git fetch origin`                                           |          |
| `git remote add origin [repo-url]` | Add or set the remote URL for the local repository                    | `git remote add origin https://github.com/user/repo.git`     |          |
| `git remote -v`                    | Show the current repository's remote URL                              | `git remote -v`                                              |          |
| `git remote set-url origin [url]`  | Modify the remote URL                                                 | `git remote set-url origin https://github.com/user/repo.git` |          |
| `git cherry-pick [commitId]`       | Apply changes from a specific commit to the current branch            | `git cherry-pick eadbcedabf0b9a054dbecd96cfe008e76e46368a`   |          |
| `git revert [commitId]`            | Revert changes from a specific commit using its commit ID             | `git revert eadbcedabf0b9a054dbecd96cfe008e76e46368a`        |          |

These commands are essential for day-to-day Git operations and can help streamline your workflow.

## Temporarily stored in locally with modified, tracked files to change branches

**Use case of below**

> After making some changes in files, and want to switch to different feature branch, with below commands save modified files and get back those modified files based on your needs. Below commands help you temporarily store your changes, allowing you to switch branches without losing your modifications.

---

| Command                       | Description                                                                         | Example                     |
| ----------------------------- | ----------------------------------------------------------------------------------- | --------------------------- |
| `git stash save ["name"]`     | Save temporarily modified file in name given                                        | `git stash save ["name"]`   |
| `git stash list`              | List all stashed changes                                                            | `git stash list`            |
| `git stash pop`               | Apply the latest stashed changes and remove them from the stash list                | `git stash pop`             |
| `git stash pop ["name"]`      | Get modified files back with respect to feature branch and deleted from stash items | `git stash pop ["name"]`    |
| `git stash apply [stash@{n}]` | Apply a specific stash without removing it from the stash list                      | `git stash apply stash@{0}` |
| `git stash apply ["name"]`    | Get modified files back stash list & applied, but will not deleted from stash items | `git stash apply ["name"]`  |
| `git stash drop [stash@{n}]`  | Delete / Remove a specific stash from the stash list                                | `git stash drop stash@{0}`  |
| `git stash clear`             | Delete / Remove all stashed changes from the stash list                             | `git stash clear`           |
| `git stash save ["message"]`  | Save your changes to the stash list with a message                                  | `git stash save "message"`  |
| `git stash drop`              | Discard the changes from top of stash stack                                         | `git stash drop`            |

---

These commands cover the most frequently used operations in Git. Each command includes a brief description and an example to help you understand its usage.

## Cherry Pick

- https://gist.github.com/grafikchaos/8223422

- How to cherry pick multiple commits

```bash
git cherry-pick <commit-hash-1> <commit-hash-2> <commit-hash-3>
```

- How to cherry pick a range of commits

```bash
git cherry-pick <commit-hash-1>^..<commit-hash-2>
```

- How to cherry pick a commit from another branch

```bash
git cherry-pick <branch-name>/<commit-hash>
```

- How to cherry pick a commit from another repository

```bash
git cherry-pick <repository-url>/<commit-hash>
```

- How to cherry pick a commit from another repository and branch

```bash
git cherry-pick <repository-url>/<branch-name>/<commit-hash>
```

## Git Rebase

> While pushing the final feature branch to remotely, use squash to avoid multiple commits. Squash will make multiple commits into single commit

1. Always rebase from master branch, make sure branch is up to date
   ```bash
   git rebase -i master
   ```
2. You should see a list of commits, each commit starting with the word "pick”. Make sure the first commit says "pick" and change the rest from "pick" to "squash”. This will squash each commit into the previous commit, which will continue until every commit is squashed into the first commit. Save and close the editor. It will give you the opportunity to change the commit message. Save and close the editor again.

3. Finally while pushing, append --force-with-lease
   ```bash
   git push origin feature_branch --force-with-lease
   ```
