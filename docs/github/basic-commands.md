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

These commands cover the most frequently used operations in Git. Each command includes a brief description and an example to help you understand its usage.
