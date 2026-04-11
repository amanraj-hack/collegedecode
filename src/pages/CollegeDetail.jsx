import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Users, BookOpen, Map,
  Library
} from 'lucide-react';
import { mockCollegeData } from '../data/mockCollegeData';
import SeatDistributionDashboard from '../components/SeatDistributionDashboard';
import '../cd-premium.css';

export default function CollegeDetail() {
  const { id } = useParams();
  const college = mockCollegeData.find(c => c.id === id);

  useEffect(() => {
    if (college) {
      document.title = `${college.name} — College Decode`;
    }
  }, [college]);

  if (!college) {
    return (
      <div className="animate-in" style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>College Not Found</h2>
        <Link to="/colleges" className="btn btn-primary mt-4">Go Back</Link>
      </div>
    );
  }

  const { highlights, topRecruiters, life, uniqueFactors, seatMatrix, courses } = college;

  // Mapped highlight icons
  const highlightItems = [
    { label: "Total Intake", value: highlights?.totalIntake || 1200, icon: <Users size={20} />, color: "blue" },
    { label: "Academic Courses", value: highlights?.academicCourses || 20, icon: <BookOpen size={20} />, color: "purple" },
    { label: "Campus Area", value: highlights?.campusArea || "500 Acres", icon: <Map size={20} />, color: "teal" }
  ];

  return (
    <div className="animate-in cd-premium-page">
      <Link to="/colleges" className="cd-back-link">
        <ArrowLeft size={16} /> Back to Colleges
      </Link>

      {/* Hero */}
      <div className="cd-hero">
        <div className="cd-hero-abstract-bg">
          <Library size={350} strokeWidth={0.5} />
        </div>
        <div className="cd-hero-content">
          <div className="cd-hero-title">
            <div className="hero-badge" style={{ marginBottom: '0.5rem', background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>{college.generation} Institute</div>
            <h1>{college.name}</h1>
          </div>
          <div className="cd-hero-stats">
            <div className="cd-hero-stat-item">
              <span className="cd-hero-stat-label">NIRF Rank</span>
              <span className="cd-hero-stat-value">#{college.nirfRank}</span>
            </div>
            <div className="cd-hero-stat-item">
              <span className="cd-hero-stat-label">Established</span>
              <span className="cd-hero-stat-value">{college.established || "1958"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="cd-section">
        <h2 className="cd-section-title">Institutional Highlights</h2>
        <div className="cd-highlights-grid">
          {highlightItems.map((item, idx) => (
            <div key={idx} className="cd-highlight-card">
              <div className={`cd-highlight-icon-wrap icon-${item.color}`}>
                {item.icon}
              </div>
              <div className="cd-highlight-info">
                <span className="cd-highlight-label">{item.label}</span>
                <span className="cd-highlight-val">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seat Distribution Dashboard */}
      <div className="cd-section">
        <SeatDistributionDashboard collegeId={id} />
      </div>





    </div>
  );
}
