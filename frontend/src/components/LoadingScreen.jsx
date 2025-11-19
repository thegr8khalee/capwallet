import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ progress = 0 }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8 flex items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="/logo.svg" 
            alt="Cap Wallet" 
            className="w-20"
          />
        </motion.div>

        <div className="w-64 mx-auto">
          {/* <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-primary via-accent to-secondary"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div> */}
          {/* <p className="text-gray-600 mt-4 text-sm font-montserrat">
            Loading... {progress}%
          </p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
