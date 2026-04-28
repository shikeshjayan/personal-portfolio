'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MapPin, Clock, MessageCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { fadeInUp, staggerContainer } from '../data/animations'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'blue',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shikeshjayan',
    href: personalInfo.linkedin,
    color: 'blue',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/shikeshjayan',
    href: personalInfo.github,
    color: 'slate',
  },
]

const colorMap = {
  blue: {
    bg: 'bg-primary-50 dark:bg-primary-900/20',
    icon: 'text-primary-600 dark:text-primary-400',
    hover: 'hover:bg-primary-100 dark:hover:bg-primary-900/40',
  },
  slate: {
    bg: 'bg-slate-50 dark:bg-slate-800',
    icon: 'text-slate-600 dark:text-slate-400',
    hover: 'hover:bg-slate-100 dark:hover:bg-slate-700',
  },
}

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider"
          >
            Contact
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {contactLinks.map((link, index) => {
            const colors = colorMap[link.color]
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col items-center gap-3 p-6 rounded-xl ${colors.bg} ${colors.hover} transition-all group`}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm ${colors.icon}`}
                >
                  <link.icon size={24} />
                </motion.div>
                <div className="text-center">
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {link.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-full">
                    {link.value}
                  </p>
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="text-xs text-primary-500"
                >
                  Click to open →
                </motion.span>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Send a Message
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Feel free to reach out for any inquiry
              </p>
            </div>
          </div>

          <form
            action={`mailto:${personalInfo.email}?subject=Portfolio Inquiry`}
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                whileFocus={{ scale: 1.01 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </motion.div>
              <motion.div
                whileFocus={{ scale: 1.01 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </motion.div>
            </div>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary-600/30"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>India</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Response time: Within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}