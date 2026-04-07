import React from 'react'

export default function About() {
  document.title = 'About — College Decode'

  return (
    <div className="animate-in" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '4rem 1rem 3rem', background: 'none' }}>
        <div className="hero-badge" style={{
          margin: '0 auto 1.5rem',
          background: 'rgba(99, 102, 241, 0.1)',
          color: 'var(--accent-primary)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          borderRadius: '100px',
          padding: '0.35rem 1rem',
          fontSize: '0.8rem',
          fontWeight: '500'
        }}>
          <span>✨</span>
          <span>Your Guide to JoSAA Counselling</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
          fontWeight: '800',
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          lineHeight: '1.1',
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          About College Decode
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          An intelligent tool designed by an IIT student to empower JEE aspirants with data-driven college predictions and deep OCR insights.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="features-grid two-col" style={{ gap: '2rem', marginBottom: '4rem' }}>
        <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>Our Purpose</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', flex: 1 }}>
            College Decode was born out of a simple need: making the complex JoSAA counselling process more transparent. We translate millions of rows of historical data into actionable insights, helping you visualize your engineering future.
          </p>
        </div>

        <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>Algorithm & Accuracy</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', flex: 1 }}>
            By iterating through complex OCR trends, we classify results into <strong style={{ color: 'var(--accent-primary)' }}>Possible</strong>, <strong style={{ color: 'var(--accent-secondary)' }}>Good Chance</strong>, or <strong style={{ color: 'var(--success)' }}>Safe</strong> options. Our metrics provide a robust 95% confidence buffer for JEE aspirants.
          </p>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="features-grid" style={{ marginBottom: '4rem' }}>
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '700' }}>Mission</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            To simplify college admissions through data intelligence and user-centric design.
          </p>
        </div>
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '700' }}>Vision</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Becoming the most trusted companion for every aspiring engineer in India.
          </p>
        </div>
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '700' }}>Values</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Transparency, accuracy, and accessibility for all students, regardless of background.
          </p>
        </div>
      </div>

      {/* Disclaimer Box */}
      <div className="insight-box insight-stable" style={{ marginBottom: '4rem' }}>
        <span className="insight-icon">⚠️</span>
        <div className="insight-content">
          <div className="insight-text">Important Disclaimer</div>
          <div className="insight-subtext">
            Predictions are based on historical JoSAA OCR trends and must be used for guidance only. Seat allocation is dynamic — always consult the official JoSAA portal for final decisions.
          </div>
        </div>
      </div>
    </div>
  )
}
