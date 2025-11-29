'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer
      ref={ref}
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} PRASANJEET. Crafted with attention to detail.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Built with Next.js, TailwindCSS, Framer Motion & GSAP
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

