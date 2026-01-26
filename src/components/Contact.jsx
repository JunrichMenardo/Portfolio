import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { sectionVariant } from '../utils/animations'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init('oYqy77uz8BDleflrJ')
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send('service_xvirvoz', 'template_dr9j66i', {
        to_email: 'junrich.menardo@urios.edu.ph',
        from_email: email,
        message: message,
      })
      .then(() => {
        alert('Message sent — thank you!')
        setEmail('')
        setMessage('')
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        alert('There was a problem sending your message. Please try again.')
        setLoading(false)
      })
  }

  return (
    <motion.section id="contact" className="section contact" aria-labelledby="contact-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={sectionVariant}>
      <h3 id="contact-heading">Contact</h3>
      <p className="muted">Have a project idea, collaboration, or question? Send a note — I usually reply within 48 hours.</p>
      <motion.form className="contact-form" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} onSubmit={handleSubmit}>
        <label className="sr-only">Your email</label>
        <input 
          name="email" 
          type="email" 
          placeholder="Your email" 
          required 
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="sr-only">Message</label>
        <textarea 
          name="message" 
          placeholder="Tell me about your project or question" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
          aria-label="Message" 
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send message'}
        </button>
      </motion.form>
    </motion.section>
  )
}
