---
sidebar_position: 4
---

# Github page deploy & Action workflow setup

## Automate Deployment with GitHub Actions workflow

    > To build and deploy a Docusaurus site to GitHub Pages

- Build & test your apps locally
- In your project root directory, create a file
  `.github/workflows/deploy.yml`
- Add the following content to the file `deploy.yml`

```yaml
name: Deploy static site to github pages on push to master branch

on:
  push:
    branches:
      - master
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  build:
    name: Build Docusaurus
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build website
        run: npm run build

      - name: Upload Build Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    name: Deploy to GitHub Pages
    needs: build

    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write # to deploy to Pages
      id-token: write # to verify the deployment originates from an appropriate source

    # Deploy to the github-pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- Commit and push the changes
- Now, every time you push to `master` branch, your site will be automatically deployed.
- For first time only build will fail due to cache error from github actions, once push to master branch wait for 5min & push changes again then build & deploy will get success

## React app github page deploy

- https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
- https://dev.to/scc33/deploying-to-github-pages-using-gh-pages-2d95
