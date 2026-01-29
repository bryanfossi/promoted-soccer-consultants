# Promoted Soccer Consultants Website

A professional Next.js website for Promoted Soccer Consultants, featuring club consulting and FUSE-ID college recruiting services.

## Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Component-based architecture** with CSS Modules
- **Responsive design** - works on all devices
- **Smooth scrolling navigation**
- **Professional design** with refined editorial aesthetic
- **SEO optimized** with proper meta tags

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Open the project folder in Visual Studio Code

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
promoted-soccer-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Navbar.tsx          # Navigation bar component
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services section
│   ├── WhyUs.tsx           # Why choose us section
│   ├── Resources.tsx       # Free resources section
│   ├── About.tsx           # About section
│   ├── CTA.tsx             # Call-to-action section
│   ├── Footer.tsx          # Footer component
│   └── *.module.css        # Component-specific styles
├── package.json            # Dependencies and scripts
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary-green: #0d5c3d;
  --secondary-green: #1a7a50;
  --accent-gold: #d4a574;
  --dark-navy: #1a2332;
  --light-gray: #f8f9fa;
  --medium-gray: #e5e7eb;
  --text-dark: #2c3e50;
  --text-light: #6b7280;
}
```

### Content

- **Services**: Edit `components/Services.tsx`
- **About**: Edit `components/About.tsx`
- **Resources**: Edit `components/Resources.tsx`
- **Contact Email**: Update in `components/CTA.tsx` and `components/Footer.tsx`

### Fonts

The project uses Google Fonts:
- **Crimson Pro** (serif) for headings
- **Work Sans** (sans-serif) for body text

These are configured in `app/layout.tsx`.

## Building for Production

```bash
npm run build
npm start
```

This creates an optimized production build.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

You can deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Your own server

## Support

For questions or support, contact: contact@promotedsoccerconsultants.com

## License

© 2024 Promoted Soccer Consultants, LLC. All rights reserved.
