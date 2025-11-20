import React, { useEffect } from 'react';
import PhoneIcon from '../components/Phone';
import FeatureCard from '../components/FeatureCard';
import LoadingScreen from '../components/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';
import { useImagePreloader } from '../hooks/useImagePreloader';

const Home = ({ setPageLoading }) => {
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

  // Collect all image URLs for preloading
  const imageUrls = [
    ...features.flatMap((section) => section.features.map((f) => f.img)),
    '/wave.svg',
    '/card.svg',
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

      <div className="">
        {imagesLoaded && (
          <>
            <motion.section
              className="px-6 max-w-6xl mx-auto flex flex-col space-y- items-center justify-center min-h-screen"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            >
              <div className="flex flex-col items-center max-w-4xl ">
                <motion.p
                  className="text-primary text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Your secure, non-custodial wallet
                </motion.p>
                <motion.h1
                  className="mb-4 font-montserrat text-secondary font-bold text-4xl md:text-5xl text-center lg:text-6xl xl:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', bounce: 0.4 }}
                >
                  Your Gateway to the Open Economy
                </motion.h1>
                <motion.button
                  className="btn btn-primary p-6 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {/* <PhoneIcon /> */}
                  Download
                </motion.button>
              </div>
            </motion.section>

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
                {features[2].hero}
              </motion.h1>
              <div
                className="w-full flex overflow-x-auto overflow-y-hidden"
                style={{ scrollbarWidth: 'none' }}
              >
                {features[2].features.map((feature, index) => (
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
          </>
        )}
      </div>
    </>
  );
};

export default Home;
