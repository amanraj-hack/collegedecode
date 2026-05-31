import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import ScrollToTop from './components/ScrollToTop'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const CutoffExplorer = lazy(() => import('./pages/CutoffExplorer'))
const CollegePredictor = lazy(() => import('./pages/RankPredictor'))
const CsabPredictor = lazy(() => import('./pages/CsabPredictor'))
const BranchExplorer = lazy(() => import('./pages/BranchExplorer'))
const BranchDetail = lazy(() => import('./pages/BranchDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))
const CollegeList = lazy(() => import('./pages/CollegeList'))
const CollegeDetail = lazy(() => import('./pages/CollegeDetail'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const HowPredictorWorks = lazy(() => import('./pages/HowPredictorWorks'))

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Suspense fallback={<div className="loading"><div className="loading-spinner"></div></div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cutoffs" element={<CutoffExplorer />} />
            <Route path="/predict" element={<CollegePredictor />} />
            <Route path="/predict-csab" element={<CsabPredictor />} />
            <Route path="/how-it-works" element={<HowPredictorWorks />} />
            <Route path="/colleges" element={<CollegeList />} />
            <Route path="/college/:id" element={<CollegeDetail />} />
            <Route path="/branches" element={<BranchExplorer />} />
            <Route path="/branch/:slug" element={<BranchDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsConditions />} />
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
