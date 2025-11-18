import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      title: '1. Overview',
      content: [
        'Cap Wallet ("we," "us," "our") is a non-custodial cryptocurrency wallet that allows users to store, send, receive, and interact with digital assets. Cap Wallet does not hold or manage private keys, funds, or user assets.',
        'By using Cap Wallet, you acknowledge that all cryptocurrency transactions are irreversible and that you are solely responsible for managing your wallet, keys, and transactions.',
      ],
    },
    {
      title: '2. Eligibility',
      content: ['You must be:', '• At least 18 years old', '• Legally permitted to use cryptocurrency services in your jurisdiction'],
    },
    {
      title: '3. Non-Custodial Nature',
      content: [
        'Cap Wallet is completely non-custodial. This means:',
        '• We cannot access your private keys',
        '• We cannot recover lost wallets or seed phrases',
        '• We cannot reverse transactions',
        '• You are solely responsible for securing your backups',
        '',
        'If you lose your seed phrase, we cannot restore your wallet.',
      ],
    },
    {
      title: '4. Your Responsibilities',
      content: [
        'You agree to:',
        '• Keep your device secure',
        '• Never share your seed phrase or private keys',
        '• Verify transaction details before approving',
        '• Use Cap Wallet in compliance with local laws',
      ],
    },
    {
      title: '5. AI Features',
      content: [
        'Cap Wallet provides AI-powered insights, security warnings, and risk scoring. You acknowledge that:',
        '• AI predictions are not guaranteed',
        '• You make the final decision on all transactions',
        '• Cap Wallet is not liable for financial losses',
      ],
    },
    {
      title: '6. Prohibited Activities',
      content: [
        'You may NOT use Cap Wallet for:',
        '• Fraud, hacks, or malicious activity',
        '• Money laundering or illegal payments',
        '• Market manipulation',
        '• Interacting with sanctioned addresses',
        '',
        'Violation may result in restricted access to certain services.',
      ],
    },
    {
      title: '7. Third-Party Services',
      content: [
        'Cap Wallet integrates with third-party services such as:',
        '• dApps',
        '• Blockchain RPC providers',
        '• On/off-ramps',
        '• Bridges and swap aggregators',
        '',
        'We are not responsible for any issues, losses, or failures caused by third-party platforms.',
      ],
    },
    {
      title: '8. No Financial Advice',
      content: [
        'Information provided by Cap Wallet—including AI insights—is not financial advice.',
        'You are responsible for your own investment decisions.',
      ],
    },
    {
      title: '9. Limitation of Liability',
      content: [
        'To the maximum extent permitted by law:',
        '• Cap Wallet is not liable for losses related to hacks, user mistakes, network failures, or market changes.',
        '• Cap Wallet provides the app "as is" without warranties.',
      ],
    },
    {
      title: '10. Termination',
      content: [
        'We may restrict access to certain cloud features or services if:',
        '• Illegal activity is detected',
        '• Abuse or misuse occurs',
        '• Required by law or regulators',
        '',
        'However, we cannot block access to your crypto because we do not control your wallet.',
      ],
    },
    {
      title: '11. Governing Law',
      content: ['These Terms are governed by the laws of Delaware, USA, unless otherwise required by your jurisdiction.'],
    },
    {
      title: '12. Changes to Terms',
      content: [
        'We may update these Terms periodically. Continued use of Cap Wallet indicates acceptance of the updated Terms.',
        'If you do not agree to these Terms, do not use Cap Wallet.',
      ],
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="px-6 max-w-4xl mx-auto min-h-[400px] flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ScrollText className="text-accent size-20" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl font-montserrat font-bold text-secondary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Terms of Service
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Last updated: January 2025
        </motion.p>
        <motion.p
          className="text-xl text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Please read these Terms carefully. By downloading or using Cap Wallet, you agree to these Terms of Service.
        </motion.p>
      </motion.section>

      {/* Content Sections */}
      <motion.section
        className="px-6 max-w-4xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <h2 className="text-2xl font-bold text-secondary mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="px-6 max-w-4xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-accent/10 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-secondary mb-4">Contact</h2>
          <p className="text-lg text-gray-600 mb-2">For questions about these Terms:</p>
          <a href="mailto:legal@capwallet.com" className="text-2xl font-semibold text-accent hover:underline">
            legal@capwallet.com
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default TermsOfService;
