import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Heart,
  MenuIcon,
  PlayIcon,
  ScrollText,
  Smartphone,
  X,
} from 'lucide-react';
import PhoneIcon from './Phone';
import { motion, AnimatePresence } from 'framer-motion';

// Preload critical header assets
const preloadHeaderAssets = () => {
  const criticalAssets = [
    '/logo.svg',
    '/AISec.svg',
    '/multichain.svg',
    '/non-custodial.svg',
  ];

  criticalAssets.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

const Header = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [dropdownPos, setDropdownPos] = useState(null);
  const [activeModalTab, setActiveModalTab] = useState(null);
  const buttonRefs = useRef({});

  // Preload header assets on mount
  useEffect(() => {
    preloadHeaderAssets();
  }, []);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((s) => !s);
    setActiveModalTab(null); // Reset to main menu when closing
  };

  const openTab = (key) => {
    setActiveModalTab(key);
  };

  const goBackToMain = () => {
    setActiveModalTab(null);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const handleDemoClick = useCallback(() => {
    window.location.href = '/demo';
  }, []);

  const toggleDropdown = (menu) => {};

  const menuItems = [
    {
      label: 'Features',
      key: 'features',
      items: () => (
        <div className="flex flex-col space-y-4 p-4">
          <a href="/ai-protection" className="h-full flex items-start gap-3 bg-accent/20 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
            <img
              src="/featAI.svg"
              alt=""
              className="aspect-square object-cover w-30 rounded-3xl"
            />
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-base font-medium text-secondary">
                AI Transaction Protection
              </h3>
              <p className="text-sm text-gray-500">
                Your Crypto, Protected by Intelligent Security
              </p>
            </div>
          </a>
          <a href="/multi-chain" className="h-full flex items-start gap-3 bg-accent/20 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
            <img
              src="/multichain1.svg"
              alt=""
              className="aspect-square object-cover w-30 rounded-3xl"
            />
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-base font-medium text-secondary">
                Multi-Chain Support
              </h3>
              <p className="text-sm text-gray-500">
                One Wallet for Everything Across Every Chain
              </p>
            </div>
          </a>
          <a href="/self-custody" className="h-full flex items-start gap-3 bg-accent/20 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
            <img
              src="/featcustody.svg"
              alt=""
              className="aspect-square object-cover w-30 rounded-3xl"
            />
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-base font-medium text-secondary">
                Self-Custody Security
              </h3>

              <p className="text-sm text-gray-500">
                Your private keys never leave your device—ever
              </p>
            </div>
          </a>
        </div>
      ),
    },
    {
      label: 'Resources',
      key: 'resources',
      items: () => (
        <div className="flex flex-col space-y-4 p-4">
          <a href="/support" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Heart className="text-primary" />
            </div>
            <div>
            </div>
            <div>
              <h3 className="text-base font-medium text-secondary">Support</h3>
              <p className="text-sm text-gray-500">
                Find answers to common questions
              </p>
            </div>
          </a>
          <a href="/terms-of-service" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
             <ScrollText className="text-primary" />
            </div>
            <div>
            </div>
            <div>
              <h3 className="text-base font-medium text-secondary">
                Terms of Service
              </h3>
              <p className="text-sm text-gray-500">
                Read our terms and conditions
              </p>
            </div>
          </a>
          <a href="/privacy-policy" className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Smartphone className="text-primary" />
            </div>
            <div>
              <h3 className="text-base font-medium text-secondary">
                Privacy Policy
              </h3>
              <p className="text-sm text-gray-500">
                Learn how we handle your data
              </p>
            </div>
          </a>
        </div>
      ),
    },
    {
      label: 'About Us',
      key: 'aboutus',
      href: '/about',
    },
    {
      label: 'Contact',
      key: 'contact',
      href: '/contact',
    }
  ];

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDesktopMouseEnter = (key) => {
    clearCloseTimeout();

    const el = buttonRefs.current[key];
    if (!el) {
      setHoveredDropdown(null);
      setDropdownPos(null);
      return;
    }

    const rect = el.getBoundingClientRect();
    const left = rect.left + rect.width / 2;
    const top = rect.bottom + 8;

    setDropdownPos({ left, top });
    setHoveredDropdown(key);
  };

  const handleDesktopMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
      setDropdownPos(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    clearCloseTimeout();
  };

  const handleUseCaseClick = (link) => {
    if (hoveredDropdown === 'usecases' || openDropdown === 'usecases') {
      window.location.href = `/usecases/${link}`;
    } else if (hoveredDropdown === 'products' || openDropdown === 'products') {
      window.location.href = `/products/${link}`;
    } else {
      window.location.href = `/${link}`;
    }
  };

  return (
    <div className="sticky top-0 z-100">
      <header className={`mx-4 relative top-4 z-100 ${className}`}>
        <div className="w-full justify-between items-center absolute flex z-[102] pointer-events-none">
          <a href="/" className="flex justify-center items-center space-x-2">
            <img src="/logo.svg" alt="" className="w-10" />
            <div className="mb-1 font-montserrat text-xl font-bold text-primary pointer-events-auto">
              Cap Wallet
            </div>
          </a>

          <div className="flex space-x-2 items-center justify-center pointer-events-auto">
            <a href="/download" className="btn p-6 btn-primary">
              <PhoneIcon />
              Download
            </a>
            <button
              className="lg:hidden btn h-12 w-12 btn-circle bg-white border-none shadow-none btn-accent text-primary transition-transform duration-200 relative z-[102]"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <MenuIcon className="size-5 text-primary" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`hidden absolute  w-full max-w-lg left-1/2 -translate-x-1/2 bg-white rounded-4xl mx-auto lg:flex flex-col transition-all duration-500 ${
            isMobileMenuOpen ? 'rounded-full' : 'rounded-full'
          }`}
        >
          <div className="w-full flex items-center justify-between px-1 py-1 relative">
            <div className="w-full flex items-center justify-between gap-2 relative z-50">
              <nav className="w-full flex items-center justify-between  space-x-2 relative">
                {menuItems.map((menu) => (
                  menu.href ? (
                    <a
                      key={menu.key}
                      href={menu.href}
                      className="flex items-center space-x-1 px-4 py-3 rounded-full transition-all duration-200 google-body-medium text-secondary hover:bg-primary/10"
                    >
                      <span>{menu.label}</span>
                    </a>
                  ) : (
                    <button
                      key={menu.key}
                      ref={(el) => (buttonRefs.current[menu.key] = el)}
                      className={`flex items-center space-x-1 px-4 py-3 rounded-full transition-all duration-200 google-body-medium ${
                        hoveredDropdown === menu.key
                          ? 'bg-accent text-white'
                          : 'text-secondary hover:bg-primary/10'
                      }`}
                      type="button"
                      onMouseEnter={() => handleDesktopMouseEnter(menu.key)}
                      onMouseLeave={handleDesktopMouseLeave}
                    >
                      <span>{menu.label}</span>
                      {menu.items && (
                        <ChevronDown
                          className={`size-4 transition-transform duration-300 ${
                            hoveredDropdown === menu.key ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>
                  )
                ))}
              </nav>
            </div>
          </div>

          <div
            className={`lg:hidden grid transition-all duration-500 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? 'opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
            }`}
          ></div>
        </div>

        {hoveredDropdown && dropdownPos && menuItems.find((m) => m.key === hoveredDropdown)?.items && (
          <div
            ref={dropdownRef}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDesktopMouseLeave}
            style={{
              position: 'fixed',
              top: dropdownPos.top,
              left: dropdownPos.left,
              transform: 'translateX(-50%)',
              zIndex: 60,
            }}
            className="bg-white rounded-4xl min-w-[280px] animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl border border-gray-100"
          >
            {menuItems.find((m) => m.key === hoveredDropdown)?.items()}
          </div>
        )}

        {/* Mobile Menu Modal - Slide in from left */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-[100]"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Modal Drawer */}
              <motion.div
                className="fixed rounded-4xl top-20 right-6 h-[70vh] w-100 max-w-[85vw] bg-white shadow-2xl z-[101] overflow-y-auto"
                role="dialog"
                aria-modal="true"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.9 }}
                transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
              >
                {/* Main Menu View */}
                {!activeModalTab && (
                  <motion.nav
                    className="p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {menuItems.map((menu, idx) => (
                      menu.href ? (
                        <motion.a
                          key={menu.key}
                          href={menu.href}
                          className="font-medium w-full text-lg text-secondary p-4 flex items-center justify-between hover:bg-accent rounded-full transition-colors"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.05 * idx,
                            type: 'spring',
                            bounce: 0.5,
                          }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {menu.label}
                        </motion.a>
                      ) : (
                        <motion.button
                          key={menu.key}
                          onClick={() => menu.items && openTab(menu.key)}
                          className="font-medium w-full text-lg text-secondary p-4 flex items-center justify-between hover:bg-accent rounded-full transition-colors"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.05 * idx,
                            type: 'spring',
                            bounce: 0.5,
                          }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {menu.label}
                          {menu.items && (
                            <ChevronDown className="inline-block size-5 -rotate-90" />
                          )}
                        </motion.button>
                      )
                    ))}
                  </motion.nav>
                )}

                {/* Tab Content View */}
                {activeModalTab && (
                  <motion.div
                    className="flex flex-col h-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', bounce: 0.3 }}
                  >
                    {/* Tab Header with Back Button */}
                    <div className="flex items-center p-4 sticky top-0 bg-white">
                      <motion.button
                        onClick={goBackToMain}
                        className="btn btn-sm btn-ghost btn-circle mr-3"
                        aria-label="Go back"
                        whileHover={{ scale: 1.1, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronDown className="size-5 rotate-90" />
                      </motion.button>
                      <h2 className="text-xl font-semibold text-primary">
                        {menuItems.find((m) => m.key === activeModalTab)?.label}
                      </h2>
                    </div>

                    {/* Tab Items - Render JSX */}
                    <div className="flex-1 overflow-y-auto">
                      {menuItems.find((m) => m.key === activeModalTab)?.items?.()}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
