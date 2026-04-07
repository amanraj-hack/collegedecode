import React from 'react'

export default function PrivacyPolicy() {
  document.title = 'Privacy Policy — Collage Decode'

  const copyEmail = () => {
    const email = 'amanrajiitp@gmail.com';
    navigator.clipboard.writeText(email);
    const btn = document.getElementById('email-btn');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
    }
  };

  return (
    <div className="animate-in" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '4rem 1rem 3rem', background: 'none' }}>
        <div className="hero-badge" style={{ margin: '0 auto 1.5rem', background: 'rgba(34, 197, 94, 0.1)', color: 'var(--success)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
          <span>🛡️</span>
          <span>Privacy First by Design</span>
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
          Privacy Policy
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          We believe your data is your own. Collage Decode is built to provide insights without compromising your personal information.
        </p>
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Last Updated: April 7, 2026
        </p>
      </section>

      {/* Core Principles Grid */}
      <div className="features-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '4rem'
      }}>
        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ color: 'var(--accent-primary)', marginBottom: '1.25rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '700' }}>Zero Data Collection</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            We do not collect names, phone numbers, or emails. Your identity remains completely anonymous.
          </p>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ color: 'var(--accent-secondary)', marginBottom: '1.25rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '700' }}>Local Processing</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Inputs like ranks and categories are processed in your browser to provide instant, private predictions.
          </p>
        </div>

        {/* <div className="card" style={{ padding: '2rem' }}>
          <div style={{ color: 'var(--success)', marginBottom: '1.25rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
              <polyline points="17 2 12 7 7 2"></polyline>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '700' }}>Transparent Ads</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            We use privacy-conscious ads to keep our research tools free for everyone. No creepy tracking.
          </p>
        </div> */}
      </div>
      {/* Contact Section */}
      <div className="card" style={{
        padding: '3rem',
        textAlign: 'center',
        marginBottom: '4rem',
        border: '1px solid var(--border-color)',
        background: 'var(--bg-card)'
      }}>
        <div style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem' }}>Privacy Concerns?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          If you have questions about your data or our practices, reach out directly.
        </p>

        <button
          id="email-btn"
          onClick={copyEmail}
          className="btn btn-primary"
          style={{ borderRadius: '100px', padding: '0.6rem 2rem', margin: '0 auto' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Contact Us
        </button>
      </div>
    </div>
  )
}
