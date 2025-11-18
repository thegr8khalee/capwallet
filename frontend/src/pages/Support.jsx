import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  MessageCircle,
  Shield,
  Code,
  Users,
  Activity,
  ChevronDown,
  HeartIcon,
} from 'lucide-react';
import PhoneIcon from '../components/Phone';

const Support = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const quickHelp = [
    {
      question: 'How to create a wallet',
      answer:
        'To create a new wallet, click the "Create Wallet" button on the home screen. You\'ll be guided through setting up a secure password and backing up your recovery phrase. Never share your recovery phrase with anyone.',
    },
    {
      question: 'How to restore a wallet',
      answer:
        'Select "Restore Wallet" and enter your 12 or 24-word recovery phrase. Make sure to enter the words in the correct order. Your wallet and all assets will be restored automatically.',
    },
    {
      question: 'How to use AI Transaction Protection',
      answer:
        "AI Transaction Protection is enabled by default. Before each transaction, Cap Wallet will analyze it for risks and show you a safety score. You can proceed, modify, or cancel based on the AI's recommendations.",
    },
    {
      question: 'How to swap or bridge assets',
      answer:
        'Go to the Swap tab, select your source and destination chains, enter the amount, and the AI will find the best route. Review the fees and safety score, then confirm the transaction.',
    },
    {
      question: 'How to connect to dApps',
      answer:
        'Use WalletConnect or the built-in browser to connect to dApps. Cap Wallet will scan each dApp for security risks before connecting. Always review the permissions requested.',
    },
    {
      question: 'How to back up your wallet safely',
      answer:
        'Go to Settings > Security > Backup. Write down your recovery phrase on paper and store it in a secure location. Never take screenshots or store it digitally. Consider using multiple secure locations.',
    },
    {
      question: 'How to use multi-signature accounts',
      answer:
        'In Settings, select "Create Multi-Sig Wallet". Add co-signers and set the required number of signatures. All co-signers must approve transactions before they execute.',
    },
    {
      question: 'Troubleshooting failed transactions',
      answer:
        'Failed transactions are usually due to insufficient gas, network congestion, or slippage. Check your gas settings, increase slippage tolerance if swapping, or try again during off-peak hours.',
    },
  ];

  const contactMethods = [
    { method: 'Email', value: 'support@capwallet.com' },
    { method: 'Telegram Support', value: 't.me/CapWalletSupport' },
    { method: 'Discord Server', value: 'discord.gg/capwallet' },
    { method: 'Twitter Support', value: '@capwallet' },
  ];

  const securityIssues = [
    'Unauthorized access',
    'Phishing attempts',
    'A malicious dApp',
    'A suspicious transaction',
  ];

  const developerResources = [
    'API Documentation',
    'SDKs',
    'Integration Guides',
    'Web3 Connect Tools',
  ];

  const community = [
    { name: 'Telegram', icon: 'telegram.svg' },
    { name: 'Discord', icon: 'discord.svg' },
    { name: 'X (Twitter)', icon: 'x.svg' },
    { name: 'GitHub', icon: 'github.svg' },
    { name: 'YouTube', icon: 'youtube.svg' },
  ];

  const statusItems = [
    'Live system status',
    'RPC health',
    'Outage alerts',
    'Release notes',
    'Upgrade announcements',
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
          <HeartIcon className="text-accent size-20" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Support
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We're here to help you stay secure, confident, and informed while
          using Cap Wallet.
          <br />
          Browse our guides, FAQs, or contact the support team anytime.
        </motion.p>
      </motion.section>

      {/* Quick Help */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          {/* <span className="text-5xl">📘</span> */}
          <h2 className="text-4xl font-montserrat font-bold text-secondary">
            Quick Help
          </h2>
        </div>
        <p className="text-lg text-gray-600 mb-8">
          Find answers to the most common questions:
        </p>
        <div className="space-y-4 mb-8">
          {quickHelp.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.button
                className="w-full flex items-center justify-between gap-3 p-5 text-left  transition-colors"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3 flex-1">
                  {/* <span className="text-accent text-xl shrink-0">→</span> */}
                  <span className="text-gray-700 font-medium">
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-400 size-5" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-5 pt-2 pl-14 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="btn btn-primary p-6"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Browse All Guides
        </motion.button>
      </motion.section>

      {/* Contact Support */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-accent/10 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="text-accent size-10" />
            <h2 className="text-4xl font-montserrat font-bold text-secondary">
              Contact Support
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Our team is available 24/7.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {contactMethods.map((contact, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-secondary mb-1">
                  {contact.method}
                </h3>
                <p className="text-accent">{contact.value}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 text-lg">
            We typically respond within{' '}
            <span className="font-semibold text-accent">5 minutes</span>.
          </p>
        </div>
      </motion.section>

      {/* Security & Fraud */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-200">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-red-600 size-10" />
            <h2 className="text-4xl font-montserrat font-bold text-secondary">
              Security & Fraud
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">If you suspect:</p>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {securityIssues.map((issue, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 p-3 bg-white rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-red-600 text-xl">⚠</span>
                <span className="text-gray-700">{issue}</span>
              </motion.div>
            ))}
          </div>
          <div className="bg-red-600 text-white p-6 rounded-2xl">
            <p className="text-lg mb-2">
              <strong>Report it immediately:</strong>
            </p>
            <p className="text-xl font-semibold mb-3">security@capwallet.com</p>
            <p className="text-sm opacity-90">
              We take all security issues seriously.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Developer Support */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-primary/10 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-primary size-10" />
            <h2 className="text-4xl font-montserrat font-bold text-secondary">
              Developer Support
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Building on Cap Wallet APIs or integrations?
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {developerResources.map((resource, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white rounded-xl border border-gray-200 hover:border-primary transition-colors cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-gray-700 font-medium">{resource}</p>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="btn bg-primary text-white border-0 p-6 rounded-full"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Developer Docs
          </motion.button>
        </div>
      </motion.section>

      {/* Community */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Users className="text-accent size-10" />
          <h2 className="text-4xl font-montserrat font-bold text-secondary">
            Community
          </h2>
        </div>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of traders, developers, and Web3 explorers:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {community.map((platform, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl border border-gray-200 text-center hover:border-accent transition-colors cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
             <img src={platform.icon} alt={platform.name} className="mx-auto mb-2 w-20" />
              <p className="text-gray-700 font-medium">{platform.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Status & Updates */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-green-600 size-10" />
            <h2 className="text-4xl font-montserrat font-bold text-secondary">
              Status & Updates
            </h2>
          </div>
          <div className="space-y-3 mb-6">
            {statusItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="btn btn-outline rounded-full p-6"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Check System Status
          </motion.button>
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
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Download Cap Wallet and experience secure crypto management.
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

export default Support;
