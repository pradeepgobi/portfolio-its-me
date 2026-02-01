# 🚀 Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Git repository initialized
- Account on chosen platform

---

## 🌐 Option 1: Vercel (Recommended - Easiest)

### Quick Deploy
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and your site will be live!

### GitHub Integration (Automatic Deploys)
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Vercel auto-detects Vite config
5. Click "Deploy"
6. Every push to `main` branch auto-deploys!

**Custom Domain**: Add in Vercel dashboard → Settings → Domains

---

## 🎯 Option 2: Netlify

### Drag & Drop Deploy
1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag `dist` folder to Netlify
4. Done! Site is live

### GitHub Integration
1. Go to Netlify dashboard
2. Click "New site from Git"
3. Connect GitHub repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

**Custom Domain**: Site settings → Domain management

---

## 📦 Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/', // Your repo name
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repo settings

---

## ☁️ Option 4: AWS S3 + CloudFront

### S3 Static Hosting
1. Build project:
```bash
npm run build
```

2. Create S3 bucket:
```bash
aws s3 mb s3://your-portfolio-bucket
```

3. Upload files:
```bash
aws s3 sync dist/ s3://your-portfolio-bucket --acl public-read
```

4. Enable static website hosting in S3 console

### CloudFront (Optional - CDN)
1. Create CloudFront distribution
2. Set S3 bucket as origin
3. Configure SSL certificate
4. Point domain to CloudFront URL

---

## 🐳 Option 5: Docker

### Create Dockerfile
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run
```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 80:80 portfolio
```

### Deploy to Cloud
- **Docker Hub**: Push image and deploy to any cloud
- **Railway**: Connect GitHub, auto-deploys
- **Render**: Supports Docker deployments

---

## 🔧 Environment Variables

### Vercel / Netlify
Add in dashboard under "Environment Variables":
```
VITE_EMAIL_SERVICE_ID=your_value
VITE_EMAIL_TEMPLATE_ID=your_value
VITE_EMAIL_PUBLIC_KEY=your_value
```

### Local Development
Create `.env` file:
```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

---

## 📊 Performance Optimization

### Before Deployment
1. **Optimize images**:
   - Use WebP format
   - Compress with TinyPNG
   - Use appropriate sizes

2. **Audit build**:
```bash
npm run build
npx vite-bundle-visualizer
```

3. **Test performance**:
   - Lighthouse in Chrome DevTools
   - Target: 90+ score

### After Deployment
- Enable gzip compression (auto on Vercel/Netlify)
- Configure CDN caching
- Monitor with Analytics

---

## 🔒 SSL Certificate

### Free SSL (Automatic)
- **Vercel**: Auto-enabled
- **Netlify**: Auto-enabled
- **GitHub Pages**: Auto-enabled

### Custom SSL
- Use Let's Encrypt (free)
- Or upload your certificate in hosting dashboard

---

## 🌍 Custom Domain Setup

### General Steps
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Add domain in hosting platform
3. Update DNS records:
   - **A Record**: Points to hosting IP
   - **CNAME Record**: Points to hosting URL
4. Wait for DNS propagation (up to 48 hours)

### Vercel Example
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📈 Analytics Integration

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `index.html` `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

---

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder links
- [ ] Add real projects
- [ ] Test all navigation links
- [ ] Optimize images
- [ ] Test on mobile devices
- [ ] Check spelling and grammar
- [ ] Verify contact form works
- [ ] Add resume PDF
- [ ] Test in multiple browsers
- [ ] Run Lighthouse audit
- [ ] Add meta tags for SEO
- [ ] Set up 404 page
- [ ] Test loading performance

---

## 🐛 Common Issues

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh (SPA Issue)
Add `_redirects` file to `public/`:
```
/* /index.html 200
```

### Images Not Loading
- Ensure images are in `public/` folder
- Use absolute paths: `/image.png`
- Check file extensions match

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Review deployment logs
3. Verify environment variables
4. Test build locally first

---

**Ready to deploy? Choose your platform and go live! 🚀**
