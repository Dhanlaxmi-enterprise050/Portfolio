'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'TailwindCSS',
  'Framer Motion',
  'GSAP',
  'JavaScript',
  'HTML/CSS',
  'Git',
  'Responsive Design',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Bio Card with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 premium-shadow"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-4 sm:mb-6 font-light">
            I’m a frontend developer obsessed with clean design, smooth animations, and building things that look way more expensive than they are. I create modern websites for businesses, creators, and students—fast, responsive, and premium.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed font-light">
              Right now I'm focused on leveling up my skills, shipping projects, and building digital products that actually solve problems. I love working alone, thinking creatively, and pushing myself to get better with every build.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Skills & Technologies</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 rounded-full text-xs sm:text-sm md:text-base hover:bg-accent-blue/20 hover:border-accent-blue transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

