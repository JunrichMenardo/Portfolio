import React from 'react'
import { motion } from 'framer-motion'
import Projects from '../components/Projects'
import { sectionVariant } from '../utils/animations'

export default function ProjectsPage() {
  return (
    <motion.div initial="hidden" animate="show" exit={{ opacity: 0, y: -8 }} variants={sectionVariant}>
      <Projects />
    </motion.div>
  )
}
