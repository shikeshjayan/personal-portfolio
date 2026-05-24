'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Send, MapPin, Clock, MessageCircle, CheckCircle, Phone } from 'lucide-react'
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
    icon: Phone,
    label: 'WhatsApp',
    value: '+91 88485 38151',
    href: 'https://wa.me/918848538151',
    color: 'blue',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shikeshjayan',
    href: personalInfo.linkedin,
    color: 'blue',
  },
]

const colorMap = {
  blue: {
    bg: 'bg-primary-50 dark:bg-primary-900/20',
    icon: 'text-primary-600 dark:text-primary-400',
    hover: 'hover:bg-primary-100 dark:hover:bg-primary-900/40',
  },
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    const message = `*Portfolio Inquiry*%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Subject:* ${data.subject}%0A*Message:* ${data.message}`

    window.open(`https://wa.me/918848538151?text=${message}`, '_blank')
    e.target.reset()
    setFormStatus('success')
  }
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

          <form onSubmit={handleSubmit} className="space-y-4">
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
              Send via WhatsApp
            </motion.button>
          </form>

          {formStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
            >
              <CheckCircle size={20} className="text-green-600 dark:text-green-400 flex-shrink-0" />
              <p className="text-sm text-green-700 dark:text-green-300">Message sent successfully! I&apos;ll get back to you soon.</p>
            </motion.div>
          )}
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