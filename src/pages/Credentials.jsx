import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { sectionVariant } from '../utils/animations'

const credentials = [
  {
    type: 'Certificate',
    title: 'Exploring Internet of Things with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy · 11 Nov 2026',
    details: 'Certificate ID: 7e6e83e5-f912-47bb-8494-a981bfaef80a',
    image: '/certificates/Screenshot 2026-11-11 112453.png'
  },
  {
    type: 'Certification',
    title: 'Access 2019 Expert',
    issuer: 'Microsoft Office Specialist · 29 Oct 2026',
    details: 'Verification code: w9WKT-FaHN · Expires 5 years after issue',
    image: '/certificates/Screenshot 2026-11-11 112410.png'
  },
  {
    type: 'Certification',
    title: 'Excel 2019 Associate',
    issuer: 'Microsoft Office Specialist · 6 Oct 2026',
    details: 'Verification code: rbWQ-uSRB · Expires 5 years after issue',
    image: '/certificates/Screenshot 2026-11-11 112322.png'
  }
]

export default function Credentials() {
  const [selectedCredential, setSelectedCredential] = useState(null)
  const [screenshotDetected, setScreenshotDetected] = useState(false)

  useEffect(() => {
    if (!selectedCredential) return undefined

    const protectCertificate = () => {
      setScreenshotDetected(true)
      window.setTimeout(() => setScreenshotDetected(false), 1800)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCredential(null)
      if (event.key === 'PrintScreen' || event.code === 'PrintScreen' || event.key === 'Snapshot') {
        event.preventDefault()
        protectCertificate()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('blur', protectCertificate)
    document.addEventListener('visibilitychange', protectCertificate)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('blur', protectCertificate)
      document.removeEventListener('visibilitychange', protectCertificate)
    }
  }, [selectedCredential])

  return (
    <motion.section
      id="credentials"
      className="section credentials"
      aria-labelledby="credentials-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={sectionVariant}
    >
      <div className="credentials-heading">
        <p className="eyebrow">Learning &amp; recognition</p>
        <h2 id="credentials-heading">Credentials</h2>
        <p className="muted">A place to highlight the certifications, courses, and experience behind my work.</p>
      </div>

      <div className="credentials-grid">
        {credentials.map((credential) => (
          <article className="credential-card" key={credential.title}>
            <button
              className="certificate-trigger"
              type="button"
              onClick={() => setSelectedCredential(credential)}
              onContextMenu={(event) => event.preventDefault()}
              aria-label={`View ${credential.title} certificate`}
            >
              <img
                className="credential-preview"
                src={credential.image}
                alt={`${credential.title} certificate`}
                draggable="false"
                onError={(event) => {
                  event.currentTarget.hidden = true
                  event.currentTarget.nextElementSibling.hidden = false
                }}
              />
              <div className="credential-fallback" hidden aria-label={`${credential.title} certificate details`}>
                <span className="fallback-brand">{credential.type === 'Certificate' ? 'Cisco Networking Academy' : 'Microsoft Office Specialist'}</span>
                <strong>{credential.title}</strong>
                <span>{credential.issuer}</span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selectedCredential && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={`${selectedCredential.title} certificate preview`}>
          <button className="certificate-backdrop" type="button" onClick={() => setSelectedCredential(null)} aria-label="Close certificate preview" />
          <div className="certificate-modal-content">
            <button className="modal-close" type="button" onClick={() => setSelectedCredential(null)} aria-label="Close certificate preview">×</button>
            <img
              className={screenshotDetected ? 'screenshot-protected' : ''}
              src={selectedCredential.image}
              alt={`${selectedCredential.title} certificate enlarged`}
              draggable="false"
              onContextMenu={(event) => event.preventDefault()}
            />
            {screenshotDetected && <span className="screenshot-warning">Certificate temporarily protected</span>}
            <span className="certificate-watermark" aria-hidden="true">JUNRICH CARL MENARDO · CREDENTIAL PREVIEW</span>
          </div>
        </div>
      )}
    </motion.section>
  )
}