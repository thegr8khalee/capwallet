import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Users, Rocket, ArrowDown } from 'lucide-react';
import Principle from '../components/PrinciplesCard';
import Benefit from '../components/BenefitsCard';
import { useImagePreloader } from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';

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
                If you want to work on something meaningful…
                <br />
                If you want to protect millions from scams…
                <br />
                If you want to build a product your younger self wishes existed…
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
            <motion.section
            id='roles'
              className=" w-full py-20 text-start sm:text-center px-4 sm:px-6"
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
                Open Postions
              </motion.h1>
              <p className='text-lg'>Coming Soon</p>
            </motion.section>
          </>
        )}
      </div>
    </>
  );
};

export default Careers;
