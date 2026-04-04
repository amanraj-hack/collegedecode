import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import FilterPanel from '../components/FilterPanel'
import CutoffChart from '../components/CutoffChart'
import AdBanner from '../components/ads/AdBanner'

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
      text: `Cutoff is tightening — closing rank dropped ~${pctChange}% since ${validYears[0]}`,
      subtext: 'Competition is rising. Aim for a stronger rank.',
      type: 'rising',
    }
  } else if (diff > first * 0.05) {
    return {
      emoji: '📉',
      text: `Cutoff is relaxing — closing rank rose ~${pctChange}% since ${validYears[0]}`,
      subtext: 'Slightly easier admission trend. Still prepare well.',
      type: 'falling',
    }
  }
  return {
    emoji: '➡️',
    text: `Cutoff is relatively stable over ${validYears[0]}–${validYears[validYears.length - 1]}`,
    subtext: 'Predictable admission pattern — plan accordingly.',
    type: 'stable',
  }
}

export default function CutoffExplorer() {
  const [rawData, setRawData] = useState(null)
  const [filters, setFilters] = useState({
    instituteType: '',
    institute: 'IIT Bombay',
    branch: 'Computer Science and Engineering',
    category: 'General',
    gender: 'Gender-Neutral',
    year: '',
  })

  useEffect(() => {
    document.title = 'Cutoff Insights — Collage Decode'
    fetch('/data/cutoff_data.json')
      .then(r => r.json())
      .then(setRawData)
      .catch(console.error)
  }, [])

  const handleFilterChange = useCallback((key, value) => {
    setFilters(prev => {
      const next = { ...prev, [key]: value }
      if (key === 'instituteType') {
        next.institute = ''
      }
      return next
    })
  }, [])

  const filteredInstitutes = useMemo(() => {
    if (!rawData) return []
    return rawData.institutes.filter(inst => {
      const isIIT = inst.startsWith('IIT')
      if (filters.instituteType === 'IITs') return isIIT
      if (filters.instituteType === 'NITs') return !isIIT
      return true
    })
  }, [rawData, filters.instituteType])

  const filteredData = useMemo(() => {
    if (!rawData) return []
    return rawData.cutoffs.filter(d => {
      const isIIT = d.institute.startsWith('IIT')
      if (filters.instituteType === 'IITs' && !isIIT) return false
      if (filters.instituteType === 'NITs' && isIIT) return false
      if (filters.institute && d.institute !== filters.institute) return false
      if (filters.branch && d.branch !== filters.branch) return false
      if (filters.category && d.category !== filters.category) return false
      if (filters.gender && d.gender !== filters.gender) return false
      if (filters.year && d.year !== Number(filters.year)) return false
      return true
    })
  }, [rawData, filters])

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
    return parts.join(' ') || 'All Cutoff Data'
  }, [filters])

  const yearRange = useMemo(() => {
    if (!filteredData.length) return ''
    const years = filteredData.map(d => d.year)
    const min = Math.min(...years)
    const max = Math.max(...years)
    return min === max ? `${min}` : `${min}–${max}`
  }, [filteredData])

  const insight = useMemo(() => generateInsight(filteredData), [filteredData])

  if (!rawData) {
    return <div className="loading"><div className="loading-spinner"></div></div>
  }

  return (
    <div className="animate-in">
      <h1 className="page-title">Cutoff Insights</h1>
      <p className="page-subtitle">
        Explore IIT cutoff trends to understand your chances
      </p>

      <div className="page-with-sidebar">
        <div>
          <FilterPanel
            filters={filters}
            options={{
              instituteTypes: ['IITs', 'NITs'],
              institutes: filteredInstitutes,
              branches: rawData.branches,
              categories: rawData.categories.filter(c => !c.toLowerCase().includes('pwd')),
              genders: rawData.genders,
              years: rawData.years,
            }}
            onChange={handleFilterChange}
          />

          <CutoffChart
            data={filteredData}
            title={yearRange ? `Cutoff Trend (${yearRange})` : 'Cutoff Trend'}
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
                  <div className="card-title">📋 Cutoff Data Table</div>
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
                      .map((row, i) => (
                        <tr key={i}>
                          <td>{row.year}</td>
                          <td>{row.institute}</td>
                          <td>{row.branch}</td>
                          <td>{row.category}</td>
                          <td>{row.gender}</td>
                          <td style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>{row.openingRank.toLocaleString()}</td>
                          <td style={{ fontWeight: 600, color: '#ec4899' }}>{row.closingRank.toLocaleString()}</td>
                        </tr>
                      ))}
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
