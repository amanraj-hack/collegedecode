import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList
} from 'recharts';
import {
  ArrowLeft, Users, BookOpen, Briefcase, TrendingUp, Map, Award,
  Rocket, Globe, Building, Wifi, Home, Library
} from 'lucide-react';
import { mockCollegeData } from '../data/mockCollegeData';
import '../cd-premium.css';

export default function CollegeDetail() {
  const { id } = useParams();
  const college = mockCollegeData.find(c => c.id === id);

  if (!college) {
    return (
      <div className="animate-in" style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>College Not Found</h2>
        <Link to="/colleges" className="btn btn-primary mt-4">Go Back</Link>
      </div>
    );
  }

  const { highlights, topRecruiters, life, uniqueFactors, nirfHistory, seatMatrix, courses } = college;

  // Mapped highlight icons
  const highlightItems = [
    { label: "Total Intake", value: highlights?.totalIntake || 1200, icon: <Users size={20} />, color: "blue" },
    { label: "Academic Courses", value: highlights?.academicCourses || 20, icon: <BookOpen size={20} />, color: "purple" },
    { label: "Median Package", value: highlights?.medianPackage || "16 LPA", icon: <Briefcase size={20} />, color: "green" },
    { label: "Placement Rate", value: highlights?.placementRate || "90%", icon: <TrendingUp size={20} />, color: "orange" },
    { label: "Campus Area", value: highlights?.campusArea || "500 Acres", icon: <Map size={20} />, color: "teal" },
    { label: "Highest Package", value: highlights?.highestPackage || "80 LPA", icon: <Award size={20} />, color: "pink" }
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
            <div className="hero-badge" style={{ marginBottom: '0.5rem', background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>Tier {college.tier} Institute</div>
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

      {/* Two Column Grid */}
      <div className="cd-two-col cd-section">

        {/* Courses Offered */}
        <div className="cd-courses-card">
          <div className="cd-courses-header">
            <h3 className="cd-section-title" style={{ marginBottom: 0 }}>Courses Offered ({courses.length})</h3>
          </div>
          <div className="cd-course-list">
            {courses.map((c) => {
              return (
                <div key={c.name} className="cd-course-item">
                  <span className="cd-course-name">{c.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seat Distribution */}
        <div className="cd-seat-card">
          <h3 className="cd-section-title">Seat Distribution</h3>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer>
              <BarChart data={seatMatrix} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradGEN" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#312e81" stopOpacity={1} />
                    <stop offset="100%" stopColor="#3730a3" stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="gradOBC" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4338ca" stopOpacity={1} />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="gradSC" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="gradST" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a5b4fc" stopOpacity={1} />
                    <stop offset="100%" stopColor="#c7d2fe" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Tooltip
                  cursor={{ fill: 'var(--bg-primary)', opacity: 0.5 }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}
                />
                <XAxis dataKey="branch" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} />
                <Bar dataKey="GEN" stackId="a" fill="url(#gradGEN)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="OBC" stackId="a" fill="url(#gradOBC)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="SC" stackId="a" fill="url(#gradSC)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="ST" stackId="a" fill="url(#gradST)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Placement Success */}
      <div className="cd-section cd-placement-block" style={{ textAlign: 'center' }}>
        <h3 className="cd-placement-title" style={{ marginBottom: '2rem' }}>Placement Success</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Highest Offer</span>
            <span style={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>₹{highlights?.highestPackage}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Median Package</span>
            <span style={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>₹{highlights?.medianPackage}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Placement Rate</span>
            <span style={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>{highlights?.placementRate}</span>
          </div>
        </div>
      </div>



      {/* NIRF Trend Analysis */}
      <div className="cd-section">
        <div className="cd-seat-card">
          <h3 className="cd-section-title">NIRF Trend Analysis</h3>
          <div style={{ width: '100%', height: '200px', marginTop: '1rem' }}>
            <ResponsiveContainer>
              <LineChart data={nirfHistory} margin={{ top: 25, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <Tooltip
                  cursor={{ stroke: 'var(--border-color)', strokeWidth: 1 }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}
                />
                <XAxis dataKey="year" axisLine={{ stroke: 'var(--border-color)' }} tickLine={{ stroke: 'var(--border-color)' }} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                <YAxis reversed={true} axisLine={{ stroke: 'var(--border-color)' }} tickLine={{ stroke: 'var(--border-color)' }} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} domain={['dataMin - 2', 'dataMax + 2']} />
                <Line type="monotone" dataKey="rank" stroke="var(--accent-primary)" strokeWidth={3} dot={{ fill: 'var(--bg-card)', stroke: 'var(--accent-primary)', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }}>
                  <LabelList dataKey="rank" position="top" style={{ fill: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 600 }} offset={12} />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.5rem' }}>
            Consistently top in nationality. Lower is better.
          </p>
        </div>
      </div>



    </div>
  );
}
