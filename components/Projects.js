'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, Zap, Shield, Eye } from 'lucide-react'
import { projects } from '../data/portfolio'
import { fadeInUp, staggerContainerFast } from '../data/animations'

const filterOptions = ['All', 'Web App', 'E-Commerce', 'Portfolio']

const categoryIcons = {
  'Web App': Layers,
  'E-Commerce': Zap,
  'Portfolio': Eye,
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedProject, setExpandedProject] = useState(null)

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my development work - from concept to deployment
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filterOptions.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = categoryIcons[project.category] || Layers
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`/${project.id === 1 ? 'movieverse' : project.id === 2 ? 'Cartiqe' : 'lensman'}.png`}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary-600/80 flex items-center justify-center gap-3"
                    >
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white text-primary-600 rounded-full"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white text-slate-800 rounded-full"
                      >
                        <Github size={20} />
                      </motion.a>
                    </motion.div>
                    <div className="absolute top-3 right-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-lg"
                      >
                        <CategoryIcon size={18} className="text-primary-600 dark:text-primary-400" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400">
                          {project.subtitle}
                        </p>
                      </div>
                       <motion.span
                         whileHover={{ scale: 1.1 }}
                         className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded whitespace-nowrap"
                      >
                        {project.category}
                      </motion.span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <motion.div
                      variants={staggerContainerFast}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-wrap gap-1.5 mb-4"
                    >
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <motion.span
                          key={tech}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 py-0.5 text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </motion.div>

                    <motion.button
                      onClick={() => setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {expandedProject === project.id ? (
                        <>
                          Show Less <ChevronUp size={16} />
                        </>
                      ) : (
                        <>
                          View Details <ChevronDown size={16} />
                        </>
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700"
                        >
                          <p className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <Shield size={14} className="text-primary-500" />
                            Key Features:
                          </p>
                          <ul className="space-y-1 mb-4">
                            {project.features.map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                              >
                                <span className="mt-0.5 text-primary-500">•</span>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>

                          <div className="flex gap-3">
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                            >
                              <ExternalLink size={16} />
                              Live
                            </motion.a>
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium rounded-lg transition-colors"
                            >
                              <Github size={16} />
                              Code
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-500 dark:text-slate-400"
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </section>
  )
}