import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }}>© {new Date().getFullYear()} Portfolio — Built with React.</motion.p>
        <motion.p className="muted" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.08, duration: 0.4 }}>Find me on <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> • <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></motion.p>
      </div>
    </footer>
  )
}
