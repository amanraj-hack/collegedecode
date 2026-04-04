import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockCollegeData } from '../data/mockCollegeData';
import AdBanner from '../components/ads/AdBanner';

export default function CollegeList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockCollegeData.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-in">
      <h1 className="page-title">College Analysis</h1>
      <p className="page-subtitle">Select an IIT to see detailed seat matrix, placements, and ranking data.</p>

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
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>Tier {college.tier} • NIRF #{college.nirfRank}</p>
          </Link>
        ))}
      </div>

      <AdBanner type="inline" />
    </div>
  );
}
