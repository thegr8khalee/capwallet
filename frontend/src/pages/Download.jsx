import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Chrome,
  Globe,
  Apple,
  Smartphone,
  Monitor,
  CheckCircle,
} from 'lucide-react';
import { useParams } from 'react-router-dom';

const DownloadPage = () => {
  const { selectedPlatform } = useParams();
  // const [selectedPlatform, setSelectedPlatform] = useState(
  //   initialSelectedPlatform || 'mobile'
  // );
  const activePlatform = selectedPlatform || "mobile";

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
    {
      os: 'Android APK',
      icon: 'android.svg',
      description: 'Direct Download',
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

  const desktopApps = [
    {
      os: 'Windows',
      icon: 'windows.svg',
      description: 'Windows 10/11',
      link: '#',
      version: 'v2.1.0',
      fileSize: '85 MB',
    },
    {
      os: 'macOS',
      icon: 'ios.svg',
      description: 'macOS 11.0+',
      link: '#',
      version: 'v2.1.0',
      fileSize: '92 MB',
    },
    {
      os: 'Linux',
      icon: 'linux.svg',
      description: 'Ubuntu, Debian, Fedora',
      link: '#',
      version: 'v2.1.0',
      fileSize: '88 MB',
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

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="px-6 max-w-6xl mx-auto min-h-[500px] flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Download className="size-20 text-primary mx-auto" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Download Cap Wallet
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Get started with the most secure, intelligent crypto wallet.
        </motion.p>

        {/* Platform Selector */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-center w-full gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setSelectedPlatform('mobile')}
            className={`flex justify-center items-center text-sm px-8 py-4 rounded-full font-semibold transition-all ${
              selectedPlatform === 'mobile'
                ? 'bg-accent text-white'
                : 'bg-white text-secondary border border-gray-300 hover:border-accent'
            }`}
          >
            <Smartphone className="inline-block size-5 mr-2" />
            Mobile
          </button>
          <button
            onClick={() => setSelectedPlatform('browser')}
            className={`flex justify-center items-center text-sm px-8 py-4 rounded-full font-semibold transition-all ${
              selectedPlatform === 'browser'
                ? 'bg-accent text-white'
                : 'bg-white text-secondary border border-gray-300 hover:border-accent'
            }`}
          >
            <Globe className="inline-block size-5 mr-2" />
            Browser
          </button>
          <button
            onClick={() => setSelectedPlatform('desktop')}
            className={`flex justify-center items-center text-sm px-8 py-4 rounded-full font-semibold transition-all ${
              selectedPlatform === 'desktop'
                ? 'bg-accent text-white'
                : 'bg-white text-secondary border border-gray-300 hover:border-accent'
            }`}
          >
            <Monitor className="inline-block size-5 mr-2" />
            Desktop
          </button>
        </motion.div>
      </motion.section>

      {/* Mobile Downloads */}
      {activePlatform === 'mobile' && (
        <motion.section
          className="px-6 max-w-6xl mx-auto py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
            Mobile Apps
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mobileDownloads.map((app, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl border border-gray-200 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: '#00C9A7' }}
              >
                <img
                  src={app.icon}
                  alt={app.os}
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="text-2xl font-semibold text-secondary mb-2">
                  {app.os}
                </h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <div className="mb-6 space-y-1">
                  <p className="text-sm text-gray-500">
                    Version: {app.version}
                  </p>
                  <p className="text-sm text-gray-500">{app.requirements}</p>
                </div>
                <motion.a
                  href={app.link}
                  className="btn btn-primary w-full p-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="inline-block size-4 mr-2" />
                  Download
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Quick Download Badges */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="flex justify-center bg-black items-center text-white rounded-xl px-4 py-3 hover:opacity-90 transition duration-200"
            >
              <img
                src="/playstore.svg"
                alt="Get it on Google Play"
                className="w-10 h-10 mr-3"
              />
              <div className="flex flex-col text-start">
                <p className="text-xs">Get it on</p>
                <h3 className="text-xl font-medium">Google Play</h3>
              </div>
            </a>
            <a
              href="#"
              className="flex justify-center bg-black items-center text-white rounded-xl px-4 py-3 hover:opacity-90 transition duration-200"
            >
              <img
                src="/appstore.svg"
                alt="Download on the App Store"
                className="w-10 h-10 mr-3"
              />
              <div className="flex flex-col text-start">
                <p className="text-xs">Download on the</p>
                <h3 className="text-xl font-medium">App Store</h3>
              </div>
            </a>
          </div>
        </motion.section>
      )}

      {/* Browser Extensions */}
      {activePlatform === 'browser' && (
        <motion.section
          className="px-6 max-w-6xl mx-auto py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
            Coming Soon
          </h2>
        </motion.section>
      )}

      {/* Desktop Apps */}
      {activePlatform === 'desktop' && (
        <motion.section
          className="px-6 max-w-6xl mx-auto py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
            Desktop Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {desktopApps.map((app, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl border border-gray-200 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: '#00C9A7' }}
              >
                <img
                  src={app.icon}
                  alt={app.os}
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="text-2xl font-semibold text-secondary mb-2">
                  {app.os}
                </h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <div className="mb-6 space-y-1">
                  <p className="text-sm text-gray-500">
                    Version: {app.version}
                  </p>
                  <p className="text-sm text-gray-500">Size: {app.fileSize}</p>
                </div>
                <motion.a
                  href={app.link}
                  className="btn btn-primary w-full p-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="inline-block size-4 mr-2" />
                  Download
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Features Section */}
      <motion.section
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
      </motion.section>

      {/* Installation Guide */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
          Getting Started
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Download & Install
            </h3>
            <p className="text-gray-600">
              Choose your platform and download Cap Wallet. Installation takes
              less than a minute.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Create Your Wallet
            </h3>
            <p className="text-gray-600">
              Set up your wallet in seconds. Secure your seed phrase and enable
              biometric security.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Start Trading
            </h3>
            <p className="text-gray-600">
              Send, receive, swap, and explore DeFi with AI-powered protection.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Security Note */}
      <motion.section
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
            Always verify you're downloading from capwallet.com, official app
            stores, or verified browser extension stores.
          </p>
        </div>
      </motion.section>

      {/* Support CTA */}
      <motion.section
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
      </motion.section>
    </div>
  );
};

export default DownloadPage;
