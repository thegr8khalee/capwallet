import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Globe, Zap, Lock, InfoIcon } from 'lucide-react';
import PhoneIcon from '../components/Phone';

const About = () => {
  const values = [
    {
      icon: <Lock className="size-10 text-accent" />,
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
      icon: <Globe className="size-10 text-accent" />,
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
      icon: <Shield className="size-10 text-accent" />,
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
    <div className="pt-24 lg:pt-0">
      {/* Hero Section */}
      <motion.section
        className="px-6 max-w-6xl py-20 lg:py-0  mx-auto lg:h-screen flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        <motion.h1
          className="text-3xl max-w-md  sm:max-w-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We’re building the safest doorway into the open economy.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Crypto was supposed to unlock freedom.
          <br />
          instead, it became a maze, complex interfaces, hidden risks, endless
          scams, and wallets that leave users on their own.
          <br />
          Cap Wallet exists to fix that.
        </motion.p>
      </motion.section>

      {/* The Beginning */}
      <motion.section
        className="lg:hidden px-6 flex flex-col space-y-4 max-w-7xl mx-auto py-20"
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.8 }}
      >
        <h2 className="w-full text-center text-4xl font-montserrat font-medium text-secondary mb-6">
          The Beginning
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-primary max-w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <h1 className="font-semibold text-3xl">Where it all started</h1>
          <p className="text-sm font-medium">
            In 2024, a xsall team of engineers, designers, and security
            researchers asked a simple question: “Why does crypto feel powerful
            — yet unsafe?”
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-red-500 max-w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-sm font-medium">People were getting scammed.</p>
          <p className="text-sm font-medium">
            Transactions felt confusing. Wallets felt cold, technical, and
            overwhelming.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-green-500 max-w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-sm font-medium ">
            We believed crypto should feel human…
          </p>
          <p className="text-sm font-medium">
            So we built Cap Wallet — a wallet that thinks with you
            and protects you.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-accent max-w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <h1 className="font-semibold text-3xl">The Spark</h1>
          <p className="text-sm font-medium">AI + Self-Custody</p>
          <p className="text-sm font-medium">
            We didn’t want to build “another wallet.” We wanted a guardian.
          </p>
          <p className="text-sm font-medium">
            A wallet that says: <br /> “Don’t sign this. It looks risky.” <br /> “Use this
            route — you’ll save gas.” <br /> “That contract behaves like a scam.”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-black max-w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-sm font-medium">
            A wallet that watches your back.
          </p>
          <p className="text-sm font-medium">
            The first prototype shocked us: 50K+ people joined our early
            waitlist in just 9 days.
          </p>
          <p className="text-sm font-medium">
            People didn’t want complex features. They wanted safety, simplicity,
            and intelligence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-accent/50 text-secondary p-4 text-center flex flex-col space-y-2 rounded-3xl max-w-sm mx-auto"
        >
          <h1 className="text-xs font-medium">Users</h1>
          <p className="text-3xl font-semibold">20K+</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-primary text-white p-4 text-center flex flex-col space-y-2 rounded-3xl max-w-sm mx-auto"
        >
          <h1 className="text-xs font-medium">Transactions</h1>
          <p className="text-3xl font-semibold">$5M</p>
        </motion.div>
      </motion.section>

      <motion.section
        className="hidden  px-6 h-screen relative lg:flex flex-col space-y-4 mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-4xl font-montserrat font-medium text-secondary mb-6">
          The Beginning
        </h2>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '30%',
            left: '76%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-10 bg-primary h-xs w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <h1 className="font-semibold text-3xl">Where it all started</h1>
          <p className="text-sm font-medium">
            In 2024, a xsall team of engineers, designers, and security
            researchers asked a simple question: “Why does crypto feel powerful
            — yet unsafe?”
          </p>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '55%',
            left: '90%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-9 bg-red-500 h-50 aspect-square mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-sm font-medium">People were getting scammed.</p>
          <p className="text-sm font-medium">
            Transactions felt confusing. Wallets felt cold, technical, and
            overwhelming.
          </p>
          {/* <p className="text-sm font-medium ">We believed crypto should feel human…</p>
          <p className="text-sm font-medium">
            So we built Cap Wallet — a wallet that thinks with you
            and protects you.
          </p> */}
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '70%',
            left: '20%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-8 bg-accent w-xs h-xs aspect-square mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <h1 className="font-semibold text-3xl">The Spark</h1>
          <p className="text-sm font-medium">AI + Self-Custody</p>
          <p className="text-sm font-medium">
            We didn’t want to build “another wallet.” We wanted a guardian.
          </p>
          <p className="text-sm font-medium">
            A wallet that says: <br /> “Don’t sign this. It looks risky.” <br /> “Use this
            route — you’ll save gas.” <br /> “That contract behaves like a scam.”
          </p>
          {/* <p className="text-sm font-medium">
            A wallet that watches your back.
          </p>
          <p className="text-sm font-medium">
            The first prototype shocked us: 50K+ people joined our early
            waitlist in just 9 days.
          </p>
          <p className="text-sm font-medium">
            People didn’t want complex features. They wanted safety, simplicity,
            and intelligence.
          </p> */}
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '80%',
            left: '38%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-7 bg-black h-65 aspect-square mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-sm font-medium">
            A wallet that watches your back.
          </p>
          <p className="text-sm font-medium">
            The first prototype shocked us: 50K+ people joined our early
            waitlist in just 9 days.
          </p>
          <p className="text-sm font-medium">
            People didn’t want complex features. They wanted safety, simplicity,
            and intelligence.
          </p>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '20%',
            left: '60%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-6 bg-green-500 h-50 aspect-square mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-sm font-medium ">
            We believed crypto should feel human…
          </p>
          <p className="text-sm font-medium">
            So we built Cap Wallet — a wallet that thinks with you
            and protects you.
          </p>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '30%',
            left: '20%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-5 bg-accent/50 w-25 items-center justify-center aspect-square text-secondary p-4 text-center flex flex-col space-y-2 rounded-3xl mx-auto"
        >
          <h1 className="text-xs">Users</h1>
          <p className="text-3xl font-medium">20K+</p>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '80%',
            left: '80%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-4 text-center flex flex-col space-y-2 rounded-3xl max-w-sm mx-auto"
        >
          <h1 className="text-xs font-medium">Transactions</h1>
          <p className="text-3xl font-semibold">$5M</p>
        </motion.div>
      </motion.section>

      {/* Beta Launch */}
      <motion.section
        className="lg:hidden px-6 flex flex-col space-y-4 max-w-7xl mx-auto py-20"
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.8 }}
      >
        <h2 className="w-full text-center text-4xl font-montserrat font-medium text-secondary mb-6">
          Beta Launch
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-primary max-w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-sm font-medium">
            Together with a community of early testers across Africa, Europe,
            Asia, and LATAM and North America, we built a product shaped by real
            people, not hype.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-accent max-w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-3xl font-semibold">We focused on</p>
          <p className="text-sm font-medium">
            - Real-time scam detection <br />- ⁠Predictive gas optimization <br />- ⁠Safer
            swaps <br />- ⁠Clean interface <br />- ⁠Multichain support <br />- ⁠Browser extension
            + mobile app
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-accent/50 text-secondary p-4 text-center flex flex-col space-y-2 rounded-3xl max-w-sm mx-auto"
        >
          <h1 className="text-xs font-medium">Users</h1>
          <p className="text-3xl font-semibold">50K+</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-primary text-white p-4 text-center flex flex-col space-y-2 rounded-3xl max-w-sm mx-auto"
        >
          <h1 className="text-xs font-medium">Transactions</h1>
          <p className="text-3xl font-semibold">$7.5M</p>
        </motion.div>
      </motion.section>

      <motion.section
        className="hidden  px-6 h-screen relative lg:flex flex-col space-y-4 mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-4xl font-montserrat font-medium text-secondary mb-6">
          Beta Launch
        </h2>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '30%',
            left: '80%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-10 bg-primary h-xs w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-sm font-medium">
            Together with a community of early testers across Africa, Europe,
            Asia, and LATAM and North America, we built a product shaped by real
            people, not hype.
          </p>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '70%',
            left: '20%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-9 bg-accent h-70 aspect-square mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <p className="text-3xl font-semibold">We focused on</p>
          <p className="text-sm font-medium">
            - Real-time scam detection <br />- ⁠Predictive gas optimization <br />- ⁠Safer
            swaps <br />- ⁠Clean interface <br />- ⁠Multichain support <br />- ⁠Browser extension
            + mobile app
          </p>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '30%',
            left: '20%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-8 bg-accent/50 w-25 items-center justify-center aspect-square text-secondary p-4 text-center flex flex-col space-y-2 rounded-3xl mx-auto"
        >
          <h1 className="text-xs font-medium">Users</h1>
          <p className="text-3xl font-semibold">50K+</p>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '80%',
            left: '80%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-4 text-center flex flex-col space-y-2 rounded-3xl max-w-sm mx-auto"
        >
          <h1 className="text-xs font-medium">Transactions</h1>
          <p className="text-3xl font-semibold">$7.5M</p>
        </motion.div>
      </motion.section>

      {/* 2025 */}
      <motion.section
        className="px-6 lg:hidden flex flex-col space-y-4 max-w-7xl mx-auto py-20"
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.8 }}
      >
        <h2 className="w-full text-center text-4xl font-montserrat font-medium text-secondary mb-6">
          2025 — Intelligence Meets Design
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="bg-primary max-w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <h1 className="font-semibold text-3xl">
            We pushed deeper into real protection
          </h1>
          <p className="text-sm font-medium">
            - AI contract analysis <br /> - ⁠Address risk scoring <br /> - ⁠Phishing & fake
            website detection <br /> - ⁠Safer swaps with routing intelligence <br /> -
            ⁠Predictive alerts <br /> - ⁠Human-friendly error explanations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className=" items-center justify-center bg-accent/50 text-secondary p-4 text-center max-w-40 aspect-square flex flex-col space-y-2 rounded-3xl mx-auto"
        >
          <h1 className="text-xs font-medium">Users</h1>
          <p className="text-3xl font-semibold">150K+</p>
          <h1 className="text-xs font-medium">190+ countries.</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className=" items-center justify-center bg-white text-secondary p-4 text-center max-w-40 aspect-square flex flex-col space-y-2 rounded-3xl mx-auto"
        >
          <h1 className="text-xs font-medium">Transactions</h1>
          <p className="text-3xl font-semibold">$1.5M</p>
          <h1 className="text-xs font-medium">in (AI Protected)</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className=" items-center justify-center bg-accent/50 text-secondary p-4 text-center max-w-40 aspect-square flex flex-col space-y-2 rounded-3xl mx-auto"
        >
          <h1 className="text-xs font-medium">Swap Volume</h1>
          <p className="text-3xl font-semibold">$1.5B+</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className=" items-center justify-center bg-black text-white p-4 text-center max-w-40 aspect-square flex flex-col space-y-2 rounded-3xl mx-auto"
        >
          <h1 className="text-xs font-medium">Scams attempted</h1>
          <p className="text-3xl font-semibold">100K+</p>
          <h1 className="text-xs font-medium">Before users signed</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className=" items-center justify-center bg-primary text-white p-4 text-center max-w-40 aspect-square flex flex-col space-y-2 rounded-3xl mx-auto"
        >
          <h1 className="text-xs font-medium">Browser Extension</h1>
          <p className="text-3xl font-semibold">500K+</p>
          <h1 className="text-xs font-medium">installs in under 3 months.</h1>
        </motion.div>
      </motion.section>

      <motion.section
        className="hidden px-6 h-screen relative lg:flex flex-col space-y-4 mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-4xl font-montserrat font-medium text-secondary mb-6">
          2025 — Intelligence Meets Design
        </h2>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '30%',
            left: '85%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-10 bg-primary h-xs w-xs mx-auto text-white flex flex-col space-y-4 rounded-3xl p-6 py-8"
        >
          <h1 className="font-semibold text-3xl">
            We pushed deeper into real protection
          </h1>
          <p className="text-sm font-medium">
            - AI contract analysis <br /> - ⁠Address risk scoring <br /> - ⁠Phishing & fake
            website detection <br /> - ⁠Safer swaps with routing intelligence <br /> -
            ⁠Predictive alerts <br /> - ⁠Human-friendly error explanations
          </p>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '70%',
            left: '20%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-9 items-center justify-center bg-accent/50 text-secondary p-4 text-center max-w-40 aspect-square flex flex-col space-y-2 rounded-3xl mx-auto"
        >
          <h1 className="text-xs font-medium">Users</h1>
          <p className="text-3xl font-semibold">150K+</p>
          <h1 className="text-xs font-medium">190+ countries.</h1>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '30%',
            left: '20%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-8 bg-white w-25 items-center justify-center aspect-square text-secondary p-4 text-center flex flex-col space-y-2 rounded-3xl mx-auto"
        >
          <h1 className="text-xs font-medium">Transactions</h1>
          <p className="text-3xl font-semibold">$1.5M</p>
          <h1 className="text-xs font-medium">in (AI Protected)</h1>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '80%',
            left: '80%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-7 bg-accent/50 text-secondary p-4 text-center flex flex-col space-y-2 rounded-3xl max-w-sm mx-auto"
        >
          <h1 className="text-xs font-medium">Swap Volume</h1>
          <p className="text-3xl font-semibold">$1.5B+</p>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '20%',
            left: '60%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-6 bg-black text-white p-4 text-center flex flex-col space-y-2 rounded-3xl max-w-sm mx-auto"
        >
          <h1 className="text-xs font-medium">Scams attempted</h1>
          <p className="text-3xl font-semibold">100K+</p>
          <h1 className="text-xs font-medium">Before users signed</h1>
        </motion.div>
        <motion.div
          initial={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            position: 'absolute',
          }}
          whileInView={{
            top: '80%',
            left: '50%',
            x: '-50%', // keep centering on its own width
            y: '-50%',
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            bounce: 0.4,
          }}
          className="z-5 bg-primary text-white p-4 text-center flex flex-col space-y-2 rounded-3xl max-w-sm mx-auto"
        >
          <h1 className="text-xs font-medium">Browser Extension</h1>
          <p className="text-3xl font-semibold">500K+</p>
          <h1 className="text-xs font-medium">installs in under 3 months.</h1>
        </motion.div>
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
