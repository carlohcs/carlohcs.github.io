# Personal Website - Carlos Henrique

> Portfolio and personal website built with Next.js

## 🌐 Access

- **Production**: [carlohcs.me](https://carlohcs.me)
- **GitHub Pages**: [carlohcs.github.io](https://carlohcs.github.io)

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (v9.0.5)
- **React**: Class Components with Context API
- **Styling**: Styled JSX
- **Routing**: Next.js Routes + Custom Express Server
- **PWA**: Service Worker + Web App Manifest
- **Internationalization**: Custom i18n implementation (PT/EN)
- **Theme**: Dark/Light mode
- **Analytics**: Google Analytics
- **Deployment**: GitHub Pages

## 🛠️ Development

### Prerequisites

- Node.js 18.18.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/carlohcs/carlohcs.github.io.git

# Enter the directory
cd carlohcs.github.io

# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build and Deploy
npm run build        # Build the application
npm run export       # Generate static files
npm run start        # Production server

# Deploy to GitHub Pages
npm run deploy:github

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix issues automatically
```

## 📁 Project Structure

```text
├── components/         # React Components
│   ├── Header.js
│   ├── Menu.js
│   ├── AppProvider.js  # Context API
│   └── helpers/        # Utilities
├── layouts/           # Main layouts
│   └── main.js
├── pages/             # Next.js pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   └── ...
├── static/            # Static files
│   ├── img/
│   ├── video/
│   └── manifest.json
├── etc/
│   └── messages.json  # PT/EN translations
└── docs/              # Build for GitHub Pages
```

## 🌍 Internationalization

The site supports Portuguese and English:

- **PT**: `/` (default)
- **EN**: `/en/*`

Translations are managed in the `etc/messages.json` file.

## 🎨 Themes

Support for light and dark mode:

- Automatic system preference detection
- Manual toggle available
- localStorage persistence

## 📱 PWA Features

- Web App Manifest
- Optimized icons for different devices
- Custom splash screen
- Installable app

## 🔧 Configuration

### ESLint

Custom configuration with support for:

- React/JSX
- Styled JSX
- Formatting rules
- Unused variables (except those prefixed with `_`)

### Next.js

- Image optimization
- CSS/PostCSS
- Static export
- Custom server with Express

## 🚀 Deployment

### GitHub Pages (Automatic)

```bash
npm run deploy:github
```

This command:

1. Builds the application
2. Exports static files to `/docs`
3. Adds `.nojekyll`
4. Automatic commit and push

### Production

The site is configured for:

- Automatic redirect to main domain
- SSL/HTTPS
- Asset compression
- Optimized cache headers

## 📊 Performance

- **Lighthouse Score**: 90+ in all metrics
- **Lazy loading** of images
- **Code splitting** automatic (Next.js)
- **Preload** of critical resources
- **Service Worker** for caching

## 🐛 Troubleshooting

### Common Issues

1. **Build error**: Clean `.next` and `node_modules`
2. **ESLint errors**: Run `npm run lint:fix`
3. **Favicon not showing**: Clear browser cache
4. **Scroll issues**: Temporarily disable smooth scroll

### Debug

```bash
# Check dependencies
npm ls

# Clear cache
rm -rf .next node_modules package-lock.json
npm install

# Build with debug
NODE_ENV=development npm run build
```

## 📄 License

ISC

## 👨‍💻 Author

Carlos Henrique Carvalho de Santana

- GitHub: [@carlohcs](https://github.com/carlohcs)
- LinkedIn: [Carlos Henrique](https://linkedin.com/in/carlohcs)
- Website: [carlohcs.me](https://carlohcs.me)

---

⚡ **Tip**: Use `npm run dev` for local development with hot reload!
