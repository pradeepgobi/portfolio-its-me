# 📁 Project Folder Structure

```
r:\protfolio\
│
├── 📄 package.json                    # Dependencies and scripts
├── 📄 vite.config.js                  # Vite configuration
├── 📄 tailwind.config.js              # Tailwind CSS theme
├── 📄 postcss.config.js               # PostCSS configuration
├── 📄 index.html                      # HTML entry point
├── 📄 .gitignore                      # Git ignore rules
│
├── 📚 Documentation Files
│   ├── 📄 README.md                   # Project overview
│   ├── 📄 PROJECT_SUMMARY.md          # Complete feature list
│   ├── 📄 CUSTOMIZATION.md            # How to customize
│   ├── 📄 DEPLOYMENT.md               # Deploy instructions
│   ├── 📄 QUICK_REFERENCE.md          # Quick tips
│   └── 📄 FOLDER_STRUCTURE.md         # This file
│
├── 🚀 Start Scripts
│   ├── 📄 start.bat                   # Windows quick start
│   └── 📄 start.sh                    # Mac/Linux quick start
│
├── 📦 node_modules/                   # Dependencies (auto-generated)
│
├── 🎨 public/                         # Static assets
│   ├── 📄 vite.svg                    # Vite logo
│   └── 📄 resume.pdf                  # Add your resume here
│
└── 💻 src/                            # Source code
    │
    ├── 📄 main.jsx                    # App entry point
    ├── 📄 App.jsx                     # Main app component
    ├── 📄 index.css                   # Global styles
    │
    ├── 🧩 components/                 # Reusable components
    │   ├── 📄 AnimatedBackground.jsx  # Particle background
    │   ├── 📄 CustomCursor.jsx        # Animated cursor
    │   ├── 📄 Navigation.jsx          # Nav bar with menu
    │   └── 📄 PageTransition.jsx      # Page animation wrapper
    │
    └── 📄 pages/                      # Page components
        ├── 📄 Hero.jsx                # 🏠 Landing page
        ├── 📄 About.jsx               # 👤 About me
        ├── 📄 Skills.jsx              # 🛠️ Skills showcase
        ├── 📄 Projects.jsx            # 💼 Projects (Priority)
        ├── 📄 Resume.jsx              # 📄 Resume download
        ├── 📄 Contact.jsx             # ✉️ Contact form
        ├── 📄 Articles.jsx            # 📰 Blog articles
        ├── 📄 CodingProfiles.jsx      # 💻 Coding platforms
        └── 📄 SocialLinks.jsx         # 🌐 Social media
```

---

## 📂 Folder Purposes

### Root Level
- **Configuration files**: Vite, Tailwind, PostCSS
- **Documentation**: All guides and references
- **Scripts**: Quick start helpers

### `public/`
- Static files served as-is
- Images, fonts, PDFs, favicons
- No processing by build tool
- Accessible via `/filename.ext`

### `src/`
Main source code directory

#### `src/components/`
Reusable UI components used across pages:
- **AnimatedBackground**: Particle system
- **CustomCursor**: Mouse follower
- **Navigation**: Top nav bar
- **PageTransition**: Animation wrapper

#### `src/pages/`
Individual page components (one per route):
- Each page is self-contained
- Import shared components
- Handle own animations
- Export as default

---

## 🔄 File Flow

```
index.html
    ↓
main.jsx (Entry)
    ↓
App.jsx (Router + Layout)
    ↓
┌─────────────────────────┐
│  Global Components      │
│  - AnimatedBackground   │
│  - CustomCursor         │
│  - Navigation           │
└─────────────────────────┘
    ↓
┌─────────────────────────┐
│  PageTransition         │
│  (Wraps all pages)      │
└─────────────────────────┘
    ↓
┌─────────────────────────┐
│  Individual Pages       │
│  (Based on route)       │
└─────────────────────────┘
```

---

## 📝 Import Patterns

### Component Import
```javascript
import ComponentName from './components/ComponentName'
```

### Page Import
```javascript
import PageName from './pages/PageName'
```

### Icon Import
```javascript
import { FaIcon } from 'react-icons/fa'
import { SiIcon } from 'react-icons/si'
```

### Framer Motion
```javascript
import { motion, AnimatePresence } from 'framer-motion'
```

---

## 🎯 File Sizes (Approximate)

| File/Folder | Size | Notes |
|-------------|------|-------|
| node_modules/ | ~250 MB | Dependencies |
| src/ | ~100 KB | Source code |
| dist/ (built) | ~2 MB | Production build |
| Documentation | ~50 KB | Guides |

---

## 🔍 Finding Things

### Need to change...

| What | File | Lines |
|------|------|-------|
| Your name | `src/pages/Hero.jsx` | 57 |
| About text | `src/pages/About.jsx` | 72-82 |
| Projects | `src/pages/Projects.jsx` | 20-85 |
| Skills | `src/pages/Skills.jsx` | 21-56 |
| Social links | `src/pages/SocialLinks.jsx` | 16-87 |
| Colors | `tailwind.config.js` | 10-33 |
| Nav items | `src/components/Navigation.jsx` | 31-40 |

---

## 🚫 Don't Touch

- `node_modules/` - Auto-managed by npm
- `dist/` - Generated by build
- `.git/` - Version control
- `package-lock.json` - Auto-generated

---

## ➕ Adding New Files

### New Component
1. Create in `src/components/`
2. Export as default
3. Import where needed

### New Page
1. Create in `src/pages/`
2. Add route in `App.jsx`
3. Add to navigation

### New Image
1. Add to `public/`
2. Reference as `/image.png`

---

## 🗂️ Organization Tips

1. **Keep components small**: One responsibility per file
2. **Name files clearly**: Use PascalCase for components
3. **Group related code**: Keep page-specific code in page files
4. **Document complex logic**: Add comments for tricky parts
5. **Stay consistent**: Follow existing patterns

---

## 📊 Build Output

After `npm run build`:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── vendor-[hash].js
│   └── index-[hash].css
└── vite.svg
```

Deploy the entire `dist/` folder to your hosting.

---

**Need more detail? Check other documentation files! 📚**
