'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Tool, SoftSkill } from '@/types'
import { ApiService } from '@/lib/api'
import {
  Wrench, Heart, Code2, Users,
  Monitor, Globe, Database, Terminal,
  Palette, FileCode, Package, Zap,
  GitBranch, Cloud, Smartphone,
  Camera, MessageSquare, Users2,
  Target, Lightbulb, CheckCircle, Clock,
  TrendingUp, Award, Star, Puzzle
} from 'lucide-react'
import { BentoGrid, BentoCard, BentoCardHeader } from '@/components/ui/BentoGrid'

const Tools = () => {
  const [tools, setTools] = useState<Tool[]>([])
  const [softSkills, setSoftSkills] = useState<SoftSkill[]>([])
  const [loading, setLoading] = useState(true)

  // Fonction pour obtenir l'icône basée sur le nom de l'outil
  const getToolIcon = (toolName: string, fallbackIcon: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      // Développement
      'React': <Code2 size={32} className="text-blue-400" />,
      'Next.js': <Globe size={32} className="text-white" />,
      'Vue.js': <Code2 size={32} className="text-green-400" />,
      'Angular': <Code2 size={32} className="text-red-400" />,
      'TypeScript': <FileCode size={32} className="text-blue-500" />,
      'JavaScript': <FileCode size={32} className="text-yellow-400" />,
      'Node.js': <Terminal size={32} className="text-green-500" />,
      'Python': <Terminal size={32} className="text-blue-400" />,
      'Java': <Terminal size={32} className="text-orange-500" />,

      // Bases de données
      'MongoDB': <Database size={32} className="text-green-600" />,
      'PostgreSQL': <Database size={32} className="text-blue-600" />,
      'MySQL': <Database size={32} className="text-orange-600" />,
      'Redis': <Database size={32} className="text-red-600" />,

      // Outils de développement
      'Git': <GitBranch size={32} className="text-orange-500" />,
      'GitHub': <GitBranch size={32} className="text-gray-400" />,
      'Docker': <Package size={32} className="text-blue-500" />,
      'VS Code': <Monitor size={32} className="text-blue-400" />,
      'Figma': <Palette size={32} className="text-purple-500" />,
      'Postman': <Zap size={32} className="text-orange-500" />,

      // Cloud et DevOps
      'AWS': <Cloud size={32} className="text-orange-400" />,
      'Azure': <Cloud size={32} className="text-blue-400" />,
      'Vercel': <Cloud size={32} className="text-white" />,
      'Netlify': <Cloud size={32} className="text-teal-400" />,

      // Mobile
      'React Native': <Smartphone size={32} className="text-blue-400" />,
      'Flutter': <Smartphone size={32} className="text-blue-600" />,

      // Autres
      'Photoshop': <Camera size={32} className="text-blue-600" />,
      'Illustrator': <Palette size={32} className="text-orange-600" />,
      'Premiere Pro': <Camera size={32} className="text-purple-600" />,
    }

    // Recherche par nom exact ou par mots-clés
    const normalizedName = toolName.toLowerCase()
    for (const [key, icon] of Object.entries(iconMap)) {
      if (normalizedName.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedName)) {
        return icon
      }
    }

    // Fallback vers l'emoji original si aucune correspondance
    return <span className="text-3xl">{fallbackIcon}</span>
  }

  // Fonction pour obtenir l'icône des soft skills
  const getSoftSkillIcon = (skillName: string, fallbackIcon: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Communication': <MessageSquare size={24} className="text-blue-400" />,
      'Travail d\'équipe': <Users2 size={24} className="text-green-400" />,
      'Leadership': <Award size={24} className="text-purple-400" />,
      'Adaptabilité': <TrendingUp size={24} className="text-orange-400" />,
      'Gestion du temps': <Clock size={24} className="text-red-400" />,
      'Résolution de problèmes': <Puzzle size={24} className="text-yellow-400" />,
      'Créativité': <Lightbulb size={24} className="text-pink-400" />,
      'Organisation': <CheckCircle size={24} className="text-teal-400" />,
      'Motivation': <Target size={24} className="text-indigo-400" />,
      'Excellence': <Star size={24} className="text-yellow-500" />,
    }

    const normalizedName = skillName.toLowerCase()
    for (const [key, icon] of Object.entries(iconMap)) {
      if (normalizedName.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedName)) {
        return icon
      }
    }

    return <span className="text-2xl">{fallbackIcon}</span>
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [toolsResult, skillsResult] = await Promise.all([
          ApiService.getTools(),
          ApiService.getSoftSkills()
        ])

        if (toolsResult.success && toolsResult.data) {
          setTools(toolsResult.data.tools.sort((a, b) => a.order - b.order))
        }

        if (skillsResult.success && skillsResult.data) {
          setSoftSkills(skillsResult.data.softSkills.sort((a, b) => a.order - b.order))
        }
      } catch (error) {
        console.error('Erreur lors du chargement des outils et compétences:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])


  return (
    <section id="tools" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Outils & <span className="gradient-text">Méthodes</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Découvrez mes outils de travail quotidiens et mes compétences relationnelles
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-white text-xl">Chargement des outils et compétences...</div>
          </div>
        ) : (
          <>
            <BentoGrid className="grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-12">
              {/* Header Card - Outils */}
              <BentoCard
                size="auto"
                variant="gradient"
                className="col-span-2 md:col-span-4 lg:col-span-6"
                delay={0}
              >
                <BentoCardHeader
                  icon={<Wrench size={24} />}
                  title="Outils de travail"
                  description="Technologies et outils que j'utilise quotidiennement"
                />
              </BentoCard>

              {/* Outils - Grid */}
              {tools.map((tool, index) => (
                <BentoCard
                  key={tool.name}
                  size="1x1"
                  variant="glass"
                  className="flex flex-col items-center justify-center min-h-[140px] text-center"
                  delay={0.05 + index * 0.03}
                >
                  <div className="mb-2">
                    {getToolIcon(tool.name, tool.icon)}
                  </div>
                  <h4 className="text-white font-medium text-sm">
                    {tool.name}
                  </h4>
                </BentoCard>
              ))}
            </BentoGrid>

            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {/* Header Card - Soft Skills */}
              <BentoCard
                size="auto"
                variant="gradient"
                className="md:col-span-2 lg:col-span-3"
                delay={0}
              >
                <BentoCardHeader
                  icon={<Heart size={24} />}
                  title="Soft Skills"
                  description="Compétences relationnelles et qualités personnelles"
                />
              </BentoCard>

              {/* Soft Skills - List */}
              {softSkills.map((skill, index) => (
                <BentoCard
                  key={skill.name}
                  size="1x1"
                  variant="glass"
                  className="flex items-center gap-4 min-h-[100px]"
                  delay={0.1 + index * 0.05}
                >
                  <div className="flex-shrink-0">
                    {getSoftSkillIcon(skill.name, skill.icon)}
                  </div>
                  <h4 className="text-white font-medium flex-1">
                    {skill.name}
                  </h4>
                </BentoCard>
              ))}
            </BentoGrid>

            {/* Section informative - Bento Cards */}
            <BentoGrid className="grid-cols-1 md:grid-cols-2">
              <BentoCard
                size="1x1"
                variant="gradient"
                className="flex flex-col items-center justify-center text-center min-h-[200px]"
                delay={0.2}
              >
                <div className="mb-4">
                  <div className="p-4 bg-white/10 rounded-2xl inline-block">
                    <Code2 className="text-white" size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Workflow</h4>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                  J&apos;utilise des outils modernes pour optimiser ma productivité et collaborer efficacement.
                </p>
              </BentoCard>

              <BentoCard
                size="1x1"
                variant="gradient"
                className="flex flex-col items-center justify-center text-center min-h-[200px]"
                delay={0.3}
              >
                <div className="mb-4">
                  <div className="p-4 bg-white/10 rounded-2xl inline-block">
                    <Users className="text-white" size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Esprit d&apos;équipe</h4>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                  Ma capacité d&apos;adaptation et ma communication me permettent de m&apos;intégrer facilement.
                </p>
              </BentoCard>
            </BentoGrid>
          </>
        )}
      </div>
    </section>
  )
}

export default Tools
