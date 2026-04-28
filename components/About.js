'use client'

import { motion } from 'framer-motion'
import { User, Code, Lightbulb, TrendingUp, MapPin, Calendar, Award } from 'lucide-react'
import { aboutMe } from '../data/portfolio'
import { fadeInUp, staggerContainer } from '../data/animations'

const highlights = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Building end-to-end web applications with MERN stack',
  },
  {
    icon: TrendingUp,
    title: 'Real-time Features',
    description: 'Implementing live chat and dynamic updates',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Translating complex requirements into efficient code',
  },
  {
    icon: User,
    title: 'Attention to Detail',
    description: 'Creating scalable and maintainable solutions',
  },
]

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: 'MERN', label: 'Primary Stack' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
            Get to know me better
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A passionate developer with a unique background in BIM modeling and construction
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              {aboutMe}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid sm:grid-cols-2 gap-4 pt-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
                  >
                    <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3">
                {[
                  { icon: MapPin, label: 'Location', value: 'India' },
                  { icon: Calendar, label: 'Availability', value: 'Open to work' },
                  { icon: Award, label: 'Background', value: 'BIM + Development' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm text-slate-500 dark:text-slate-400">{item.label}:</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm text-center"
                >
                  <motion.span
                    animate={{ 
                      textShadow: ['0px 0px 0px rgba(59,130,246,0)', '0px 0px 10px rgba(59,130,246,0.5)', '0px 0px 0px rgba(59,130,246,0)'] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-3xl font-bold text-primary-600 dark:text-primary-400"
                  >
                    {stat.value}
                  </motion.span>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}