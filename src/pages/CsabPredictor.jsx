import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import AdBanner from '../components/ads/AdBanner'

import { getAvailableGroups, getRawBranchesForGroup, getDegreeType, getDuration, degreeCssClass } from '../utils/branchGroups';

function processCsabPredictorData(matches, mainsRank) {
  let safe = []
  let target = []
  let dream = []
  let totalValidOptions = 0

  for (const item of matches) {
    // CSAB does not apply to IITs
    const isIIT = item.institute.includes('Indian Institute') && item.institute.includes('Technology') && !item.institute.includes('Information') && !item.institute.includes('Engineering Science')
    if (isIIT) continue

    const userRank = mainsRank
    if (!userRank) continue

    let csabClosingRank = 0
    let ratio = 0
    let categoryStr = ''
    let finalConfidence = 50

    if (item.isRealCSAB) {
      // Real CSAB data - closingRank is the actual cutoff
      csabClosingRank = item.closingRank
      ratio = userRank / csabClosingRank

      if (ratio <= 0.85) {
        categoryStr = 'Safe'
        finalConfidence = Math.round(95 - (ratio - 0.5) * 50)
        finalConfidence = Math.max(80, Math.min(95, finalConfidence))
      } else if (ratio <= 1.0) {
        categoryStr = 'Good Chance'
        finalConfidence = Math.round(80 - (ratio - 0.85) * 100)
        finalConfidence = Math.max(60, Math.min(80, finalConfidence))
      } else if (ratio <= 1.15) {
        categoryStr = 'Possible'
        finalConfidence = Math.round(60 - (ratio - 1.0) * 200)
        finalConfidence = Math.max(30, Math.min(60, finalConfidence))
      } else {
        continue
      }
    } else {
      // Simulate CSAB Special Round leniency by increasing the JoSAA closing rank by 15%
      csabClosingRank = item.closingRank * 1.15
      const adjustedClosingRank = csabClosingRank * 1.05
      ratio = userRank / adjustedClosingRank

      if (ratio <= 0.85) categoryStr = 'Safe'
      else if (ratio <= 1.05) categoryStr = 'Good Chance'
      else if (ratio <= 1.25) categoryStr = 'Possible'
      else continue

      let baseConfidence = (adjustedClosingRank / userRank) * 100
      baseConfidence = Math.max(30, Math.min(95, baseConfidence))

      finalConfidence = baseConfidence
      if (categoryStr === 'Safe') finalConfidence = Math.max(80, Math.min(95, baseConfidence))
      else if (categoryStr === 'Good Chance') finalConfidence = Math.max(60, Math.min(80, baseConfidence))
      else if (categoryStr === 'Possible') finalConfidence = Math.max(30, Math.min(60, baseConfidence))
    }

    totalValidOptions++
    const score = Math.abs(userRank - csabClosingRank)

    const processedItem = {
      ...item,
      category: categoryStr,
      confidence: Math.round(finalConfidence),
      simulatedClosingRank: Math.round(csabClosingRank),
      score
    }

    if (categoryStr === 'Safe') safe.push(processedItem)
    else if (categoryStr === 'Good Chance') target.push(processedItem)
    else if (categoryStr === 'Possible') dream.push(processedItem)
  }

  // Sort options by lowest (best) simulated closing rank first
  safe.sort((a, b) => a.simulatedClosingRank - b.simulatedClosingRank)
  target.sort((a, b) => a.simulatedClosingRank - b.simulatedClosingRank)
  dream.sort((a, b) => a.simulatedClosingRank - b.simulatedClosingRank)

  let bestChoice = null
  if (target.length > 0) bestChoice = target[0]
  else if (safe.length > 0) bestChoice = safe[0]
  else if (dream.length > 0) bestChoice = dream[0]

  return { bestChoice, safe, target, dream, totalValidOptions }
}

function getInstituteState(name) {
  const lowercase = name.toLowerCase();
  if (lowercase.includes('jalandhar')) return 'Punjab';
  if (lowercase.includes('jaipur')) return 'Rajasthan';
  if (lowercase.includes('bhopal')) return 'Madhya Pradesh';
  if (lowercase.includes('allahabad')) return 'Uttar Pradesh';
  if (lowercase.includes('agartala')) return 'Tripura';
  if (lowercase.includes('arunachal')) return 'Arunachal Pradesh';
  if (lowercase.includes('calicut')) return 'Kerala';
  if (lowercase.includes('delhi')) return 'Delhi';
  if (lowercase.includes('durgapur')) return 'West Bengal';
  if (lowercase.includes('goa')) return 'Goa';
  if (lowercase.includes('hamirpur')) return 'Himachal Pradesh';
  if (lowercase.includes('surathkal') || lowercase.includes('karnataka')) return 'Karnataka';
  if (lowercase.includes('meghalaya')) return 'Meghalaya';
  if (lowercase.includes('nagaland')) return 'Nagaland';
  if (lowercase.includes('patna')) return 'Bihar';
  if (lowercase.includes('puducherry')) return 'Puducherry';
  if (lowercase.includes('raipur')) return 'Chhattisgarh';
  if (lowercase.includes('sikkim')) return 'Sikkim';
  if (lowercase.includes('andhra')) return 'Andhra Pradesh';
  if (lowercase.includes('jamshedpur')) return 'Jharkhand';
  if (lowercase.includes('kurukshetra')) return 'Haryana';
  if (lowercase.includes('manipur')) return 'Manipur';
  if (lowercase.includes('mizoram')) return 'Mizoram';
  if (lowercase.includes('rourkela')) return 'Odisha';
  if (lowercase.includes('silchar')) return 'Assam';
  if (lowercase.includes('srinagar')) return 'Jammu and Kashmir';
  if (lowercase.includes('tiruchirappalli') || lowercase.includes('trichy')) return 'Tamil Nadu';
  if (lowercase.includes('uttarakhand')) return 'Uttarakhand';
  if (lowercase.includes('warangal')) return 'Telangana';
  if (lowercase.includes('surat')) return 'Gujarat';
  if (lowercase.includes('nagpur')) return 'Maharashtra';
  if (lowercase.includes('shibpur')) return 'West Bengal';
  return 'Other';
}

function mapCsabBranchToJosaa(csabBranch) {
  let clean = csabBranch.split(' (')[0].trim();
  if (clean === 'Bio Technology') return 'Bio Technology';
  if (clean === 'CSE ( Data Science & Analytics)') return 'Data Science and Engineering';
  if (clean === 'Computer Science and Engineering for DASA-CIWG') return 'Computer Science and Engineering';
  if (clean === 'Integrated B. Tech.(IT) and M. Tech (IT)') return 'B. Tech. and M.Tech in CSE)';
  if (clean === 'Integrated B. Tech.(IT) and MBA') return 'B.Tech - MBA)';
  return clean;
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

export default function CsabPredictor() {
  const [metadata, setMetadata] = useState(null)
  const [dataByYear, setDataByYear] = useState({})
  const [homeState, setHomeState] = useState('')
  const [year, setYear] = useState('2025')
  const [mainsRank, setMainsRank] = useState('')
  const [branchPref, setBranchPref] = useState('All')
  const [category, setCategory] = useState('General')
  const [gender, setGender] = useState('Gender-Neutral')
  const [isLoading, setIsLoading] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState({});
  const [results, setResults] = useState(null)
  const toggleGroup = (groupName) => setExpandedGroups(prev => ({ ...prev, [groupName]: !prev[groupName] }));

  const resultsRef = useRef(null)


  useEffect(() => {
    document.title = 'CSAB Special Round Predictor — College Decode'
    fetch('/data/cutoff_metadata.json')
      .then(r => r.json())
      .then(setMetadata)
      .catch(console.error)
  }, [])

  const handlePredict = useCallback(async () => {
    if (!metadata) return

    const userMainsRank = parseInt(mainsRank, 10)

    if (isNaN(userMainsRank) || userMainsRank < 1) {
      alert("Please enter a valid JEE Main rank.")
      return
    }

    if (!homeState) {
      alert("Please select your Home State.")
      return
    }

    setIsLoading(true)

    try {
      const latestYear = Math.max(...metadata.years)
      const targetYear = (year === '2025' || year === 'AI Algo') ? latestYear : parseInt(year, 10)

      let currentYearData = dataByYear[targetYear]
      if (!currentYearData) {
        if (targetYear === 2025) {
          // Fetch real 2025 CSAB data for NITs and IIITs with fallback
          let csabDataFetched = false;
          try {
            const [resNit, resIiit] = await Promise.all([
              fetch('/data/csab_nit_y25_r3.json').then(r => r.json()),
              fetch('/data/csab_iiit_y25_r3.json').then(r => r.json())
            ]);
            const merged = [...(resNit.data || []), ...(resIiit.data || [])];
            currentYearData = merged.map(item => ({
              institute: item.Institute,
              branch: mapCsabBranchToJosaa(item["Academic Program Name"]),
              quota: item.Quota,
              category: item["Seat Type"] === 'OPEN' ? 'General' : item["Seat Type"],
              gender: item.Gender === 'Female-only (including Supernumerary)' ? 'Female-Only' : item.Gender,
              openingRank: parseInt(item["Opening Rank"], 10) || 0,
              closingRank: parseInt(item["Closing Rank"], 10) || 0,
              year: 2025,
              isRealCSAB: true
            }));
            csabDataFetched = true;
          } catch (e) {
            console.warn('Failed to fetch CSAB data, falling back to JoSAA OCR:', e);
          }
          if (!csabDataFetched) {
            // Fallback to JoSAA OCR data and simulate CSAB leniency
            const response = await fetch(`/data/OCR_${targetYear}.json`);
            currentYearData = await response.json();
          }
        } else {
          // Fallback to JoSAA OCR data and simulate CSAB leniency
          const response = await fetch(`/data/OCR_${targetYear}.json`)
          currentYearData = await response.json()
        }
        setDataByYear(prev => ({ ...prev, [targetYear]: currentYearData }))
      }

      const eligible = currentYearData
        .filter(d => {
          if (d.year !== targetYear) return false
          if (d.category !== category) return false

          // Gender matching
          if (gender === 'Female-Only') {
            if (d.gender !== 'Female-Only' && d.gender !== 'Gender-Neutral') return false
          } else {
            if (d.gender !== 'Gender-Neutral') return false
          }

          if (branchPref !== 'All') {
            const rawSet = new Set(getRawBranchesForGroup(branchPref))
            if (!rawSet.has(d.branch)) return false
          }

          if (d.isRealCSAB) {
            // CSAB Quota Matching logic for NITs and IIITs
            const instState = getInstituteState(d.institute)
            const isHomeState = instState === homeState

            if (d.institute.includes('Information Technology') || d.institute.includes('IIIT')) {
              // IIITs are mostly All India, but support HS/OS fallback
              if (d.quota !== 'All India') {
                if (isHomeState) {
                  if (d.quota !== 'Home State' && d.quota !== 'All India') return false
                } else {
                  if (d.quota !== 'Other State' && d.quota !== 'All India') return false
                }
              }
            } else {
              // NITs
              if (isHomeState) {
                if (d.quota !== 'Home State' && d.quota !== 'All India') return false
              } else {
                if (d.quota !== 'Other State' && d.quota !== 'All India') return false
              }
            }
          } else {
            // JoSAA simulation (Exclude IITs)
            const isIIT = d.institute.includes('Indian Institute') && d.institute.includes('Technology') && !d.institute.includes('Information') && !d.institute.includes('Engineering Science')
            if (isIIT) return false
          }

          return true
        })

      setResults({
        mainsRank: userMainsRank,
        year: year,
        category,
        gender,
        homeState: homeState,
        matches: eligible,
      })

      requestAnimationFrame(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } catch (error) {
      console.error('Error during CSAB prediction:', error)
      alert('An error occurred while fetching CSAB data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }, [metadata, dataByYear, homeState, year, mainsRank, category, gender, branchPref])

  const { safe, target, dream } = useMemo(() => {
    if (!results || results.matches.length === 0) {
      return { bestChoice: null, safe: [], target: [], dream: [] }
    }
    return processCsabPredictorData(results.matches, results.mainsRank)
  }, [results])

  const totalValidOptions = results?.matches?.length || 0;

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
    const degree = getDegreeType(item.branch)
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
            {item.isRealCSAB && (
              <span className="branch-badge" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.2)', fontWeight: 600 }}>
                Round 3
              </span>
            )}
          </div>
        </div>
        <div className="result-rank">
          <div className="closing">{item.simulatedClosingRank.toLocaleString()}</div>
          <div className="label">CSAB Closing Rank</div>
          {!item.isRealCSAB && (
            <div className="sub-label" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
              JoSAA Closing: {item.closingRank.toLocaleString()}
            </div>
          )}
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
      {/* Dynamic Top Tabs Switcher */}
      <div className="top-tabs">
        <Link
          to="/predict"
          className="tab"
        >
          🎯 JoSAA
        </Link>
        <div className="tab active">
          🚀 CSAB
        </div>
      </div>

      <h1 className="page-title">🚀 CSAB Special Round Predictor</h1>
      <p className="page-subtitle">
        Enter your rank to find best-fit NITs, IIITs, and GFTIs in CSAB vacant seat rounds
      </p>
      <p className="data-note" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Using 2025 CSAB data</p>
      <p className="trust-line">Built by IIT student for JEE aspirants</p>

      <div className="predictor-input-card card">
        <div className="section-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, color: 'var(--text-secondary)' }}>Input Metrics</h3>
            <span style={{
              fontSize: '0.7rem',
              color: 'var(--accent-primary)',
              background: 'rgba(99, 102, 241, 0.1)',
              padding: '0.2rem 0.5rem',
              borderRadius: '20px',
              fontWeight: 600,
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
              JEE Main Only
            </span>
          </div>

          <div className="predictor-form">
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label htmlFor="mains-rank-input">JEE Mains Common Rank (CRL)</label>
              <input
                id="mains-rank-input"
                type="number"
                className="form-input"
                placeholder="e.g. 15000"
                value={mainsRank}
                onChange={e => setMainsRank(e.target.value)}
                min="1"
                onKeyDown={e => e.key === 'Enter' && handlePredict()}
              />
            </div>

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
          </div>
        </div>

        <div className="form-group" style={{ marginTop: '0.5rem' }}>
          <div style={{
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            background: 'var(--accent-glow)',
            padding: '0.5rem 0.75rem',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            border: '1px dashed var(--border-glow)'
          }}>
            <span>ℹ️</span>
            <span><strong>CSAB Info:</strong> CSAB special rounds occur post-JoSAA.</span>
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
                {isLoading ? '⏳ Simulating…' : '🔍 Predict CSAB'}
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
                  <span className="summary-label">Your JEE Main Rank</span>
                  <span className="summary-value">
                    {results.mainsRank.toLocaleString()}
                  </span>
                </div>
                <div className="predictor-summary-stat">
                  <span className="summary-label">Vacant Options Found</span>
                  <span className="summary-value">{totalValidOptions}</span>
                </div>
                <div className="predictor-summary-stat">
                  <span className="summary-label">Category / State</span>
                  <span className="summary-value">
                    {results.category} • {results.homeState}
                  </span>
                </div>
                <div className="predictor-summary-stat">
                  <span className="summary-label">Simulation Year</span>
                  <span className="summary-value">{results.year} CSAB</span>
                </div>
              </div>

              {totalValidOptions === 0 ? (
                <div className="empty-state">
                  <div className="icon">😞</div>
                  <h3>No matches found in CSAB Rounds</h3>
                  <p>Even with CSAB vacancy leniency, your entered rank does not meet the closing thresholds for any NIT/IIIT branch. Try widening your branch preferences or checking JoSAA options.</p>
                </div>
              ) : (
                <>
                  <AdBanner type="inline" />

                  {/* Categorized Sections */}
                  {renderSection('CSAB Good Chance Options', '⚖️', target, 'section-target', 4, 'Target')}
                  {renderSection('CSAB Safe Options', '✅', safe, 'section-safe', 5, 'Safe')}
                  {renderSection('CSAB Possible Options', '🎯', dream, 'section-dream', 3, 'Dream')}

            
                  {/* Action Hooks */}
                  <div className="predictor-actions" style={{ marginTop: '2rem' }}>
                    <Link to="/predict" className="cta-card" id="predictor-cta-josaa-bottom" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(139,92,246,0.06) 100%)' }}>
                      <div className="cta-inner">
                        <div className="cta-text">
                          <span className="cta-icon">🎯</span>
                          <span>Need to re-check regular rounds? View JoSAA College Predictor</span>
                        </div>
                        <span className="cta-arrow">JoSAA Predictor →</span>
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
