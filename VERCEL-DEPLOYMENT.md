# 🚀 Vercel Deployment Guide - logic/ui

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```
   - Follow the prompts to authenticate with your Vercel account

3. **Deploy from your project directory**:
   ```bash
   cd /Users/pascalchenier/design-to-code
   vercel
   ```
   - Press Enter to accept defaults
   - Select your Vercel account/team
   - Vercel will automatically detect Vite configuration

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard (Most User-Friendly)

1. **Go to Vercel**: https://vercel.com/new

2. **Import Git Repository**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose GitHub and authorize Vercel
   - Select your repository: `pasco-pasco/design-to-code`

3. **Configure Project**:
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-configured)
   - **Output Directory**: `dist` (auto-configured)
   - **Install Command**: `npm install` (auto-configured)

4. **Environment Variables** (Optional):
   - If you need to add any environment variables (like Figma tokens for CI/CD), add them here
   - For now, you can skip this as tokens are in `.env` (which is gitignored)

5. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - Your site will be live at: `https://design-to-code-[random].vercel.app`

### Option 3: Deploy via GitHub Integration (Best for Teams)

1. **Push to GitHub** (already done ✅):
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Import your GitHub repository: `pasco-pasco/design-to-code`
   - Vercel will auto-detect the framework and settings

3. **Automatic Deployments**:
   - Every push to `main` will automatically deploy to production
   - Pull requests will get preview deployments
   - Perfect for team collaboration!

## Project Configuration

Your project is pre-configured with:

- ✅ **vercel.json**: Optimized settings for React Router
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `dist`
- ✅ **Framework**: Vite (auto-detected)
- ✅ **Node Version**: 18.x or higher (recommended)

## Post-Deployment

### 1. Custom Domain (Optional)
After deployment, you can add a custom domain:
- Go to Project Settings → Domains
- Add your custom domain (e.g., `logic-ui.com`)
- Follow DNS configuration instructions

### 2. Share with Your Team
After deployment, share the URL:
- **Production URL**: `https://design-to-code.vercel.app` (or your custom domain)
- **Team Access**: Invite team members in Vercel dashboard → Settings → Team

### 3. Environment Variables (If Needed Later)
If you want to add Figma Code Connect to CI/CD:
- Go to Project Settings → Environment Variables
- Add `FIGMA_ACCESS_TOKEN` if needed for automated builds

## Vercel Features You'll Love

### 🔄 **Automatic Deployments**
- Every push to `main` → Production deployment
- Every pull request → Preview deployment
- Instant rollbacks if needed

### 📊 **Analytics** (Free)
- Real-time visitor analytics
- Performance monitoring
- Web Vitals tracking

### ⚡ **Performance**
- Edge network (global CDN)
- Automatic HTTPS
- Image optimization
- Gzip compression

### 🔗 **Preview Deployments**
- Every branch gets its own URL
- Perfect for testing before merging
- Share with stakeholders

## Troubleshooting

### Build Fails
If build fails, check:
1. `npm run build` works locally
2. All dependencies are in `package.json` (not just devDependencies if needed in build)
3. Environment variables are set correctly

### Routes Don't Work (404 on Refresh)
- Already configured in `vercel.json` with rewrites ✅
- All routes will properly load the React app

### Slow Build Times
- Vercel typically builds in 1-2 minutes for Vite projects
- If slower, check for unnecessary dependencies

## Quick Commands Reference

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-name]
```

## Recommended Workflow

1. **Development**: Work on feature branches
2. **Test**: Push to GitHub → Get preview deployment
3. **Review**: Share preview URL with team
4. **Merge**: Merge to `main` → Auto-deploys to production
5. **Monitor**: Check Vercel dashboard for performance

## Your Project URL

After deployment, your logic/ui component library will be live at:
- **Temporary URL**: `https://design-to-code-[random].vercel.app`
- **Custom Domain**: Configure in Vercel dashboard

Share this URL with your team to showcase:
- ✅ 9 beautifully styled components
- ✅ Interactive component demos
- ✅ Clean shadcn/ui-inspired layout
- ✅ Figma Code Connect integration
- ✅ Responsive design

---

**Ready to deploy?** Choose your method above and your component library will be live in minutes! 🚀

