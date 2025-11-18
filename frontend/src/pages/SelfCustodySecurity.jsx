import React from 'react';
import { motion } from 'framer-motion';
import PhoneIcon from '../components/Phone';
import FeatureCard from '../components/FeatureCard';

const SelfCustodySecurity = () => {
  const securityFeatures = [
    {
      title: 'Local Private Key Generation',
      description: 'Your keys are created directly on your device using cryptographically secure randomness.',
      bg: 'bg-primary',
      textColor: 'text-white',
      img: 'local-keygen.png'
    },
    {
      title: 'End-to-End Encryption',
      description: 'If you use cloud backup, your keys are encrypted locally before upload—Cap Wallet never sees them.',
      bg: 'bg-accent',
      textColor: 'text-secondary',
      img: 'encryption.png'
    },
    {
      title: 'No Server-Side Storage',
      description: 'We don\'t store your private keys, seed phrases, or passwords.',
      bg: 'bg-black',
      textColor: 'text-white',
      img: 'serverless.png'
    },
    {
      title: 'Biometric Security',
      description: 'Face ID / Touch ID protect your local wallet from unauthorized access.',
      bg: 'bg-white',
      textColor: 'text-black',
      img: 'biometric.png'
    },
  ];

  const backupOptions = [
    {
      title: 'Manual Seed Phrase',
      description: 'Write down 12 or 24 words. Store them offline.',
      icon: '📝',
    },
    {
      title: 'Encrypted Cloud Backup',
      description: 'Encrypted before upload. Only you can decrypt.',
      icon: '☁️',
    },
    {
      title: 'Hardware Wallet Integration',
      description: 'Pair with Ledger, Trezor, and more.',
      icon: '🔐',
    },
  ];

  const whyItMatters = [
    'You\'re not relying on a company\'s solvency',
    'You can\'t be locked out arbitrarily',
    'No middleman can freeze or censor your funds',
    'You maintain sovereignty over your digital assets',
  ];

  const users = [
    'Privacy advocates',
    'Long-term crypto holders',
    'Users in unstable banking systems',
    'Anyone who values true ownership',
    'People burned by centralized exchanges',
  ];

  const faqs = [
    {
      question: 'What if I lose my phone?',
      answer: 'As long as you backed up your seed phrase or used encrypted cloud backup, you can restore your wallet on a new device.',
    },
    {
      question: 'What if I forget my password?',
      answer: 'If you have your seed phrase, you can restore. Without it, funds are unrecoverable—that\'s the nature of true self-custody.',
    },
    {
      question: 'Is self-custody harder than using Coinbase?',
      answer: 'Cap Wallet makes it as easy as possible—but yes, you\'re responsible for your own security. In return, you get full control.',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="px-6 max-w-6xl mx-auto min-h-[600px] flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Your Keys. Your Crypto. Always.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Cap Wallet is a true non-custodial wallet.
        </motion.p>
        <motion.button
          className="btn btn-primary p-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Take Full Control Now
        </motion.button>
      </motion.section>

      {/* What Self-Custody Means */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-6">
          What Self-Custody Means
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          When you use Cap Wallet, you—and only you—control your private keys. There is no central server.
          No company holding your funds. No CEO who can lock you out.
        </p>
        <p className="text-lg text-gray-600">
          If you lose access to your keys, no one can recover them. That\'s the trade-off for absolute control.
          We give you every tool to back up and protect your keys—but you\'re in the driver\'s seat.
        </p>
      </motion.section>

      {/* Security Features */}
      <motion.section
        className=" mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="px-4 sm:px-6 text-start font-montserrat text-secondary font-bold text-5xl md:text-6xl mb-4">
          Security Features
        </h1>
        <div className="w-full flex overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none' }}>
          {securityFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature.title}
              bg={feature.bg}
              textColor={feature.textColor}
              img={feature.img}
            />
          ))}
        </div>
      </motion.section>

      {/* Backup Options */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20 bg-gray-50 rounded-3xl my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
          Backup & Recovery Options
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {backupOptions.map((option, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why It Matters */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-8">
          Why Self-Custody Matters
        </h2>
        <div className="space-y-4">
          {whyItMatters.map((reason, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-2xl text-accent">✓</span>
              <span className="text-lg text-gray-700">{reason}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Who Benefits */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-8">
          Who Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user, index) => (
            <motion.div
              key={index}
              className="p-6 bg-accent/10 text-secondary rounded-2xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-lg font-semibold">{user}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="px-6 max-w-4xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
          Not Your Keys, Not Your Coins.
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Take back control of your digital assets.
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

export default SelfCustodySecurity;
