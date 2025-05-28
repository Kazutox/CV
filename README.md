# CV Project
### Live link: [cv.jcloete.dev](https://cv.jcloete.dev/)

## About
This is my personal CV/Resume built as a modern web application using Vue 3, Vite, and TypeScript. The project features a responsive design with print-optimized styles, making it easy to share digitally or print to any format.

## Tech Stack
- **Vue 3** - Component-based UI framework
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Bun** - Fast JavaScript runtime and package manager
- **Firebase Hosting** - Deployment and hosting

## Features
- 🎨 Modern, professional design with gradient backgrounds
- 📱 Fully responsive layout for all devices
- 🖨️ Print-optimized styles for PDF generation
- ⚡ Lightning-fast performance with Vite
- 🔍 SEO-friendly static site generation
- 🚀 Automated deployment via GitHub Actions

## Development

### Prerequisites
- [Bun](https://bun.sh) runtime

### Install dependencies
```bash
bun install
```

### Start development server
```bash
bun dev
```

### Build for production
```bash
bun build
```

### Preview production build
```bash
bun preview
```

## Project Structure
```
src/
├── assets/          # Styles, images, and data
│   ├── base.css    # Global styles and print styles
│   ├── data.json   # CV content data
│   └── jcloete.jpg # Profile image
├── components/      # Vue components
│   ├── Introduction.vue
│   ├── KeyAchievements.vue
│   ├── ProfessionalSummary.vue
│   ├── Experience.vue
│   └── Skills.vue
└── App.vue         # Main application component
```

## Deployment
The project automatically deploys to Firebase Hosting via GitHub Actions on:
- Push to `master` branch
- Pull requests (preview deployment)
- Tag pushes (e.g., `v1.0.0`)

## Why a Web-Based CV?
- **No file format issues** - Accessible from any device with a browser
- **Always up-to-date** - Changes are instantly available to everyone
- **Print to any format** - Use Ctrl+P to save as PDF or print
- **Interactive elements** - Clickable links and smooth animations
- **Analytics** - Track views and engagement
- **Environmentally friendly** - No paper waste