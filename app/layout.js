import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Shikesh Jayan | Full Stack MERN Developer',
  description: 'Full Stack MERN Developer building scalable web applications with real-time features, secure authentication systems, and modern user experiences.',
  keywords: ['Full Stack Developer', 'MERN Developer', 'React Developer', 'Node.js Developer', 'MongoDB Developer', 'JavaScript', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Shikesh Jayan' }],
  openGraph: {
    title: 'Shikesh Jayan | Full Stack MERN Developer',
    description: 'Full Stack MERN Developer building scalable web applications with real-time features, secure authentication systems, and modern user experiences.',
    type: 'website',
    locale: 'en_US',
    url: 'https://shikeshjayan.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shikesh Jayan | Full Stack MERN Developer',
    description: 'Full Stack MERN Developer building scalable web applications',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
