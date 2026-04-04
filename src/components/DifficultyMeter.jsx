export default function DifficultyMeter({ difficulty }) {
  const items = [
    { label: 'Mathematical Difficulty', value: difficulty.mathematical * 2, icon: '📐' },
    { label: 'Programming Difficulty', value: difficulty.programming * 2, icon: '💻' },
    { label: 'Workload Level', value: difficulty.workload * 2, icon: '📚' },
  ]

  const getColor = (value) => {
    if (value <= 4) return '#22c55e'
    if (value <= 6) return '#f59e0b'
    if (value <= 8) return '#f97316'
    return '#ef4444'
  }

  const getLabel = (value) => {
    if (value <= 2) return 'Very Low'
    if (value <= 4) return 'Low'
    if (value <= 6) return 'Moderate'
    if (value <= 8) return 'High'
    return 'Very High'
  }

  return (
    <div className="difficulty-meters">
      {items.map((item, i) => (
        <div key={i} className="difficulty-item">
          <div className="difficulty-label">
            <span>{item.icon} {item.label}</span>
            <span className="difficulty-text" style={{ color: getColor(item.value) }}>
              {getLabel(item.value)} ({item.value}/10)
            </span>
          </div>
          <div className="difficulty-bar-track">
            <div
              className="difficulty-bar-fill"
              style={{
                width: `${(item.value / 10) * 100}%`,
                background: `linear-gradient(90deg, ${getColor(item.value)}88, ${getColor(item.value)})`,
              }}
            ></div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
              <div
                key={n}
                className={`difficulty-dot${n <= item.value ? ' active' : ''}`}
                style={{
                  left: `${((n - 0.5) / 10) * 100}%`,
                  background: n <= item.value ? getColor(item.value) : 'rgba(255,255,255,0.1)',
                }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
