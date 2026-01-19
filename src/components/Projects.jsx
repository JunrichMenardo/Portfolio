import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects'
import ProjectModal from './ProjectModal'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <h3 id="projects-heading">Selected Projects</h3>
      <motion.div className="grid" variants={container} initial="hidden" animate="show">
        {projects.map((p) => (
          <motion.div key={p.id} variants={item} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 260 }}>
            <div role="button" tabIndex={0} onClick={() => setSelected(p)} onKeyDown={(e) => { if (e.key === 'Enter') setSelected(p) }} className="card" aria-label={`Open ${p.title} details`}>
              <div>
                <h4>{p.title} {p.category && <span className={`badge badge-${p.category}`}>{p.category}</span>}</h4>
                <p>{p.desc}</p>
                <p className="muted">Tech: {p.tech.join(', ')}</p>
              </div>
              <div className="card-footer">
                <span className="view-btn" aria-hidden="true">View project</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
