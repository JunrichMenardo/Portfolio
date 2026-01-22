import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import { sectionVariant } from '../utils/animations'

export default function Home() {
  return (
    <motion.div initial="hidden" animate="show" exit={{ opacity: 0, y: -8 }} variants={sectionVariant}>
      <Hero />
    </motion.div>
  )
}
