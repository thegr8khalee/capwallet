import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneIcon from '../components/Phone';
import FeatureCard from '../components/FeatureCard';
import LoadingScreen from '../components/LoadingScreen';
import { useImagePreloader } from '../hooks/useImagePreloader';
import { PenIcon, CloudIcon, LockIcon } from 'lucide-react';

const TradingDeFi = ({ setPageLoading }) => {
  const securityFeatures = [
    {
      title: 'Local Private Key Generation',
      description:
        'Your keys are created directly on your device using cryptographically secure randomness.',
      bg: 'bg-primary',
      textColor: 'text-white',
      img: 'local-keygen.svg',
    },
    {
      title: 'End-to-End Encryption',
      description:
        'If you use cloud backup, your keys are encrypted locally before upload—Cap Wallet never sees them.',
      bg: 'bg-accent',
      textColor: 'text-secondary',
      img: 'encryption.svg',
    },
    {
      title: 'No Server-Side Storage',
      description:
        "We don't store your private keys, seed phrases, or passwords.",
      bg: 'bg-black',
      textColor: 'text-white',
      img: 'serverless.svg',
    },
    {
      title: 'Biometric Security',
      description:
        'Face ID / Touch ID protect your local wallet from unauthorized access.',
      bg: 'bg-white',
      textColor: 'text-black',
      img: 'biometric.svg',
    },
  ];

  const backupOptions = [
    {
      title: 'Manual Seed Phrase',
      description: 'Write down 12 or 24 words. Store them offline.',
      icon: PenIcon,
    },
    {
      title: 'Encrypted Cloud Backup',
      description: 'Encrypted before upload. Only you can decrypt.',
      icon: CloudIcon,
    },
    {
      title: 'Hardware Wallet Integration',
      description: 'Pair with Ledger, Trezor, and more.',
      icon: LockIcon,
    },
  ];

  const features = [
    {
      hero: 'Wallet Features',
      features: [
        {
          text: 'Multi-chain wallet',
          bg: 'bg-primary',
          textColor: 'text-white',
          img: '/multichain.svg',
        },
        {
          text: 'Local key storage',
          bg: 'bg-accent',
          textColor: 'text-white',
          img: '/local-keygen.svg',
        },
        {
          text: 'Biometric security',
          bg: 'bg-secondary',
          textColor: 'text-white',
          img: '/biometric.svg',
        },
        {
          text: 'Panic mode',
          bg: 'bg-black',
          textColor: 'text-white',
          img: '/panic-mode.svg',
        },
        {
          text: 'Cold/hot switching',
          bg: 'bg-accent',
          textColor: 'text-secondary',
          img: '/hot-cold.svg',
        },
        {
          text: 'Multi-sig wallets',
          bg: 'bg-primary',
          textColor: 'text-white',
          img: '/multiwallet.svg',
        },
      ],
      bg: 'bg-primary',
    },
    {
      hero: 'Trading & DeFi Features',
      features: [
        {
          text: 'Cross-chain swaps',
          bg: 'bg-secondary',
          textColor: 'text-white',
          img: '/swap.svg',
        },
        {
          text: 'Bridges',
          bg: 'bg-accent',
          textColor: 'text-white',
          img: '/bridge.svg',
        },
        {
          text: 'Dark Pool trades',
          bg: 'bg-primary',
          textColor: 'text-white',
          img: '/darkpool.svg',
        },
        {
          text: 'On/off-ramp',
          bg: 'bg-secondary',
          textColor: 'text-white',
          img: '/ramp.svg',
        },
        {
          text: 'dApp browser',
          bg: 'bg-accent',
          textColor: 'text-white',
          img: '/defi.svg',
        },
      ],
      bg: 'bg-accent',
    },
    {
      hero: 'AI Features',
      features: [
        {
          text: 'Fee optimization',
          bg: 'bg-secondary',
          textColor: 'text-white',
          img: '/high-gas-fee.svg',
        },
        {
          text: 'Risk detection',
          bg: 'bg-accent',
          textColor: 'text-white',
          img: '/contract-analysis.svg',
        },
        {
          text: 'DeFi safety scores',
          bg: 'bg-primary',
          textColor: 'text-white',
          img: '/fake-contract.svg',
        },
        {
          text: 'Portfolio insights',
          bg: 'bg-secondary',
          textColor: 'text-white',
          img: '/tips.svg',
        },
        {
          text: 'Real-time market nudges',
          bg: 'bg-accent',
          textColor: 'text-white',
          img: '/abnormal.svg',
        },
      ],
      bg: 'bg-secondary',
    },
  ];

  const whyItMatters = [
    "You're not relying on a company's solvency",
    "You can't be locked out arbitrarily",
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
      answer:
        'As long as you backed up your seed phrase or used encrypted cloud backup, you can restore your wallet on a new device.',
    },
    {
      question: 'What if I forget my password?',
      answer:
        "If you have your seed phrase, you can restore. Without it, funds are unrecoverable—that's the nature of true self-custody.",
    },
    {
      question: 'Is self-custody harder than using Coinbase?',
      answer:
        "Cap Wallet makes it as easy as possible—but yes, you're responsible for your own security. In return, you get full control.",
    },
  ];

  const imageUrls = [
    ...securityFeatures.map((f) => `/${f.img}`),
    ...features[1].features.map(f => f.img)
  ];
  const { imagesLoaded, progress } = useImagePreloader(imageUrls);

  useEffect(() => {
    if (setPageLoading) {
      setPageLoading(!imagesLoaded);
    }
  }, [imagesLoaded, setPageLoading]);

  return (
    <>
      <AnimatePresence>
        {!imagesLoaded && <LoadingScreen progress={progress} />}
      </AnimatePresence>
      {imagesLoaded && (
        <div className="">
          {/* Hero Section */}
          <motion.section
            className="px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center items-center text-center"
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
              Trade Smarter. Explore DeFi Confidently.
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Cap Wallet gives you powerful, AI-enhanced trading and DeFi tools
              across every chain — all in one secure, self-custodial wallet.
            </motion.p>
            <motion.button
              onClick={() => {
                window.location.href = '/download';
              }}
              className="btn btn-primary p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Download
            </motion.button>
          </motion.section>

          {/* Security Features */}
          <motion.section
            className="my-24 sm:h-screen flex flex-col md:space-x-4 space-y-4 items-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="px-6 text-secondary font-montserrat font-medium text-4xl md:text-5xl text-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', bounce: 0.4 }}
            >
              {features[1].hero}
            </motion.h1>
            <div
              className="w-full flex overflow-x-auto overflow-y-hidden"
              style={{ scrollbarWidth: 'none' }}
            >
              {features[1].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    bounce: 0.5,
                  }}
                  className="h-full"
                >
                  <FeatureCard
                    feature={feature.text}
                    bg={feature.bg}
                    textColor={feature.textColor}
                    img={feature.img}
                  />
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
                  className="p-6 bg-primary/10 rounded-2xl text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-lg font-semibold text-secondary">{user}</p>
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
        </div>
      )}
    </>
  );
};

export default TradingDeFi;
