import { useState } from 'react'

export default function CareerCard({ career }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`career-card${expanded ? ' expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
      <div className="career-card-header">
        <h4 className="career-title">{career.title}</h4>
        <span className="career-toggle">{expanded ? '−' : '+'}</span>
      </div>

      <div className={`career-card-body${expanded ? ' show' : ''}`}>
        <p className="career-desc">{career.description}</p>

        <div className="career-section">
          <span className="career-label">🏢 Top Companies</span>
          <div className="career-tags">
            {career.companies.map((c, i) => (
              <span key={i} className="career-tag company">{c}</span>
            ))}
          </div>
        </div>

        <div className="career-section">
          <span className="career-label">🛠️ Key Skills</span>
          <div className="career-tags">
            {career.skills.map((s, i) => (
              <span key={i} className="career-tag skill">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
