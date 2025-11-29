'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern, full-featured e-commerce solution with seamless checkout and inventory management.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'An intuitive task management application with real-time collaboration features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A stunning portfolio website showcasing creative work with smooth animations.',
    tech: ['Next.js', 'Framer Motion', 'GSAP', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with real-time data and interactive maps.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Comprehensive analytics dashboard for social media metrics and insights.',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 6,
    title: 'Music Player App',
    description: 'A sleek music player with playlist management and audio visualization.',
    tech: ['React', 'Web Audio API', 'CSS3', 'LocalStorage'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden premium-shadow-hover hover:border-accent-blue/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-accent-blue text-white rounded-lg text-center text-sm sm:text-base font-medium hover:bg-accent-blue-dark transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-center text-sm sm:text-base font-medium hover:bg-white/10 transition-colors duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

