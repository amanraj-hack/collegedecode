export default function FilterPanel({ filters, options, onChange }) {
  return (
    <div className="filter-panel">
      <div className="filter-title">🔍 Refine Results</div>
      <div className="filter-grid">
        {/* Group 1: Institute selection */}
        {options.instituteTypes && (
          <div className="filter-group">
            <label htmlFor="filter-institute-type">🏛️ Institute Type</label>
            <select
              id="filter-institute-type"
              className="filter-select"
              value={filters.instituteType || ''}
              onChange={e => onChange('instituteType', e.target.value)}
            >
              <option value="">All Types</option>
              {options.instituteTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        )}

        <div className="filter-group">
          <label htmlFor="filter-institute">🏫 Institute</label>
          <select
            id="filter-institute"
            className="filter-select"
            value={filters.institute}
            onChange={e => onChange('institute', e.target.value)}
          >
            <option value="">All Institutes</option>
            {options.institutes?.map(inst => (
              <option key={inst} value={inst}>{inst}</option>
            ))}
          </select>
        </div>

        {/* Group 2: Branch */}
        <div className="filter-group">
          <label htmlFor="filter-branch">📚 Branch</label>
          <select
            id="filter-branch"
            className="filter-select"
            value={filters.branch}
            onChange={e => onChange('branch', e.target.value)}
          >
            <option value="">All Branches</option>
            {options.branches?.map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Group 3: Demographics */}
        {options.categories && (
          <div className="filter-group">
            <label htmlFor="filter-category">🏷️ Category</label>
            <select
              id="filter-category"
              className="filter-select"
              value={filters.category}
              onChange={e => onChange('category', e.target.value)}
            >
              <option value="">All Categories</option>
              {options.categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        )}

        {options.genders && (
          <div className="filter-group">
            <label htmlFor="filter-gender">👤 Gender</label>
            <select
              id="filter-gender"
              className="filter-select"
              value={filters.gender}
              onChange={e => onChange('gender', e.target.value)}
            >
              <option value="">All</option>
              {options.genders.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        )}

        {/* Group 4: Year */}
        {options.years && (
          <div className="filter-group">
            <label htmlFor="filter-year">📅 Year</label>
            <select
              id="filter-year"
              className="filter-select"
              value={filters.year}
              onChange={e => onChange('year', e.target.value)}
            >
              <option value="">All Years</option>
              {options.years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '0.75rem' }}
          onClick={() => {
            const el = document.getElementById('cutoff-insight') || document.querySelector('.chart-container')
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          📊 View OCR Trends
        </button>
      </div>
    </div>
  )
}
