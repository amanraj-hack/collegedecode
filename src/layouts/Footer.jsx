import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Collage Decode — Built for JEE Aspirants
        </p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">T&C</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <p className="footer-text">
          Data is indicative and sourced from JoSAA counseling records. Verify with official sources.
        </p>
      </div>
    </footer>
  )
}
