# Quick Start Guide

## Step-by-Step Setup

1. **Open in Visual Studio Code**
   - Open VS Code
   - File → Open Folder
   - Select the `promoted-soccer-nextjs` folder

2. **Install Dependencies**
   - Open the integrated terminal in VS Code (Ctrl+` or View → Terminal)
   - Run: `npm install`
   - Wait for installation to complete (may take 2-3 minutes)

3. **Start Development Server**
   - In the terminal, run: `npm run dev`
   - Wait for "Ready" message
   - Open your browser to http://localhost:3000

4. **Start Editing**
   - Edit any `.tsx` file in the `components` folder
   - Save the file
   - See changes instantly in your browser (hot reload)

## Common Commands

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Check for code issues

## Editing Content

### Change Contact Email
Edit these files:
- `components/CTA.tsx` (line with mailto:)
- `components/Footer.tsx` (line with mailto:)

### Change Service Descriptions
Edit: `components/Services.tsx`

### Change About Section
Edit: `components/About.tsx`

### Change Colors
Edit: `app/globals.css` (look for :root section)

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- TypeScript Documentation: https://www.typescriptlang.org/docs

## Deployment

When ready to deploy:
1. Create a GitHub repository
2. Push your code: 
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```
3. Deploy on Vercel (free): https://vercel.com
   - Import your GitHub repository
   - Click Deploy
   - Done!
