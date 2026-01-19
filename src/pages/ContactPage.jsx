import React from 'react'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}>
      <Contact />
    </motion.div>
  )
}
