import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler
} from 'chart.js'
import DifficultyMeter from '../components/DifficultyMeter'
import BranchQuiz from '../components/BranchQuiz'
import AdBanner from '../components/ads/AdBanner'

ChartJS.register(
  CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler
)

export default function BranchDetail() {
  const { slug } = useParams()
  const [branch, setBranch] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    fetch('/data/branches_data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.branches.find(b => b.slug === slug)
        setBranch(found)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <div className="loading" style={{ padding: '4rem', textAlign: 'center' }}>Loading branch details...</div>
  if (!branch) return <div className="error" style={{ padding: '4rem', textAlign: 'center' }}>Branch not found. <Link to="/branches" style={{ color: '#6366f1' }}>Go back</Link></div>

  const salaryData = {
    labels: branch.salary.map(s => s.year.toString()),
    datasets: [
      {
        label: 'Average (LPA)',
        data: branch.salary.map(s => s.avg),
        backgroundColor: `${branch.color}88`,
        borderColor: branch.color,
        borderWidth: 1,
        borderRadius: 4
      },
      {
        label: 'Median (LPA)',
        data: branch.salary.map(s => s.median),
        backgroundColor: '#94a3b888',
        borderColor: '#94a3b8',
        borderWidth: 1,
        borderRadius: 4
      }
    ]
  }

  const syllabusChartData = {
    labels: branch.syllabus.map(s => `Sem ${s.semester}`),
    datasets: [
      {
        label: 'Number of Subjects',
        data: branch.syllabus.map(s => s.subjects.length),
        backgroundColor: `${branch.color}aa`,
        borderColor: branch.color,
        borderWidth: 1,
        borderRadius: 6,
        barPercentage: 0.6,
      }
    ]
  }



  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: '#f8fafc', font: { family: "'Inter', sans-serif" } } },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#f8fafc',
        bodyColor: '#cbd5e1',
        borderColor: '#334155',
        borderWidth: 1,
        padding: 10,
        boxPadding: 4,
        usePointStyle: true
      }
    },
    scales: {
      y: { grid: { color: 'rgba(51, 65, 85, 0.5)' }, ticks: { color: '#94a3b8', font: { family: "'Inter', sans-serif" } } },
      x: { grid: { color: 'rgba(51, 65, 85, 0.5)' }, ticks: { color: '#94a3b8', font: { family: "'Inter', sans-serif" } } }
    }
  }

  return (
    <div className="branch-detail-page">
      <div className="branch-hero" style={{ '--branch-color': branch.color }}>
        <div className="branch-hero-inner">
          <Link to="/branches" className="back-link">← Back to Branches</Link>
          <div className="branch-hero-content">
            <div className="branch-hero-icon-lg">{branch.icon}</div>
            <div className="branch-hero-text">
              <h1 className="branch-hero-title">{branch.name}</h1>
              <div className="branch-tags-hero">
                {branch.skills.slice(0, 4).map(s => <span key={s} className="branch-tag-hero">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="branch-hero-overlay"></div>
      </div>

      <div className="page-container branch-content-wrapper">
        <div className="branch-content-grid">
          <div className="branch-main-content">
            <section className="branch-section card" style={{ marginBottom: '1.5rem' }}>
              <h2 className="section-title">Overview</h2>
              <p className="branch-overview">{branch.overview}</p>
            </section>

            <AdBanner slotId="branch-inline-1" format="horizontal" />

            <section className="branch-section card" style={{ marginBottom: '1.5rem' }}>
              <h2 className="section-title">Semester-wise Syllabus Load</h2>
              
              <div style={{ marginTop: '1rem' }}>
                <div className="chart-container" style={{ height: '300px', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
                  <Bar 
                    data={syllabusChartData} 
                    options={{
                      ...chartOptions, 
                      plugins: { 
                        ...chartOptions.plugins,
                        legend: { display: false },
                        tooltip: {
                          ...chartOptions.plugins.tooltip,
                          callbacks: {
                            afterLabel: function(context) {
                              const semIndex = context.dataIndex;
                              const subjectsList = branch.syllabus[semIndex].subjects;
                              return subjectsList.map(sub => `• ${sub}`);
                            }
                          }
                        }
                      },
                      scales: {
                        ...chartOptions.scales,
                        y: {
                          ...chartOptions.scales.y,
                          beginAtZero: true,
                          ticks: {
                            stepSize: 1,
                            color: '#94a3b8',
                            font: { family: "'Inter', sans-serif" }
                          }
                        }
                      }
                    }} 
                  />
                </div>
              </div>
            </section>



            <section className="branch-section card" style={{ marginBottom: '1.5rem' }}>
              <h2 className="section-title">Salary Trends (Last 3 Years)</h2>
              <div className="chart-container" style={{ height: '300px' }}>
                <Bar data={salaryData} options={chartOptions} />
              </div>
            </section>

          </div>

          <div className="branch-sidebar">
            <section className="branch-section card" style={{ marginBottom: '1.5rem' }}>
              <h3 className="sidebar-title">Difficulty Profile</h3>
              <DifficultyMeter difficulty={branch.difficulty} />
            </section>





            <AdBanner slotId="branch-sidebar-ad" format="vertical" />
          </div>
        </div>
      </div>
    </div>
  )
}
