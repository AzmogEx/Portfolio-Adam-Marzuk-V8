"use client";

import { motion } from "framer-motion";
import { useAbout } from "@/hooks/useAbout";
import { useSkills } from "@/hooks/useSkills";
import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiPython,
  SiOpenjdk,
  SiPhp,
  SiCplusplus,
  SiProxmox,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { MdViewKanban } from "react-icons/md";
import { TbBrandCSharp } from "react-icons/tb";
import { BentoGrid, BentoCard, BentoCardHeader } from '@/components/ui/BentoGrid';
import { Sparkles } from 'lucide-react';

const About = () => {
  const { aboutContent, loading, error } = useAbout()
  const { skills, loading: skillsLoading, error: skillsError } = useSkills('main')

  if (loading || skillsLoading) {
    return (
      <section id="about" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-96">
            <div className="text-white text-xl">Chargement...</div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !aboutContent) {
    console.error('About content error:', error)
  }

  if (skillsError) {
    console.error('Skills error:', skillsError)
  }

  const content = aboutContent || {
    sectionTitle: "À propos de moi",
    sectionSubtitle: "Découvrez mon parcours, mes compétences et ma passion pour l'informatique",
    parcourTitle: "Mon parcours",
    parcourText1: "Étudiant en Bachelor informatique au CESI Orléans je me spécialise dans le développement d'applications. Ma passion pour les technologies web et l'intelligence artificielle m'a conduit à explorer diverses technologies et frameworks modernes.",
    parcourText2: "J'ai acquis une expérience pratique grâce à des stages en entreprise et des projets personnels, me permettant de développer une approche complète du développement full-stack.",
    skillsTitle: "Compétences principales"
  }

  // Mapping des compétences vers leurs vraies icônes
  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      JavaScript: <SiJavascript className="text-yellow-400" />,
      TypeScript: <SiTypescript className="text-blue-400" />,
      React: <SiReact className="text-cyan-400" />,
      "Vue.js": <SiVuedotjs className="text-green-400" />,
      "Node.js": <SiNodedotjs className="text-green-500" />,
      Git: <SiGit className="text-orange-500" />,
      Docker: <SiDocker className="text-blue-500" />,
      MySQL: <SiMysql className="text-blue-600" />,
      PostgreSQL: <SiPostgresql className="text-blue-700" />,
      MongoDB: <SiMongodb className="text-green-600" />,
      Figma: <SiFigma className="text-purple-500" />,
      Python: <SiPython className="text-blue-400" />,
      Java: <SiOpenjdk className="text-red-500" />,
      PHP: <SiPhp className="text-purple-600" />,
      "C++": <SiCplusplus className="text-blue-600" />,
      "C#": <TbBrandCSharp className="text-blue-600" />,
      Proxmox: <SiProxmox className="text-blue-600" />,
      "Agile/Scrum": <DiScrum className="text-blue-400" />,
      Kanban: <MdViewKanban className="text-orange-400" />,
    };
    return (
      iconMap[skillName] || (
        <span className="text-2xl">
          {skills.find((s) => s.name === skillName)?.icon}
        </span>
      )
    );
  };

  // Fonction pour obtenir le badge de niveau
  const getLevelBadge = (level: "expert" | "advanced" | "intermediate" | "beginner") => {
    const badges = {
      expert: { text: "Expert", color: "bg-green-500/20 text-green-300 border-green-500/30" },
      advanced: { text: "Avancé", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      intermediate: { text: "Intermédiaire", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
      beginner: { text: "Débutant", color: "bg-gray-500/20 text-gray-300 border-gray-500/30" },
    };
    return badges[level];
  };

  // Filtrer les compétences principales
  const expertSkills = skills.filter(skill => skill.level === "expert");
  const advancedSkills = skills.filter(skill => skill.level === "advanced");
  const intermediateSkills = skills.filter(skill => skill.level === "intermediate").slice(0, 6);

  const displaySkills = [...expertSkills, ...advancedSkills, ...intermediateSkills].slice(0, 12);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.sectionTitle.includes('moi') ? (
              <>
                {content.sectionTitle.split(' moi')[0]} <span className="gradient-text">moi</span>
              </>
            ) : (
              content.sectionTitle
            )}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {content.sectionSubtitle}
          </p>
        </motion.div>

        <BentoGrid className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-12">
          {/* Parcours Card - Large */}
          <BentoCard
            size="auto"
            variant="gradient"
            className="md:col-span-3 lg:col-span-2 lg:row-span-2"
            delay={0}
          >
            <BentoCardHeader
              icon={<Sparkles size={24} />}
              title={content.parcourTitle}
            />
            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                {content.parcourText1}
              </p>
              <p className="text-white/80 leading-relaxed">
                {content.parcourText2}
              </p>
            </div>
          </BentoCard>

          {/* Top Skills Preview - 2 cards */}
          {displaySkills.slice(0, 2).map((skill, index) => {
            const levelBadge = getLevelBadge(skill.level);
            return (
              <BentoCard
                key={skill.name}
                size="1x1"
                variant="glass"
                className="flex flex-col justify-between min-h-[180px]"
                delay={0.1 + index * 0.05}
              >
                <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                  <div className="text-5xl">
                    {getSkillIcon(skill.name)}
                  </div>
                  <h4 className="text-white font-semibold text-center">{skill.name}</h4>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full border text-center ${levelBadge.color}`}>
                  {levelBadge.text}
                </span>
              </BentoCard>
            );
          })}

          {/* Additional Skills - smaller cards */}
          {displaySkills.slice(2, 6).map((skill, index) => {
            const levelBadge = getLevelBadge(skill.level);
            return (
              <BentoCard
                key={skill.name}
                size="1x1"
                variant="glass"
                className="flex flex-col justify-between min-h-[180px]"
                delay={0.2 + index * 0.05}
              >
                <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                  <div className="text-5xl">
                    {getSkillIcon(skill.name)}
                  </div>
                  <h4 className="text-white font-semibold text-center text-sm">{skill.name}</h4>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full border text-center ${levelBadge.color}`}>
                  {levelBadge.text}
                </span>
              </BentoCard>
            );
          })}
        </BentoGrid>

        {/* Additional Skills Grid */}
        {displaySkills.length > 6 && (
          <BentoGrid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {displaySkills.slice(6).map((skill, index) => {
              const levelBadge = getLevelBadge(skill.level);
              return (
                <BentoCard
                  key={skill.name}
                  size="1x1"
                  variant="glass"
                  className="flex flex-col justify-between min-h-[160px]"
                  delay={0.3 + index * 0.05}
                  hover={true}
                >
                  <div className="flex-1 flex flex-col items-center justify-center space-y-2">
                    <div className="text-4xl">
                      {getSkillIcon(skill.name)}
                    </div>
                    <h4 className="text-white font-semibold text-center text-sm">{skill.name}</h4>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border text-center ${levelBadge.color}`}>
                    {levelBadge.text}
                  </span>
                </BentoCard>
              );
            })}
          </BentoGrid>
        )}
      </div>
    </section>
  );
};

export default About;
