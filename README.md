# Mosa Beryal - Portfolio Website

A modern, responsive portfolio website built with React.js, TypeScript, and Express.js featuring beautiful animations and dark/light mode support.

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Scroll Animations**: Bidirectional scroll animations that trigger on both up and down scrolling
- **Interactive Contact Form**: Functional contact form with backend integration
- **Professional Sections**: 
  - Hero section with floating profile picture
  - About section with experience statistics
  - Work experience with detailed project descriptions
  - Skills with animated progress bars
  - Featured projects showcase
  - Education background
  - Contact form and social links

## 🛠️ Tech Stack

### Frontend
- **React.js 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - UI components
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **React Query** - Server state management

### Backend
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **In-memory storage** - Data persistence
- **Zod** - Input validation

### Build Tools
- **Vite** - Build tool and dev server
- **esbuild** - Fast bundling
- **PostCSS** - CSS processing

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configurations
│   │   ├── pages/          # Page components
│   │   └── index.css       # Global styles and animations
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage layer
├── shared/                 # Shared TypeScript schemas
└── package.json           # Project dependencies and scripts
```

## 🎨 Customization

### Personal Information
Update your personal details in:
- `client/src/components/hero-section.tsx` - Name, title, contact info
- `client/src/components/about-section.tsx` - About description
- `client/src/components/experience-section.tsx` - Work experience
- `client/src/components/projects-section.tsx` - Featured projects
- `client/src/components/skills-section.tsx` - Skills and technologies

### Styling
- Colors and themes: `client/src/index.css`
- Component styles: Individual component files
- Animations: `client/src/lib/animations.ts`

### Profile Picture
Replace the profile picture URL in `client/src/components/hero-section.tsx` with your own professional photo.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌙 Dark Mode

The portfolio includes a sophisticated dark/light mode toggle that:
- Respects system preferences
- Saves user preference in localStorage
- Provides smooth transitions between themes
- Ensures proper contrast and readability

## 📨 Contact Form

The contact form includes:
- Client-side validation with Zod schemas
- Real-time error feedback
- Success/error toast notifications
- Backend API integration
- Responsive design

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to Replit
The project is already configured for Replit deployment:
1. Click the "Deploy" button in Replit
2. Configure your custom domain (optional)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Mosa Beryal**
- Email: beryalmosa@gmail.com
- Phone: +92 305 9823223
- LinkedIn: [linkedin.com/in/mosaberyal](https://www.linkedin.com/in/mosa-beryal-b03233211/)
- GitHub: [github.com/Mosaberyal](https://github.com/MosaBeryal)

---

⭐ Star this repository if you found it helpful!