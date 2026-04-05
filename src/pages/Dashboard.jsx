import React from 'react'
import { Link } from 'react-router-dom'
import AdBanner from '../components/ads/AdBanner'
import { dashboardStats, dashboardFeatures } from '../data/dashboardData'
import * as Icons from 'lucide-react'
import '../cd-premium.css'

export default function Dashboard() {
  document.title = 'Collage Decode — JEE Advanced OCR & Placement Explorer'

  return (
    <div className="animate-in" style={{ paddingBottom: '4rem' }}>
      <section className="cd-hero" style={{ height: 'auto', minHeight: '380px', padding: '3rem 2rem', background: 'linear-gradient(135deg, #080c17 0%, #17103a 100%)' }}>
        <div className="cd-hero-abstract-bg">
          <Icons.Building size={450} strokeWidth={0.5} opacity={0.15} />
        </div>
        <div className="cd-hero-content" style={{ zIndex: 10, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem', lineHeight: 1.1 }}>
            Decode Your Engineering <br /><span style={{ color: 'var(--accent-primary)' }}>IITs & NITs</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2rem', lineHeight: 1.6 }}>
            A premium analytical platform providing insights into opening & closing rank trends,
            branch-wise placements, and precise admission probability targeting.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/cutoffs" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
              <Icons.BarChart2 size={18} /> Explore OCR
            </Link>
            <Link to="/predict" className="btn btn-secondary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem', background: 'rgba(255,255,255,0.05)', color: '#fff', borderColor: 'rgba(255,255,255,0.1)' }}>
              <Icons.Target size={18} style={{ marginRight: '0.2rem' }} /> Predict College
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Stats Bar */}
      <div className="cd-highlights-grid" style={{ marginBottom: '4rem' }}>
        {dashboardStats.map((stat, i) => {
          const Icon = Icons[stat.icon] || Icons.BarChart2;
          return (
            <div className="cd-highlight-card" key={i}>
              <div className="cd-highlight-icon-wrap" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--accent-primary)' }}>
                <Icon size={20} />
              </div>
              <div className="cd-highlight-info">
                <span className="cd-highlight-val" style={{ fontSize: '1.4rem' }}>{stat.value}</span>
                <span className="cd-highlight-label">{stat.label}</span>
              </div>
            </div>
          )
        })}
      </div>

      <h2 className="cd-section-title">✨ Premium Features</h2>
      <div className="db-bento-grid">
        {dashboardFeatures.map((feature, i) => {
          const Icon = Icons[feature.icon] || Icons.Circle;
          return (
            <Link key={i} to={feature.path} className={`db-bento-card bg-${feature.iconColor}`}>
              <div className="db-bento-icon">
                <Icon size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{feature.description}</p>
              </div>
            </Link>
          )
        })}
      </div>

      <div style={{ marginTop: '4rem' }}>
        <AdBanner type="inline" />
      </div>
    </div>
  )
}
