import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Assuming 'bg-secondary', 'text-secondary', 'btn-primary', and 'var(--color-background)'
// are defined in your Tailwind config or CSS, where:
// - bg-secondary is the dark/footer background color.
// - var(--color-background) is a light color (for the newsletter box).

const Footer = () => {
  const navigate = useNavigate();
  return (
    // 1. Footer: Set padding and a distinct top border/shadow if desired.
    <footer className="p-4 text-primary">
      {/* 2. Main Content Container: Max width for better desktop readability, rounded corners for style. */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 ">
        <div className="flex justify-start items-center space-x-2 mb-6">
          <img src="/logo.svg" alt="" className="h-10 w-10" />
          <h1 className="text-xl font-bold text-primary mb-1">Cap Wallet</h1>
        </div>
        {/* Top Section: Logo/Newsletter and Nav Links */}
        <div className="flex flex-col lg:flex-row justify-">
          {/* A. Logo and Newsletter Section */}

          {/* B. Navigation Links Grid */}
          <div className="flex flex-col space-y-8 w-full">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:pl-16">
              {/* 1. Features */}
              {/* <div>
                <h3 className="text-lg mb-4 text-primary">Features</h3>
                <ul className="space-y-3 text-sm text-secondary">
                  <li>
                    <a
                      href="/ai-features"
                      className="hover:text-primary transition duration-150"
                    >
                      AI Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wallet-features"
                      className="hover:text-primary transition duration-150"
                    >
                      Wallet Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/trading-defi"
                      className="hover:text-primary transition duration-150"
                    >
                      Trading & DeFi
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* 2. Company */}
              <div>
                <h3 className="text-lg mb-4 text-primary">Company</h3>
                <ul className="space-y-3 text-sm text-secondary">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-primary transition duration-150"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="hover:text-primary transition duration-150"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs"
                      className="hover:text-primary transition duration-150"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              {/* 3. Resources */}
              <div>
                <h3 className="text-lg mb-4 text-primary">Resources</h3>
                <ul className="space-y-3 text-sm text-secondary">
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-primary transition duration-150"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/support"
                      className="hover:text-primary transition duration-150"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-of-service"
                      className="hover:text-primary transition duration-150"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="hover:text-primary transition duration-150"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* 4. Social/Contact (Example) */}
              <div>
                <h3 className="text-lg mb-4 text-primary">Connect</h3>
                <ul className="space-y-3 text-sm text-secondary">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition duration-150"
                    >
                     (x) Twitter
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition duration-150"
                    >
                     Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition duration-150"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition duration-150"
                    >
                      Reddit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition duration-150"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition duration-150"
                    >
                      Support Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full mt-8 flex gap-3 justify-center md:justify-start lg:pl-16">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="btn btn-primary p-6 "
                onClick={() => (window.location = '/download')}
              >
                Join Waitlist
              </motion.button>
              {/* <motion.button
                onClick={() => navigate('/download/browser')}
                className="btn btn-outline rounded-full border-accent text-secondary hover:bg-accent hover:text-white p-6 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                
                Install Browser Extension
              </motion.button> */}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
      </div>
      <div className="text-center md:text-left pt-6 text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} CapWallet, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
