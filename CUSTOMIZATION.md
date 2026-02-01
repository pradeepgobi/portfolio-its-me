# 🎨 Portfolio Customization Guide

## 📝 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 🎯 Customization Instructions

### 🏠 Hero Page (`src/pages/Hero.jsx`)
Update your personal information:
- **Line 57**: Change "Your Name" to your actual name
- **Line 64**: Update your title/profession
- **Line 73**: Modify your bio description
- **Lines 84-104**: Update button links and text

### 👤 About Page (`src/pages/About.jsx`)
- **Lines 72-82**: Update bio text and personal information
- **Lines 104-128**: Modify career history (add/remove jobs)
- **Lines 148-153**: Update interests and passions

### 🛠️ Skills Page (`src/pages/Skills.jsx`)
Add or modify skills:
- **Lines 21-42**: Frontend skills (React, TypeScript, etc.)
- **Lines 43-50**: Backend skills (Node.js, Python, etc.)
- **Lines 51-56**: Tools & DevOps skills

To add a new skill:
```javascript
{ name: 'Skill Name', icon: IconComponent, level: 85, color: '#hexcolor' }
```

### 💼 Projects Page (`src/pages/Projects.jsx`)
Update your projects:
- **Lines 20-85**: Project array with all project data

Project object structure:
```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: '🎨', // Emoji or image URL
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
  live: 'https://demo.com',
  color: '#hexcolor',
}
```

### 📄 Resume Page (`src/pages/Resume.jsx`)
- Add your resume PDF to `/public/resume.pdf`
- **Lines 12-14**: Update download handler
- **Line 107**: Update last modified date
- **Lines 133-135**: Update contact information

### ✉️ Contact Page (`src/pages/Contact.jsx`)
- **Lines 35-39**: Integrate with your email service (e.g., EmailJS, SendGrid)
- **Lines 129-131**: Update contact information cards

### 📰 Articles Page (`src/pages/Articles.jsx`)
Update your articles:
- **Lines 11-76**: Articles array

Article object structure:
```javascript
{
  id: 1,
  title: 'Article Title',
  excerpt: 'Brief description',
  date: 'Dec 15, 2025',
  readTime: '8 min read',
  platform: 'Medium',
  link: 'https://...',
  image: '📝',
  color: '#hexcolor',
}
```

### 💻 Coding Profiles (`src/pages/CodingProfiles.jsx`)
Update coding platform profiles:
- **Lines 13-79**: Profiles array
- Update username, links, and stats for each platform

### 🌐 Social Links (`src/pages/SocialLinks.jsx`)
Update social media links:
- **Lines 16-87**: Social links array
- Update usernames and profile URLs

---

## 🎨 Styling & Theme

### Colors
Edit `tailwind.config.js` to change the color scheme:
- **Primary colors**: Lines 10-21
- **Dark theme colors**: Lines 22-33
- **Animations**: Lines 35-77

### Global Styles
Edit `src/index.css`:
- **Custom scrollbar**: Lines 21-33
- **Glassmorphism effects**: Lines 37-63
- **Gradient utilities**: Lines 65-78

---

## 🚀 Performance Optimization

### Lazy Loading
Already implemented via Vite's code splitting. See `vite.config.js` lines 15-21.

### Image Optimization
- Use WebP format for images
- Add images to `/public` folder
- Reference as `/image-name.webp`

### Animation Performance
- Animations use `transform` and `opacity` (GPU-accelerated)
- Particles limited to 80 (adjustable in `AnimatedBackground.jsx` line 56)
- Custom cursor disabled on mobile automatically

---

## 📱 Responsive Design

All pages are mobile-first responsive:
- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **Mobile navigation**: Hamburger menu auto-shows on small screens
- **3D effects**: Reduced intensity on mobile for performance

---

## 🔧 Advanced Customization

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```
3. Add to navigation in `src/components/Navigation.jsx`

### Change Particle Configuration
Edit `src/components/AnimatedBackground.jsx`:
- **Particle count**: Line 56 (`value: 80`)
- **Link distance**: Line 46 (`distance: 150`)
- **Movement speed**: Line 54 (`speed: 1`)

### Modify Page Transitions
Edit `src/components/PageTransition.jsx` to change transition effects.

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy 'dist' folder to gh-pages branch
```

---

## 📦 Environment Variables

Create `.env` file for sensitive data:
```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

Access in code: `import.meta.env.VITE_EMAIL_SERVICE_ID`

---

## 🐛 Troubleshooting

### Particles Not Showing
- Check browser console for errors
- Ensure `react-particles` installed correctly

### 3D Objects Not Rendering
- Update GPU drivers
- Test in different browser
- Check Three.js compatibility

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Resources

- **Framer Motion Docs**: https://www.framer.com/motion/
- **Three.js Docs**: https://threejs.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Router**: https://reactrouter.com/

---

## 💡 Tips

1. **Test on multiple devices** before deployment
2. **Optimize images** using tools like TinyPNG
3. **Add loading states** for better UX
4. **Use semantic HTML** for SEO
5. **Add meta tags** in `index.html` for social sharing

---

## 📄 License

Feel free to use this template for your personal portfolio. Attribution appreciated but not required.

---

**Happy Coding! 🚀**
