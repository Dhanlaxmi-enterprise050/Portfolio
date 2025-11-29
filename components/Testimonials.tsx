'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    content: 'Prasanjeet created an amazing website for my café. The design is clean, modern, and exactly what I needed. The whole process was smooth and professional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'Content Creator',
    content: 'Got my portfolio website done in record time! The animations are smooth, and the mobile experience is perfect. Highly recommend for students and creators.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Fitness Coach',
    content: 'Professional service with attention to detail. My landing page converts so much better now. Great value for money and excellent communication throughout.',
    rating: 5,
  },
]

export default function Testimonials() {
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
      id="testimonials"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-16 text-center max-w-2xl mx-auto font-light"
        >
          What clients say about working with me
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="glass rounded-2xl p-6 sm:p-8 premium-shadow-hover hover:border-accent-blue/50 transition-all duration-300 flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base flex-grow">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <h4 className="text-lg font-semibold mb-1">{testimonial.name}</h4>
                <p className="text-sm text-accent-blue-light">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

