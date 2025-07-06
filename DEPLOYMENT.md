# Deployment Guide

This guide covers different deployment options for your portfolio website.

## 🔧 Build Process

The portfolio uses a full-stack architecture with both frontend and backend components.

### Development Build
```bash
npm run dev
```
- Runs both frontend (Vite) and backend (Express) in development mode
- Hot reload enabled for both client and server
- Available at http://localhost:5000

### Production Build
```bash
npm run build
```
This creates:
- `dist/public/` - Static frontend assets
- `dist/index.js` - Bundled server application

## 🚀 Deployment Options

### 1. Replit Deployment (Recommended)

**Advantages:**
- Zero configuration
- Automatic HTTPS
- Free hosting tier
- Built-in database support

**Steps:**
1. Your project is already configured for Replit
2. Click the "Deploy" button in the Replit interface
3. Configure your custom domain (optional)
4. Your portfolio will be available at `https://your-repl-name.username.repl.co`

### 2. Vercel Deployment

**Advantages:**
- Excellent for React applications
- Automatic deployments from Git
- Free tier available
- Built-in analytics

**Setup:**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

**Note:** Vercel is primarily for static sites. You may need to adapt the backend for serverless functions.

### 3. Netlify Deployment

**Advantages:**
- Great for static sites
- Form handling built-in
- Free tier available

**Setup:**
1. Build the project: `npm run build`
2. Deploy the `dist/public` folder to Netlify
3. Configure redirects in `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build]
  publish = "dist/public"
  command = "npm run build"
```

### 4. Heroku Deployment

**Advantages:**
- Full-stack support
- Easy database integration
- Git-based deployment

**Setup:**
1. Install Heroku CLI
2. Create a new Heroku app:
```bash
heroku create your-portfolio-name
```
3. Add environment variables:
```bash
heroku config:set NODE_ENV=production
```
4. Deploy:
```bash
git push heroku main
```

### 5. Digital Ocean App Platform

**Advantages:**
- Full-stack support
- Predictable pricing
- Easy scaling

**Setup:**
1. Connect your GitHub repository
2. Configure the app:
   - Build Command: `npm run build`
   - Run Command: `node dist/index.js`
   - HTTP Port: 5000

### 6. Railway Deployment

**Advantages:**
- Simple full-stack deployment
- Git-based workflow
- Built-in database support

**Setup:**
1. Connect your GitHub repository to Railway
2. Configure environment variables
3. Deploy automatically on push

## 🔒 Environment Variables

For production deployments, set these environment variables:

```bash
NODE_ENV=production
PORT=5000
# Add any other environment variables your app needs
```

## 📱 Custom Domain Setup

### For Replit:
1. Go to your deployed app settings
2. Add your custom domain
3. Configure DNS with your domain provider

### For Vercel/Netlify:
1. Add custom domain in dashboard
2. Configure DNS records:
   - A record: `@` → Your deployment IP
   - CNAME record: `www` → Your deployment URL

## 🔍 Monitoring and Analytics

### Add Google Analytics:
1. Create a Google Analytics account
2. Add the tracking code to `client/index.html`
3. Track page views and user interactions

### Error Monitoring:
Consider adding services like:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior analysis

## 🛡️ Security Considerations

For production deployments:

1. **HTTPS**: Ensure your deployment platform provides HTTPS
2. **CORS**: Configure CORS properly for your domain
3. **Rate Limiting**: Add rate limiting to your API endpoints
4. **Input Validation**: Ensure all form inputs are properly validated
5. **CSP Headers**: Add Content Security Policy headers

## 📊 Performance Optimization

1. **Image Optimization**: Use WebP format and proper sizing
2. **Code Splitting**: Leverage React's lazy loading
3. **CDN**: Use a CDN for static assets
4. **Caching**: Implement proper cache headers
5. **Bundle Analysis**: Use tools to analyze bundle size

## 🔄 CI/CD Pipeline

Set up automated deployment with GitHub Actions:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm install
    - name: Build
      run: npm run build
    - name: Deploy
      # Add your deployment step here
```

## 📞 Support

If you encounter any deployment issues:
1. Check the deployment logs
2. Verify environment variables
3. Test the build locally first
4. Contact support for your deployment platform

Remember to test your deployment thoroughly before sharing your portfolio link!