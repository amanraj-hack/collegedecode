import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockCollegeData } from '../data/mockCollegeData';
import AdBanner from '../components/ads/AdBanner';

export default function CollegeList() {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    document.title = 'College Analysis — College Decode';
  }, []);

  const filtered = mockCollegeData.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-in">
      <h1 className="page-title">College Analysis</h1>
      <p className="page-subtitle">Select an IIT to see detailed seat matrix and ranking data.</p>

      <div className="card" style={{ padding: '0.75rem 1rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-primary)', background: 'var(--bg-card)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <span style={{ fontWeight: 600, color: 'var(--accent-primary)', marginRight: '0.5rem' }}>Data Source:</span>
        All the data is extracted from JoSAA official site and it is based on 2025. We are consistently working on it to add more data of NITs also. So do connected to all the handles to get the latest updates.
      </div>

      <div className="card" style={{ marginBottom: '1.5rem', padding: '1rem' }}>
        <input
          type="text"
          placeholder="Search for an IIT (e.g. IIT Delhi)"
          className="form-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="features-grid">
        {filtered.map(college => (
          <Link key={college.id} to={`/college/${college.id}`} className="feature-card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{college.name}</h3>
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>{college.generation} • NIRF #{college.nirfRank}</p>
          </Link>
        ))}
      </div>

      <AdBanner type="inline" />
    </div>
  );
}
