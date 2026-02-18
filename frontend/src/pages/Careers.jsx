import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Users, Rocket, ArrowDown, CheckCircle, Send, Upload, MapPin, Clock, Star } from 'lucide-react';
import Principle from '../components/PrinciplesCard';
import Benefit from '../components/BenefitsCard';
import { useImagePreloader } from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';
import toast from 'react-hot-toast';
import { useCareerStore } from '../stores/useCareerStore';

const Careers = ({ setPageLoading }) => {
  const operatingPrinciples = [
    '/lock.svg',
    '/human.svg',
    '/safety.svg',
    '/security.svg',
    '/simple.svg',
    '/build.svg',
  ];

  const benefits = [
    '/home.svg',
    '/timeoff.svg',
    '/health.svg',
    '/wellness.svg',
    '/grow.svg',
    '/meetups.svg',
    '/hours.svg',
    '/Tools1.svg',
    '/team.svg',
  ];

  const imageUrls = [
    '/lock.svg',
    '/human.svg',
    '/safety.svg',
    '/security.svg',
    '/simple.svg',
    '/build.svg',
    '/home.svg',
    '/timeoff.svg',
    '/health.svg',
    '/wellness.svg',
    '/grow.svg',
    '/meetups.svg',
    '/hours.svg',
    '/Tools1.svg',
    '/team.svg',
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

      <div className="pt-24 lg:pt-0">
        {imagesLoaded && (
          <>
            <motion.section
              className="lg:min-h-screen max-w-4xl mx-auto text-center items-center justify-center flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            >
              <motion.div
                className="mb-8 flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <div className="relative">
                  {/* <Briefcase className="w-24 h-24 text-primary" /> */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {/* <Rocket className="w-12 h-12 text-accent" /> */}
                  </motion.div>
                </div>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Careers at Cap Wallet
              </motion.h1>

              <motion.p
                className="text-sm sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                We’re a group of humans who care about people, about safety, and
                about making the open economy a place where everyone feels
                confident, not afraid.
                <br />
                <br />
                If you want to work on something meaningful…
                {/* <br /> */}
                <br />
                If you want to protect millions from scams…
                {/* <br /> */}
                <br />
                If you want to build a product your younger self wishes existed…
                <br />
                <br />
                Then you’ll feel at home here.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="#roles"
                  className="btn btn-primary p-6"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Open Roles
                  <ArrowDown className="size-5" />
                </motion.a>
              </motion.div>
            </motion.section>
            <motion.section
              className="lg:min-h-screen mx-auto text-center py-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            >
              <motion.h1
                className="text-3xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6 text-start sm:text-center w-full px-4 sm:px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Our Principles
              </motion.h1>
              <div
                className="w-full h-full flex overflow-x-auto overflow-y-hidden"
                style={{ scrollbarWidth: 'none' }}
              >
                {operatingPrinciples.map((principle, index) => (
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
                    className="h-125 sm:h-150 aspect-9/12 py-2"
                  >
                    <img
                      src={principle}
                      alt=""
                      className="rounded-4xl h-full m-2"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
            <motion.section
              className="min-h-screen w-full py-20 text-start sm:text-center px-4 sm:px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            >
              <motion.h1
                className="text-3xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Benefits
              </motion.h1>
              <div
                className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-hidden overflow-y-hidden"
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
                    className=""
                  >
                    <img
                      src={benefit}
                      alt=""
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
            {/* About Us */}
            <motion.section
              id="roles"
              className="w-full py-20 px-4 sm:px-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            >
              <div className="max-w-5xl mx-auto">
                <motion.h1
                  className="text-3xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6 text-start sm:text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Open Positions
                </motion.h1>
                <motion.p
                  className="text-sm sm:text-lg text-gray-500 max-w-3xl mx-auto text-start sm:text-center mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  We're looking for passionate people who want to shape the
                  future of finance. Explore our open roles below.
                </motion.p>

                {/* Co-Founder Role Card */}
                <motion.div
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', bounce: 0.3 }}
                >
                  {/* Role Header */}
                  <div className="bg-primary text-white p-6 sm:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-white/20 text-sm px-4 py-1 rounded-full flex items-center gap-1">
                        <Clock className="size-4" /> Full-time
                      </span>
                      <span className="bg-white/20 text-sm px-4 py-1 rounded-full flex items-center gap-1">
                        <MapPin className="size-4" /> On-site / Global
                      </span>
                      <span className="bg-white/20 text-sm px-4 py-1 rounded-full flex items-center gap-1">
                        <Star className="size-4" /> Co-Founder
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-montserrat font-bold mb-3">
                      Co-Founder
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base max-w-2xl">
                      Shape Cap Wallet's vision, strategy, and growth from the
                      ground up. A pivotal leadership role for someone who wants
                      to define the future of finance.
                    </p>
                  </div>

                  {/* Role Body */}
                  <div className="p-6 sm:p-10 space-y-10">
                    {/* About Us */}
                    <div>
                      <h3 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                        About Us
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Cap Wallet is a next-generation AI-powered crypto wallet
                        built to power the open economy — a world where money
                        moves freely, securely, and intelligently. We're not
                        just building another wallet. We're building a complete
                        financial platform where safety, privacy, and real-world
                        usability come standard.
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Our platform brings together everything users and
                        businesses need in one place:
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          {
                            title: 'Cap Crypto Card',
                            desc: 'Spend crypto anywhere, like a traditional debit card, powered by your wallet.',
                          },
                          {
                            title: 'Auto-Savings (Automated DeFi Yields)',
                            desc: 'Put your money to work automatically with optimized DeFi yield strategies.',
                          },
                          {
                            title: 'Split Bills',
                            desc: 'Divide expenses with friends or groups instantly in crypto.',
                          },
                          {
                            title: 'Pay Anyone',
                            desc: 'Send money directly to a phone number or email — no wallet address required.',
                          },
                          {
                            title: 'Merchant Tools',
                            desc: 'Accept crypto payments effortlessly with QR codes or payment links.',
                          },
                          {
                            title: 'Cap Protect / Insurance',
                            desc: 'Built-in protection for your assets, giving peace of mind.',
                          },
                          {
                            title: 'Multi-Chain / Cross-Chain',
                            desc: 'Store, send, and receive Bitcoin, Solana, and 100+ cryptocurrencies in one app.',
                          },
                          {
                            title: 'Swapping & In-Wallet Token Swaps',
                            desc: 'Instant token swaps with competitive rates and AI-optimized fee routing.',
                          },
                          {
                            title: 'Cap Index',
                            desc: 'Invest in curated baskets of crypto assets in a single tap.',
                          },
                          {
                            title: 'Integrated Crypto On/Off Ramp',
                            desc: 'Buy and sell crypto directly within the wallet using local payment methods.',
                          },
                          {
                            title: 'Dark Pool Trading Access',
                            desc: 'Make large trades privately without affecting market prices.',
                          },
                          {
                            title: 'Multi-Signature & Shared Wallets',
                            desc: 'Team or institutional wallets with customizable approval policies.',
                          },
                          {
                            title: 'Built-In dApp & DeFi Access',
                            desc: 'Use decentralized apps, NFT markets, and DeFi services straight from the wallet.',
                          },
                        ].map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3 bg-background rounded-xl p-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                            <div>
                              <p className="font-semibold text-secondary text-sm">
                                {feature.title}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {feature.desc}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Under the Hood */}
                    <div>
                      <h3 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                        Under the Hood
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Cap Wallet is engineered with security and intelligence
                        at its core:
                      </p>
                      <div className="space-y-3">
                        {[
                          {
                            title: 'Self-Custody Security',
                            desc: 'Your private keys are stored only on your device — no one else can ever access your funds.',
                          },
                          {
                            title: 'AI Transaction Protection',
                            desc: 'Checks every transaction for unusual activity and warns you before you send.',
                          },
                          {
                            title: '24/7 Security Guard',
                            desc: 'Always-on monitoring that automatically warns or blocks interactions with scam addresses, malicious smart contracts, or suspicious networks.',
                          },
                          {
                            title: 'Smart Portfolio Tips',
                            desc: 'AI tracks your portfolio performance, market trends, and transaction patterns to suggest personalized strategies.',
                          },
                          {
                            title: 'Fee Optimizer',
                            desc: 'AI recommendations for the cheapest times and methods to send transactions.',
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3 bg-primary/5 rounded-xl p-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                            <div>
                              <p className="font-semibold text-secondary text-sm">
                                {item.title}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {item.desc}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-gray-600 leading-relaxed mt-4 text-sm">
                        The entire platform is fully compliant with GDPR, MiCA,
                        NDPR, and AML standards from day one. We believe the
                        next generation of AI and Crypto should be powerful AND
                        aligned with human values.
                      </p>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Role Description */}
                    <div>
                      <h3 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                        Role Description
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        This is a full-time, on-site co-founder role with a
                        global presence spanning North America (including
                        Canada), Europe, the Middle East, and Asia. As
                        Co-Founder, you will play a pivotal role in shaping Cap
                        Wallet's vision, strategy, and growth from the ground
                        up.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Your responsibilities will span driving business
                        development, leading marketing and sales efforts,
                        analyzing market trends, and forging strategic
                        partnerships across key regions. You'll collaborate
                        closely with product and engineering teams to develop
                        innovative solutions, while also managing day-to-day
                        operations as we scale. This is a hands-on, high-impact
                        role for someone who wants to help define what the
                        future of finance looks like.
                      </p>
                    </div>

                    {/* Who We're Looking For */}
                    <div>
                      <h3 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                        Who We're Looking For
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        We're searching for a co-founder who shares our vision
                        and can help turn it into reality. You should be:
                      </p>
                      <div className="space-y-3">
                        {[
                          'Female — We\'re committed to diverse leadership in tech',
                          'Ready to build something great together',
                          'Experienced in Tech or Business — You understand either the technical side of building products or the business side of growing companies (ideally both!)',
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                            <p className="text-gray-600 text-sm">{item}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* What You'll Bring */}
                    <div>
                      <h3 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                        What You'll Bring
                      </h3>
                      <div className="space-y-3">
                        {[
                          'A passion for responsible AI and technology that serves people',
                          'Experience building or scaling tech products or businesses',
                          'The drive to shape company direction and culture from the ground up',
                          'A collaborative mindset and shared commitment to our mission',
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                            <p className="text-gray-600 text-sm">{item}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* What We Offer */}
                    <div>
                      <h3 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                        What We Offer
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          {
                            title: 'Co-founder equity and ownership',
                            desc: 'Real ownership stake in the company',
                          },
                          {
                            title: 'Define the future',
                            desc: 'Shape the future of safe, privacy-first AI and crypto',
                          },
                          {
                            title: 'Build from the ground up',
                            desc: 'A chance to build something meaningful from the foundation',
                          },
                          {
                            title: 'Work that matters',
                            desc: 'Shape how AI and blockchain develop responsibly',
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="bg-background rounded-xl p-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <p className="font-semibold text-secondary text-sm mb-1">
                              {item.title}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {item.desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* CTA */}
                    <div className="text-center">
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                        If you're ready to build technology that prioritizes
                        people's safety and privacy, let's talk.
                      </p>
                      <motion.a
                        href="#apply"
                        className="btn btn-primary p-6"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                        <ArrowDown className="size-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Application Form */}
            <ApplicationForm />
          </>
        )}
      </div>
    </>
  );
};

/* ------------------------------------------------------------------ */
/* Application Form Component                                          */
/* ------------------------------------------------------------------ */
const ApplicationForm = () => {
  const { isLoading, submitted, submitApplication } = useCareerStore();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    background: '',
    motivation: '',
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be under 5 MB.');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitApplication(formData);
  };

  if (submitted) {
    return (
      <motion.section
        id="apply"
        className="w-full py-20 px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <CheckCircle className="size-16 text-green-500 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl font-montserrat font-bold text-secondary mb-4">
            Application Received!
          </h2>
          <p className="text-gray-600 mb-2">
            Thank you for your interest in joining Cap Wallet as Co-Founder.
          </p>
          <p className="text-gray-500 text-sm">
            We'll review your application and get back to you soon.
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="apply"
      className="w-full py-20 px-4 sm:px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-4 text-start sm:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Apply Now
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto text-start sm:text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Interested? Apply with your background and why this mission resonates
          with you.
        </motion.p>

        <motion.div
          className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Phone Number{' '}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* LinkedIn / Portfolio */}
            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                LinkedIn / Portfolio URL{' '}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            {/* Background */}
            <div>
              <label
                htmlFor="background"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Your Background & Experience{' '}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="background"
                name="background"
                value={formData.background}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
                placeholder="Tell us about your experience in tech, business, crypto, or any relevant areas..."
              />
            </div>

            {/* Motivation */}
            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-semibold text-secondary mb-2"
              >
                Why Does This Mission Resonate With You?{' '}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
                placeholder="What excites you about Cap Wallet's mission? Why do you want to co-found this company?"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2">
                Resume / CV{' '}
                <span className="text-gray-400 font-normal">(optional, max 5 MB)</span>
              </label>
              <label
                htmlFor="resume"
                className="flex items-center justify-center gap-3 w-full p-6 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
              >
                <Upload className="size-5 text-gray-400" />
                <span className="text-gray-500 text-sm">
                  {resumeFile
                    ? resumeFile.name
                    : 'Click to upload your resume (PDF, DOC, DOCX)'}
                </span>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="btn btn-primary p-6 w-full text-base"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2 justify-center">
                  <span className="loading loading-spinner loading-sm" />
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-2 justify-center">
                  <Send className="size-5" />
                  Submit Application
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Careers;
