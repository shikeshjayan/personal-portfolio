'use client'

import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { fadeInUp, staggerContainer } from '../data/animations'

const skillCategories = [
  { title: 'Frontend', skills: skills.frontend, color: 'blue', icon: '⚛️' },
  { title: 'Backend', skills: skills.backend, color: 'green', icon: '🖥️' },
  { title: 'Database', skills: skills.database, color: 'orange', icon: '🗄️' },
  { title: 'Tools & Libraries', skills: skills.tools, color: 'purple', icon: '🛠️' },
  { title: 'Other', skills: skills.other, color: 'slate', icon: '📦' },
]

const colorMap = {
  blue: {
    bg: 'bg-primary-100 dark:bg-primary-900/30',
    text: 'text-primary-600 dark:text-primary-400',
    border: 'border-primary-200 dark:border-primary-800',
    glow: 'shadow-primary-500/20',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    glow: 'shadow-green-500/20',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
    glow: 'shadow-orange-500/20',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
    glow: 'shadow-purple-500/20',
  },
  slate: {
    bg: 'bg-slate-100 dark:bg-slate-800',
    text: 'text-slate-600 dark:text-slate-400',
    border: 'border-slate-200 dark:border-slate-700',
    glow: 'shadow-slate-500/20',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
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
            Skills
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
            Technologies I Work With
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {skillCategories.map((category, catIndex) => {
            const colors = colorMap[category.color]
            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <motion.div 
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.02 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        transition: { type: 'spring', stiffness: 400 }
                      }}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium ${colors.bg} ${colors.text} cursor-default hover:shadow-md ${colors.glow}`}
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className="mt-12 p-8 bg-gradient-to-r from-primary-600 to-violet-600 rounded-2xl relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
          <p className="text-white text-center font-medium text-lg relative z-10">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </motion.div>
      </div>
    </section>
  )
}