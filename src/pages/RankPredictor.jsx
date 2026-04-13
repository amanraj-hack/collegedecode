import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import AdBanner from '../components/ads/AdBanner'
import {
  getAvailableGroups,
  getRawBranchesForGroup,
  getDegreeType,
  getDuration,
  degreeCssClass,
} from '../utils/branchGroups'

function processPredictorData(matches, advRank, mainsRank) {
  let safe = []
  let target = []
  let dream = []
  let totalValidOptions = 0

  for (const item of matches) {
    const isIIT = item.institute.includes('Indian Institute') && item.institute.includes('Technology') && !item.institute.includes('Information') && !item.institute.includes('Engineering Science')
    const userRank = isIIT ? advRank : mainsRank
    if (!userRank) continue

    const closingRank = item.closingRank
    const adjustedClosingRank = closingRank * 1.05
    const ratio = userRank / adjustedClosingRank

    let categoryStr = ''
    if (ratio <= 0.85) categoryStr = 'Safe'
    else if (ratio <= 1.05) categoryStr = 'Good Chance'
    else if (ratio <= 1.25) categoryStr = 'Possible'
    else continue

    totalValidOptions++

    let baseConfidence = (adjustedClosingRank / userRank) * 100
    baseConfidence = Math.max(30, Math.min(95, baseConfidence))

    let finalConfidence = baseConfidence
    if (categoryStr === 'Safe') finalConfidence = Math.max(80, Math.min(95, baseConfidence))
    else if (categoryStr === 'Good Chance') finalConfidence = Math.max(60, Math.min(80, baseConfidence))
    else if (categoryStr === 'Possible') finalConfidence = Math.max(30, Math.min(60, baseConfidence))

    const score = Math.abs(userRank - closingRank)

    const processedItem = {
      ...item,
      category: categoryStr,
      confidence: Math.round(finalConfidence),
      score
    }

    if (categoryStr === 'Safe') safe.push(processedItem)
    else if (categoryStr === 'Good Chance') target.push(processedItem)
    else if (categoryStr === 'Possible') dream.push(processedItem)
  }

  safe.sort((a, b) => a.score - b.score)
  target.sort((a, b) => a.score - b.score)
  dream.sort((a, b) => a.score - b.score)

  let bestChoice = null
  if (target.length > 0) bestChoice = target[0]
  else if (safe.length > 0) bestChoice = safe[0]
  else if (dream.length > 0) bestChoice = dream[0]

  return { bestChoice, safe, target, dream, totalValidOptions }
}

const INDIAN_STATES = [
  'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
  'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
  'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
  'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Other'
]

export default function RankPredictor() {
  const [metadata, setMetadata] = useState(null)
  const [dataByYear, setDataByYear] = useState({})
  const [examType, setExamType] = useState('JEE Advanced')
  const [homeState, setHomeState] = useState('')
  const [year, setYear] = useState('2025')
  const [advRank, setAdvRank] = useState('')
  const [mainsRank, setMainsRank] = useState('')
  const [branchPref, setBranchPref] = useState('All')
  const [category, setCategory] = useState('General')
  const [gender, setGender] = useState('Gender-Neutral')
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState({})
  const resultsRef = useRef(null)

  const toggleGroup = (groupName) => {
    setExpandedGroups(prev => ({ ...prev, [groupName]: !prev[groupName] }))
  }

  useEffect(() => {
    document.title = 'College Predictor — College Decode'
    fetch('/data/cutoff_metadata.json')
      .then(r => r.json())
      .then(setMetadata)
      .catch(console.error)
  }, [])

  const handlePredict = useCallback(async () => {
    if (!metadata) return

    const userAdvRank = parseInt(advRank, 10)
    const userMainsRank = parseInt(mainsRank, 10)

    const activeRank = examType === 'JEE Advanced' ? userAdvRank : userMainsRank

    if (isNaN(activeRank) || activeRank < 1) {
      alert("Please enter a valid rank.")
      return
    }

    if (examType === 'JEE Main' && !homeState) {
      alert("Please select your Home State.")
      return
    }

    setIsLoading(true)

    try {
      const latestYear = Math.max(...metadata.years)
      const targetYear = (year === '2025' || year === 'AI Algo') ? latestYear : parseInt(year, 10)

      let currentYearData = dataByYear[targetYear]
      if (!currentYearData) {
        const response = await fetch(`/data/OCR_${targetYear}.json`)
        currentYearData = await response.json()
        setDataByYear(prev => ({ ...prev, [targetYear]: currentYearData }))
      }

      const eligible = currentYearData
        .filter(d => {
          if (d.year !== targetYear) return false
          if (d.category !== category) return false
          if (d.gender !== gender) return false
          if (branchPref !== 'All') {
            const rawSet = new Set(getRawBranchesForGroup(branchPref))
            if (!rawSet.has(d.branch)) return false
          }

          const isIIT = d.institute.includes('Indian Institute') && d.institute.includes('Technology') && !d.institute.includes('Information') && !d.institute.includes('Engineering Science')

          if (examType === 'JEE Advanced') {
            if (!isIIT) return false
            return true
          } else {
            if (isIIT) return false
            return true
          }
        })

      setResults({
        advRank: examType === 'JEE Advanced' ? activeRank : null,
        mainsRank: examType === 'JEE Main' ? activeRank : null,
        year: year,
        category,
        gender,
        homeState: examType === 'JEE Main' ? homeState : null,
        matches: eligible,
      })

      requestAnimationFrame(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } catch (error) {
      console.error('Error during prediction:', error)
      alert('An error occurred while fetching data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [metadata, dataByYear, examType, homeState, year, advRank, mainsRank, category, gender, branchPref])

  const { bestChoice, safe, target, dream, totalValidOptions } = useMemo(() => {
    if (!results || results.matches.length === 0) {
      return { bestChoice: null, safe: [], target: [], dream: [], totalValidOptions: 0 }
    }
    return processPredictorData(results.matches, results.advRank, results.mainsRank)
  }, [results])

  // Groups derived from metadata — shown in branch dropdown
  const availableGroups = useMemo(() => {
    if (!metadata) return []
    return getAvailableGroups(metadata.branches)
  }, [metadata])

  if (!metadata) {
    return <div className="loading"><div className="loading-spinner"></div></div>
  }

  const getBadgeFromConfidence = (conf) => {
    if (conf >= 80) return { label: 'Excellent', className: 'high' }
    if (conf >= 60) return { label: 'Good', className: 'medium' }
    return { label: 'Borderline', className: 'low' }
  }

  const renderResultItem = (item, i) => {
    const tagClass = item.category === 'Safe' ? 'tag-safe' : item.category === 'Good Chance' ? 'tag-target' : 'tag-dream'
    const emoji = item.category === 'Safe' ? '✅' : item.category === 'Good Chance' ? '⚖️' : '🎯'
    const badge = getBadgeFromConfidence(item.confidence)
    const degree   = getDegreeType(item.branch)
    const duration = getDuration(item.branch)
    const degClass = degreeCssClass(degree)

    return (
      <div className="result-item" key={`${item.institute}-${item.branch}-${i}`}>
        <div className="result-info">
          <h4>{item.institute}</h4>
          <p className="result-branch">
            {item.branch}
            <span className={`branch-badge degree-${degClass}`}>{degree}</span>
            <span className={`branch-badge duration-${duration}yr`}>{duration}-Year</span>
          </p>
          <div className="result-tags">
            <span className={`result-tag ${tagClass}`}>{emoji} {item.category}</span>
            <span className={`result-badge ${badge.className}`}>{badge.label} ({item.confidence}%)</span>
          </div>
        </div>
        <div className="result-rank">
          <div className="closing">{item.closingRank.toLocaleString()}</div>
          <div className="label">Closing Rank</div>
        </div>
      </div>
    )
  }

  const renderSection = (title, emoji, items, sectionClass, defaultLimit, groupName) => {
    if (items.length === 0) {
      return (
        <div className={`predictor-section ${sectionClass}`} key={groupName}>
          <div className="predictor-section-header">
            <span className="predictor-section-emoji">{emoji}</span>
            <span className="predictor-section-title">{title}</span>
            <span className="predictor-section-count">0</span>
          </div>
          <div style={{ padding: '1rem', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.9rem', textAlign: 'center', background: 'var(--surface-hover)', borderRadius: '8px', marginTop: '1rem' }}>
            No colleges fall directly in this category for your rank parameters.
          </div>
        </div>
      )
    }

    const isExpanded = expandedGroups[groupName]
    const displayedItems = isExpanded ? items : items.slice(0, defaultLimit)

    return (
      <div className={`predictor-section ${sectionClass}`} key={groupName}>
        <div className="predictor-section-header">
          <span className="predictor-section-emoji">{emoji}</span>
          <span className="predictor-section-title">{title}</span>
          <span className="predictor-section-count">{items.length}</span>
        </div>
        <div className="results-list">
          {displayedItems.map((item, i) => renderResultItem(item, i))}
        </div>
        {items.length > defaultLimit && (
          <button
            className="btn btn-outline"
            style={{ width: '100%', marginTop: '1rem' }}
            onClick={() => toggleGroup(groupName)}
          >
            {isExpanded ? 'Show less' : `Show ${items.length - defaultLimit} more options`}
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="animate-in">
      <h1 className="page-title">🎯 College Predictor</h1>
      <p className="page-subtitle">
        Enter your ranks to find best-fit IITs and NITs with their branches
      </p>
      <p className="trust-line">Built by IIT student for JEE aspirants</p>

      <div className="predictor-input-card card">
        <div className="section-group">
          <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Input Metrics</h3>
          <div className="predictor-form">
            <div className="form-group">
              <label htmlFor="exam-type">Exam Type</label>
              <select
                id="exam-type"
                className="filter-select"
                value={examType}
                onChange={e => {
                  setExamType(e.target.value)
                  if (e.target.value === 'JEE Advanced') setHomeState('')
                }}
              >
                <option value="JEE Advanced">JEE Advanced</option>
                <option value="JEE Main">JEE Main</option>
              </select>
            </div>

            {examType === 'JEE Advanced' ? (
              <div className="form-group">
                <label htmlFor="adv-rank-input">JEE Advanced Rank</label>
                <input
                  id="adv-rank-input"
                  type="number"
                  className="form-input"
                  placeholder="e.g. 1500"
                  value={advRank}
                  onChange={e => setAdvRank(e.target.value)}
                  min="1"
                  onKeyDown={e => e.key === 'Enter' && handlePredict()}
                />
              </div>
            ) : (
              <div className="form-group">
                <label htmlFor="mains-rank-input">JEE Mains Rank</label>
                <input
                  id="mains-rank-input"
                  type="number"
                  className="form-input"
                  placeholder="e.g. 5000"
                  value={mainsRank}
                  onChange={e => setMainsRank(e.target.value)}
                  min="1"
                  onKeyDown={e => e.key === 'Enter' && handlePredict()}
                />
              </div>
            )}

            {examType === 'JEE Main' && (
              <div className="form-group">
                <label htmlFor="home-state">Home State <span style={{ color: 'var(--primary)' }}>*</span></label>
                <select
                  id="home-state"
                  className="filter-select"
                  value={homeState}
                  onChange={e => setHomeState(e.target.value)}
                >
                  <option value="" disabled>Select State</option>
                  {INDIAN_STATES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}

            {examType === 'JEE Main' && (
              <div className="form-group" style={{ gridColumn: '1 / -1', marginTop: '-0.5rem' }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  background: 'var(--accent-glow)',
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px dashed var(--border-glow)'
                }}>
                  <span>ℹ️</span>
                  <span><strong>NITs Selection:</strong> We utilize Other State (OS) ranks for standardized predictions.</span>
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="pred-year">Prediction Year</label>
              <select
                id="pred-year"
                className="filter-select"
                value={year}
                onChange={e => setYear(e.target.value)}
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
        </div>


        <hr style={{ margin: '1.5rem 0', borderColor: 'var(--border)', opacity: 0.5 }} />

        <div className="section-group">
          <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Filters</h3>
          <div className="predictor-form">
            <div className="form-group">
              <label htmlFor="branch-pref">Branch Preference</label>
              <select
                id="branch-pref"
                className="filter-select"
                value={branchPref}
                onChange={e => setBranchPref(e.target.value)}
              >
                <option value="All">All Branches</option>
                {availableGroups.map(g => (
                  <option key={g.label} value={g.label}>
                    {g.label} — {g.degree} · {g.duration}-Year
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="pred-category">Category</label>
              <select
                id="pred-category"
                className="filter-select"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                {metadata.categories.filter(c => !c.toLowerCase().includes('pwd')).map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="pred-gender">Gender</label>
              <select
                id="pred-gender"
                className="filter-select"
                value={gender}
                onChange={e => setGender(e.target.value)}
              >
                {metadata.genders.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button
                className="btn btn-primary"
                onClick={handlePredict}
                disabled={isLoading}
                style={{ width: '100%' }}
              >
                {isLoading ? '⏳ Predicting…' : '🔍 Predict'}
              </button>
            </div>

          </div>
        </div>
      </div>

      {isLoading && (
        <div className="loading" style={{ padding: '2rem' }}>
          <div className="loading-spinner"></div>
        </div>
      )}

      <div ref={resultsRef}>
        {results && !isLoading && (
          <div className="page-with-sidebar">
            <div>
              {/* Results Summary */}
              <div className="predictor-summary">
                <div className="predictor-summary-stat">
                  <span className="summary-label">Your Rank</span>
                  <span className="summary-value">
                    {results.advRank && `Adv: ${results.advRank.toLocaleString()}`}
                    {results.advRank && results.mainsRank && ' • '}
                    {results.mainsRank && `Mains: ${results.mainsRank.toLocaleString()}`}
                  </span>
                </div>
                <div className="predictor-summary-stat">
                  <span className="summary-label">Options Found</span>
                  <span className="summary-value">{totalValidOptions}</span>
                </div>
                <div className="predictor-summary-stat">
                  <span className="summary-label">{results.homeState ? 'Category / State' : 'Category'}</span>
                  <span className="summary-value">
                    {results.category} {results.homeState && `• ${results.homeState}`}
                  </span>
                </div>
                <div className="predictor-summary-stat">
                  <span className="summary-label">Prediction Year</span>
                  <span className="summary-value">{results.year} {results.year === 'AI Algo' ? '' : 'Data'}</span>
                </div>
              </div>

              {totalValidOptions === 0 ? (
                <div className="empty-state">
                  <div className="icon">😞</div>
                  <h3>No matches found</h3>
                  <p>Your entered rank(s) don't meet the closing OCR for any eligible institute+branch combination. Try a different preference or rank.</p>
                </div>
              ) : (
                <>
                  <AdBanner type="inline" />

                  {/* Categorized Sections */}
                  {renderSection('Good Chance Options', '⚖️', target, 'section-target', 4, 'Target')}
                  {renderSection('Safe Options', '✅', safe, 'section-safe', 5, 'Safe')}
                  {renderSection('Possible Options', '🎯', dream, 'section-dream', 3, 'Dream')}

                  {/* Action Hooks */}
                  <div className="predictor-actions">
                    <Link to="/cutoffs" className="cta-card" id="predictor-cta-cutoffs">
                      <div className="cta-inner">
                        <div className="cta-text">
                          <span className="cta-icon">📈</span>
                          <span>View OCR trends for your options</span>
                        </div>
                        <span className="cta-arrow">OCR Explorer →</span>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>

            <aside>
              <AdBanner type="sidebar" />
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
