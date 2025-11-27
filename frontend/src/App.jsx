import React, { useState, Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import { Route, Router, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const AIFeatures = lazy(() => import('./pages/AIFeatures'));
const WalletFeatures = lazy(() => import('./pages/WalletFeatures'));
const TradingDeFi = lazy(() => import('./pages/TradingDefi'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Support = lazy(() => import('./pages/Support'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Download = lazy(() => import('./pages/Download'));
const Careers = lazy(() => import('./pages/Careers'));
const Blog = lazy(() => import('./pages/Blog'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));


function App() {
  const [pageLoading, setPageLoading] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <ScrollToTop />
      <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center text-xl">Loading...</div>}>
        {!pageLoading && <Header />}
        <main className="">
          <Routes>
            <Route path="/" element={<Home setPageLoading={setPageLoading} />} />
            <Route path="/ai-features" element={<AIFeatures setPageLoading={setPageLoading} />} />
            <Route path="/wallet-features" element={<WalletFeatures setPageLoading={setPageLoading} />} />
            <Route path="/trading-defi" element={<TradingDeFi setPageLoading={setPageLoading} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path='/support' element={<Support />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/download/:selectedPlatform?' element={<Download />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/blogs' element={<Blog />} />
          </Routes>
          <Footer />
          <Toaster />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
