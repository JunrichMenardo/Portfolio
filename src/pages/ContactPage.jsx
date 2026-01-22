import React from 'react'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'
import { sectionVariant } from '../utils/animations'

export default function ContactPage() {
  return (
    <motion.div initial="hidden" animate="show" exit={{ opacity: 0, y: -8 }} variants={sectionVariant}>
      <Contact />
    </motion.div>
  )
}
