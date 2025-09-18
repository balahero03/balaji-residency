# 🚀 Deployment Guide - Balaji Residency

## Pre-Deployment Checklist

### ✅ Required Changes Made:
1. **Build Configuration** - Updated `vite.config.ts` with production optimizations
2. **SEO Files** - Added `sitemap.xml` and updated `robots.txt`
3. **Environment Variables** - Created `env.production` with production settings
4. **Package Scripts** - Added deployment scripts to `package.json`
5. **Favicon** - Added placeholder favicon (replace with actual file)

### 🔧 Additional Steps Required:

#### 1. **Replace Favicon**
```bash
# Replace public/favicon.ico with actual favicon file
# Recommended size: 32x32px or 16x16px
```

#### 2. **Optimize Images**
```bash
# Compress all images in src/assets/ for faster loading
# Recommended formats: WebP with fallback to JPG
# Max file size: 500KB per image
```

#### 3. **Environment Setup**
```bash
# Copy env.production to .env.production
cp env.production .env.production

# Or set environment variables in your hosting platform
```

## 🏗️ Build Process

### Local Build Test:
```bash
# Install dependencies
npm install

# Build for production
npm run build:prod

# Preview build locally
npm run preview
```

### Production Build:
```bash
# Clean install
npm ci --only=production

# Build optimized version
npm run build:prod
```

## 🌐 Deployment Options

### Option 1: Netlify
1. Connect GitHub repository
2. Build command: `npm run build:prod`
3. Publish directory: `dist`
4. Environment variables: Copy from `env.production`

### Option 2: Vercel
1. Import GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build:prod`
4. Output directory: `dist`
5. Environment variables: Copy from `env.production`

### Option 3: GitHub Pages
1. Add to `package.json`:
```json
{
  "homepage": "https://balajiresidency.com",
  "scripts": {
    "predeploy": "npm run build:prod",
    "deploy": "gh-pages -d dist"
  }
}
```

### Option 4: Traditional Hosting
1. Upload `dist/` folder contents to web server
2. Configure server for SPA routing (handle 404s)
3. Set up SSL certificate
4. Configure domain DNS

## 🔒 Security & Performance

### SSL Certificate
- **Required**: HTTPS for production
- **Recommended**: Let's Encrypt (free)
- **Domain**: balajiresidency.com

### Performance Optimizations
- ✅ Code splitting configured
- ✅ Minification enabled
- ✅ Source maps disabled for production
- 🔄 Image optimization needed
- 🔄 Gzip compression (configure on server)

### SEO Configuration
- ✅ Meta tags configured
- ✅ Structured data (JSON-LD) added
- ✅ Sitemap generated
- ✅ Robots.txt updated
- 🔄 Google Analytics (add if needed)
- 🔄 Google Search Console verification

## 📱 Mobile Optimization
- ✅ Responsive design implemented
- ✅ Touch-friendly buttons
- ✅ Fast loading optimized
- ✅ PWA ready (add manifest.json if needed)

## 🔍 Post-Deployment Checklist

### Testing:
- [ ] All pages load correctly
- [ ] Contact forms work
- [ ] WhatsApp integration functional
- [ ] Phone links work on mobile
- [ ] Images load properly
- [ ] Navigation works on all devices

### SEO Verification:
- [ ] Submit sitemap to Google Search Console
- [ ] Test structured data with Google's testing tool
- [ ] Verify meta tags with social media debuggers
- [ ] Check page speed with Google PageSpeed Insights

### Analytics Setup:
- [ ] Google Analytics (if required)
- [ ] Google Search Console
- [ ] Facebook Pixel (if needed)

## 🚨 Emergency Contacts
- **Technical Issues**: [Your contact]
- **Domain/Hosting**: [Hosting provider contact]
- **Business**: 9442422556 / 9942024595

## 📝 Notes
- Website is optimized for Indian pilgrims
- WhatsApp integration is primary booking method
- Phone numbers are hardcoded for reliability
- No backend required - static site deployment
- All contact forms redirect to WhatsApp

---
**Last Updated**: December 19, 2024
**Version**: 1.0.0
