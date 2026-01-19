import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="main" className="hero" aria-labelledby="intro-heading">
      <motion.div className="hero-content" initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 id="intro-heading">Hi — I'm <span className="accent">Menardo</span></h2>
        <p>
          I design and build performant, accessible web interfaces with delightful micro-interactions.
          I focus on clarity, responsive layouts, and animations that enhance usability — not distract.
        </p>
        <p className="muted">Available for freelance and full-time roles.</p>
        <a className="cta" href="#contact">Get in touch</a>
      </motion.div>
      {/* avatar removed as requested */}
    </section>
  )
}
