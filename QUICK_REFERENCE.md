# ⚡ Quick Reference Card

## 🚀 Start Development
```bash
npm run dev
```
Or double-click: `start.bat` (Windows) / `start.sh` (Mac/Linux)

Visit: **http://localhost:3000**

---

## 📦 Essential Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 📂 Key Files to Edit

### 1️⃣ Personal Info
- `src/pages/Hero.jsx` (lines 57-73) - Name, title, bio
- `src/pages/About.jsx` (lines 72-82) - About me text

### 2️⃣ Projects
- `src/pages/Projects.jsx` (lines 20-85) - Add your projects

### 3️⃣ Skills
- `src/pages/Skills.jsx` (lines 21-56) - Update skills list

### 4️⃣ Contact
- `src/pages/Contact.jsx` (lines 35-39) - Email integration
- `src/pages/Resume.jsx` - Add PDF to `/public/resume.pdf`

### 5️⃣ Social Links
- `src/pages/SocialLinks.jsx` (lines 16-87) - Update usernames
- `src/pages/CodingProfiles.jsx` (lines 13-79) - Update profiles

---

## 🎨 Styling

### Colors
Edit: `tailwind.config.js` (lines 10-33)

### Glassmorphism
Classes: `.glass` or `.glass-strong`

### Custom Cursor
File: `src/components/CustomCursor.jsx`

---

## 🌐 Deploy (Choose One)

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to netlify.com
```

### GitHub Pages
```bash
npm run deploy
```

---

## 🐛 Troubleshooting

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port already in use?
Kill process on port 3000 or change port in `vite.config.js`

### 3D not rendering?
Update GPU drivers, try different browser

---

## 📱 Test Checklist

- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iOS Safari, Chrome)
- [ ] Tablet (iPad, Android)
- [ ] All links work
- [ ] Forms submit
- [ ] Animations smooth
- [ ] Images load
- [ ] Resume downloads

---

## 💡 Pro Tips

1. **Performance**: Images under 500KB, WebP format
2. **SEO**: Update meta tags in `index.html`
3. **Analytics**: Add Google Analytics code
4. **Loading**: Add skeleton screens for better UX
5. **Backup**: Commit to Git frequently

---

## 📚 Documentation

- **Full Guide**: `CUSTOMIZATION.md`
- **Deploy Guide**: `DEPLOYMENT.md`
- **Project Summary**: `PROJECT_SUMMARY.md`
- **This Reference**: `QUICK_REFERENCE.md`

---

## 🎯 Priority Edits (30 mins)

1. Update name in Hero (2 min)
2. Add 3-5 projects (15 min)
3. Update skills (5 min)
4. Change social links (3 min)
5. Test locally (5 min)

**Then deploy!** 🚀

---

## 🆘 Need Help?

1. Check browser console for errors
2. Read error messages carefully
3. Search error on Google/Stack Overflow
4. Check documentation links above

---

## ✨ Features at a Glance

- ✅ 9 complete pages
- ✅ 3D animations
- ✅ Particle background
- ✅ Custom cursor
- ✅ Glassmorphism UI
- ✅ Mobile responsive
- ✅ Performance optimized
- ✅ Production ready

---

**Happy coding! Make it yours! 🎨**
