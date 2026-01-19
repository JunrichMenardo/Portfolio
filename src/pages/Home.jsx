import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}>
      <Hero />
    </motion.div>
  )
}
