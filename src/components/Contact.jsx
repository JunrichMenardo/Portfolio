import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { sectionVariant } from '../utils/animations'

export default function Contact() {
  const [message, setMessage] = useState('')

  // Replace FORM_ENDPOINT with your Formspree endpoint, or keep demo behavior.
  const FORM_ENDPOINT = 'https://formspree.io/f/yourFormId'

  function handleSubmit(e) {
    // Let the native form submit handle POST to Formspree if configured
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    // If FORM_ENDPOINT is left as placeholder, show demo alert and include mailto fallback
    if (FORM_ENDPOINT.includes('yourFormId')) {
      alert('Demo: message sent — replace FORM_ENDPOINT in Contact.jsx with your form endpoint to enable real submissions.')
      form.reset()
      setMessage('')
      // Provide mailto fallback
      const mailto = `mailto:hello@yourdomain.com?subject=${encodeURIComponent('Website contact')}&body=${encodeURIComponent(data.get('message'))}`
      if (confirm('Would you like to open your email client to send this message instead?')) {
        window.location.href = mailto
      }
      return
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          alert('Message sent — thank you!')
          form.reset()
          setMessage('')
        } else {
          alert('There was a problem sending your message.')
        }
      })
      .catch(() => alert('Network error — please try again later.'))
  }

  return (
    <motion.section id="contact" className="section contact" aria-labelledby="contact-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={sectionVariant}>
      <h3 id="contact-heading">Contact</h3>
      <p className="muted">Have a project idea, collaboration, or question? Send a note — I usually reply within 48 hours.</p>
      <motion.form className="contact-form" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} action={FORM_ENDPOINT} method="POST">
        <label className="sr-only">Your email</label>
        <input name="email" type="email" placeholder="Your email" required aria-label="Email" />
        <label className="sr-only">Message</label>
        <textarea name="message" placeholder="Tell me about your project or question" value={message} onChange={(e) => setMessage(e.target.value)} required aria-label="Message" />
        <button type="submit">Send message</button>
      </motion.form>
    </motion.section>
  )
}
