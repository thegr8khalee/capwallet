import React from 'react';

// Assuming 'bg-secondary', 'text-secondary', 'btn-primary', and 'var(--color-background)'
// are defined in your Tailwind config or CSS, where:
// - bg-secondary is the dark/footer background color.
// - var(--color-background) is a light color (for the newsletter box).

const Footer = () => {
  return (
    // 1. Footer: Set padding and a distinct top border/shadow if desired.
    <footer className="p-6 text-primary">
      {/* 2. Main Content Container: Max width for better desktop readability, rounded corners for style. */}
      <div className="bg-white rounded-3xl p-6 ">
        <div className="flex justify-start items-center space-x-2 mb-6">
          <img src="/logo.svg" alt="" className="h-10 w-10" />
          <h1 className="text-xl font-bold text-primary mb-1">Cap Wallet</h1>
        </div>
        {/* Top Section: Logo/Newsletter and Nav Links */}
        <div className="flex flex-col lg:flex-row justify-">
          {/* A. Logo and Newsletter Section */}
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
            {/* Newsletter Box */}
            <div className="bg-accent p-6 rounded-3xl text-white">
              <h2 className="text-3xl font-semibold mb-2">
                Join Our Community
              </h2>
              <p className="text-sm  mb-4">
                Sign up for our newsletter and join the growing CapWallet
                community.
              </p>

              <div className="flex flex-col gap-3">
                <div className="w-full flex p-1 pl-4 rounded-full text-secondary placeholder:text-gray-400 border border-gray-200 focus:border-blue-400 focus:outline-none transition duration-150">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    // Refined input styling: full width, better padding, focus state.
                    className="w-full focus:border-blue-400 focus:outline-none transition duration-150"
                  />
                  <button className="btn bg-white border-0 shadow-none text-accent font-medium p-6 rounded-full transition duration-150">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* B. Navigation Links Grid */}
          <div className="flex flex-col space-y-8 w-full lg:w-2/3 ">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:pl-16">
              {/* 1. Features */}
              <div>
                <h3 className="text-lg mb-4 text-primary">Features</h3>
                <ul className="space-y-3 text-sm text-secondary">
                  <li>
                    <a
                      href="/ai-protection"
                      className="hover:text-primary transition duration-150"
                    >
                      AI Transaction Protection
                    </a>
                  </li>
                  <li>
                    <a
                      href="/multi-chain"
                      className="hover:text-primary transition duration-150"
                    >
                      Multi-Chain Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/self-custody"
                      className="hover:text-primary transition duration-150"
                    >
                      Self-Custody Security
                    </a>
                  </li>
                </ul>
              </div>

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
                      href="/contact"
                      className="hover:text-primary transition duration-150"
                    >
                      Contact
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
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition duration-150"
                    >
                      LinkedIn
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
              {/** Play Store Badge */}
              <button className="flex justify-center bg-black items-center text-white rounded-[6px] px-2 py-1 overflow-hidden hover:opacity-90 transition duration-200">
                <img
                  src="/playstore.svg"
                  alt="Get it on Google Play"
                  className="w-8 h-8 mr-2"
                />
                <div className="flex flex-col text-start -space-y-1">
                  <p className="text-xs">Get it on</p>
                  <h3 className="text-lg font-medium">Google Play</h3>
                </div>
              </button>

              {/** App Store Badge */}
              <button className="flex justify-center bg-black items-center text-white rounded-[6px] px-2 py-1 overflow-hidden hover:opacity-90 transition duration-200">
                <img
                  src="/appstore.svg"
                  alt="Get it on the App Store"
                  className="w-8 h-8 mr-2"
                />
                <div className="flex flex-col text-start -space-y-1">
                  <p className="text-xs">Get it on</p>
                  <h3 className="text-lg font-medium">App Store</h3>
                </div>
              </button>
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
