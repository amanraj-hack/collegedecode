import React from 'react'

export default function Contact() {
  document.title = 'Contact — College Decode'

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
    <div className="animate-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
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
          <span>👋</span>
          <span>We'd Love to Hear From You</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 4rem)',
          fontWeight: '800',
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          lineHeight: '1.1',
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Get In Touch
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Have feedback, encountered an issue, or want to collaborate? Reach out to help us make College Decode better for everyone.
        </p>
      </section>

      {/* Contact Cards */}
      <div className="card" style={{
        padding: '3rem',
        textAlign: 'center',
        marginBottom: '4rem',
        border: '1px solid var(--border-color)',
        background: 'var(--bg-card)'
      }}>
        <div style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem' }}>Support & Feedback</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Emails are typically responded to within 24-48 hours (As We are also students 😅). Your insights help us improve the platform accuracy.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            id="email-btn"
            onClick={copyEmail}
            className="btn btn-primary"
            style={{ borderRadius: '100px', padding: '0.6rem 2rem' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Email Us
          </button>
          <a
            href="https://instagram.com/college.decode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ borderRadius: '100px', padding: '0.6rem 2rem' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>
          <a
            href="https://t.me/collegedecode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ borderRadius: '100px', padding: '0.6rem 2rem' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Telegram
          </a>
        </div>
      </div>

      {/* Social Links / Others */}
      <div className="features-grid two-col" style={{ gap: '2rem', marginBottom: '4rem' }}>
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '700' }}>For Developers</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Interested in the data or technology behind College Decode? Feel free to reach out for any suggestion.
          </p>
        </div>
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '700' }}>For JEE 2026 Aspirants</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Having any issue with the website? It's for you 😘. Feel free to reach out for any suggestion.
          </p>
        </div>
      </div>
    </div>
  )
}
