import React from 'react';
import PhoneIcon from '../components/Phone';
import FeatureCard from '../components/FeatureCard';
import LoadingScreen from '../components/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';
import { useImagePreloader } from '../hooks/useImagePreloader';

const Home = () => {
  const features = [
    {
      hero: 'Your Crypto, Protected by Intelligent Security',
      features: [
        {
          text: 'AI Transaction Protection',
          bg: 'bg-primary',
          textColor: 'text-white',
          img: '/AISec.svg',
        },
        {
          text: 'Self-Custody Security',
          bg: 'bg-accent',
          textColor: 'text-white',
          img: '/non-custodial.svg',
        },
        {
          text: '24/7 Security Guard',
          bg: 'bg-black',
          textColor: 'text-white',
          img: '/247.svg',
        },
        {
          text: 'Multi-Signature & Shared Wallets',
          bg: 'bg-white',
          textColor: 'text-primary',
          img: '/multiwallet.svg',
        },
      ],
      bg: 'bg-primary',
    },
    {
      hero: 'One Wallet for Everything Across Every Chain',
      features: [
        {
          text: 'Multi-Chain Support',
          bg: 'bg-secondary',
          textColor: 'text-white',
          img: '/multichain.svg',
        },
        {
          text: 'Universal NFT Wallet',
          bg: 'bg-accent',
          textColor: 'text-white',
          img: '/nft.svg',
        },
        {
          text: 'Integrated DEX Access',
          bg: 'bg-primary',
          textColor: 'text-white',
          img: '/dex.svg',
        },
        {
          text: 'Cross-Chain Swaps & Bridges',
          bg: 'bg-secondary',
          textColor: 'text-white',
          img: '/swap.svg',
        },
        {
          text: 'In-Wallet Token Swaps',
          bg: 'bg-accent',
          textColor: 'text-white',
          img: '/in-wallet-swap.svg',
        },
        {
          text: 'Dark Pool Trading Access',
          bg: 'bg-primary',
          textColor: 'text-white',
          img: '/darkpool.svg',
        },
      ],
      bg: 'bg-accent',
    },
    {
      hero: 'Smarter Investing With Built-In AI and DeFi Access',
      features: [
        {
          text: 'Built-In dApp & DeFi Access',
          bg: 'bg-secondary',
          textColor: 'text-white',
          img: '/defi.svg',
        },
        {
          text: 'Smart Portfolio Tips',
          bg: 'bg-accent',
          textColor: 'text-white',
          img: '/tips.svg',
        },
        {
          text: 'Save on Fees',
          bg: 'bg-primary',
          textColor: 'text-white',
          img: '/app.svg',
        },
        {
          text: 'Integrated Crypto On/Off Ramp',
          bg: 'bg-secondary',
          textColor: 'text-white',
          img: '/app.svg',
        },
      ],
      bg: 'bg-secondary',
    },
  ];

  // Collect all image URLs for preloading
  const imageUrls = [
    ...features.flatMap(section => section.features.map(f => f.img)),
    '/wave.svg',
    '/card.svg',
    '/app.svg',
  ];

  const { imagesLoaded, progress } = useImagePreloader(imageUrls);

  return (
    <>
      <AnimatePresence>
        {!imagesLoaded && <LoadingScreen progress={progress} />}
      </AnimatePresence>
      
      <div className="pt-24">{imagesLoaded && (
        <>
      <motion.section
        id="hero"
        className="px-4 sm:px-6 h-screen flex flex-col justify-between items-start z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        <motion.div
          className="relative flex flex-col space-y-4 p-6 bg-accent w-full rounded-3xl overflow-hidden z-10"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Background decorative image */}
          <motion.img
            src="/wave.svg"
            alt=""
            className="absolute right-[-50px] bottom-[-70px] w-[480px] lg:w-[580px] opacity-90 pointer-events-none select-none -z-0"
            animate={{
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="flex w-full justify-between items-center">
            <div>
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
              >
                <h1 className="text-secondary font-montserrat font-medium text-xl sm:text-3xl md:text-5xl">
                  Meet
                </h1>
                <h1 className="text-secondary font-montserrat font-bold text-xl sm:text-3xl md:text-5xl">
                  Cap Wallet
                </h1>
              </motion.div>

              {/* Subtext */}
              <motion.p
                className="text-secondary text-sm my-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Your secure, non-custodial wallet
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: 'spring', bounce: 0.5 }}
              >
                <motion.button
                  className="btn bg-white rounded-full shadow-none border-none p-6 text-accent flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="w-4 h-6  flex items-center justify-center rounded-lg">
                    <div className="w-4 h-6 bg-accent rounded-xs relative">
                      {/* Home bar */}
                      <div className="w-1.5 h-0.5 bg-white rounded-full absolute bottom-0.5 left-1/2 -translate-x-1/2"></div>
                    </div>
                  </div>
                  Download
                </motion.button>

                {/* <motion.button
                  className="px-6 py-3 rounded-full bg-white text-primary border-none font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Learn More
                </motion.button> */}
              </motion.div>
            </div>
            <img src="/card.svg" alt="" className='z-101 w-40 sm:w-70 lg:w-100' />
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="px-6 max-w-6xl mx-auto flex flex-col md:flex-row md:space-y-0 md:space-x-4 space-y- items-center lg:justify-between"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
      >
        <div className="flex flex-col items-center md:items-start max-w-4xl ">
          <motion.p
            className="text-primary text-center md:text-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Your secure, non-custodial wallet
          </motion.p>
          <motion.h1
            className="mb-4 font-montserrat text-secondary font-bold text-4xl md:text-5xl text-center md:text-start lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', bounce: 0.4 }}
          >
            Your Crypto Freedom at your fingertips
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
            <PhoneIcon />
            Download
          </motion.button>
        </div>
        <motion.img
          src="/app.svg"
          alt="App screenshot"
          className="w-40 md:w-60 rounded-3xl"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring', bounce: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
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
          Your Crypto, Protected by Intelligent Security
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
          One Wallet for Everything Across Every Chain
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
          Smarter Investing With Built-In AI and DeFi Access
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
        className="h-screen px-6 max-w-6xl mx-auto flex flex-col justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
      >
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          <motion.h1
            className="mb-4 font-montserrat text-secondary font-bold text-4xl md:text-5xl text-center lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
          >
            Download CapWallet App Today to Secure Your Crypto Journey
          </motion.h1>
          <motion.button
            className="btn btn-primary p-6 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <PhoneIcon />
            Download
          </motion.button>
        </div>
      </motion.section>
      </>)}
    </div>
    </>
  );
};

export default Home;
