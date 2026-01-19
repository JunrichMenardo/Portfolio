import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="header" role="banner">
      <a className="skip-link" href="#main">Skip to content</a>
      <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
        Portfolio
      </motion.h1>
      <nav className="nav" aria-label="Primary navigation">
        <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
          <a href="#main">Home</a>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
          <a href="#projects">Projects</a>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
          <a href="#playbook">Playbook</a>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
          <a href="#about">About</a>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
          <a href="#contact">Contact</a>
        </motion.div>
      </nav>
    </header>
  )
}
