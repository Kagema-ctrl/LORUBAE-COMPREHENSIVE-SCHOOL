# Lorubae Comprehensive School Website

A modern, fully responsive website showcasing Lorubae Comprehensive School's mission, academics, and vibrant student life.

## Overview

The Lorubae Comprehensive School website is a professional digital presence designed to engage prospective students, parents, and the broader community. The site features an intuitive navigation experience, a comprehensive gallery showcasing school facilities and student activities, faculty profiles, news and updates through our blog, and highlights of student recognition and achievements.

## Key Features

- **Home Page** - A welcoming introduction to Lorubae Comprehensive School with key information and highlights
- **Faculty Directory** - Profiles and information about our dedicated teaching staff
- **Photo Gallery** - A browsable collection of images organized by category including classrooms, dormitories, sports, events, and community activities
- **Maisha Marefu** - Dedicated page highlighting this important school program or initiative
- **Wall of Honor** - Recognition of exceptional students and achievements within our community
- **Christian Union** - Information about our student-led Christian organization and activities
- **Blog** - Regular news updates, announcements, and articles with full search functionality

## Technical Features

- Fully responsive design optimized for desktop, tablet, and mobile devices
- Advanced image gallery with filtering and categorization
- Blog search functionality for easy content discovery
- Fast-loading, optimized performance
- Accessible design standards compliance
- SEO-friendly structure

## Structure

```
lorubae/
├── index.html                   # Home page
├── gallery.html                 # Photo gallery with filtering
├── maisha-marefu.html          # Maisha Marefu program page
├── wall-of-honor.html          # Student recognition page
├── faculty.html                 # Faculty directory
├── christian-union.html        # Student organization page
├── 404.html                     # Error page
├── site.webmanifest
├── blog/                        # Blog section
│   ├── index.html              # Blog main page
│   └── [post-slug].html        # Individual blog posts
└── assets/
    ├── css/
    │   ├── variables.css       # Design system and CSS variables
    │   ├── main.css            # Core styles and layout
    │   └── pages/              # Page-specific styles
    ├── js/
    │   ├── main.js             # Core functionality and interactivity
    │   ├── gallery-filter.js   # Gallery filtering system
    │   └── blog-search.js      # Blog search and filtering
    └── images/                 # Image assets
        ├── logo/
        ├── hero/
        ├── staff/
        ├── students/
        └── gallery/            # Organized by category
```

## Setup Instructions

1. **Copy Logo**: Place your Lorubae logo as `lorubae-logo.png` in `assets/images/logo/`

2. **Favicon Setup**: The favicon files are in the `favicon_io` folder. Copy them to the root:
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`
   - `favicon-32x32.png`
   - `favicon-16x16.png`
   - `favicon.ico`
   - `site.webmanifest`

3. **Replace Placeholders**: Search and replace all `[PLACEHOLDER_*]` values throughout the site:
   - Content: Fill with actual school information
   - Google Analytics: Replace `[GA_MEASUREMENT_ID]` with your GA4 measurement ID
   - Email addresses: Use the obfuscated format provided in HTML

4. **Images**: Add all images to their respective folders:
   - Hero, staff, gallery photos (WebP with JPEG fallback)
   - Minimum sizing: Hero max 1920px, gallery 600px, staff 400px

5. **Form Setup**: When ready, configure Formspree:
   - Visit formspree.io and create form for lorubae domain
   - Replace form action in contact form with your form ID
   - Enable reCAPTCHA and rate limiting

6. **Security Headers**: The `.htaccess` file includes:
   - HTTPS redirect and HSTS
   - CSP, X-Frame-Options, X-Content-Type-Options
   - Disable directory listing
   - GZIP compression
   - Cache control for assets

7. **Google Analytics Setup**:
   - Create GA4 property
   - Add measurement ID to all HTML files
   - Configure data retention and sampling

## Brand Colors (CSS Variables)

- **Blues**: Sky Teal (#00BCD4), Deep Teal (#00838F), Navy (#082030)
- **Reds**: Flame Red (#FF0000), Crimson (#C00000)
- **Amber**: #F59E0B (Wall of Honor only)
- **Neutrals**: Deep Black (#0A0A0A),  White (#FFFFFF)

## Typography

- **Display**: Playfair Display Bold/SemiBold
- **Body**: Nunito Regular/SemiBold
- **Scripture**: Lora Italic

## Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: 769px - 1200px
- Wide: > 1200px

## Performance Targets

- Lighthouse Score: > 85 on mobile
- All images: WebP with JPEG fallback
- JS/CSS minified before deployment
- Google Fonts preconnected and preloaded

## Security Checklist

- [ ] SSL certificate active (Let's Encrypt)
- [ ] All security headers configured
- [ ] EXIF data stripped from photos
- [ ] Parent consent for all student photos
- [ ] No raw email addresses in HTML
- [ ] Rate limiting enabled on forms
- [ ] Backups configured (30 day retention)
- [ ] Uptime monitoring active
- [ ] 404 custom page active

## Deployment

1. Minify CSS and JS
2. Optimize all images
3. Test all links and forms
4. Run security scan (securityheaders.com)
5. Run Lighthouse audit
6. Enable automatic SSL renewal
7. Configure server backups
8. Set up monitoring

## Support

For questions or modifications, ensure you follow the brand guidelines and documentation v1.0 specifications strictly.

**Site Motto**: Knowledge is Power
**Location**: Samburu East Sub-County, Samburu County, Kenya
