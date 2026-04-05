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
          <Link to="/cutoffs">OCR</Link>
          <Link to="/predict">Predictor</Link>
          <Link to="/about-contact">About</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <p className="footer-text">
          Data is indicative and sourced from JoSAA counseling records. Verify with official sources.
        </p>
      </div>
    </footer>
  )
}
