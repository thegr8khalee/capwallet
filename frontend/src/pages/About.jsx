import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Globe, Zap, Lock, InfoIcon } from 'lucide-react';
import PhoneIcon from '../components/Phone';

const About = () => {
  const values = [
    {
      icon: <Lock className="size-10 text-primary" />,
      title: 'Self-Custody First',
      description:
        'Your keys, your crypto. Always. Private keys never leave your device.',
    },
    {
      icon: <Brain className="size-10 text-accent" />,
      title: 'Intelligence Built In',
      description:
        'AI works behind the scenes to flag risks, warn you about malicious activity, and optimize your transactions.',
    },
    {
      icon: <Globe className="size-10 text-primary" />,
      title: 'Multi-Chain Freedom',
      description:
        'One wallet for Bitcoin, Solana, Ethereum, BSC, Polygon, and dozens more chains.',
    },
    {
      icon: <Zap className="size-10 text-accent" />,
      title: 'Simplicity & Speed',
      description:
        'Crypto should be simple, secure, and fast—not overwhelming.',
    },
    {
      icon: <Shield className="size-10 text-primary" />,
      title: 'Protection for Everyone',
      description:
        'We make institutional-grade security accessible to everyday users.',
    },
  ];

  const features = [
    'AI-powered fraud detection',
    'Real-time contract and address scanning',
    'Cross-chain swaps & bridges',
    'Built-in DeFi browser',
    'Multi-sig for teams and DAOs',
    'Dark Pool private trading (Pro)',
    'Full multi-chain support from the start',
  ];

  const locations = [
    { name: 'United States', icon: '🇺🇸' },
    { name: 'Europe', icon: '🇪🇺' },
    { name: 'Middle East', icon: '🌍' },
    { name: 'Africa', icon: '🌍' },
    { name: 'Asia', icon: '🌏' },
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
          className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <InfoIcon className="size-20 text-accent" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Cap Wallet
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Cap Wallet is an AI-powered, multi-chain, non-custodial cryptocurrency
          wallet designed to make Web3 safer, smarter, and accessible for
          everyone.
          <br />
          We combine advanced security, intelligent insights, and seamless
          multi-chain support—so users can explore crypto with confidence.
        </motion.p>
      </motion.section>

      {/* Our Mission */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-6">
          Our Mission
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          To empower millions of people globally with secure, intelligent,
          self-custodial tools that protect their assets and unlock the full
          potential of decentralized finance.
        </p>
        <p className="text-xl text-gray-600">
          We believe everyone should have complete control over their
          money—without needing to be an expert in blockchains.
        </p>
      </motion.section>

      {/* What We Stand For */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
          What We Stand For
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: '#00C9A7' }}
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-accent/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-montserrat font-bold text-secondary mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Cap Wallet was created by a team of blockchain engineers, AI
            researchers, and cybersecurity specialists who saw a massive gap in
            wallet security.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Millions of users lose funds every year to scams, malicious
            contracts, and simple mistakes. We wanted to change that.
          </p>
          <p className="text-xl text-secondary font-semibold">
            The result: a wallet that actively protects you before you sign.
          </p>
        </div>
      </motion.section>

      {/* What Makes Cap Wallet Different */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12">
          What Makes Cap Wallet Different
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-5 bg-white rounded-xl border border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <span className="text-2xl text-accent">✓</span>
              <span className="text-lg text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-2xl text-secondary font-semibold mt-12 text-center">
          Cap Wallet isn't just another wallet—it's a safer Web3 experience.
        </p>
      </motion.section>

      {/* The Team */}
      {/* <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-6">
          The Team
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We are a global team distributed across:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl border border-gray-200 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{location.icon}</div>
              <p className="text-gray-700 font-medium">{location.name}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-lg text-gray-600">
          With backgrounds in blockchain engineering, finance, AI,
          cybersecurity, and product design.
        </p>
      </motion.section> */}

      {/* Our Vision */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl">
            To become the world's most trusted multi-chain wallet—powered by
            intelligence, secured by self-custody, and built for everyone.
          </p>
        </div>
      </motion.section>

      {/* Join Us */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">
            Join Us
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Cap Wallet is growing fast.
            <br />
            Explore open positions and help us build the future of secure
            crypto.
          </p>
          <motion.button
            className="btn btn-primary p-6"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Careers
          </motion.button>
        </div>
      </motion.section>

      {/* Press & Media */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-4">
          Press & Media
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          For interviews, speaking engagements, or media inquiries:
        </p>
        <a
          href="mailto:media@capwallet.com"
          className="text-2xl font-semibold text-accent hover:underline"
        >
          media@capwallet.com
        </a>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
          Experience the Future of Crypto Security
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Download Cap Wallet today and take control of your digital assets.
        </p>
        <motion.button
          className="btn btn-primary p-6"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <PhoneIcon />
          Download Cap Wallet
        </motion.button>
      </motion.section>
    </div>
  );
};

export default About;
