---
sidebar_position: 2
---

# Basic Commands

## List of Basic Commands Frequently Used

| Command                            | Description                                                                                        | Example                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `git init`                         | Initialize a new Git repository                                                                    | `git init`                                                   |
| `git clone [remote-url]`           | Clone an existing repository from remote                                                           | `git clone https://github.com/user/repo.git`                 |
| `git status`                       | Show the working directory status of modified files                                                | `git status`                                                 |
| `git add [path of files]`          | Add files to the staging area                                                                      | `git add filename1 filename2`                                |
| `git add .`                        | Add all modified files to the staging area                                                         | `git add .`                                                  |
| `git commit`                       | Commit changes to the repository                                                                   | `git commit -m "Proper / Meaningful Commit message"`         |
| `git commit --amend`               | Update / modify the very latest commit message                                                     | `git commit --amend`                                         |
| `git push origin [branch-name]`    | Push changes to a remote repository branch                                                         | `git push origin main`                                       |
| `git pull origin [branch-name]`    | Fetch and merge changes from a remote repository                                                   | `git pull origin main`                                       |
| `git branch`                       | List, create, or delete branches                                                                   | `git branch`                                                 |
| `git branch [branch-name]`         | Create a new branch                                                                                | `git branch feature-branch`                                  |
| `git checkout`                     | Switch branches or restore working tree files                                                      | `git checkout branch-name`                                   |
| `git checkout -b [branch-name]`    | Create and switch to a new branch                                                                  | `git checkout -b feature/NO-2311-SearchBar`                  |
| `git merge [branch-name]`          | Merge branches / Will merge specified branch into current branch                                   | `git merge branch-name`                                      |
| `git log`                          | Show commit logs                                                                                   | `git log`                                                    |
| `git diff`                         | Show changes between commits, commit and working tree, etc.                                        | `git diff`                                                   |
| `git reset`                        | Reset current HEAD to the specified state                                                          | `git reset --hard HEAD`                                      |
| `git reset --hard`                 | Will discard all local changes, and take till recent commit history                                | `git reset --hard`                                           |
| `git rm`                           | Remove files from the working directory and staging area                                           | `git rm filename`                                            |
| `git fetch`                        | Download objects and refs from another repository                                                  | `git fetch origin`                                           |
| `git remote add origin [repo-url]` | Add / Set the remote url in locally on working directory repo / Manage set of tracked repositories | `git remote add origin https://github.com/user/repo.git`     |
| `git remote -v`                    | Show the current repo remote url                                                                   | `git remote -v`                                              |
| `git remote set-url origin [url]`  | Modify the remote url                                                                              | `git remote set-url origin https://github.com/user/repo.git` |
| `git cherry-pick [commitId]`       | Get specific commit changes from other source branch to current branch and merged                  | `git cherry-pick eadbcedabf0b9a054dbecd96cfe008e76e46368a`   |
| `git revert [commitId]`            | Revert specific commits changes after committed with commit ID                                     | `git revert eadbcedabf0b9a054dbecd96cfe008e76e46368a`        |

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
