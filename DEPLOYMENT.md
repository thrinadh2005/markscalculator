# Vercel Deployment Guide

## 🚀 Deploying GMRIT Marks Calculator to Vercel

### 📋 Prerequisites

- Vercel account
- MongoDB Atlas cluster
- MongoDB connection string

### 🔧 Environment Variables Setup

In your Vercel dashboard, set the following environment variables:

#### Required Environment Variables:
```
MONGODB_URI=mongodb+srv://venkatathrinadh05_db_user:eny5QSaY52ufes1G@marks.kzmlscn.mongodb.net/marks_calculator?retryWrites=true&w=majority
```

### 📁 Project Structure

```
d:\PROJECTS\MARKS\
├── api/
│   ├── count.js          # Visitor count API
│   └── visitors.js        # Visitor logs API
├── css/
│   └── styles.css         # Application styles
├── js/
│   ├── script.js          # Main application logic
│   ├── offline-manager.js # Offline functionality
│   └── exam-study-planner.js # Study planner
├── index.html             # Main HTML file
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── DEPLOYMENT.md          # This file
```

### ⚙️ Vercel Configuration

The `vercel.json` file is already configured for serverless functions:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/count.js",
      "use": "@vercel/node"
    },
    {
      "src": "api/visitors.js", 
      "use": "@vercel/node"
    },
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/count",
      "dest": "/api/count.js"
    },
    {
      "src": "/api/visitors",
      "dest": "/api/visitors.js"
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 🌐 API Endpoints

#### Visitor Count API
```
GET https://gmritmarks.vercel.app/api/count
```

Returns:
```json
{
  "count": 1234,
  "unique_visitors": 567,
  "total_views": 2345,
  "is_new_visitor": false
}
```

#### Visitor Logs API
```
GET https://gmritmarks.vercel.app/api/visitors
POST https://gmritmarks.vercel.app/api/visitors
```

### 🚀 Deployment Steps

#### 1. Connect to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd d:\PROJECTS\MARKS
vercel --prod
```

#### 2. Environment Variables in Vercel Dashboard
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add `MONGODB_URI` with your MongoDB connection string
4. Redeploy the project

#### 3. Verify Deployment
- Visit: https://gmritmarks.vercel.app
- Test API: https://gmritmarks.vercel.app/api/count
- Check visitor counter functionality

### 🔍 Troubleshooting

#### Common Issues:

#### 1. API Returns 500 Error
**Cause**: Missing environment variables
**Solution**: Ensure `MONGODB_URI` is set in Vercel dashboard

#### 2. Visitor Count Not Incrementing
**Cause**: Database connection issues
**Solution**: 
- Verify MongoDB connection string
- Check IP whitelist in MongoDB Atlas
- Ensure database user has proper permissions

#### 3. Static Files Not Loading
**Cause**: Routing issues
**Solution**: Check `vercel.json` routes configuration

#### 4. CORS Issues
**Cause**: API endpoints blocked
**Solution**: Ensure proper CORS headers in API functions

### 📊 Database Configuration

#### MongoDB Atlas Settings:
- **Database**: marks_calculator
- **Collection**: stats
- **IP Whitelist**: Add Vercel's IP ranges
- **User Permissions**: Read/Write access

#### Collection Structure:
```javascript
{
  count: 1234,
  unique_visitors: 567,
  total_views: 2345,
  daily_visitors: {},
  last_updated: Date
}
```

### 🔒 Security Best Practices

#### Environment Variables:
- ✅ Never commit `.env` files
- ✅ Use Vercel environment variables
- ✅ Rotate connection strings regularly
- ✅ Use strong database passwords

#### Database Security:
- ✅ IP whitelisting enabled
- ✅ Limited user permissions
- ✅ SSL/TLS connections required
- ✅ Regular backups enabled

### 📱 Testing the Deployment

#### Manual Testing:
1. **Home Page**: https://gmritmarks.vercel.app
2. **Visitor Counter**: Should increment on each visit
3. **API Endpoints**: Test with browser or curl
4. **All Features**: SGPA, CGPA, Internal Predictor, etc.

#### Automated Testing:
```bash
# Test visitor count API
curl https://gmritmarks.vercel.app/api/count

# Test visitor logs API
curl https://gmritmarks.vercel.app/api/visitors
```

### 🔄 Continuous Deployment

#### GitHub Integration:
1. Connect Vercel to GitHub repository
2. Enable automatic deployments
3. Configure environment variables
4. Deploy on push to main branch

#### Deployment Workflow:
```bash
# Make changes
git add .
git commit -m "Update application"
git push

# Vercel automatically deploys
```

### 📈 Monitoring

#### Vercel Analytics:
- Visit counts
- Page performance
- Error rates
- Geographic distribution

#### MongoDB Atlas Metrics:
- Connection count
- Query performance
- Storage usage
- Network I/O

### 🚀 Production Checklist

#### Before Going Live:
- ✅ Environment variables set
- ✅ Database connection tested
- ✅ API endpoints working
- ✅ Static files loading
- ✅ All features functional
- ✅ Error handling tested
- ✅ Performance optimized

#### After Deployment:
- ✅ Monitor error logs
- ✅ Check visitor tracking
- ✅ Verify database operations
- ✅ Test all user flows
- ✅ Monitor performance

---

## 🎯 Quick Deployment Commands

```bash
# Install dependencies
npm install

# Deploy to Vercel
vercel --prod

# Set environment variables (in Vercel dashboard)
MONGODB_URI=mongodb+srv://venkatathrinadh05_db_user:eny5QSaY52ufes1G@marks.kzmlscn.mongodb.net/marks_calculator?retryWrites=true&w=majority

# Test deployment
curl https://gmritmarks.vercel.app/api/count
```

---

## ✅ Deployment Success Indicators

- ✅ **Home Page Loads**: https://gmritmarks.vercel.app
- ✅ **API Working**: /api/count returns visitor count
- ✅ **Database Connected**: Visitor count increments
- ✅ **All Features**: SGPA, CGPA, Internal Predictor working
- ✅ **No Errors**: Console clean, no 404s or 500s
- ✅ **Responsive**: Mobile and desktop friendly

**Your GMRIT Marks Calculator is now deployed and working on Vercel!** 🎯✨
