import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function PlacementChart({ data, title }) {
  if (!data || data.length === 0) {
    return (
      <div className="no-data">
        <p>📊 Select filters above to view placement statistics</p>
      </div>
    )
  }

  const years = [...new Set(data.map(d => d.year))].sort()

  const chartData = {
    labels: years.map(String),
    datasets: [
      {
        label: 'Average Package (LPA)',
        data: years.map(y => data.find(d => d.year === y)?.avgPackage || 0),
        backgroundColor: 'rgba(99, 102, 241, 0.7)',
        borderColor: '#6366f1',
        borderWidth: 1,
        borderRadius: 6,
      },
      {
        label: 'Median Package (LPA)',
        data: years.map(y => data.find(d => d.year === y)?.medianPackage || 0),
        backgroundColor: 'rgba(139, 92, 246, 0.7)',
        borderColor: '#8b5cf6',
        borderWidth: 1,
        borderRadius: 6,
      },
      {
        label: 'Highest Package (LPA)',
        data: years.map(y => data.find(d => d.year === y)?.highestPackage || 0),
        backgroundColor: 'rgba(236, 72, 153, 0.7)',
        borderColor: '#ec4899',
        borderWidth: 1,
        borderRadius: 6,
      }
    ]
  }

  const options = {
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
          padding: window.innerWidth < 640 ? 8 : 20,
          font: { family: 'Inter', size: window.innerWidth < 640 ? 10 : 12 },
          boxWidth: window.innerWidth < 640 ? 8 : 40
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
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ₹${ctx.parsed.y} LPA`
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
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: {
          color: '#64748b',
          font: { family: 'Inter', size: 12 },
          callback: (val) => `₹${val}`
        },
        border: { color: 'rgba(255,255,255,0.08)' },
        title: {
          display: true,
          text: 'Package (LPA)',
          color: '#64748b',
          font: { family: 'Inter', size: 11 }
        }
      }
    }
  }

  return (
    <div className="chart-container animate-in">
      {title && (
        <h3 className="chart-title-text" style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#f1f5f9', textAlign: 'center' }}>
          {title}
        </h3>
      )}
      <div className="chart-wrapper">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}
