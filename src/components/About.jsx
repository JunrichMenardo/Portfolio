import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Avatar from '../assets/avatar.svg'
import { sectionVariant } from '../utils/animations'

export default function About() {
  const [imgSrc, setImgSrc] = useState(Avatar)

  useEffect(() => {
    // Check for images in preferred locations in order
    async function findImage() {
      try {
        const candidates = ['/photos/profile.jpg', '/profile.jpg']
        for (const p of candidates) {
          const res = await fetch(p, { method: 'HEAD' })
          if (res.ok) {
            setImgSrc(p)
            return
          }
        }
      } catch (e) {
        // ignore and keep default avatar
      }
    }
    findImage()
  }, [])

  return (
    <motion.section id="about" className="section about" aria-labelledby="about-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={sectionVariant}>
      <motion.div className="about-inner" variants={sectionVariant}>
        <motion.div className="about-image" aria-hidden="false" initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <img src={imgSrc} alt="Portrait" />
        </motion.div>

        <motion.div className="about-content" initial={{ x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h3 id="about-heading">About</h3>
          <p>
            I'm a frontend developer with 4+ years building user-focused web experiences. I enjoy
            turning complex problems into simple, accessible interfaces. My work balances
            performance, design polish, and pragmatic engineering.
          </p>

          <h4>Skills</h4>
          <ul>
            <li>React, Vite, modern JavaScript (ES2020+)</li>
            <li>Responsive CSS, Flexbox & Grid, design systems</li>
            <li>Framer Motion for accessible animations</li>
            <li>Testing, performance and accessibility audits</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
