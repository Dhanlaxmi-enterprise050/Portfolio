'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Parallax background particles
    const particles = particlesRef.current
    if (particles) {
      const createParticle = () => {
        const particle = document.createElement('div')
        particle.className = 'absolute w-1 h-1 bg-accent-blue rounded-full opacity-20'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animationDuration = `${5 + Math.random() * 10}s`
        particles.appendChild(particle)

        gsap.to(particle, {
          y: -100,
          x: Math.random() * 100 - 50,
          opacity: 0,
          duration: 5 + Math.random() * 5,
          repeat: -1,
          ease: 'none',
        })
      }

      for (let i = 0; i < 30; i++) {
        createParticle()
      }
    }

    // Magnetic button effect
    const button = buttonRef.current
    if (button) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      button.addEventListener('mousemove', handleMouseMove)
      button.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        button.removeEventListener('mousemove', handleMouseMove)
        button.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={particlesRef}
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
        >
          PRASANJEET
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
          Frontend Developer • Builder • Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
        >
          Crafting smooth, fast, premium digital experiences At 14.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <button
            ref={buttonRef}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="relative px-8 py-4 bg-accent-blue text-white rounded-full font-medium text-lg overflow-hidden group transition-all duration-300 hover:bg-accent-blue-dark"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue-light to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollIndicatorVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
          <p className="text-xs text-gray-400 mt-2">Scroll</p>
        </div>
      </motion.div>
    </section>
  )
}

