import React from 'react'

export default function Playbook() {
  return (
    <section className="section" aria-labelledby="playbook-heading">
      <h2 id="playbook-heading">The Future‑Proof Portfolio Playbook</h2>

      <h3>Phase 1 — Content Audit</h3>
      <p>
        Start with a clear hero statement: one sentence that explains who you are and what you build.
        Decide the three projects you want to feature as your "Big Three": one that shows what you know,
        one that shows what you've learned, and one that shows what you're aspiring to build.
      </p>

      <h3>Phase 2 — The Big Three</h3>
      <p>
        Label each showcased project with a role: <strong>Know</strong>, <strong>Learned</strong>, or <strong>Aspire</strong>.
        These help viewers quickly understand growth and focus.
      </p>

      <h3>Phase 3 — The Growth Tab</h3>
      <p>
        Add a short "Currently learning" section to show a growth mindset. Mention tools, concepts, or
        patterns you're exploring.
      </p>

      <h3>Phase 4 — Choosing Your Tech Stack</h3>
      <p>
        For a simple and fast deployment, React + Vite works well. For production-ready features and
        one-click deployments, Next.js on Vercel is recommended. This site uses React + Vite for speed.
      </p>

      <p className="muted">Tip: keep content concise and link to live demos or repos for deeper dives.</p>
    </section>
  )
}
