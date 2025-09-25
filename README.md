# Developer Portfolio Website 

A modern, responsive portfolio website for showcasing my work as a Data & AI Practitioner.

see live demo site here [PORTFOLIO](https://samdansk2.github.io/portfolio/)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Modern dark theme with glassmorphism effects
- **Interactive Elements**: Smooth scrolling, animated sections, and project filters
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Performance Optimized**: Lazy loading, optimized assets, and fast load times
- **SEO Ready**: Complete with meta tags, structured data, and sitemap
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support

## 📧 Contact Form Setup

The contact form uses EmailJS. To set up your own:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `assets/js/emailjs-config.js` with your credentials

## 🎨 Customization

- **Colors**: Edit CSS variables in `style.css`
- **Content**: Update sections in `index.html`
- **Projects**: Add new projects in the Projects section
- **Resume**: Replace `resume.pdf` with your resume

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Any push to the `main` branch triggers automatic deployment
2. GitHub Actions workflow builds and deploys the site
3. Site is available at: `https://[username].github.io/portfolio/`

### Manual Deployment Setup

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

3. **Monitor deployment:**
   - Check the Actions tab in your repository
   - Wait for the workflow to complete
   - Your site will be live at the GitHub Pages URL
  
## 📄 License

© 2025 Shaik Samdan. All rights reserved.
