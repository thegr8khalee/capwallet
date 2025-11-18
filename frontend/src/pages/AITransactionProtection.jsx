import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhoneIcon from '../components/Phone';
import FeatureCard from '../components/FeatureCard';

const AITransactionProtection = () => {
  const benefits = [
    {
      icon: '🚨',
      text: 'Scam or blacklisted addresses',
      bg: 'bg-red-500',
      textColor: 'text-white',
      img: '/blacklisted.png',
    },
    {
      icon: '🛑',
      text: 'Malicious or risky smart contracts',
      bg: 'bg-yellow-500',
      textColor: 'text-white',
      img: '/contract-analysis.png',
    },
    {
      icon: '⚠️',
      text: 'Abnormal transaction patterns',
      bg: 'bg-white',
      textColor: 'text-secondary',
      img: '/abnormal.png',
    },
    {
      icon: '🧪',
      text: 'Fake or spoofed token contracts',
      bg: 'bg-accent',
      textColor: 'text-white',
      img: '/fake-contract.png',
    },
    {
      icon: '🔗',
      text: 'Suspicious dApps or phishing sites',
      bg: 'bg-black',
      textColor: 'text-white',
      img: '/dApps.png',
    },
    {
      icon: '💸',
      text: 'High-fee or front-running risks',
      bg: 'bg-primary',
      textColor: 'text-white',
      img: '/high-gas-fee.png',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'AI Risk Scan',
      description: 'Every transaction is analyzed for fraud signals.',
      img: '/AI-scan.png',
    },
    {
      number: '2',
      title: 'Safety Summary',
      description: "You get a clear explanation of what's risky and why.",
      img: '/AI-summary.png',
    },
    {
      number: '3',
      title: 'Smart Recommendations',
      description:
        'AI suggests safer options—like lower-fee routes or verified addresses.',
      img: '/AI-recommendations.png',
    },
    {
      number: '4',
      title: 'User Approval',
      description: 'No transaction executes without your confirmation.',
      img: '/AI-approval.png',
    },
    {
      number: '5',
      title: 'Continuous Monitoring',
      description:
        'AI learns from each interaction to keep improving your protection.',
      img: '/AI-continious.png',
    },
  ];

  const users = [
    'Beginner crypto users',
    'DeFi traders',
    'NFT collectors',
    'High-volume traders',
    'Anyone connecting to unknown dApps',
  ];

  const faqs = [
    {
      question: 'Does the AI see my private keys?',
      answer: 'No. Keys never leave your device.',
    },
    {
      question: 'Do you store my transaction history?',
      answer: 'No. AI uses anonymized, hashed metadata only.',
    },
    {
      question: 'Does the AI block transactions automatically?',
      answer:
        'Only if you turn on "Auto-Block High Risk." Otherwise, you decide.',
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
          AI Transaction Protection
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your 24/7 intelligent security guard.
        </motion.p>
        {/* <motion.p
          className="text-lg text-gray-500 mb-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cap Wallet's AI automatically scans every transaction, contract, and interaction—protecting you from scams, hacks, and malicious activity before it happens.
        </motion.p> */}
        <motion.button
          className="btn btn-primary p-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Experience AI Protection
        </motion.button>
      </motion.section>

      {/* What This Feature Does */}
      <motion.section
        className=" w-full mx-auto py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="px-4 sm:px-6 font-montserrat font-bold text-5xl md:text-6xl text-start mb-4 text-secondary">
          What This Feature Does
        </h1>
        <div
          className="w-full flex overflow-x-auto overflow-y-hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {benefits.map((benefit, index) => (
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
                key={index}
                feature={benefit.text}
                bg={benefit.bg}
                textColor={benefit.textColor}
                img={benefit.img}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="px-6 max-w-7xl mx-auto pt-32 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-20 text-center z-10">
          How It Works
        </h2>
        <div className="relative space-y-8">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={index}
                className="sticky bg-white rounded-3xl shadow-3xl max-h-150 sm:max-h-100 overflow-hidden"
                style={{
                  top: `${120 + index * 40}px`,
                  zIndex: index + 1,
                }}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="flex-1 flex flex-col items-start justify-start w-full space-y-4">
                      <motion.div
                        className="shrink-0 w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {step.number}
                      </motion.div>
                      <h3 className="text-3xl font-montserrat font-bold text-secondary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <img src={step.img} alt="" className="rounded-3xl w-80" />
                  </div>
                </div>
                {/* {!isLast && (
                  <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                )} */}
              </motion.div>
            );
          })}
        </div>
        {/* Spacer to allow last card to stack properly */}
        <div className="h-96"></div>
      </motion.section>

      {/* Why It Matters */}
      {/* <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-6">
          Why It Matters
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Web3 is full of threats: rug pulls, malicious signatures, phishing dApps, proxy upgrades, fake tokens, and more.
        </p>
        <p className="text-lg text-gray-600">
          Cap Wallet's AI removes the guesswork—so beginners and professionals stay protected.
        </p>
      </motion.section> */}

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

      {/* CTA */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-20 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
          Protect Your Crypto with AI
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Experience the most advanced wallet security in Web3.
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

export default AITransactionProtection;
