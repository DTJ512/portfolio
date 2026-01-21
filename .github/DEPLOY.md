# Deployment Guide

This repository includes GitHub Actions workflows for automatic deployment to different platforms.

## Available Workflows

### 1. GitHub Pages (`deploy.yml`)

Deploys the frontend to GitHub Pages automatically when you push to `main` or `master` branch.

**Setup:**
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push code to `main` or `master` branch
4. The workflow will automatically build and deploy

**URL Format:**
- `https://<username>.github.io/<repository-name>/`

**Note:** If your repository name is not `username.github.io`, you may need to set `base` in `vite.config.js` to your repository name.

---

### 2. Vercel (`deploy-vercel.yml`)

Deploys to Vercel platform.

**Setup:**
1. Create a Vercel account and project
2. Get your Vercel token from [Vercel Settings → Tokens](https://vercel.com/account/tokens)
3. Add secrets to GitHub:
   - Go to Settings → Secrets and variables → Actions
   - Add secret: `VERCEL_TOKEN` with your Vercel token
4. Push code to trigger deployment

**URL Format:**
- `https://<project-name>.vercel.app`

---

### 3. Netlify (`deploy-netlify.yml`)

Deploys to Netlify platform.

**Setup:**
1. Create a Netlify account
2. Create a new site in Netlify dashboard
3. Get your Netlify credentials:
   - `NETLIFY_AUTH_TOKEN`: From [Netlify User Settings → Applications → New access token](https://app.netlify.com/user/applications)
   - `NETLIFY_SITE_ID`: From your site settings → General → Site details
4. Add secrets to GitHub:
   - Go to Settings → Secrets and variables → Actions
   - Add secrets: `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`
5. Push code to trigger deployment

**URL Format:**
- `https://<project-name>.netlify.app`

---

## Using Only One Workflow

If you only want to use one deployment method:

1. **Keep only the workflow file you need** in `.github/workflows/`
2. **Delete the other workflow files** to avoid unnecessary builds
3. **Configure the secrets** as described above

---

## Manual Deployment

### GitHub Pages (Manual)

```bash
cd frontend
npm install
npm run build
# Then manually upload the dist folder to GitHub Pages
```

### Vercel (Manual)

```bash
cd frontend
npm install -g vercel
vercel
```

### Netlify (Manual)

```bash
cd frontend
npm install
npm run build
# Then drag and drop the dist folder to Netlify dashboard
```

---

## Troubleshooting

### GitHub Pages 404 Error
- Check if `base` in `vite.config.js` matches your repository name
- Ensure the workflow has permission to deploy (Settings → Actions → General → Workflow permissions)

### Vercel/Netlify Build Fails
- Check that all secrets are correctly set
- Verify Node.js version compatibility
- Check build logs in the Actions tab

