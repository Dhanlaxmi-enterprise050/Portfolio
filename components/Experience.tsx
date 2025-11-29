'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    id: 1,
    title: 'Frontend Developer (Self-Taught)',
    company: 'Independent Learning',
    period: '2024 – Present',
    description: 'Building modern, responsive websites using React, Next.js, Tailwind, and Framer Motion. Focused on clean design, fast performance, and smooth UI/UX.',
    side: 'left',
  },
  {
    id: 2,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 – Present',
    description: 'Creating custom websites for students, creators, and local businesses. Handling full workflow — planning, designing, building, deploying, and delivering fast premium results.',
    side: 'right',
  },
  {
    id: 3,
    title: 'Founder — Taplinker',
    company: 'SaaS Product',
    period: '2024 – Present',
    description: 'Developing a premium bio-link generator for influencers and small businesses. Designing templates, automating workflows, and building a scalable product ecosystem.',
    side: 'left',
  },
  {
    id: 4,
    title: 'Personal Projects & Creations',
    company: 'Creative Experiments',
    period: '2025 – Present',
    description: 'Experimenting, building, and learning by shipping projects, including: Portfolio & landing page generators, a custom self-discipline app inspired by Hanuman bhakti, smooth animated portfolio templates, DIY RamSitaPod audio device, and large-scale Minecraft builds (Ayodhya Nagri challenge). Developed strong problem-solving skills, creativity, and UI/UX understanding.',
    side: 'right',
  },
]

const achievements = [
  {
    id: 1,
    title: 'Selected for School U-14 Football Trials',
    period: '2025',
    side: 'left',
  },
  {
    id: 2,
    title: 'Built multiple client websites before turning 14',
    period: '2024',
    side: 'right',
  },
  {
    id: 3,
    title: 'Creating a SaaS product using AI tools like Cursor + ChatGPT',
    period: '2024 – Present',
    side: 'left',
  },
  {
    id: 4,
    title: 'Rebuilt Ayodhya Nagri in Minecraft Survival Mode',
    period: 'Long-term Project',
    description: 'Large-scale creative build as a long-term project',
    side: 'right',
  },
  {
    id: 5,
    title: 'Consistently learning & improving',
    period: 'Ongoing',
    description: 'Daily coding, design, and building challenges',
    side: 'left',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = (side: 'left' | 'right') => ({
    hidden: { opacity: 0, x: side === 'left' ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  })

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          Experience & Achievements
        </motion.h2>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-blue via-accent-blue-light to-transparent opacity-30" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants(exp.side)}
                className={`relative flex items-center ${
                  exp.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-blue rounded-full border-4 border-black z-10 shadow-lg shadow-accent-blue/50" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-[45%] ${
                    exp.side === 'left' ? 'pr-0 md:pr-8' : 'pl-0 md:pl-8'
                  }`}
                >
                  <div className="glass rounded-2xl p-6 premium-shadow hover:border-accent-blue/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl sm:text-2xl font-semibold">{exp.title}</h3>
                      <span className="text-sm sm:text-base text-accent-blue font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent-blue-light mb-3 text-sm sm:text-base">{exp.company}</p>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Extra Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Extra Achievements
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-blue via-accent-blue-light to-transparent opacity-30" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-8"
            >
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants(achievement.side)}
                  className={`relative flex items-center ${
                    achievement.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent-blue-light rounded-full border-4 border-black z-10 shadow-lg shadow-accent-blue-light/50" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] ${
                      achievement.side === 'left' ? 'pr-0 md:pr-8' : 'pl-0 md:pl-8'
                    }`}
                  >
                    <div className="glass rounded-2xl p-5 premium-shadow hover:border-accent-blue-light/50 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg sm:text-xl font-semibold">{achievement.title}</h4>
                        <span className="text-xs sm:text-sm text-accent-blue-light font-medium">
                          {achievement.period}
                        </span>
                      </div>
                      {achievement.description && (
                        <p className="text-gray-400 leading-relaxed text-sm">{achievement.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

