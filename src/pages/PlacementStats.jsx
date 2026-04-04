import { useState, useEffect, useMemo } from 'react'
import FilterPanel from '../components/FilterPanel'
import PlacementChart from '../components/PlacementChart'
import AdBanner from '../components/ads/AdBanner'

export default function PlacementStats() {
  const [rawData, setRawData] = useState(null)
  const [filters, setFilters] = useState({
    institute: 'IIT Bombay',
    branch: 'Computer Science and Engineering',
    year: '',
  })

  useEffect(() => {
    document.title = 'Placement Statistics — Collage Decode'
    fetch('/data/placement_data.json')
      .then(r => r.json())
      .then(setRawData)
      .catch(console.error)
  }, [])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const institutes = useMemo(() => {
    if (!rawData) return []
    return [...new Set(rawData.map(d => d.institute))]
  }, [rawData])

  const branches = useMemo(() => {
    if (!rawData) return []
    return [...new Set(rawData.map(d => d.branch))]
  }, [rawData])

  const years = useMemo(() => {
    if (!rawData) return []
    return [...new Set(rawData.map(d => d.year))].sort()
  }, [rawData])

  const filteredData = useMemo(() => {
    if (!rawData) return []
    return rawData.filter(d => {
      if (filters.institute && d.institute !== filters.institute) return false
      if (filters.branch && d.branch !== filters.branch) return false
      if (filters.year && d.year !== Number(filters.year)) return false
      return true
    })
  }, [rawData, filters])

  const latestStats = useMemo(() => {
    if (filteredData.length === 0) return null
    const sorted = [...filteredData].sort((a, b) => b.year - a.year)
    return sorted[0]
  }, [filteredData])

  const chartTitle = useMemo(() => {
    const parts = []
    if (filters.institute) parts.push(filters.institute)
    if (filters.branch) parts.push(filters.branch)
    return parts.length ? `${parts.join(' — ')} Placement Trends` : 'Placement Trends'
  }, [filters])

  if (!rawData) {
    return <div className="loading"><div className="loading-spinner"></div></div>
  }

  return (
    <div className="animate-in">
      <h1 className="page-title">Placement Statistics</h1>
      <p className="page-subtitle">
        Branch-wise placement data across India's top IITs
      </p>

      <div className="page-with-sidebar">
        <div>
          <FilterPanel
            filters={filters}
            options={{ institutes, branches, years }}
            onChange={handleFilterChange}
          />

          {latestStats && (
            <div className="placement-grid">
              <div className="placement-stat">
                <div className="value green">₹{latestStats.avgPackage} L</div>
                <div className="label">Avg Package</div>
              </div>
              <div className="placement-stat">
                <div className="value blue">₹{latestStats.medianPackage} L</div>
                <div className="label">Median Package</div>
              </div>
              <div className="placement-stat">
                <div className="value purple">₹{latestStats.highestPackage} L</div>
                <div className="label">Highest Package</div>
              </div>
              <div className="placement-stat">
                <div className="value orange">{latestStats.placementPercentage}%</div>
                <div className="label">Placed</div>
              </div>
            </div>
          )}

          <PlacementChart data={filteredData} title={chartTitle} />

          <AdBanner type="inline" />

          {filteredData.length > 0 && (
            <div className="card">
              <div className="card-header">
                <div>
                  <div className="card-title">📋 Placement Data Table</div>
                  <div className="card-subtitle">{filteredData.length} records</div>
                </div>
              </div>
              <div className="data-table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Institute</th>
                      <th>Branch</th>
                      <th>Avg (LPA)</th>
                      <th>Median (LPA)</th>
                      <th>Highest (LPA)</th>
                      <th>Placed %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.sort((a, b) => b.year - a.year).map((row, i) => (
                      <tr key={i}>
                        <td>{row.year}</td>
                        <td>{row.institute}</td>
                        <td>{row.branch}</td>
                        <td style={{ color: '#22c55e', fontWeight: 600 }}>₹{row.avgPackage}</td>
                        <td style={{ color: '#3b82f6', fontWeight: 600 }}>₹{row.medianPackage}</td>
                        <td style={{ color: '#8b5cf6', fontWeight: 600 }}>₹{row.highestPackage}</td>
                        <td style={{ color: '#f59e0b', fontWeight: 600 }}>{row.placementPercentage}%</td>
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
