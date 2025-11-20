import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, FileText } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
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
            <BookOpen className="w-24 h-24 text-primary" />
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* <PenTool className="w-12 h-12 text-accent" /> */}
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Blogs
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Coming Soon
        </motion.p>

        <motion.p
          className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Stay tuned for insights, updates, and stories about the future of crypto, Web3 security, 
          and how Cap Wallet is making digital assets safer and more accessible for everyone.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* <motion.a
            href="mailto:blog@capwallet.com"
            className="btn btn-primary px-8 py-4"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="inline mr-2" />
            Subscribe for Updates
          </motion.a> */}
          <motion.a
            href="/"
            className="btn btn-primary p-6"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.a>
        </motion.div>

        {/* <motion.div
          className="mt-16 p-6 bg-gray-50 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-gray-600">
            Want to contribute or get notified when we launch? Reach out at{' '}
            <a href="mailto:blog@capwallet.com" className="text-primary font-semibold hover:underline">
              blog@capwallet.com
            </a>
          </p>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Blog;
