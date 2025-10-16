'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validators'
import { useState } from 'react'
import { useContactSettings } from '@/hooks/useContactSettings'
import { BentoGrid, BentoCard, BentoCardHeader } from '@/components/ui/BentoGrid'

const Contact = () => {
  const { contactSettings, loading: settingsLoading } = useContactSettings()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          message: contactSettings?.successMessage || result.message || 'Message envoyé avec succès !'
        })
        reset()
      } else {
        setSubmitMessage({
          type: 'error',
          message: contactSettings?.errorMessage || result.error || 'Une erreur est survenue'
        })
      }
    } catch {
      setSubmitMessage({
        type: 'error',
        message: contactSettings?.errorMessage || 'Erreur de connexion. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (settingsLoading) {
    return (
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-96">
            <div className="text-white text-xl">Chargement...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Intéressé par mon profil ? N&apos;hésitez pas à me contacter pour discuter de vos projets
          </p>
        </motion.div>

        <BentoGrid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* Contact Info Cards */}
          <BentoCard
            size="1x1"
            variant="glass"
            className="flex items-center gap-4 min-h-[120px]"
            delay={0}
          >
            <div className="p-3 rounded-xl bg-blue-500/10">
              <Mail className="text-blue-400" size={24} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-white font-semibold mb-1">Email</p>
              <a
                href="mailto:contact@adam-marzuk.fr"
                className="text-white/70 hover:text-white transition-colors text-sm truncate block"
              >
                contact@adam-marzuk.fr
              </a>
            </div>
          </BentoCard>

          <BentoCard
            size="1x1"
            variant="glass"
            className="flex items-center gap-4 min-h-[120px]"
            delay={0.05}
          >
            <div className="p-3 rounded-xl bg-purple-500/10">
              <MapPin className="text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Localisation</p>
              <p className="text-white/70 text-sm">France</p>
            </div>
          </BentoCard>

          {/* Social Links Card */}
          <BentoCard
            size="auto"
            variant="gradient"
            className="md:col-span-3 lg:col-span-2 flex flex-col justify-center min-h-[120px]"
            delay={0.1}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-semibold mb-1">Réseaux sociaux</h4>
                <p className="text-white/60 text-sm">Retrouvez-moi sur mes différentes plateformes</p>
              </div>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/AzmogEx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Github size={20} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/adam-marzuk-93804828a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </BentoCard>

          {/* Contact Form */}
          <BentoCard
            size="auto"
            variant="glass"
            className="md:col-span-3 lg:col-span-4 min-h-[500px]"
            delay={0.2}
          >
            <BentoCardHeader
              icon={<Send size={24} />}
              title="Envoyez-moi un message"
              description="Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais"
            />

            {/* Message de statut */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  submitMessage.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/30'
                    : 'bg-red-500/20 border border-red-500/30'
                }`}
              >
                {submitMessage.type === 'success' ? (
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                ) : (
                  <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                )}
                <p className={`text-sm ${
                  submitMessage.type === 'success' ? 'text-green-300' : 'text-red-300'
                }`}>
                  {submitMessage.message}
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Nom *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300 ${
                      errors.name
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/20 focus:border-blue-400'
                    }`}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300 ${
                      errors.email
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/20 focus:border-blue-400'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Sujet *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300 ${
                    errors.subject
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-white/20 focus:border-blue-400'
                  }`}
                  placeholder="Sujet de votre message"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none ${
                    errors.message
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-white/20 focus:border-blue-400'
                  }`}
                  placeholder="Votre message..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Envoyer le message</span>
                  </>
                )}
              </motion.button>
            </form>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  )
}

export default Contact
