'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Experience as ExperienceType } from '@/types'
import { ApiService } from '@/lib/api'
import { ERROR_MESSAGES, LOADING_MESSAGES } from '@/lib/constants'
import { BentoGrid, BentoCard, BentoCardHeader } from '@/components/ui/BentoGrid'

const Experience = () => {
  const router = useRouter()
  const [experiences, setExperiences] = useState<ExperienceType[]>([])
  const [loading, setLoading] = useState(true)
  const [_refreshing, _setRefreshing] = useState(false)
  const [error, setError] = useState('')

  const fetchExperiences = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        _setRefreshing(true)
        setError('')
      }

      const result = await ApiService.getExperiences()

      if (result.success && result.data) {
        setExperiences(result.data.experiences)
      } else {
        setError(result.error || ERROR_MESSAGES.FETCH_EXPERIENCES_FAILED)
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
    await fetchExperiences(true)
  }, [fetchExperiences, router])

  useEffect(() => {
    fetchExperiences()
  }, [fetchExperiences])

  // Auto-refresh when returning from admin
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchExperiences(true)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [fetchExperiences])

  // Separate work and education experiences
  const workExperiences = experiences.filter(exp => exp.type === 'work')
  const educationExperiences = experiences.filter(exp => exp.type === 'education')

  if (loading) {
    return (
      <section id="experiences" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-white/70 text-lg">{LOADING_MESSAGES.LOADING_EXPERIENCES}</div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="experiences" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-red-400 text-lg">{error}</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="experiences" className="section-padding relative overflow-hidden">
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
              Mon <span className="gradient-text">Parcours</span>
            </h2>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Découvrez mes expériences professionnelles et ma formation
          </p>
        </motion.div>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-6">
          {/* Header - Expériences professionnelles */}
          <BentoCard
            size="auto"
            variant="gradient"
            className="md:col-span-2"
            delay={0}
          >
            <BentoCardHeader
              icon={<Building size={24} />}
              title="Expériences professionnelles"
              description="Mon parcours en entreprise"
            />
          </BentoCard>

          {/* Work Experiences */}
          {workExperiences.length === 0 ? (
            <BentoCard
              size="auto"
              variant="glass"
              className="md:col-span-2"
              delay={0.1}
            >
              <div className="text-center text-white/70">
                Aucune expérience disponible pour le moment.
              </div>
            </BentoCard>
          ) : (
            workExperiences.map((exp, index) => (
              <BentoCard
                key={exp.id}
                size="auto"
                variant="glass"
                className="flex flex-col min-h-[280px]"
                delay={0.1 + index * 0.05}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
                      <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar size={14} className="mr-2 text-blue-400" />
                      <span>
                        {new Date(exp.startDate).toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit' })} - {' '}
                        {exp.endDate ? new Date(exp.endDate).toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit' }) : 'Présent'}
                      </span>
                    </div>
                    <div className="flex items-center text-white/60 text-sm">
                      <MapPin size={14} className="mr-2 text-purple-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span className="flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </BentoCard>
            ))
          )}

          {/* Header - Formation */}
          <BentoCard
            size="auto"
            variant="gradient"
            className="md:col-span-2"
            delay={0.2 + workExperiences.length * 0.05}
          >
            <BentoCardHeader
              icon={<GraduationCap size={24} />}
              title="Formation"
              description="Mon parcours académique"
            />
          </BentoCard>

          {/* Education Experiences */}
          {educationExperiences.length === 0 ? (
            <BentoCard
              size="auto"
              variant="glass"
              className="md:col-span-2"
              delay={0.3 + workExperiences.length * 0.05}
            >
              <div className="text-center text-white/70">
                Aucune formation disponible pour le moment.
              </div>
            </BentoCard>
          ) : (
            educationExperiences.map((edu, index) => (
              <BentoCard
                key={edu.id}
                size="auto"
                variant="glass"
                className="flex flex-col min-h-[220px]"
                delay={0.3 + workExperiences.length * 0.05 + index * 0.05}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{edu.title}</h4>
                      <p className="text-purple-400 font-medium text-sm">{edu.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar size={14} className="mr-2 text-purple-400" />
                      <span>
                        {new Date(edu.startDate).toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit' })} - {' '}
                        {edu.endDate ? new Date(edu.endDate).toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit' }) : 'Présent'}
                      </span>
                    </div>
                    <div className="flex items-center text-white/60 text-sm">
                      <MapPin size={14} className="mr-2 text-blue-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {edu.description && edu.description.length > 0 && (
                    <ul className="space-y-2">
                      {edu.description.map((desc, i) => (
                        <li key={i} className="text-white/80 text-sm leading-relaxed flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span className="flex-1">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {edu.technologies && edu.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </BentoCard>
            ))
          )}
        </BentoGrid>
      </div>
    </section>
  )
}

export default Experience
