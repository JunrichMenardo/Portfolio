import React from 'react'
import { motion } from 'framer-motion'
import About from '../components/About'
import { sectionVariant } from '../utils/animations'

export default function AboutPage() {
  return (
    <motion.div initial="hidden" animate="show" exit={{ opacity: 0, y: -8 }} variants={sectionVariant}>
      <About />
    </motion.div>
  )
}
