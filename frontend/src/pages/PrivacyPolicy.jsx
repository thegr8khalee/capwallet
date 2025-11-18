import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: [
        'This Privacy Policy describes how Cap Wallet ("we," "our," "us") handles data.',
        'Cap Wallet is a non-custodial wallet, meaning we do not store private keys, seed phrases, or wallet balances.',
      ],
    },
    {
      title: '2. What We Do NOT Collect',
      content: [
        'We do not collect:',
        '• Private keys',
        '• Seed phrases',
        '• Wallet balances',
        '• Individual transaction data',
        '• dApp activity',
        '• Personal identity information (PII)',
        '',
        'Your wallet remains entirely under your control.',
      ],
    },
    {
      title: '3. Data We May Collect (Minimal & Optional)',
      subsections: [
        {
          subtitle: 'A. Anonymous Usage Data',
          content: [
            'To improve performance, we may collect anonymized usage metrics such as:',
            '• App version',
            '• Device type',
            '• Crash logs',
            '• Generic event counts',
            '',
            'This data does not contain any personal or wallet information.',
          ],
        },
        {
          subtitle: 'B. AI Security Checks',
          content: [
            'When AI performs risk analysis, Cap Wallet may send:',
            '• Hashed addresses',
            '• Hashed contract metadata',
            '• Transaction size ranges (not exact amounts)',
            '',
            'No PII or private data is ever sent.',
          ],
        },
        {
          subtitle: 'C. Optional User Information',
          content: [
            'If you contact support or create an account for cloud-based features, you may share:',
            '• Email address',
            '• Support messages',
            '• Bug reports',
            '',
            'This is entirely optional.',
          ],
        },
      ],
    },
    {
      title: '4. Cookies',
      content: [
        'Our website may use cookies for:',
        '• Basic analytics',
        '• Language preferences',
        '• Login sessions (if applicable)',
        '',
        'No wallet or transaction data is ever stored in cookies.',
      ],
    },
    {
      title: '5. How We Use Data',
      content: [
        'We use limited data only for:',
        '• App reliability',
        '• Security improvements',
        '• Fraud detection',
        '• Feature optimization',
        '• Customer support',
        '',
        'We do not sell or share your data with advertisers.',
      ],
    },
    {
      title: '6. How Long We Keep Data',
      content: [
        'We only keep anonymized data as long as needed for performance or security purposes.',
        'Support-related emails or logs may be retained for troubleshooting.',
      ],
    },
    {
      title: '7. Third-Party Services',
      content: [
        'Cap Wallet integrates with:',
        '• RPC providers',
        '• Swap aggregators',
        '• Bridges',
        '• dApps you connect to',
        '',
        'Cap Wallet does not control how these third parties use your data. Always review their policies.',
      ],
    },
    {
      title: '8. Security',
      content: [
        'We implement best-practice security:',
        '• Encryption in transit',
        '• Server hardening',
        '• Zero-knowledge architecture',
        '• Strict access controls',
        '',
        'Your keys never touch our servers.',
      ],
    },
    {
      title: '9. Your Rights',
      content: [
        'Depending on your region (GDPR, CCPA, NDPR), you may:',
        '• Request data deletion',
        '• Request a copy of your data',
        '• Opt out of analytics',
        '',
        'Contact: privacy@capwallet.com',
      ],
    },
    {
      title: '10. Children\'s Privacy',
      content: ['Cap Wallet is not intended for individuals under 18.'],
    },
    {
      title: '11. Changes to This Policy',
      content: [
        'We may update this Privacy Policy periodically.',
        'Continued use of the app means you accept the updated version.',
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
          <Shield className="text-accent size-20" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl font-montserrat font-bold text-secondary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Privacy Policy
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
          className="text-xl text-gray-600 mt-4 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Cap Wallet is designed with privacy first.
          <br />
          We do not collect personal data unless you choose to share it.
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
              
              {section.content && (
                <div className="space-y-3">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.subsections && (
                <div className="space-y-6 mt-4">
                  {section.subsections.map((subsection, subIdx) => (
                    <div key={subIdx}>
                      <h3 className="text-xl font-semibold text-secondary mb-3">
                        {subsection.subtitle}
                      </h3>
                      <div className="space-y-2 pl-4">
                        {subsection.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-gray-600 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
        <div className="bg-primary/10 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-secondary mb-4">Contact</h2>
          <p className="text-lg text-gray-600 mb-2">For privacy-related questions:</p>
          <a href="mailto:privacy@capwallet.com" className="text-2xl font-semibold text-primary hover:underline">
            privacy@capwallet.com
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default PrivacyPolicy;
