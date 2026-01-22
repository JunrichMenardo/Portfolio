import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { sectionVariant } from '../utils/animations'
import { ThemeContext } from '../utils/ThemeContext'

export default function Hero() {
  const { theme } = useContext(ThemeContext)
  const [imgSrc, setImgSrc] = useState('/photos/profile.jpg')

  useEffect(() => {
    // Switch image based on theme
    const imagePath = theme === 'light' ? '/photos/profile2.png' : '/photos/profile.jpg'
    
    // Verify image exists
    const img = new Image()
    img.onload = () => setImgSrc(imagePath)
    img.onerror = () => setImgSrc('/photos/profile.jpg') // Fallback to dark mode image
    img.src = imagePath
  }, [theme])

  return (
    <motion.section id="main" className="hero" aria-labelledby="intro-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={sectionVariant}>
      <motion.div className="hero-content" variants={sectionVariant}>
        <h2 id="intro-heading">Hi — I'm <span className="accent">Menardo</span></h2>
        <p>
          I design and build performant, accessible web interfaces with delightful micro-interactions.
          I focus on clarity, responsive layouts, and animations that enhance usability — not distract.
        </p>
        <p className="muted">Available for freelance and full-time roles.</p>
        <a className="cta" href="#contact">Get in touch</a>
      </motion.div>
      {imgSrc && (
        <motion.div className="hero-image" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <motion.img 
            src={imgSrc} 
            alt="Menardo" 
            className="hero-photo" 
            key={imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      )}
    </motion.section>
  )
}
