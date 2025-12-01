'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const whatsappButtonRef = useRef<HTMLAnchorElement>(null)

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

    // Magnetic button effect for Explore button
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

    // Magnetic button effect for WhatsApp button
    const whatsappButton = whatsappButtonRef.current
    if (whatsappButton) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = whatsappButton.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(whatsappButton, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(whatsappButton, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      whatsappButton.addEventListener('mousemove', handleMouseMove)
      whatsappButton.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        whatsappButton.removeEventListener('mousemove', handleMouseMove)
        whatsappButton.removeEventListener('mouseleave', handleMouseLeave)
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
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light:from-white light:via-gray-100 light:to-white transition-colors duration-300"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-6 tracking-tight px-2 text-white dark:text-white light:text-black transition-colors duration-300"
        >
          PRASANJEET
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-3 sm:mb-4 font-light px-2"
        >
          Frontend Developer • Builder • Student
        </motion.p>

        <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
  className="text-sm sm:text-base md:text-lg text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4 font-light px-2"
>
  Self-taught 14-year-old frontend developer from India.
</motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-light px-4"
        >
          Crafting smooth, fast, premium digital experiences At 14.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            ref={whatsappButtonRef}
            href="https://wa.me/919638635275"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-blue to-accent-blue-dark text-white rounded-full font-medium text-base sm:text-lg overflow-hidden group transition-all duration-300 hover:from-accent-blue-dark hover:to-accent-blue flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative z-10">Hire Me — Contact on WhatsApp</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue-light to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <button
            ref={buttonRef}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="relative px-6 sm:px-8 py-3 sm:py-4 bg-white/10 dark:bg-white/10 light:bg-black/10 border border-white/20 dark:border-white/20 light:border-black/20 text-white dark:text-white light:text-black rounded-full font-medium text-base sm:text-lg overflow-hidden group transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-black/20 w-full sm:w-auto"
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
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-400 light:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-400 light:bg-gray-600 rounded-full mt-2" />
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mt-2">Scroll</p>
        </div>
      </motion.div>
    </section>
  )
}

