'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const services = [
  {
    id: 1,
    title: 'Business Websites',
    description: 'Modern, clean, fast business websites for local shops, gyms, cafés, parlours, coaches, and service providers.',
    price: '₹1,499 – ₹4,999',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Portfolio Websites for Students & Creators',
    description: 'Personal portfolios for editors, dancers, gamers, freelancers, and school/college students.',
    price: '₹599 – ₹1,499',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Landing Pages / Sales Pages',
    description: 'High-converting landing pages for promotions, courses, or services.',
    price: '₹1,299 – ₹1,999',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Custom Taplinker / Bio Link Pages',
    description: 'Premium link-in-bio pages for influencers, creators, and small businesses.',
    price: '₹499 – ₹1,499',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Logo Design (Simple & Clean)',
    description: 'Minimal logos that match the brand\'s vibe.',
    price: '₹299',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Social Media Banners / Posters',
    description: 'Quick, clean banners for YouTube, Instagram, and Facebook.',
    price: '₹199',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'SEO Setup (Basic)',
    description: 'Basic SEO setup to make the website discoverable.',
    price: '₹199',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Google Maps & Contact Setup',
    description: 'Add business location, maps, and contact info.',
    price: '₹99',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: '3-Month Support Add-on',
    description: 'Website edits, small updates, and priority support.',
    price: '₹299',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default function Services() {
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
      id="services"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Premium web solutions tailored to your needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variants={cardVariants} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 text-center premium-shadow"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Ready to work together?
          </h3>
          <p className="text-gray-400 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
            Let's bring your vision to life with premium web solutions
          </p>
          <CTAButton />
        </motion.div>
      </div>
    </section>
  )
}

// Service Card Component
function ServiceCard({
  service,
  variants,
}: {
  service: typeof services[0]
  variants: any
}) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.2,
        y: y * 0.2,
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
  }, [])

  return (
    <motion.div
      variants={variants}
      className="group relative glass rounded-2xl p-6 sm:p-8 premium-shadow-hover hover:border-accent-blue/50 transition-all duration-500 flex flex-col h-full"
    >
      {/* Icon */}
      <div className="text-accent-blue mb-4 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-accent-blue transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed flex-grow">
        {service.description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-2xl sm:text-3xl font-bold text-white">
          {service.price}
        </span>
      </div>

      {/* Hire Me Button */}
      <button
        ref={buttonRef}
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="relative px-6 py-3 bg-accent-blue text-white rounded-lg font-medium text-sm sm:text-base overflow-hidden group/btn transition-all duration-300 hover:bg-accent-blue-dark w-full"
      >
        <span className="relative z-10">Hire Me</span>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue-light to-accent-blue opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
      </button>
    </motion.div>
  )
}

// CTA Button Component
function CTAButton() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

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
  }, [])

  return (
    <button
      ref={buttonRef}
      onClick={() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }}
      className="relative px-8 py-4 bg-accent-blue text-white rounded-full font-medium text-lg overflow-hidden group transition-all duration-300 hover:bg-accent-blue-dark"
    >
      <span className="relative z-10">Contact Me</span>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue-light to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}

