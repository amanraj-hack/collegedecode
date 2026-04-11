import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronUp, Users, BookOpen, Shield, Star } from 'lucide-react';

// ─── Raw keys (used for data aggregation only) ───────────────────────────────
const RAW_KEYS = [
  'OPEN', 'GEN-EWS', 'OBC-NCL', 'SC', 'ST',
  'OPEN-PwD', 'GEN-EWS-PwD', 'OBC-NCL-PwD', 'SC-PwD', 'ST-PwD',
];

// PwD sub-keys that get merged into one display group
const PWD_KEYS = ['OPEN-PwD', 'GEN-EWS-PwD', 'OBC-NCL-PwD', 'SC-PwD', 'ST-PwD'];

// ─── Display groups (6 visual segments) ──────────────────────────────────────
// Each entry has `keys` — which raw keys to SUM for this display group.
const DISPLAY_CATEGORIES = [
  { id: 'OPEN',    label: 'General (OPEN)', color: '#6366f1', shortLabel: 'OPEN',    keys: ['OPEN']    },
  { id: 'EWS',     label: 'EWS',           color: '#8b5cf6', shortLabel: 'EWS',     keys: ['GEN-EWS'] },
  { id: 'OBC',     label: 'OBC-NCL',       color: '#3b82f6', shortLabel: 'OBC',     keys: ['OBC-NCL'] },
  { id: 'SC',      label: 'SC',            color: '#14b8a6', shortLabel: 'SC',      keys: ['SC']      },
  { id: 'ST',      label: 'ST',            color: '#f59e0b', shortLabel: 'ST',      keys: ['ST']      },
  { id: 'PwD',     label: 'PwD (All)',     color: '#ec4899', shortLabel: 'PwD',     keys: PWD_KEYS    },
];

const GENERAL_KEYS = new Set(['OPEN', 'GEN-EWS']);

// Helper: resolve display count for a segment given raw seat data
function displayCount(cat, seats) {
  return cat.keys.reduce((sum, k) => sum + (seats[k] || 0), 0);
}

// Normalize institute names from the JSON to match college IDs
const INSTITUTE_NAME_MAP = {
  'iit-madras':       'Indian Institute of Technology Madras',
  'iit-delhi':        'Indian Institute of Technology Delhi',
  'iit-bombay':       'Indian Institute  of Technology Bombay',
  'iit-kanpur':       'Indian Institute of Technology Kanpur',
  'iit-kharagpur':    'Indian Institute of Technology Kharagpur',
  'iit-roorkee':      'Indian Institute of Technology Roorkee',
  'iit-guwahati':     'Indian Institute of Technology Guwahati',
  'iit-hyderabad':    'Indian Institute of Technology Hyderabad',
  'iit-bhu':          'Indian Institute  of Technology (BHU) Varanasi',
  'iit-ism-dhanbad':  'Indian Institute of Technology (ISM) Dhanbad',
  'iit-indore':       'Indian Institute of Technology Indore',
  'iit-ropar':        'Indian Institute of Technology Ropar',
  'iit-mandi':        'Indian Institute  of Technology Mandi',
  'iit-gandhinagar':  'Indian Institute of Technology Gandhinagar',
  'iit-jodhpur':      'Indian Institute of Technology Jodhpur',
  'iit-patna':        'Indian Institute of Technology Patna',
  'iit-bhubaneswar':  'Indian Institute  of Technology Bhubaneswar',
  'iit-tirupati':     'Indian Institute of Technology Tirupati',
  'iit-palakkad':     'Indian Institute of Technology Palakkad',
  'iit-jammu':        'Indian Institute  of Technology Jammu',
  'iit-bhilai':       'Indian Institute of Technology Bhilai',
  'iit-goa':          'Indian Institute of Technology Goa',
  'iit-dharwad':      'Indian Institute of Technology Dharwad',
};

// Extract program type from the full program string
function getProgramType(program) {
  const match = program.match(/\(([^)]+)\)/g);
  if (!match) return 'Other';
  const last = match[match.length - 1].replace(/[()]/g, '');
  if (last.includes('Bachelor of Technology')) return 'B.Tech (4 Yr)';
  if (last.includes('Bachelor and Master of Technology')) return 'B.Tech + M.Tech (5 Yr)';
  if (last.includes('Master of Technology')) return 'M.Tech';
  if (last.includes('Bachelor of Science')) return 'B.Sc';
  if (last.includes('Master of Science')) return 'M.Sc';
  if (last.includes('Bachelor of Architecture')) return 'B.Arch';
  if (last.includes('MBA')) return 'MBA';
  return 'Other';
}

// Merge Gender-Neutral + Female-only, summing each raw key
function aggregateSeats(entry) {
  const result = {};
  const gn = entry['Gender-Neutral'] || {};
  const fo = entry['Female-only'] || {};

  RAW_KEYS.forEach(key => {
    const a = parseInt(gn[key] || 0, 10);
    const b = parseInt(fo[key] || 0, 10);
    result[key] = (isNaN(a) ? 0 : a) + (isNaN(b) ? 0 : b);
  });

  result.total = parseInt(entry['Seat Capacity'] || 0, 10);
  return result;
}

// ─── Sub-component: stacked horizontal bar ─────────────────────────────────
function StackedBar({ seats, total }) {
  if (!total) return null;

  const segments = DISPLAY_CATEGORIES
    .map(cat => ({ ...cat, count: displayCount(cat, seats) }))
    .filter(s => s.count > 0)
    .map(s => ({ ...s, pct: (s.count / total) * 100 }));

  return (
    <div className="sdd-bar-track">
      {segments.map(s => (
        <div
          key={s.id}
          className="sdd-bar-seg"
          style={{ width: `${s.pct}%`, background: s.color }}
          title={`${s.label}: ${s.count} seats (${s.pct.toFixed(1)}%)`}
        >
          <span className="sdd-bar-label">{s.count}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Sub-component: expandable course row ──────────────────────────────────
function CourseRow({ program, seats }) {
  const [open, setOpen] = useState(false);
  const total = seats.total || 0;

  return (
    <div className={`sdd-course-row ${open ? 'sdd-course-row--open' : ''}`}>
      <button className="sdd-course-header" onClick={() => setOpen(v => !v)}>
        <div className="sdd-course-meta">
          <span className="sdd-course-name">{program}</span>
          <span className="sdd-course-total">{total} seats</span>
        </div>
        <div className="sdd-course-bar-wrap">
          <StackedBar seats={seats} total={total} />
        </div>
        <span className="sdd-course-chevron">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {open && (
        <div className="sdd-course-body">
          <div className="sdd-cat-grid">
            {DISPLAY_CATEGORIES.map((cat) => {
              const count = displayCount(cat, seats);
              if (!count) return null;
              const pct = total ? ((count / total) * 100).toFixed(1) : '0.0';
              return (
                <div key={cat.id} className="sdd-cat-card" style={{ '--cat-color': cat.color }}>
                  <div className="sdd-cat-dot" style={{ background: cat.color }} />
                  <div className="sdd-cat-info">
                    <span className="sdd-cat-label">{cat.label}</span>
                    <span className="sdd-cat-count">{count}</span>
                    <span className="sdd-cat-pct">{pct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function SeatDistributionDashboard({ collegeId }) {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState('All');

  // Fetch the JSON once
  useEffect(() => {
    setLoading(true);
    fetch('/data/iit_y25_seat.json')
      .then(r => r.json())
      .then(json => {
        setAllData(json.data || []);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  // Filter rows that belong to this college
  const instituteName = INSTITUTE_NAME_MAP[collegeId];
  const collegeRows = useMemo(() => {
    if (!instituteName) return [];
    return allData.filter(row => {
      const rowName = (row.Institute || '').replace(/\s+/g, ' ').trim();
      const target = instituteName.replace(/\s+/g, ' ').trim();
      return rowName === target;
    });
  }, [allData, instituteName]);

  // Derive program types for dropdown
  const programTypes = useMemo(() => {
    const types = new Set(collegeRows.map(r => getProgramType(r.Program)));
    return ['All', ...Array.from(types).sort()];
  }, [collegeRows]);

  // Apply filter
  const filtered = useMemo(() => {
    if (selectedType === 'All') return collegeRows;
    return collegeRows.filter(r => getProgramType(r.Program) === selectedType);
  }, [collegeRows, selectedType]);

  // Build per-course seat data
  const courses = useMemo(() =>
    filtered.map(row => ({
      program: row.Program,
      seats: aggregateSeats(row),
    })), [filtered]);

  // Summary metrics
  const metrics = useMemo(() => {
    let total = 0, genSeats = 0, resSeats = 0;
    courses.forEach(({ seats }) => {
      total += seats.total || 0;
      RAW_KEYS.forEach(key => {
        const v = seats[key] || 0;
        if (GENERAL_KEYS.has(key)) genSeats += v;
        else resSeats += v;
      });
    });
    return { total, count: courses.length, genSeats, resSeats };
  }, [courses]);

  if (loading) {
    return (
      <div className="sdd-loading">
        <div className="sdd-loading-spinner" />
        <span>Loading seat data…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sdd-error">
        <span>Failed to load seat data: {error}</span>
      </div>
    );
  }

  if (!instituteName || collegeRows.length === 0) {
    return (
      <div className="sdd-empty">
        <span>No seat data available for this college.</span>
      </div>
    );
  }

  return (
    <div className="sdd-root">
      {/* Header row */}
      <div className="sdd-top-row">
        <h2 className="cd-section-title" style={{ margin: 0 }}>
          Seat Distribution <span className="sdd-year-badge">JoSAA 2025</span>
        </h2>
        <div className="sdd-filter-wrap">
          <label className="sdd-filter-label">Program Type</label>
          <select
            className="sdd-filter-select"
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
          >
            {programTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Metric cards */}
      <div className="sdd-metrics-grid">
        <div className="sdd-metric-card sdd-metric--blue">
          <div className="sdd-metric-icon"><Users size={18} /></div>
          <div className="sdd-metric-body">
            <span className="sdd-metric-val">{metrics.total.toLocaleString()}</span>
            <span className="sdd-metric-label">Total Seats</span>
          </div>
        </div>
        <div className="sdd-metric-card sdd-metric--purple">
          <div className="sdd-metric-icon"><BookOpen size={18} /></div>
          <div className="sdd-metric-body">
            <span className="sdd-metric-val">{metrics.count}</span>
            <span className="sdd-metric-label">Programs</span>
          </div>
        </div>
        <div className="sdd-metric-card sdd-metric--indigo">
          <div className="sdd-metric-icon"><Star size={18} /></div>
          <div className="sdd-metric-body">
            <span className="sdd-metric-val">{metrics.genSeats.toLocaleString()}</span>
            <span className="sdd-metric-label">General Seats</span>
          </div>
        </div>
        <div className="sdd-metric-card sdd-metric--teal">
          <div className="sdd-metric-icon"><Shield size={18} /></div>
          <div className="sdd-metric-body">
            <span className="sdd-metric-val">{metrics.resSeats.toLocaleString()}</span>
            <span className="sdd-metric-label">Reserved Seats</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="sdd-legend">
        {DISPLAY_CATEGORIES.map(({ id, label, color }) => (
          <div key={id} className="sdd-legend-item">
            <span className="sdd-legend-dot" style={{ background: color }} />
            <span className="sdd-legend-lbl">{label}</span>
          </div>
        ))}
      </div>

      {/* Course rows */}
      <div className="sdd-course-list">
        {courses.length === 0 ? (
          <div className="sdd-empty-filtered">No programs match the selected type.</div>
        ) : (
          courses.map(({ program, seats }) => (
            <CourseRow key={program} program={program} seats={seats} />
          ))
        )}
      </div>
    </div>
  );
}
