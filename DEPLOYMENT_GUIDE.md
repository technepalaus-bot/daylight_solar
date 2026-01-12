# �� Deployment Guide for Daylight Solar Website

## Overview

Your Daylight Solar website is **production-ready** and can be deployed to various platforms. This guide covers deployment options and best practices.

## Recommended Deployment Options

### 1. **Vercel** (Recommended - Easiest)
Vercel is the official Next.js hosting platform with seamless deployment.

#### Steps:
1. **Sign up at** `vercel.com`
2. **Connect your Git repository**
3. **Import the project**
4. **Vercel automatically:**
   - Detects Next.js project
   - Builds and deploys automatically
   - Provides free SSL certificate
   - Sets up custom domain

#### Advantages:
- ✅ One-click deployment
- ✅ Automatic updates from Git
- ✅ Zero configuration
- ✅ Global CDN
- ✅ Free tier available
- ✅ Environmental variables support

### 2. **Netlify**

#### Steps:
1. Connect Git repository to Netlify
2. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: .next
   ```
3. Deploy

### 3. **Self-Hosted (Linux/Ubuntu Server)**

#### Prerequisites:
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache for reverse proxy

#### Steps:
```bash
# Clone repository
git clone <your-repo> /var/www/daylight-solar
cd /var/www/daylight-solar

# Install dependencies
npm ci --production

# Build project
npm run build

# Start with PM2
npm install -g pm2
pm2 start npm -- start --name "daylight-solar"
pm2 save
pm2 startup

# Configure Nginx
# Create /etc/nginx/sites-available/daylight-solar
# Proxy traffic to localhost:3000
```

### 4. **Docker Container**

#### Dockerfile:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Build & Run:
```bash
docker build -t daylight-solar .
docker run -p 3000:3000 daylight-solar
```

## Pre-Deployment Checklist

- [ ] Update contact form to use real backend API
- [ ] Replace gradient placeholders with real images
- [ ] Update company information if needed
- [ ] Add real customer testimonials
- [ ] Set up email notifications for form submissions
- [ ] Configure custom domain name
- [ ] Set up SSL certificate
- [ ] Test all pages on production URL
- [ ] Test contact form submission
- [ ] Verify mobile responsiveness
- [ ] Check all links work correctly
- [ ] Add Google Analytics
- [ ] Set up form spam protection (reCAPTCHA)

## Environment Variables

Create `.env.local` file for development or configure in hosting platform:

```env
# Contact Form
NEXT_PUBLIC_CONTACT_API=https://api.daylightsolar.com.au/contact
CONTACT_API_KEY=your_api_key_here

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Email
SMTP_HOST=your_email_provider
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Site URL
NEXT_PUBLIC_SITE_URL=https://daylightsolar.com.au
```

## Form Submission Setup

### Option 1: Email Service (Recommended)

1. **Sign up for email service:**
   - SendGrid
   - Mailgun
   - AWS SES
   - Brevo (formerly Sendinblue)

2. **Install package:**
   ```bash
   npm install nodemailer
   ```

3. **Create API route:**
   ```typescript
   // src/app/api/contact/route.ts
   import { NextRequest, NextResponse } from 'next/server';
   import nodemailer from 'nodemailer';

   export async function POST(request: NextRequest) {
     const data = await request.json();
     
     const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_PASS,
       },
     });

     try {
       await transporter.sendMail({
         from: process.env.SMTP_USER,
         to: 'hello@daylightsolar.com.au',
         subject: 'New Solar Consultation Request',
         html: `
           <h2>New Consultation Request</h2>
           <p><strong>Name:</strong> ${data.fullName}</p>
           <p><strong>Email:</strong> ${data.email}</p>
           <p><strong>Phone:</strong> ${data.phone}</p>
           <p><strong>Address:</strong> ${data.address}</p>
           <p><strong>Power Bill:</strong> ${data.powerBill}</p>
         `,
       });

       return NextResponse.json({ success: true });
     } catch (error) {
       return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
     }
   }
   ```

### Option 2: Third-Party Service

- **Formspree**: No backend needed
- **Basin**: Simple form handling
- **Getform**: Email + database storage
- **Jotform**: Full-featured forms

## Performance Optimization

### Already Implemented:
- ✅ Static generation for all pages
- ✅ Automatic code splitting
- ✅ CSS minification
- ✅ Image optimization ready

### Additional Steps:
1. **Add real images** with Next.js Image component
2. **Implement caching** for better performance
3. **Monitor Core Web Vitals** via Google Search Console
4. **Add compression** for faster loading

## SEO for Production

### 1. Search Engine Registration
```bash
# Submit sitemap
https://daylightsolar.com.au/sitemap.xml

# Google Search Console
https://search.google.com/search-console

# Bing Webmaster Tools
https://www.bing.com/webmasters
```

### 2. Meta Tags (Already Configured)
- ✅ Title tags
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter cards

### 3. Additional SEO
```typescript
// In layout.tsx
export const metadata: Metadata = {
  title: "Daylight Solar | Solar Solutions",
  description: "...",
  canonical: "https://daylightsolar.com.au",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://daylightsolar.com.au",
    title: "Daylight Solar",
    description: "...",
    images: [{
      url: "https://daylightsolar.com.au/og-image.jpg",
      width: 1200,
      height: 630,
    }],
  },
};
```

## Analytics Setup

### Google Analytics 4
```typescript
// Add to layout.tsx
import Script from 'next/script';

export default function RootLayout() {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `,
          }}
        />
      </head>
      <body>{/* ... */}</body>
    </html>
  );
}
```

## Security Measures

1. **HTTPS** - Required (SSL certificate)
2. **CORS** - Configure for API calls
3. **Rate Limiting** - Prevent form spam
4. **Input Validation** - Sanitize form inputs
5. **reCAPTCHA** - Add bot protection
6. **CSP Headers** - Content Security Policy

## Monitoring & Maintenance

### Uptime Monitoring
- Use UptimeRobot or Ping-Checker
- Get alerts if site goes down

### Performance Monitoring
- Use Lighthouse CI
- Monitor Core Web Vitals
- Check PageSpeed Insights

### Error Tracking
- Sentry for error monitoring
- Log Stack for log management

## Troubleshooting

### Build Errors
```bash
# Clear build cache
rm -rf .next

# Rebuild
npm run build
```

### Contact Form Not Working
1. Check API endpoint is correct
2. Verify email service credentials
3. Check console for errors
4. Test form submission

### Images Not Loading
1. Ensure image files exist in `/public`
2. Check image paths are correct
3. Verify permissions

## Support & Maintenance

### Weekly Tasks
- Monitor form submissions
- Check website uptime
- Review analytics

### Monthly Tasks
- Update customer testimonials
- Check for broken links
- Review performance metrics
- Backup database

### Yearly Tasks
- Renew SSL certificate
- Update dependencies
- Major content updates
- Security audit

## Contact Support

- **For Hosting Issues**: Contact your hosting provider
- **For Code Issues**: Refer to Next.js documentation
- **For Solar Info Updates**: Contact Daylight Solar team

---

**Your Daylight Solar website is ready for the world! ☀️**

Choose your deployment platform above and follow the steps to go live!
