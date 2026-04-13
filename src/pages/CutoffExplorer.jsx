import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import FilterPanel from '../components/FilterPanel'
import CutoffChart from '../components/CutoffChart'
import AdBanner from '../components/ads/AdBanner'
import {
  getDegreeType,
  getDuration,
  degreeCssClass,
} from '../utils/branchGroups'

function generateInsight(data) {
  if (!data || data.length < 2) return null

  const sorted = [...data].sort((a, b) => a.year - b.year)
  const years = [...new Set(sorted.map(d => d.year))].sort()
  if (years.length < 2) return null

  const closingByYear = {}
  years.forEach(y => {
    const entry = sorted.find(d => d.year === y)
    if (entry) closingByYear[y] = entry.closingRank
  })

  const validYears = years.filter(y => closingByYear[y] != null)
  if (validYears.length < 2) return null

  const first = closingByYear[validYears[0]]
  const last = closingByYear[validYears[validYears.length - 1]]
  const diff = last - first
  const pctChange = Math.abs((diff / first) * 100).toFixed(0)

  if (diff < -first * 0.05) {
    return {
      emoji: '📈',
      text: `OCR is tightening — closing rank dropped ~${pctChange}% since ${validYears[0]}`,
      subtext: 'Competition is rising. Aim for a stronger rank.',
      type: 'rising',
    }
  } else if (diff > first * 0.05) {
    return {
      emoji: '📉',
      text: `OCR is relaxing — closing rank rose ~${pctChange}% since ${validYears[0]}`,
      subtext: 'Slightly easier admission trend. Still prepare well.',
      type: 'falling',
    }
  }
  return {
    emoji: '➡️',
    text: `OCR is relatively stable over ${validYears[0]}–${validYears[validYears.length - 1]}`,
    subtext: 'Predictable admission pattern — plan accordingly.',
    type: 'stable',
  }
}

export default function CutoffExplorer() {
  const [metadata, setMetadata] = useState(null)
  const [dataByYear, setDataByYear] = useState({})
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [filters, setFilters] = useState({
    instituteType: '',
    institute: 'Indian Institute  of Technology Bombay',
    branch: 'Computer Science and Engineering',
    category: 'General',
    gender: 'Gender-Neutral',
  })

  useEffect(() => {
    document.title = 'OCR Insights — College Decode'
    fetch('/data/cutoff_metadata.json')
      .then(r => r.json())
      .then(setMetadata)
      .catch(console.error)
  }, [])

  // Optimized fetching logic: fetch all metadata years
  useEffect(() => {
    if (!metadata) return

    const yearsToFetch = metadata.years
    const missingYears = yearsToFetch.filter(y => !dataByYear[y])

    if (missingYears.length > 0) {
      setIsDataLoading(true)
      Promise.all(missingYears.map(y =>
        fetch(`/data/OCR_${y}.json`).then(r => r.json().then(data => ({ year: y, data })))
      ))
        .then(results => {
          setDataByYear(prev => {
            const next = { ...prev }
            results.forEach(res => {
              next[res.year] = res.data
            })
            return next
          })
        })
        .catch(console.error)
        .finally(() => setIsDataLoading(false))
    }
  }, [metadata])

  const handleFilterChange = useCallback((key, value) => {
    setFilters(prev => {
      const next = { ...prev, [key]: value }
      if (key === 'instituteType') {
        next.institute = ''
        // Clear branch when institute type changes
        next.branch = ''
      }
      if (key === 'institute' && prev.institute !== value) {
        // Clear branch when a new institute is selected
        next.branch = ''
      }
      return next
    })
  }, [])

  const filteredInstitutes = useMemo(() => {
    if (!metadata) return []
    return metadata.institutes.filter(inst => {
      const isIIT = inst.includes('Indian Institute') && inst.includes('Technology') && !inst.includes('Engineering Science')
      if (filters.instituteType === 'IITs') return isIIT
      if (filters.instituteType === 'NITs') return !isIIT
      return true
    })
  }, [metadata, filters.instituteType])

  const allRecords = useMemo(() => {
    if (!metadata) return []
    const targetYears = metadata.years
    let records = []
    targetYears.forEach(y => {
      if (dataByYear[y]) {
        records = records.concat(dataByYear[y])
      }
    })
    return records
  }, [metadata, dataByYear])

  const availableBranches = useMemo(() => {
    if (!metadata) return []
    if (!filters.institute) return metadata.branches

    const branchesSet = new Set()
    allRecords.forEach(d => {
      if (d.institute === filters.institute) {
        branchesSet.add(d.branch)
      }
    })
    const branches = Array.from(branchesSet).sort()
    return branches.length > 0 ? branches : metadata.branches
  }, [allRecords, filters.institute, metadata])

  const filteredData = useMemo(() => {
    return allRecords.filter(d => {
      const isIIT = d.institute.includes('Indian Institute') && d.institute.includes('Technology') && !d.institute.includes('Engineering Science')
      if (filters.instituteType === 'IITs' && !isIIT) return false
      if (filters.instituteType === 'NITs' && isIIT) return false
      if (filters.institute && d.institute !== filters.institute) return false
      if (filters.branch && d.branch !== filters.branch) return false
      if (filters.category && d.category !== filters.category) return false
      if (filters.gender && d.gender !== filters.gender) return false
      return true
    })
  }, [allRecords, filters])

  const chartTitle = useMemo(() => {
    const parts = []
    if (filters.institute) {
      parts.push(filters.institute)
    } else if (filters.instituteType) {
      parts.push(`All ${filters.instituteType}`)
    }
    if (filters.branch) parts.push(filters.branch)
    if (filters.category) parts.push(`(${filters.category})`)
    if (filters.gender) parts.push(`— ${filters.gender}`)
    return parts.join(' ') || 'All OCR Data'
  }, [filters])

  const yearRange = useMemo(() => {
    if (!filteredData.length) return ''
    const years = filteredData.map(d => d.year)
    const min = Math.min(...years)
    const max = Math.max(...years)
    return min === max ? `${min}` : `${min}–${max}`
  }, [filteredData])

  const insight = useMemo(() => generateInsight(filteredData), [filteredData])

  if (!metadata) {
    return <div className="loading"><div className="loading-spinner"></div></div>
  }

  return (
    <div className="animate-in">
      <h1 className="page-title">OCR Insights</h1>
      <p className="page-subtitle">
        Explore IIT & NIT opening & closing rank trends to understand your chances
      </p>

      <div className="page-with-sidebar">
        <div>
          <FilterPanel
            filters={filters}
            options={{
              instituteTypes: ['IITs', 'NITs'],
              institutes: filteredInstitutes,
              branches: availableBranches,
              categories: metadata.categories.filter(c => !c.toLowerCase().includes('pwd')),
              genders: metadata.genders,
            }}
            onChange={handleFilterChange}
          />

          {isDataLoading && (
            <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--text-secondary)' }}>
              ⏳ Loading years...
            </div>
          )}

          <CutoffChart
            data={filteredData}
            title={yearRange ? `OCR Trend (${yearRange})` : 'OCR Trend'}
            subtitle={chartTitle}
          />

          {insight && (
            <div className={`insight-box insight-${insight.type}`} id="cutoff-insight">
              <div className="insight-icon">{insight.emoji}</div>
              <div className="insight-content">
                <div className="insight-text">{insight.text}</div>
                <div className="insight-subtext">{insight.subtext}</div>
              </div>
            </div>
          )}

          <AdBanner type="inline" />

          <Link to="/predict" className="cta-card" id="cutoff-cta-predictor">
            <div className="cta-inner">
              <div className="cta-text">
                <span className="cta-icon">🎯</span>
                <span>Check what you can get with your rank</span>
              </div>
              <span className="cta-arrow">Go to College Predictor →</span>
            </div>
          </Link>

          {filteredData.length > 0 && (
            <div className="card">
              <div className="card-header">
                <div>
                  <div className="card-title">📋 Data Table</div>
                  <div className="card-subtitle">{filteredData.length} records found</div>
                </div>
              </div>
              <div className="data-table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Institute</th>
                      <th>Branch</th>
                      <th>Category</th>
                      <th>Gender</th>
                      <th>Opening Rank</th>
                      <th>Closing Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData
                      .sort((a, b) => b.year - a.year)
                      .map((row, i) => {
                        const degree   = getDegreeType(row.branch)
                        const duration = getDuration(row.branch)
                        const degClass = degreeCssClass(degree)
                        return (
                          <tr key={i}>
                            <td>{row.year}</td>
                            <td>{row.institute}</td>
                            <td>
                              <span>{row.branch}</span>
                              <span className={`branch-badge degree-${degClass}`} style={{ marginLeft:'0.35rem' }}>{degree}</span>
                              <span className={`branch-badge duration-${duration}yr`} style={{ marginLeft:'0.2rem' }}>{duration}-Yr</span>
                            </td>
                            <td>{row.category}</td>
                            <td>{row.gender}</td>
                            <td style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>{row.openingRank.toLocaleString()}</td>
                            <td style={{ fontWeight: 600, color: '#ec4899' }}>{row.closingRank.toLocaleString()}</td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <aside>
          <AdBanner type="sidebar" />
        </aside>
      </div>
    </div>
  )
}
