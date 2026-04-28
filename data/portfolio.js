export const personalInfo = {
  name: 'Shikesh Jayan',
  role: 'Full Stack MERN Developer',
  tagline: 'Full Stack MERN Developer building scalable web applications with real-time features, secure authentication systems, and modern user experiences.',
  email: 'shikeshjayan345@gmail.com',
  linkedin: 'https://linkedin.com/in/shikeshjayan',
  github: 'https://github.com/shikeshjayan',
  resumePath: '/resume.pdf',
}

export const aboutMe = `I am a Full Stack Web Developer with hands-on experience building responsive, production-ready applications using the MERN stack. I have developed real-time platforms, e-commerce systems, and API-driven applications. With a background in BIM modeling and construction, I bring strong problem-solving skills, attention to detail, and the ability to translate complex requirements into efficient, maintainable code.`

export const skills = {
  frontend: [
    { name: 'HTML5', icon: '🔶' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript (ES6+)', icon: '📜' },
    { name: 'TypeScript', icon: '💠' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Redux Toolkit', icon: '🔄' },
    { name: 'Context API', icon: '📊' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'SCSS', icon: '📗' },
    { name: 'Framer Motion', icon: '🎬' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'REST API Design', icon: '🔌' },
    { name: 'JWT Authentication', icon: '🔐' },
    { name: 'bcryptjs', icon: '🔒' },
  ],
  database: [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Mongoose', icon: '🐲' },
  ],
  tools: [
    { name: 'Socket.io', icon: '💬' },
    { name: 'Stripe API', icon: '💳' },
    { name: 'Axios', icon: '⬆️' },
    { name: 'Zod', icon: '✅' },
    { name: 'Nodemailer', icon: '📧' },
  ],
  other: [
    { name: 'Git', icon: '📊' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Performance Optimization', icon: '⚡' },
  ],
}

export const projects = [
  {
    id: 1,
    name: 'MovieVerse',
    subtitle: 'Developer Social Platform',
    description: 'A full-featured social networking platform for developers with real-time communication and secure authentication.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS'],
    features: [
      'Real-time chat using Socket.io with live online status',
      'JWT-based authentication and protected routes',
      'User profiles, follow/unfollow system, activity feed',
      'Fully responsive UI with dark mode',
    ],
    liveUrl: 'https://movieverse-ai.vercel.app/',
    githubUrl: 'https://github.com/shikeshjayan',
    category: 'Social Platform',
  },
  {
    id: 2,
    name: 'Cartiqe',
    subtitle: 'E-Commerce Web Application',
    description: 'A production-ready e-commerce platform with complete cart-to-checkout flow and payment integration.',
    techStack: ['MERN', 'Redux Toolkit', 'Stripe API', 'Next.js'],
    features: [
      'Secure Stripe payment integration',
      'Product listing with filtering and search',
      'Admin dashboard for product & order management',
      'Global state management using Redux Toolkit',
    ],
    liveUrl: 'https://cartiqe.vercel.app/',
    githubUrl: 'https://github.com/shikeshjayan',
    category: 'E-Commerce',
  },
  {
    id: 3,
    name: 'Modern Weather App',
    subtitle: 'Real-Time Weather Dashboard',
    description: 'A responsive weather app displaying real-time data and 5-day forecast.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'OpenWeather API'],
    features: [
      'Fetches live weather data using API',
      'Dynamic UI updates based on weather conditions',
      'Mobile-first responsive design',
      'Async API handling with modern JavaScript',
    ],
    liveUrl: 'https://shikeshjayan.github.io/Modern-Weather-App-Real-Time-Weather-5-Day-Forecast/',
    githubUrl: 'https://github.com/shikeshjayan',
    category: 'Utility',
  },
]

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]