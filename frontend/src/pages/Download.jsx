import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Download,
  Chrome,
  Globe,
  Apple,
  Smartphone,
  Monitor,
  CheckCircle,
  List,
  Dot,
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useWaitlistStore } from '../stores/useWaitlistStore';
import { useImagePreloader } from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';

const DownloadPage = ({ setPageLoading }) => {
  const imageUrls = [
    '/playstore.svg',
    '/appstore.svg',
    '/chrome.svg',
    '/firefox.svg',
    '/brave.svg',
    '/edge.svg',
    '/opera.svg',
    '/safari.svg',
  ];

  const { imagesLoaded, progress } = useImagePreloader(imageUrls);

  useEffect(() => {
    if (setPageLoading) {
      setPageLoading(!imagesLoaded);
    }
  }, [imagesLoaded, setPageLoading]);

  const { selectedPlatform } = useParams();
  const [activePlatform, setActivePlatform] = useState(
    selectedPlatform || 'mobile'
  );

  // Auto-detect platform if not set by param
  useEffect(() => {
    if (!selectedPlatform) {
      // Basic user agent detection
      const ua = navigator.userAgent;
      if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) {
        setActivePlatform('mobile');
      } else if (/Chrome|Firefox|Edg|Safari|Opera|Brave/i.test(ua)) {
        setActivePlatform('browser');
      } else if (/Win|Mac|Linux/i.test(ua)) {
        setActivePlatform('desktop');
      } else {
        setActivePlatform('mobile'); // fallback
      }
    }
  }, [selectedPlatform]);

  const mobileDownloads = [
    {
      os: 'iOS',
      icon: 'ios.svg',
      description: 'iPhone & iPad',
      link: '#',
      version: 'v2.1.0',
      requirements: 'iOS 14.0 or later',
    },
    {
      os: 'Android',
      icon: 'android.svg',
      description: 'Google Play',
      link: '#',
      version: 'v2.1.0',
      requirements: 'Android 8.0 or later',
    },
  ];

  const browserExtensions = [
    {
      browser: 'Chrome',
      icon: 'chrome.svg',
      description: 'Chrome Web Store',
      link: '#',
      version: 'v2.1.0',
      requirements: 'Chrome 90+',
    },
    {
      browser: 'Firefox',
      icon: 'firefox.svg',
      description: 'Firefox Add-ons',
      link: '#',
      version: 'v2.1.0',
      requirements: 'Firefox 88+',
    },
    {
      browser: 'Edge',
      icon: 'edge.svg',
      description: 'Microsoft Edge Add-ons',
      link: '#',
      version: 'v2.1.0',
      requirements: 'Edge 90+',
    },
    {
      browser: 'Brave',
      icon: 'brave.svg',
      description: 'Chrome Web Store Compatible',
      link: '#',
      version: 'v2.1.0',
      requirements: 'Brave 1.25+',
    },
    {
      browser: 'Opera',
      icon: 'opera.svg',
      description: 'Opera Add-ons',
      link: '#',
      version: 'v2.1.0',
      requirements: 'Opera 76+',
    },
    {
      browser: 'Safari',
      icon: 'safari.svg',
      description: 'Coming Soon',
      link: '#',
      version: 'Coming Soon',
      requirements: 'Safari 14+',
      comingSoon: true,
    },
  ];

  const features = [
    'AI-powered fraud detection',
    'Multi-chain support',
    'Cross-chain swaps',
    'Self-custody security',
    'Hardware wallet integration',
    'DeFi browser built-in',
  ];

  const { joinWaitlist, isLoading } = useWaitlistStore();

  const [formData, setFormData] = useState({ email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    joinWaitlist(formData);
  };

  return (
    <>
      <AnimatePresence>
        {!imagesLoaded && <LoadingScreen progress={progress} />}
      </AnimatePresence>
      <div className="pt-0 lg:pt-0">
        {imagesLoaded && (
          <>
            {/* Hero Section */}
            <motion.section
              className="px-6 max-w-6xl mx-auto h-screen flex flex-col justify-center items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            >
              <motion.div
                className="mb-6 flex justify-center items-center -space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="/playstore.svg"
                  alt=""
                  className="w-10 sm:w-15 z-10"
                />
                <img src="/appstore.svg" alt="" className="w-10 sm:w-15 z-9" />
                <img src="/chrome.svg" alt="" className="w-10 sm:w-15 z-8" />
                <img src="/firefox.svg" alt="" className="w-10 sm:w-15 z-7" />
                <img src="/brave.svg" alt="" className="w-10 sm:w-15 z-6" />
                <img src="/edge.svg" alt="" className="w-10 sm:w-15 z-5" />
                <img src="/opera.svg" alt="" className="w-10 sm:w-15 z-4" />
                <img src="/safari.svg" alt="" className="w-10 sm:w-15 z-3" />
              </motion.div>
              <motion.div
                className="border-1 flex items-center justify-center border-primary/20 rounded-full p-1 px-2 mb-6 text-xs font-medium text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-primary h-2 w-2 rounded-full mr-1 animate-pulse" />
                AVAILABLE IN EARLY 2026
              </motion.div>
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-bold text-secondary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Get Early Access to Cap Wallet
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base text-gray-600 mb-8 max-w-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Step into the future of crypto with a wallet that actually
                thinks with you. 
                <br />
                <br />
                Cap Wallet protects you, guides you, and helps
                you move through Web3 with confidence, not confusion.
              </motion.p>

              <motion.form
                onSubmit={handleSubmit}
                className="flex items-center justify-center mb-4 space-x-2 bg-white rounded-full p-1  w-full max-w-lg"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full h-full p-4 focus:ring-0 focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary p-6"
                >
                  {isLoading ? 'Joining...' : 'Join the Waitlist'}
                </button>
              </motion.form>

              <p className="text-gray-600">Join 50k+ others on the waitlist</p>
            </motion.section>

            {/* Installation Guide */}
            {/* <motion.section
              className="px-6 max-w-6xl mx-auto py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
                Getting Started
              </h2>
              <div className="grid gap-8">
                <motion.div
                  className="relative flex flex-col sm:flex-row space-y-4 text-start bg-primary rounded-3xl p-6 text-white overflow-y-clip h-125 sm:h-100 items-center sm:items-start justify-start sm:justify-between w-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex flex-col space-y-2 justify-start items-start sm:w-[60%]">
                    <div className=" text-white rounded-full flex items-center justify-center text-3xl sm:text-5xl font-bold">
                      1
                    </div>
                    <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2">
                      Download & Install
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base">
                      Choose your platform and download Cap Wallet. Installation
                      takes less than a minute.
                    </p>
                  </div>
                  <div className="h-100">
                    <img
                      src="/install.svg"
                      alt=""
                      className="w-80 h-full rounded-xl object-cover object-top"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative flex flex-col sm:flex-row space-y-4 text-start bg-accent rounded-3xl p-6 text-white overflow-y-clip h-125 sm:h-100 items-center sm:items-start justify-start sm:justify-between w-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex flex-col space-y-2 justify-start items-start sm:w-[60%]">
                    <div className=" text-white rounded-full flex items-center justify-center text-3xl sm:text-5xl font-bold">
                      2
                    </div>
                    <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2">
                      Create Your Wallet
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base">
                      Set up your wallet in seconds. Secure your seed phrase and
                      enable biometric security.
                    </p>
                  </div>
                  <div className="h-100">
                    <img
                      src="/createwallet.svg"
                      alt=""
                      className="w-80 h-full rounded-xl object-cover object-top"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative flex flex-col sm:flex-row space-y-4 text-start bg-black rounded-3xl p-6 text-white overflow-y-clip h-125 sm:h-100 items-center sm:items-start justify-start sm:justify-between w-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex flex-col space-y-2 justify-start items-start sm:w-[60%]">
                    <div className=" text-white rounded-full flex items-center justify-center text-3xl sm:text-5xl font-bold">
                      3
                    </div>
                    <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2">
                      Start Trading
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base">
                      Send, receive, swap, and explore DeFi with AI-powered
                      protection.
                    </p>
                  </div>
                  <div className="h-100">
                    <img
                      src="/startTrading.svg"
                      alt=""
                      className="w-80 h-full rounded-xl object-cover object-top"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.section> */}

            {/* Features Section */}
            {/* <motion.section
              className="px-6 max-w-6xl mx-auto py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent/10 rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl font-montserrat font-bold text-secondary mb-8 text-center">
                  What You Get
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="text-accent size-6 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section> */}

            {/* Security Note */}
            {/* <motion.section
              className="px-6 max-w-6xl mx-auto py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-montserrat font-bold mb-4">
                  Download Only from Official Sources
                </h2>
                <p className="text-xl mb-6">
                  Protect yourself from fake apps and malicious extensions.
                </p>
                <p className="text-lg opacity-90">
                  Always verify you're downloading from capwallet.com, official
                  app stores, or verified browser extension stores.
                </p>
              </div>
            </motion.section> */}

            {/* Support CTA */}
            {/* <motion.section
              className="px-6 max-w-6xl mx-auto py-20 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">
                Need Help?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our support team is available 24/7 to assist you.
              </p>
              <motion.a
                href="/support"
                className="btn rounded-full btn-outline p-6"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Support Center
              </motion.a>
            </motion.section> */}
          </>
        )}
      </div>{' '}
    </>
  );
};

export default DownloadPage;
