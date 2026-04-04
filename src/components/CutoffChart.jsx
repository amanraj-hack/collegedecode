import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function CutoffChart({ data, title, subtitle }) {
  const chartConfig = useMemo(() => {
    if (!data || data.length === 0) return null

    const years = [...new Set(data.map(d => d.year))].sort()

    const openingRanks = years.map(y => {
      const entry = data.find(d => d.year === y)
      return entry ? entry.openingRank : null
    })

    const closingRanks = years.map(y => {
      const entry = data.find(d => d.year === y)
      return entry ? entry.closingRank : null
    })

    const isSmall = typeof window !== 'undefined' && window.innerWidth < 640

    return {
      data: {
        labels: years.map(String),
        datasets: [
          {
            label: 'Opening Rank',
            data: openingRanks,
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            fill: false,
            tension: 0.35,
            pointRadius: 5,
            pointHoverRadius: 8,
            pointBackgroundColor: '#6366f1',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            borderWidth: 2.5,
            borderDash: [6, 3],
          },
          {
            label: 'Closing Rank',
            data: closingRanks,
            borderColor: '#ec4899',
            backgroundColor: 'rgba(236, 72, 153, 0.1)',
            fill: true,
            tension: 0.35,
            pointRadius: 5,
            pointHoverRadius: 8,
            pointBackgroundColor: '#ec4899',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            borderWidth: 2.5,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#94a3b8',
              usePointStyle: true,
              padding: isSmall ? 8 : 20,
              font: { family: 'Inter', size: isSmall ? 10 : 12 },
              boxWidth: isSmall ? 8 : 40
            }
          },
          title: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(17, 24, 39, 0.95)',
            titleColor: '#f1f5f9',
            bodyColor: '#94a3b8',
            borderColor: 'rgba(99, 102, 241, 0.3)',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
            titleFont: { family: 'Inter', weight: '600' },
            bodyFont: { family: 'Inter' },
            displayColors: true,
            callbacks: {
              title: (items) => `Year ${items[0]?.label}`,
              label: (ctx) => ` ${ctx.dataset.label}: Rank ${ctx.parsed.y?.toLocaleString()}`
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.04)' },
            ticks: { color: '#64748b', font: { family: 'Inter', size: 12 } },
            border: { color: 'rgba(255,255,255,0.08)' }
          },
          y: {
            reverse: true,
            grid: { color: 'rgba(255,255,255,0.04)' },
            ticks: {
              color: '#64748b',
              font: { family: 'Inter', size: 12 },
              callback: (val) => val.toLocaleString()
            },
            border: { color: 'rgba(255,255,255,0.08)' },
            title: {
              display: true,
              text: 'Rank (lower is better)',
              color: '#64748b',
              font: { family: 'Inter', size: 11 }
            }
          }
        }
      }
    }
  }, [data])

  if (!chartConfig) {
    return null
  }

  return (
    <div className="chart-container animate-in">
      {title && (
        <h3 className="chart-title-text" style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.15rem', color: 'var(--text-primary)', textAlign: 'center' }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '1rem', lineHeight: 1.4 }}>
          {subtitle}
        </p>
      )}
      <div className="chart-wrapper">
        <Line data={chartConfig.data} options={chartConfig.options} />
      </div>
    </div>
  )
}
