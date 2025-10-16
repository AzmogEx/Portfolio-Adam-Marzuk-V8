'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Rocket } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Project } from '@/types'
import { ApiService } from '@/lib/api'
import { ERROR_MESSAGES, LOADING_MESSAGES } from '@/lib/constants'
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid'

const Projects = () => {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [_refreshing, _setRefreshing] = useState(false)
  const [error, setError] = useState('')

  const fetchProjects = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        _setRefreshing(true)
        setError('')
      }

      const result = await ApiService.getProjects()

      if (result.success && result.data) {
        setProjects(result.data.projects)
      } else {
        setError(result.error || ERROR_MESSAGES.FETCH_PROJECTS_FAILED)
      }
    } catch (_err) {
      setError(ERROR_MESSAGES.UNEXPECTED_ERROR)
    } finally {
      setLoading(false)
      _setRefreshing(false)
    }
  }, [])

  const _handleRefresh = useCallback(async () => {
    router.refresh()
    await fetchProjects(true)
  }, [fetchProjects, router])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  // Auto-refresh when returning from admin
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchProjects(true)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [fetchProjects])

  if (loading) {
    return (
      <section id="projects" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-white/70 text-lg">{LOADING_MESSAGES.LOADING_PROJECTS}</div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-red-400 text-lg">{error}</div>
          </div>
        </div>
      </section>
    )
  }

  // Séparer les projets featured et non-featured
  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Mes <span className="gradient-text">Projets</span>
            </h2>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations et projets personnels
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <div className="text-center text-white/70">
            No projects available at the moment.
          </div>
        ) : (
          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured Projects - Larger cards */}
            {featuredProjects.map((project, index) => (
              <BentoCard
                key={project.id}
                size="2x1"
                variant="gradient"
                className="md:col-span-2 lg:col-span-2 min-h-[400px] flex flex-col"
                delay={index * 0.1}
              >
                <div className="flex flex-col h-full">
                  {/* Badge Featured */}
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30">
                      Projet Vedette
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl mb-6 overflow-hidden relative group/img">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Rocket className="text-blue-400" size={64} />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold gradient-text mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-white/90 text-sm rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors duration-300 text-white/80 hover:text-white border border-white/10"
                        >
                          <Github size={18} />
                          <span>Code</span>
                        </motion.a>
                      )}

                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl transition-all duration-300 text-white shadow-lg"
                        >
                          <ExternalLink size={18} />
                          <span>Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}

            {/* Regular Projects - Standard cards */}
            {regularProjects.map((project, index) => (
              <BentoCard
                key={project.id}
                size="1x1"
                variant="glass"
                className="min-h-[380px] flex flex-col"
                delay={featuredProjects.length * 0.1 + index * 0.05}
              >
                <div className="flex flex-col h-full">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl mb-4 overflow-hidden relative group/img">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Rocket className="text-blue-400" size={40} />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 text-white/80 text-xs rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-full border border-white/10">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300 text-white/70 hover:text-white text-sm border border-white/10"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </motion.a>
                      )}

                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-500 hover:to-purple-600 rounded-lg transition-all duration-300 text-white text-sm"
                        >
                          <ExternalLink size={14} />
                          <span>Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        )}
      </div>
    </section>
  )
}

export default Projects
