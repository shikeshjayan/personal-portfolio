export const personalInfo = {
  name: "Shikesh Jayan",
  role: "Full Stack MERN Developer",
  tagline:
    "Full Stack MERN Developer building scalable web applications with real-time features, secure authentication systems, and modern user experiences.",
  email: "shikeshjayan345@gmail.com",
  linkedin: "https://linkedin.com/in/shikeshjayan",
  github: "https://github.com/shikeshjayan",
  resumePath: "/resume.pdf",
};

export const aboutMe = `I am a Full Stack Web Developer with hands-on experience building responsive, production-ready applications using the MERN stack. I have developed real-time platforms, e-commerce systems, and API-driven applications. With a background in BIM modeling and construction, I bring strong problem-solving skills, attention to detail, and the ability to translate complex requirements into efficient, maintainable code.`;

export const skills = {
  frontend: [
    { name: "HTML5", icon: "🔶" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript (ES6+)", icon: "📜" },
    { name: "TypeScript", icon: "💠" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Redux Toolkit", icon: "🔄" },
    { name: "Context API", icon: "📊" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "SCSS", icon: "📗" },
    { name: "Framer Motion", icon: "🎬" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "REST API Design", icon: "🔌" },
    { name: "JWT Authentication", icon: "🔐" },
    { name: "bcryptjs", icon: "🔒" },
  ],
  database: [
    { name: "MongoDB", icon: "🍃" },
    { name: "Mongoose", icon: "🐲" },
  ],
  tools: [
    { name: "Socket.io", icon: "💬" },
    { name: "Stripe API", icon: "💳" },
    { name: "Axios", icon: "⬆️" },
    { name: "Zod", icon: "✅" },
    { name: "Nodemailer", icon: "📧" },
  ],
  other: [
    { name: "Git", icon: "📊" },
    { name: "GitHub", icon: "🐙" },
    { name: "Performance Optimization", icon: "⚡" },
  ],
};

export const projects = [
  {
    id: 1,
    name: "MovieVerse",
    subtitle: "AI Movie Recommendation Platform",
    description:
      "A full-stack movie discovery platform with AI-powered recommendations, user reviews, and personalized watchlists.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "AI-powered personalized movie recommendations",
      "Natural language smart search using Gemini AI",
      "User authentication with JWT and protected routes",
      "Watchlist, watch later, and watch history tracking",
      "Rate and review movies with community feedback",
      "Responsive UI with dark mode support",
    ],
    liveUrl: "https://movieverse-ai.vercel.app/",
    githubUrl: "https://github.com/shikeshjayan",
    category: "Web App",
  },
  {
    id: 2,
    name: "Cartiqe",
    subtitle:
      "Full-stack e-commerce application with secure payments and optimized user experience",
    description:
      "A production-ready e-commerce platform with complete cart-to-checkout flow and payment integration.",
    techStack: ["MERN", "Redux Toolkit", "Stripe API"],
    features: [
      "Product browsing with category-based filtering",
      "Add to cart and seamless checkout experience",
      "Secure payments integration using Stripe API",
      "State management with Redux Toolkit",
      "Responsive UI optimized for all devices",
    ],
    liveUrl: "https://cartiqe.vercel.app/",
    githubUrl: "https://github.com/shikeshjayan",
    category: "E-Commerce",
  },
  {
    id: 3,
    name: 'LensMan Studio',
    subtitle: 'Professional Photography Website',
    description: 'A sleek photography portfolio website for LensMan Studio with filterable gallery, lightbox viewer, and WhatsApp booking integration.',
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Filterable gallery with 4 categories (Passport, Family, LinkedIn, Cabin Crew)',
      'Lightbox image viewer with keyboard navigation',
      'WhatsApp booking integration with pre-filled messages',
      'Mobile-responsive with hamburger menu and scroll animations',
    ],
    liveUrl: 'https://lensman-studio.vercel.app/',
    githubUrl: 'https://github.com/shikeshjayan/lensman-studio',
    category: 'Portfolio',
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
