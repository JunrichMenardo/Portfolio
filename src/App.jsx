import React from 'react'
import { motion } from 'framer-motion'
import { container as pageContainer } from './utils/animations'
import { ThemeProvider } from './utils/ThemeContext'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Playbook from './pages/Playbook'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <Header />
        <motion.main className="container" initial="hidden" animate="show" variants={pageContainer}>
          <Home />
          <Projects />
          <Playbook />
          <About />
          <Contact />
        </motion.main>
        <Footer />
      </motion.div>
    </ThemeProvider>
  )
}
