# Shikesh Jayan - Portfolio

A modern, professional portfolio website for a Full Stack MERN Developer.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Features

- Fully responsive (mobile + desktop)
- Dark/Light mode toggle
- Project filtering by category
- Smooth animations
- SEO optimized
- Sticky navbar with active section highlight

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"

Your site will be live at `https://your-username.vercel.app`

## Customization

### Add Resume

Place your `resume.pdf` file in the `public/` folder, or update the path in `data/portfolio.js`:

```javascript
resumePath: '/resume.pdf', // or your custom path
```

### Add Project Screenshots

In `components/Projects.js`, replace the placeholder:

```jsx
// Current placeholder
<div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200...">
  <span className="text-4xl">🖥️</span>
</div>

// Replace with your image
<div className="aspect-video">
  <Image src="/project-screenshot.jpg" alt="Project Name" fill />
</div>
```

### Update Links & Content

Edit `data/portfolio.js` with your information:

- Personal details (name, role, tagline)
- Skills and technologies
- Projects with live URLs and GitHub links
- Contact information

## Project Structure

```
personal-portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.js      # Root layout with SEO
│   └── page.js       # Main page
├── components/
│   ├── Navbar.js    # Sticky navigation
│   ├── Hero.js     # Hero section
│   ├── About.js    # About section
│   ├── Skills.js  # Skills section
│   ├── Projects.js # Projects with filtering
│   ├── Contact.js # Contact form & links
│   └── Footer.js  # Footer
├── data/
│   └── portfolio.js # All content data
├── public/         # Static assets
├── package.json
├── tailwind.config.js
└── next.config.js
```

## License

MIT