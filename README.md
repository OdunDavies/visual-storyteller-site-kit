
# Alex Chen - Videographer Portfolio

A modern, cinematic portfolio website for a professional videographer and video editor, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Cinematic Hero Section** with full-screen video background
- **Smooth Scroll Animations** powered by Framer Motion
- **Interactive Portfolio Gallery** with hover effects and video previews
- **Professional Service Cards** with pricing information
- **Animated Testimonials** carousel
- **Contact Form** with elegant interactions
- **Fully Responsive** design optimized for all devices
- **Performance Optimized** with lazy loading and optimized assets
- **SEO Optimized** with structured data and meta tags
- **Accessibility Features** with ARIA roles and semantic HTML

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Shadcn/ui** for UI components

## Project Structure

```
src/
├── pages/
│   └── Index.tsx          # Main portfolio page
├── components/
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── index.css            # Global styles and design system
└── main.tsx             # App entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd videographer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Customization

#### Content Updates
- Update personal information, services, and testimonials in `src/pages/Index.tsx`
- Replace placeholder images with actual portfolio content
- Add your actual video files to the `public` directory

#### Styling
- Modify the design system variables in `src/index.css`
- Update Tailwind configuration in `tailwind.config.ts`
- Colors use HSL format for consistency

#### Animations
- Customize animation timings and effects in the Framer Motion components
- Add new animations using the predefined keyframes in the CSS

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the deployment prompts

### Manual Build

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## Performance Optimizations

- **Image Optimization**: Use WebP format for images when possible
- **Video Optimization**: Compress videos and use appropriate formats (MP4/WebM)
- **Code Splitting**: Components are automatically code-split by Vite
- **Font Loading**: Fonts are preloaded for faster rendering
- **Lazy Loading**: Images and videos load only when needed

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- iOS Safari 14+
- Android Chrome 88+

## License

This project is licensed under the MIT License.

## Contact

For questions or customization requests, contact Alex Chen at alex@alexchenvideo.com
