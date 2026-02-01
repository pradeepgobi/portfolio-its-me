# Premium Portfolio Website

A modern, animated portfolio website built with React, featuring 3D effects, glassmorphism design, and smooth page transitions.

## 🚀 Features

- **Multi-page experience** with React Router
- **3D animations** using Three.js and React Three Fiber
- **Particle backgrounds** with mouse interaction
- **Glassmorphism effects** and gradient animations
- **Framer Motion** page transitions
- **Fully responsive** mobile-first design
- **Performance optimized** with lazy loading and code splitting

## 📦 Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber
- React Particles
- React Router DOM

## 🛠️ Installation

```bash
npm install
```

## 🏃 Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedBackground.jsx
│   ├── CustomCursor.jsx
│   ├── Navigation.jsx
│   └── PageTransition.jsx
├── pages/              # Page components
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx
│   ├── Articles.jsx
│   ├── CodingProfiles.jsx
│   └── SocialLinks.jsx
├── utils/              # Utility functions and configs
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

Edit the content in each page component to personalize:
- Update personal information in `Hero.jsx`
- Add your projects in `Projects.jsx`
- Configure skills in `Skills.jsx`
- Update social links in `SocialLinks.jsx`

## 📄 License

MIT
