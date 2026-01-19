import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'
import { motion } from 'framer-motion'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <section className="section">
        <h3>Project not found</h3>
        <p>The project you requested does not exist.</p>
        <Link to="/projects">Back to projects</Link>
      </section>
    )
  }

  return (
    <motion.section className="section" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.32 }}>
      <motion.h2 initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.28 }}>{project.title}</motion.h2>
      <motion.p className="muted" initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }}>{`Tech: ${project.tech.join(', ')}`}</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>{project.details}</motion.p>

      <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
        {project.live && project.live !== '#' && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="cta">View live</a>
        )}
        {project.repo && project.repo !== '#' && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="card-link">Repository</a>
        )}
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/projects">← Back to projects</Link>
      </div>
    </motion.section>
  )
}
