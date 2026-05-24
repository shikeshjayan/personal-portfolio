'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Github, Linkedin, Code2 } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { fadeInUp, staggerContainer, buttonHover } from '../data/animations'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='hero' className='min-h-screen flex items-center justify-center pt-16 overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            animate='visible'
          >
            <motion.p
              variants={fadeInUp}
              className='text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2'
            >
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-primary-500'></span>
              </span>
              Available for work
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight'
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className='text-xl sm:text-2xl font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-2'
            >
              <Code2 className='w-6 h-6' />
              {personalInfo.role}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className='text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed'
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className='flex flex-wrap gap-4'
            >
              <motion.button
                variants={buttonHover}
                initial='rest'
                whileHover='hover'
                whileTap='tap'
                onClick={() => scrollToSection('projects')}
                className='inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary-600/30 group'
              >
                View Projects
                <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
              </motion.button>

              <motion.button
                variants={buttonHover}
                initial='rest'
                whileHover='hover'
                whileTap='tap'
                onClick={() => scrollToSection('contact')}
                className='inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-lg transition-all'
              >
                Contact Me
                <Mail size={18} />
              </motion.button>

              <motion.a
                variants={buttonHover}
                initial='rest'
                whileHover='hover'
                whileTap='tap'
                href={personalInfo.resumePath}
                download
                className='inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-all'
              >
                <Download size={18} />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='flex items-center gap-4 pt-4'
            >
              <span className='text-sm text-slate-500 dark:text-slate-400'>Connect:</span>
              <div className='flex gap-3'>
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='p-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
                    aria-label={item.label}
                  >
                    <item.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='hidden lg:block relative'
            whileHover={{ scale: 1.05 }}
          >
            <div className='relative w-72 h-72 mx-auto'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-primary-600 via-violet-500 to-primary-600 animate-pulse' />
              <div className='absolute inset-[4px] rounded-full bg-white dark:bg-slate-900' />
              <Image
                src='/profile.png'
                alt={personalInfo.name}
                width={288}
                height={288}
                className='relative w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl'
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='absolute -bottom-2 -right-2 bg-primary-600 text-white p-3 rounded-full shadow-lg'
              >
                <Code2 size={24} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className='lg:hidden flex justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className='relative w-40 h-40'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-primary-600 via-violet-500 to-primary-600' />
              <div className='absolute inset-[3px] rounded-full bg-white dark:bg-slate-900' />
              <Image
                src='/profile.png'
                alt={personalInfo.name}
                width={160}
                height={160}
                className='relative w-full h-full rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-lg'
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2'
        >
          <motion.div className='w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full' />
        </motion.div>
      </motion.div>
    </section>
  )
}