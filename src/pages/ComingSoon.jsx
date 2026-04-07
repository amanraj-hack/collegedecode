import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TARGET_DATE = '2026-05-12T00:00:00'; // Editable target date variable

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(TARGET_DATE) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    // SEO & Meta
    document.title = 'Coming Soon | CollegeDecode';
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'noindex, nofollow';

    // Timer
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
      if (metaRobots) metaRobots.content = 'index, follow'; // Reset on unmount
    };
  }, []);

  const timeItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div className="animate-in" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '85vh',
      padding: '2rem 1rem',
      background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.05) 0%, transparent 40%)'
    }}>
      <div className="card" style={{
        maxWidth: '500px',
        width: '100%',
        padding: '3.5rem 2rem',
        textAlign: 'center',
        background: 'var(--bg-card)',
        borderRadius: '24px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🚀</div>

        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: '800',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em'
        }}>
          This Page is Under Development
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          marginBottom: '2.5rem',
          lineHeight: '1.6'
        }}>
          We’re building detailed insights. Coming soon.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.75rem',
          marginBottom: '2.5rem'
        }}>
          {timeItems.map((item, i) => (
            <div key={i} style={{
              padding: '1rem 0.5rem',
              background: 'rgba(99, 102, 241, 0.04)',
              borderRadius: '16px',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                fontVariantNumeric: 'tabular-nums'
              }}>
                {String(item.value).padStart(2, '0')}
              </div>
              <div style={{
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-secondary)',
                marginTop: '0.25rem'
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <Link to="/" className="btn btn-primary" style={{
          borderRadius: '12px',
          padding: '0.75rem 2rem',
          fontSize: '1rem',
          fontWeight: '600'
        }}>
          Back to Home
        </Link>
      </div>

      <footer style={{ marginTop: '3rem', opacity: 0.5, fontSize: '0.85rem' }}>
        © CollegeDecode
      </footer>
    </div>
  );
}
