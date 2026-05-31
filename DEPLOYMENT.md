# Deployment Guide

## 🚀 Deploy Your Portfolio

This guide covers multiple deployment options for your Next.js portfolio.

---

## Option 1: Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best integration.

### Steps:

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Deploy on Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live!**
   - Vercel provides a `.vercel.app` domain
   - You can add a custom domain in settings

### Advantages:

- ✅ Zero configuration
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Perfect Next.js optimization

---

## Option 2: Netlify

Another great platform with generous free tier.

### Steps:

1. **Push to GitHub** (if not already done)

2. **Deploy on Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure Next.js on Netlify**

   - Install Netlify Next.js plugin (automatic)
   - Or manually add `netlify.toml`:

   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

---

## Option 3: Railway

Simple deployment with database support if needed.

### Steps:

1. **Push to GitHub**

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "Start a New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway auto-detects Next.js
   - Click "Deploy"

---

## Option 4: AWS Amplify

For those using AWS infrastructure.

### Steps:

1. **Push to GitHub**

2. **Deploy on AWS Amplify**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect to GitHub
   - Select your repository and branch
   - Build settings (auto-detected):
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm install
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - "**/*"
       cache:
         paths:
           - node_modules/**/*
     ```
   - Click "Save and deploy"

---

## Option 5: DigitalOcean App Platform

### Steps:

1. **Push to GitHub**

2. **Deploy on DigitalOcean**
   - Go to [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)
   - Click "Create App"
   - Connect GitHub and select repository
   - Choose settings:
     - Build command: `npm run build`
     - Run command: `npm start`
   - Click "Deploy"

---

## Option 6: Self-Hosted (VPS/Server)

For complete control, deploy to your own server.

### Prerequisites:

- VPS with Node.js installed
- Domain name (optional)
- SSH access

### Steps:

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Copy files to server**

   ```bash
   scp -r .next package.json package-lock.json user@your-server:/path/to/app
   ```

3. **Install dependencies on server**

   ```bash
   ssh user@your-server
   cd /path/to/app
   npm install --production
   ```

4. **Run with PM2 (Process Manager)**

   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx (Optional)**

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 🔒 Environment Variables

The contact form sends email through Resend from `app/api/contact/route.ts`. Set these runtime environment variables on your production platform:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=abdelhak.org@gmail.com
CONTACT_FROM="Portfolio Contact <onboarding@resend.dev>"
```

`RESEND_API_KEY` is required. `CONTACT_EMAIL` defaults to the public portfolio email if omitted. For production, use a verified Resend sender/domain for `CONTACT_FROM`; the default Resend onboarding sender is only suitable for testing.

Where to set them:

### Vercel:

- Project Settings → Environment Variables

### Netlify:

- Site Settings → Environment Variables

### Railway:

- Variables tab in your project

**Important**: Never commit `.env.local` to git!

---

## 🌐 Custom Domain Setup

### On Vercel:

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### On Netlify:

1. Go to Domain Settings
2. Add custom domain
3. Follow DNS configuration steps

### DNS Records (Generic):

For `yourdomain.com`:

```
Type: A
Name: @
Value: [Platform's IP]

Type: CNAME
Name: www
Value: [Platform's domain]
```

---

## 📊 Performance Optimization Before Deploy

1. **Optimize Images**

   - Use Next.js Image component
   - Compress images with tools like TinyPNG

2. **Check Bundle Size**

   ```bash
   npm run build
   ```

   - Review bundle analysis
   - Remove unused dependencies

3. **Add Analytics (Optional)**

   - Google Analytics
   - Vercel Analytics
   - Plausible

4. **Test Performance**
   - Run Lighthouse audit
   - Test on mobile devices
   - Check loading times

---

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] All links tested and working
- [ ] No console errors
- [ ] Responsive design tested
- [ ] SEO metadata configured
- [ ] Images optimized
- [ ] Forms working (if applicable)
- [ ] Custom domain ready (if applicable)
- [ ] SSL certificate enabled
- [ ] Analytics configured (if desired)

---

## 🔄 Continuous Deployment

After initial deployment, any push to your main branch will automatically:

1. Trigger a new build
2. Run tests (if configured)
3. Deploy the new version
4. Update your live site

This is automatic on Vercel, Netlify, and Railway!

---

## 🆘 Troubleshooting

### Build fails:

- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript errors

### Page not loading:

- Check browser console for errors
- Verify all imports are correct
- Check network tab for failed requests

### Styling issues:

- Verify Tailwind CSS is properly configured
- Check CSS import in `layout.tsx`
- Clear browser cache

---

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Railway Documentation](https://docs.railway.app)

---

**Congratulations on deploying your portfolio! 🎉**
