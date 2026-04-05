import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'
import logo from '../assets/logo.png'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/predict', label: 'College Predictor' },
  { path: '/cutoffs', label: 'OCR Insights' },
  { path: '/colleges', label: 'College Analysis' },
  { path: '/branches', label: 'Branch Insights' },
  { path: '/placements', label: 'Placements' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Collage Decode Logo" className="logo-img" />
          <span>College Decode</span>
        </Link>

        <div className="header-actions-desktop">
          <nav className="nav-desktop">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link${location.pathname === item.path ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-desktop">
            <ThemeToggle />
          </div>
        </div>

        <div className="header-actions-mobile">
          <ThemeToggle />
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link${location.pathname === item.path ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
