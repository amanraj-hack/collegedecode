import React from 'react'

export default function TermsConditions() {
  document.title = 'Terms & Conditions — College Decode'

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
        <div className="hero-badge" style={{ margin: '0 auto 1.5rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
          <span>📜</span>
          <span>Legal Agreement & Usage</span>
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
          Terms & Conditions
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Welcome to College Decode. By accessing and using this website, you accept and agree to be bound by the following terms and conditions.
        </p>
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Last Updated: April 6, 2026
        </p>
      </section>

      {/* Main Content Grid - Flexible Cards */}
      <div className="features-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '4rem'
      }}>
        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>1. Use of the Website</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
            The content and tools provided on College Decode are for <strong>informational and educational purposes only</strong>. Users must use the website responsibly and not misuse the services provided.
          </p>
        </div>

        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>2. Not Official Authority</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
            College Decode is <strong>not affiliated with JoSAA, JEE, NTA, or any government body</strong>.
            <br />• The website is an independent platform.
            <br />• Users should verify all information from official sources before making decisions.
          </p>
        </div>

        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>3. Intellectual Property</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
            All content on this website, including text, design, tools, and branding, is the property of College Decode unless stated otherwise.
            You may not copy, reproduce, or distribute content without permission.
          </p>
        </div>

        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>4. Limitation of Liability</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
            College Decode and its owner shall not be held liable for:
            <br />• Any decisions made based on the information provided
            <br />• Any loss or damage arising from the use of this website
          </p>
        </div>

        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>5. Third-Party Services</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
            This website may use third-party services such as Google Analytics and Google AdSense.
            These services may collect data in accordance with their own privacy policies.
          </p>
        </div>

        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>6. Changes to Terms</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
            We may update these Terms and Conditions at any time without prior notice. Continued use of the website after changes implies acceptance of the updated terms.
          </p>
        </div>
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
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem' }}>Contact Information</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          If you have any questions regarding these Terms, you may contact us directly.
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

      <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '4rem' }}>
        By using College Decode, you acknowledge that you have read and agreed to these Terms and Conditions.
      </div>
    </div>
  )
}
