import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Database,
  LineChart,
  TrendingUp,
  CheckCircle,
  Layers,
  Cpu,
  ShieldCheck,
  Target,
  Zap,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
export default function HowPredictorWorks() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'How Predictor Works — College Decode';
  }, []);

  return (
    <div className="animate-in" style={{ paddingBottom: '4rem' }}>
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <span>🧠</span>
          <span>Predictions Powered by Previous Year Data</span>
        </div>
        <h1>How Our College Predictor Works</h1>
        <p>
          By curating previous year data, we provide reliable college and branch predictions for your JEE rank.
        </p>
        <div className="hero-actions">
          <Link to="/predict" className="btn btn-primary">
            Try Predictor Now <ArrowRight size={18} />
          </Link>
          {/* <a href="#logic" className="btn btn-secondary">Learn the Logic</a> */}
        </div>
      </section>

      {/* 2. Data Source Section */}
      <section id="data" style={{ marginBottom: '5rem' }}>
        <div className="card" style={{
          background: 'linear-gradient(135deg, var(--bg-card), var(--bg-primary))',
          padding: '3rem 2rem',
          border: '1px solid var(--border-glow)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'var(--accent-glow)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'var(--accent-primary)'
              }}>
                <Database size={32} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Solid Data Foundation</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Our predictor isn't based on guesses. We analyze the last <strong>5 years of official JoSAA opening and closing ranks</strong> to identify patterns that others miss.
              </p>

              <div className="features-grid" style={{ marginTop: '3rem' }}>
                <div style={{ textAlign: 'left', padding: '1rem' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <CheckCircle size={18} color="var(--success)" /> 54+ Colleges
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Complete coverage of IITs & NITs across India.</p>
                </div>
                <div style={{ textAlign: 'left', padding: '1rem' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <CheckCircle size={18} color="var(--success)" /> All Categories
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Precise data for Gender, Category (OBC, SC, ST, EWS).</p>
                </div>
                <div style={{ textAlign: 'left', padding: '1rem' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <CheckCircle size={18} color="var(--success)" /> Branch Detail
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>We just does not predict you collage but we also give you the branch insights </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Prediction Logic Section */}
      <section id="logic" style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>The Prediction Logic</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            We transform raw historical data into meaningful probabilities using a three-stage analysis.
          </p>
        </div>

        <div className="features-grid">
          <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5rem', opacity: '0.05', fontWeight: '900' }}>1</div>
            <div style={{ color: 'var(--accent-primary)', marginBottom: '1.25rem' }}><LineChart size={32} /></div>
            <h3 style={{ marginBottom: '1rem' }}>Rank Correlation</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              We map your current rank against the closing ranks of the past 3 years. This establishes the baseline for which colleges were historically "in reach".
            </p>
          </div>

          <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5rem', opacity: '0.05', fontWeight: '900' }}>2</div>
            <div style={{ color: 'var(--accent-secondary)', marginBottom: '1.25rem' }}><TrendingUp size={32} /></div>
            <h3 style={{ marginBottom: '1rem' }}>Trend Analysis</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              We detect if cutoffs for specific branches are tightening (getting harder) or relaxing. This helps account for shifting student preferences year-over-year(2021 - 2025) .
            </p>
          </div>

          <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5rem', opacity: '0.05', fontWeight: '900' }}>3</div>
            <div style={{ color: 'var(--success)', marginBottom: '1.25rem' }}><Target size={32} /></div>
            <h3 style={{ marginBottom: '1rem' }}>Probability Mapping</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Results are classified into three difficulty buckets based on the safety margin between your rank and historical averages.
            </p>
          </div>
        </div>

        {/* Bucket Explanation */}
        <div style={{
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <strong style={{ color: 'var(--success)', display: 'block', marginBottom: '0.25rem' }}>Safe ✅</strong>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Very high probability. Your rank is comfortably better than past cutoffs.</span>
          </div>
          <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <strong style={{ color: 'var(--warning)', display: 'block', marginBottom: '0.25rem' }}>Good Chance ⚠️</strong>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Borderline. Your rank is very close to recent cutoffs. High competition expected.</span>
          </div>
          <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
            <strong style={{ color: 'var(--danger)', display: 'block', marginBottom: '0.25rem' }}>Possible 🚀</strong>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Competitive. Requires a significant shift in cutoff trends to become reachable.</span>
          </div>
        </div>
      </section>

      {/* 4. What Makes It Different */}
      <section style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>What Makes Our Predictor Different?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Built by IITians, for Future IITians & NITians. We prioritized accuracy and clarity over everything else.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue"><Layers size={24} /></div>
            <h3>Multi-Year Depth</h3>
            <p>While most tools only look at the previous year, we look at the 5-year trajectory to give a more resilient prediction.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon purple"><Cpu size={24} /></div>
            <h3>Intelligent Processing</h3>
            <p>We automatically handle complex JoSAA rules including HS/OS quotas and specialized category seat allocations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon pink"><ShieldCheck size={24} /></div>
            <h3>Privacy Centric</h3>
            <p>Your search is private. We process your data locally and don't require login or phone numbers to show results.</p>
          </div>
        </div>
      </section>

      {/* 5. How to Use Section */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="card">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1.5rem' }}>How to Use Effectivey</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  { title: 'Enter Correct Rank', desc: 'Use your Category Rank (not CRL) if you belong to OBC/SC/ST/EWS.' },
                  { title: 'Select Quota & Category', desc: 'Ensure your Home State quota is correctly selected for NIT predictions.' },
                  { title: 'Explore All Categories', desc: 'Don\'t just look at "Safe" options; check "Moderate" for better branch opportunities.' },
                  { title: 'Compare & Research', desc: 'Use the results to build your JoSAA preference list strategically.' }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>{i + 1}</div>
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              flex: '0.8',
              minWidth: '300px',
              background: 'var(--bg-glass)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Zap size={48} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Instant Results</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Our engine processes 10,000+ data points in under 200ms to give you instant feedback.
              </p>
              <Link to="/predict" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Open Predictor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Disclaimer Section */}
      <section style={{ marginBottom: '5rem' }}>
        <div style={{
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-glass)',
          border: '1px dashed var(--border-color)',
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'flex-start'
        }}>
          <div style={{ color: 'var(--warning)', marginTop: '0.25rem' }}>
            <AlertTriangle size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Important Disclaimer</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              College predictions are based on historical data and statistical trends. While we strive for maximum accuracy, actual cutoffs change every year due to factors like exam difficulty, number of applicants, and shifting branch preferences.
              <br /><br />
              <strong>Always use these results as a guide, not as a guarantee.</strong> We strongly recommend cross-referencing with official JoSAA seat allocation results.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Closing Section */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--accent-glow)', borderRadius: 'var(--radius-xl)' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1rem' }}>Ready to find your future college?</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
          Make data-driven decisions for your counseling with India's most detailed rank predictor.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/predict" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', fontSize: '1rem' }}>
            Try Predictor Now
          </Link>
          <Link to="/" className="btn btn-secondary" style={{ padding: '0.8rem 2.5rem', fontSize: '1rem' }}>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
