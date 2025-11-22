import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AITransactionProtection from './pages/AIFeatures';
import MultiChain from './pages/WalletFeatures';
import SelfCustodySecurity from './pages/TradingDefi';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Support from './pages/Support';
import About from './pages/About';
import Contact from './pages/Contact';
import Download from './pages/Download';
import AIFeatures from './pages/AIFeatures';
import TradingDeFi from './pages/TradingDefi';
import WalletFeatures from './pages/WalletFeatures';
import Careers from './pages/Careers';
import Blog from './pages/Blog';


function App() {
  const [pageLoading, setPageLoading] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <ScrollToTop />
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
    </div>
  );
}

export default App;
