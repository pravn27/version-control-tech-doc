---
sidebar_position: 8
---

# Switch github accounts

> Switching Between Two different GitHub Accounts (personal & professional works) on macOS / linux system with shell scripts

## Step 1: Generate SSH Keys for Both Accounts

If you haven't already generated SSH keys for both GitHub accounts, run:

```sh
ssh-keygen -t rsa -b 4096 -C "your_email_1@example.com" -f ~/.ssh/id_rsa_github_personal
ssh-keygen -t rsa -b 4096 -C "your_email_2@example.com" -f ~/.ssh/id_rsa_github_work
```

This will create two SSH key pairs:

- `~/.ssh/id_rsa_github_personal` (for personal account)
- `~/.ssh/id_rsa_github_work` (for work account)

## Step 2: Add SSH Keys to SSH Agent

Enable the SSH agent and add the keys:

```sh
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa_github_personal
ssh-add ~/.ssh/id_rsa_github_work
```

## Step 3: Configure SSH for GitHub

Edit the SSH config file: use either nano or vi

```sh
nano ~/.ssh/config
```

Add the following configuration:

```ini
# Personal GitHub Account
Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_github_personal

# Work GitHub Account
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_github_work
```

Save and exit.

## Step 4: Update Git Configurations

Create two global Git configurations:

```sh
git config --global user.name "Personal Name"
git config --global user.email "your_email_1@example.com"
git config --global user.name "Work Name"
git config --global user.email "your_email_2@example.com"
```

Alternatively, configure per repository:

```sh
git config user.name "Personal Name"
git config user.email "your_email_1@example.com"
```

## Step 5: Create a Shell Script to Switch Accounts

Create a script `switch_git.sh`: use either nano or vi

```sh
nano ~/switch_git.sh
```

Paste the following:

```sh
#!/bin/bash

echo "Select GitHub account to use:"
echo "1) Personal"
echo "2) Work"
read -p "Enter choice (1/2): " choice
ssh-add -D
if [ "$choice" == "1" ]; then
    git config --global user.name "Personal Name"
    git config --global user.email "your_email_1@example.com"
    git config --global core.sshCommand "ssh -i ~/.ssh/id_rsa_github_personal"
    echo "Switched to Personal GitHub account"
elif [ "$choice" == "2" ]; then
    git config --global user.name "Work Name"
    git config --global user.email "your_email_2@example.com"
    git config --global core.sshCommand "ssh -i ~/.ssh/id_rsa_github_work"
    echo "Switched to Work GitHub account"
else
    echo "Invalid choice. Exiting."
    exit 1
fi
```

Save and exit.

## Step 6: Make the Script Executable

Run:

```sh
chmod +x ~/switch_git.sh
```

Now, you can run the script anytime with:

```sh
sh ~/switch_git.sh
```
