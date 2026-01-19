import React from 'react'
import { motion } from 'framer-motion'
import Projects from '../components/Projects'

export default function ProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}>
      <Projects />
    </motion.div>
  )
}
