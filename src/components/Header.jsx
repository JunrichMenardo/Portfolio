import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../utils/ThemeContext'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

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
        <motion.button 
          className="theme-toggle" 
          onClick={toggleTheme}
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300 }}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </motion.button>
      </nav>
    </header>
  )
}
