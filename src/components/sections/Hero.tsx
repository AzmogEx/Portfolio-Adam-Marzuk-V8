'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin, Github, Linkedin, Download } from 'lucide-react'
import Image from 'next/image'
import { useHero } from '@/hooks/useHero'
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid'

const Hero = () => {
  const { heroContent, loading, error } = useHero()

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (loading) {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-24 relative overflow-hidden">
        <div className="text-white text-xl">Chargement...</div>
      </section>
    )
  }

  if (error || !heroContent) {
    console.error('Hero content error:', error)
  }

  const content = heroContent || {
    greeting: "Bonjour, je suis",
    name: "Adam Marzuk",
    title: "Développeur Full-Stack",
    description: "Étudiant en Bachelor Informatique, spécialisé dans le développement d'applications. Passionné par les technologies web modernes et l'intelligence artificielle.",
    location: "France",
    email: "contact@adam-marzuk.fr",
    profileImage: "/assets/images/profile.png",
    ctaButton1: "Découvrir mon profil",
    ctaButton2: "Me contacter",
    scrollText: "Scroll"
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <BentoGrid className="grid-cols-1 md:grid-cols-4 md:grid-rows-4 auto-rows-fr">
          {/* Main Presentation Card - 2x2 */}
          <BentoCard
            size="2x2"
            variant="gradient"
            className="md:col-span-2 md:row-span-2 flex flex-col justify-center min-h-[400px]"
            delay={0}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <p className="text-base md:text-lg text-white/70 font-medium">{content.greeting}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="gradient-text">{content.name}</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90">
                  {content.title}
                </h2>
              </div>

              <p className="text-base md:text-lg text-white/60 leading-relaxed">
                {content.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToAbout}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {content.ctaButton1}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-center"
                >
                  {content.ctaButton2}
                </motion.a>
              </div>
            </motion.div>
          </BentoCard>

          {/* Profile Image Card - 1x2 */}
          <BentoCard
            size="1x2"
            variant="glass"
            className="md:col-span-2 md:row-span-2 flex items-center justify-center min-h-[300px]"
            delay={0.1}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-3xl border-2 border-white/10 flex items-center justify-center overflow-hidden">
                  <Image
                    src={content.profileImage || "/assets/images/profile.png"}
                    alt={content.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-2xl border-2 border-blue-400/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-2xl border-2 border-purple-400/30"
                />
              </div>
            </motion.div>
          </BentoCard>

          {/* Location Card - 1x1 */}
          <BentoCard
            size="1x1"
            variant="glass"
            className="md:col-span-1 md:row-span-1 flex flex-col justify-center min-h-[150px]"
            delay={0.2}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-xs text-white/50 mb-1">Localisation</p>
                <p className="text-white font-semibold">{content.location}</p>
              </div>
            </div>
          </BentoCard>

          {/* Email Card - 1x1 */}
          <BentoCard
            size="1x1"
            variant="glass"
            className="md:col-span-1 md:row-span-1 flex flex-col justify-center min-h-[150px]"
            delay={0.3}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Mail className="text-purple-400" size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/50 mb-1">Email</p>
                <p className="text-white font-semibold text-sm truncate">{content.email}</p>
              </div>
            </div>
          </BentoCard>

          {/* Social Links Card - 2x1 */}
          <BentoCard
            size="2x1"
            variant="glass"
            className="md:col-span-2 md:row-span-1 flex flex-col justify-center min-h-[150px]"
            delay={0.4}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-white/50 mb-2">Liens sociaux</p>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <Github className="text-white" size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <Linkedin className="text-white" size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="/cv.pdf"
                    download
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                  >
                    <Download className="text-white" size={20} />
                    <span className="text-white text-sm font-medium hidden sm:inline">CV</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </BentoCard>
        </BentoGrid>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors duration-300"
          >
            <span className="text-sm mb-2">{content.scrollText}</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
