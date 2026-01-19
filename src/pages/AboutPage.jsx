import React from 'react'
import { motion } from 'framer-motion'
import About from '../components/About'

export default function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}>
      <About />
    </motion.div>
  )
}
