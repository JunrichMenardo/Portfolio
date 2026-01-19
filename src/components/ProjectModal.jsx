import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.aside className="project-modal" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.28 }}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h3>{project.title}</h3>
        <p className="muted">Tech: {project.tech.join(', ')}</p>
        <p>{project.details}</p>
        <div style={{ marginTop: 12 }}>
          {project.live && project.live !== '#' && <a href={project.live} target="_blank" rel="noopener noreferrer" className="cta">View live</a>}
          {project.repo && project.repo !== '#' && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="card-link">Repository</a>}
        </div>
      </div>
    </motion.aside>
  )
}
