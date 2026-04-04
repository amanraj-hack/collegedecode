import { Link } from 'react-router-dom'
import React from 'react'

export default function ComingSoon() {
  document.title = 'Coming Soon — Collage Decode'

  return (
    <div className="animate-in" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '65vh',
      padding: '2rem 1rem'
    }}>
      <div
        className="card"
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: '3rem 2rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        {/* Subtle top gradient accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent-gradient)' }}></div>

        {/* Minimal Icon */}
        <div style={{
          display: 'inline-flex',
          padding: '1rem',
          background: 'var(--accent-glow)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem',
          border: '1px solid var(--border-glow)'
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        </div>

        <h1 style={{
          fontSize: '1.75rem',
          margin: '0 0 1rem',
          fontWeight: '700',
          color: 'var(--accent-primary)'
        }}>
          Coming Soon
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          margin: '0 auto 2.5rem',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          maxWidth: '380px'
        }}>
          We are actively crafting and organizing the data for this module. A seamless new experience is on its way.
        </p>

        <Link to="/" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.5rem' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Return to Home
        </Link>
      </div>
    </div>
  )
}
