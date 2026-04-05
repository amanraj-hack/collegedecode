import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const CutoffExplorer = lazy(() => import('./pages/CutoffExplorer'))
const PlacementStats = lazy(() => import('./pages/PlacementStats'))
const CollegePredictor = lazy(() => import('./pages/RankPredictor'))
const BranchExplorer = lazy(() => import('./pages/BranchExplorer'))
const BranchDetail = lazy(() => import('./pages/BranchDetail'))
const AboutContact = lazy(() => import('./pages/AboutContact'))
const CollegeList = lazy(() => import('./pages/CollegeList'))
const CollegeDetail = lazy(() => import('./pages/CollegeDetail'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-content">
        <Suspense fallback={<div className="loading"><div className="loading-spinner"></div></div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cutoffs" element={<CutoffExplorer />} />
            <Route path="/placements" element={<ComingSoon />} />
            <Route path="/predict" element={<CollegePredictor />} />
            <Route path="/colleges" element={<ComingSoon />} />
            <Route path="/college/:id" element={<CollegeDetail />} />
            <Route path="/branches" element={<BranchExplorer />} />
            <Route path="/branch/:slug" element={<BranchDetail />} />
            <Route path="/about-contact" element={<AboutContact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
