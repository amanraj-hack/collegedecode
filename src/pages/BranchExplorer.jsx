import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdBanner from '../components/ads/AdBanner'

export default function BranchExplorer() {
  const [branches, setBranches] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Branch Insights — College Decode'
    fetch('/data/branches_data.json')
      .then(res => res.json())
      .then(data => {
        setBranches(data.branches)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Engineering Branch Explorer</h1>
      </div>

      <AdBanner slotId="dashboard-top-ad" format="horizontal" />

      {loading ? (
        <div className="loading">Loading branches...</div>
      ) : (
        <div className="branch-comparison-container" style={{ marginTop: '2rem' }}>
          <section className="comparison-section" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>All Branches Syllabus Comparison</h2>
            <div className="branches-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {branches.map(branch => (
                <Link to={`/branch/${branch.slug}`} key={branch.slug} className="card branch-syllabus-card" style={{ '--branch-color': branch.color, display: 'flex', flexDirection: 'column', padding: '2rem', textDecoration: 'none', height: '100%', alignItems: 'flex-start' }}>
                  <div className="branch-card-icon" style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
                    {branch.icon}
                  </div>
                  <h3 className="card-title" style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.3, textAlign: 'left' }}>{branch.name}</h3>
                  <p className="card-subtitle" style={{ marginTop: '0.25rem', color: 'var(--text-muted)', textAlign: 'left' }}>({branch.shortName})</p>

                </Link>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
