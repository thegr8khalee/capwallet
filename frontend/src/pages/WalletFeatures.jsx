import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneIcon from '../components/Phone';
import FeatureCard from '../components/FeatureCard';
import LoadingScreen from '../components/LoadingScreen';
import { useImagePreloader } from '../hooks/useImagePreloader';

const WalletFeatures = ({ setPageLoading }) => {
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
          img: '/off-ramp.svg',
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

  const coreChains = [
    { name: 'Bitcoin', logo: 'btc.svg' },
    { name: 'Solana', logo: 'sol.svg' },
    { name: 'Ethereum', logo: 'eth.svg' },
    { name: 'Binance Smart Chain', logo: 'bnb.svg' },
    { name: 'Polygon', logo: 'polygon.svg' },
  ];

  const upcomingChains = [
    'Avalanche',
    'Arbitrum',
    'Optimism',
    'TON',
    'Cosmos',
    'Sui',
    'Aptos',
    'Near Protocol',
    '100 more in progress',
  ];

  const aiChecks = [
    'Price',
    'Slippage',
    'Route safety',
    'Gas fees',
    'Bridge reliability',
  ];

  const benefits = [
    'No need for 5 different wallets',
    'No more switching RPCs',
    'No more centralized exchanges',
    'One click to move assets between chains',
    'Safer than traditional bridges',
    'Faster than most DEX aggregators',
  ];

  const howItWorks = [
    'Choose "From" and "To" chain',
    'AI fetches routes from DEXs + bridges',
    'You select the best pathway',
    'You approve and locally sign',
    'Cap Wallet tracks progress in real time',
  ];

  const users = [
    'Multi-chain DeFi users',
    'Cross-chain traders',
    'NFT collectors working across ecosystems',
    'GameFi players',
    'Users sending crypto internationally',
  ];

  const faqs = [
    {
      question: 'Are swaps decentralized?',
      answer: 'Yes. All swaps use decentralized protocols.',
    },
    {
      question: 'Is bridging safe?',
      answer: 'AI scores each route by risk before recommending it.',
    },
    {
      question: 'Do I need separate networks or gas settings?',
      answer: 'No. Cap Wallet handles all chain configs automatically.',
    },
  ];

  const imageUrls = [
    ...coreChains.map((chain) => `/${chain.logo}`),
    ...features[0].features.map((f) => f.img),
    '/app.svg',
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
        <div className="pt-24">
          {/*Hero Section */}
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
              One Wallet for Every Chain
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Bitcoin. Solana. Ethereum. Polygon. BSC. TON. Sui. Aptos.
            </motion.p>
            <motion.button
              onClick={() => (window.location = '/download')}
              className="btn btn-primary p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Start Using Multi-Chain
            </motion.button>
          </motion.section>

          {/* Overview */}
          {/* <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-6">
          Overview
        </h2>
        <p className="text-lg text-gray-600">
          Cap Wallet is designed from the ground up to be fully multi-chain, not an EVM-only wallet.
          You can hold, send, swap, bridge, and track assets across all major blockchain ecosystems.
        </p>
      </motion.section> */}

          <motion.section
            className="sm:h-screen my-24 flex flex-col md:space-x-4 space-y-4 items-start"
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
              {features[0].hero}
            </motion.h1>
            <div
              className="w-full flex overflow-x-auto overflow-y-hidden"
              style={{ scrollbarWidth: 'none' }}
            >
              {features[0].features.map((feature, index) => (
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

          {/* Supported Chains */}
          <motion.section
            className="px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
              Supported Chains
            </h2>

            {/* Core Chains */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Core Chains
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {coreChains.map((chain, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white text-secondary rounded-2xl text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={`${chain.logo}`}
                      alt={chain.name}
                      className="mx-auto mb-4 w-20"
                    />
                    <p className="font-semibold text-lg">{chain.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Upcoming Chains */}
            {/* <div>
          <h3 className="text-2xl font-semibold text-secondary mb-6">Upcoming</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {upcomingChains.map((chain, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-100 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <p className="text-gray-700">{chain}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
          </motion.section>

          {/* Cross-Chain Swaps */}
          {/* <motion.section
        className="px-6 max-w-6xl mx-auto py-20 bg-gray-50 rounded-3xl my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-6">
          Cross-Chain Swaps
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Swap or bridge assets across networks instantly.
        </p>

        <h3 className="text-2xl font-semibold text-secondary mb-6">
          AI Route Optimization
        </h3>
        <p className="text-gray-600 mb-4">The AI evaluates:</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {aiChecks.map((check, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-xl border border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-gray-700 font-medium">✓ {check}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-lg text-gray-600">
          Then it chooses the safest and cheapest option.
        </p>
      </motion.section> */}

          {/* Why It Matters */}
          {/* <motion.section
        className=" mx-auto py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="px-4 sm:px-6 font-montserrat font-bold text-5xl md:text-6xl text-center mb-16">
          Why It Matters
        </h1>
        <div className="w-full flex overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none' }}>
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              feature={benefit}
              bg="bg-white"
              textColor="text-gray-900"
              img={`/app.svg`}
            />
          ))}
        </div>
      </motion.section> */}

          {/* How It Works */}
          {/* <motion.section
        className="px-6 max-w-6xl mx-auto py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-montserrat font-bold text-secondary mb-12 text-center">
          How It Works
        </h2>
        <div className="space-y-6">
          {howItWorks.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-4 items-center p-6 bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <p className="text-lg text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>
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
                  className="p-6 bg-accent/10 rounded-2xl text-center"
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
          {/* <motion.section
            className="px-6 max-w-6xl mx-auto py-20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
              One Wallet. All Chains. Zero Friction.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the future of multi-chain.
            </p>
            <motion.a
              href="/download"
              className="btn btn-primary p-6"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Get Cap Wallet Now
            </motion.a>
          </motion.section> */}
        </div>
      )}
    </>
  );
};

export default WalletFeatures;
