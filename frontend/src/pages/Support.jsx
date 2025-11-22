import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  MessageCircle,
  Shield,
  Code,
  Users,
  Activity,
  ChevronDown,
  Mail,
  Globe,
  AlertTriangle,
  CheckCircle,
  Book,
  Chrome,
  Search,
  X,
} from 'lucide-react';
import PhoneIcon from '../components/Phone';

const Support = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const helpCenterSections = [
    {
      title: '1. Getting Started',
      icon: Book,
      items: [
        {
          question: 'What is Cap Wallet?',
          answer:
            'Cap Wallet is an AI-powered, non-custodial multi-chain crypto wallet that lets you store, send, receive, swap, and manage digital assets securely. Your keys stay on your device, and AI protects you from scams and risky transactions.',
        },
        {
          question: 'How to create your first wallet',
          answer:
            'Download Cap Wallet → Tap Create Wallet → Write down your recovery phrase → Confirm the phrase in order → Enable biometrics for secure access.',
        },
        {
          question: 'Backing up & securing your recovery phrase',
          answer:
            'Write your recovery phrase on paper and store it offline in a safe, private location. Never store it on your phone or cloud storage. Never share it with anyone, including support.',
        },
        {
          question: 'Restoring your wallet on a new device',
          answer:
            'Open Cap Wallet → Tap Restore Wallet → Enter your recovery phrase exactly as shown → Set up biometrics or PIN → Your assets will appear automatically.',
        },
        {
          question: 'Supported blockchains & assets',
          answer:
            'Cap Wallet supports Bitcoin, Solana, Ethereum, BSC, Polygon, and many more. New chains are added regularly. Most tokens based on these networks (ERC-20, SPL, BEP-20, etc.) are supported automatically.',
        },
        {
          question: 'Understanding how self-custody works',
          answer:
            'Self-custody means you control your private keys, not us. We cannot recover your wallet, access your funds, or reverse transactions. You are in full control.',
        },
      ],
    },
    {
      title: '2. Security, Safety & AI Protection',
      icon: Shield,
      items: [
        {
          question: 'How Cap Wallet keeps your assets safe',
          answer:
            'Local key storage (Secure Enclave/Keystore), biometric authentication, AI-powered scam detection, real-time risk warnings, device-level encryption, and dApp permission clarity.',
        },
        {
          question: 'Understanding self-custody (what we can and cannot do)',
          answer:
            'We can help with guidance. We cannot access your wallet, keys, seeds, or transactions.',
        },
        {
          question: 'AI scam detection & transaction risk checks',
          answer:
            'AI analyzes addresses, smart contracts, transaction patterns, token authenticity, and dApp reputation. If something looks risky, you get a warning before signing.',
        },
        {
          question: 'How to avoid phishing & fake websites',
          answer:
            'Only download from official links, bookmark the Cap Wallet site, never enter your recovery phrase into any website, and double-check URLs and certificates.',
        },
        {
          question: 'What to do if you interacted with a scam',
          answer:
            'Immediately stop signing transactions, move remaining funds to a new wallet, disconnect all dApps, and contact security@capwallet.com.',
        },
        {
          question: 'Emergency steps if you suspect an attack',
          answer:
            'Disable Wi-Fi/mobile data, turn off your device and restart, create a new wallet, transfer assets, and contact the Security Desk.',
        },
      ],
    },
    {
      title: '3. Using Cap Wallet (Mobile + Web)',
      icon: Globe,
      items: [
        {
          question: 'How to send and receive crypto',
          answer:
            'To send: Select asset → Send → Paste address or scan QR → Confirm with AI security check → Approve & sign. To receive: Select asset → Receive → Share your address or QR.',
        },
        {
          question: 'Cross-chain swaps & bridges',
          answer:
            'Choose "Swap" → select From/To chains → AI finds the safest & cheapest route → Review → Approve.',
        },
        {
          question: 'AI fee optimization',
          answer:
            'AI suggests the best network fee to ensure fast + cost-efficient delivery.',
        },
        {
          question: 'Viewing your portfolio & insights',
          answer:
            'Go to Portfolio to see total value, asset breakdown, historical performance, and AI insights.',
        },
        {
          question: 'Common transaction errors & fixes',
          answer:
            '"Insufficient funds" → Add more network gas. "Transaction dropped" → Try higher fee. "Nonce too low" → Use "Speed Up" or "Reset Nonce". "Network busy" → Retry after a few minutes.',
        },
        {
          question: 'Connecting to dApps from mobile',
          answer:
            'Use the built-in dApp browser or use WalletConnect, then approve the connection request.',
        },
        {
          question: 'Connecting via browser extension',
          answer:
            'Click "Connect Wallet" on the dApp, then approve or deny permissions.',
        },
        {
          question: 'Approving/denying dApp permissions',
          answer:
            'Only approve read-only, view balance, and sign messages you understand. Avoid unverified contracts and unlimited token approvals (unless necessary).',
        },
        {
          question: 'Disconnecting a dApp safely',
          answer: 'Go to Settings → Connected dApps → Disconnect.',
        },
      ],
    },
    {
      title: '4. Browser Extension Support',
      icon: Chrome,
      items: [
        {
          question: 'How to install the extension',
          answer:
            'Get it from Chrome Web Store, Brave Add-ons, or Edge Extensions Marketplace.',
        },
        {
          question: 'Supported browsers: Chrome, Brave, Edge',
          answer:
            'Cap Wallet extension is officially supported on Chrome, Brave, and Microsoft Edge browsers.',
        },
        {
          question: 'How to create or import your wallet',
          answer: 'Same steps as mobile: Create → Backup → Confirm phrase.',
        },
        {
          question: 'Syncing across devices',
          answer:
            'If enabled, sync uses encrypted data; your keys never leave your device.',
        },
        {
          question: 'Connecting the wallet to dApps',
          answer:
            'Click "Connect" on the dApp → Approve connection in the popup.',
        },
        {
          question: 'Switching networks',
          answer: 'Use the network dropdown at the top of the extension.',
        },
        {
          question: 'Understanding permission pop-ups',
          answer: 'Read carefully—AI highlights risky requests automatically.',
        },
        {
          question: 'Signing transactions safely',
          answer:
            'Review amount, contract, fee, and AI safety score, then sign.',
        },
        {
          question: 'Only install from official store links',
          answer:
            'Never download extensions from random sites. Always use official browser stores.',
        },
        {
          question: 'Avoid fake or look-alike extensions',
          answer: 'Verify publisher name: Cap Wallet Inc.',
        },
        {
          question: 'Never share your recovery phrase',
          answer: 'Support will NEVER ask for your recovery phrase.',
        },
        {
          question: 'How AI checks keep you safe on desktop',
          answer: 'AI scans all contract interactions before signing.',
        },
        {
          question: 'Extension not showing in toolbar',
          answer: 'Pin the extension using the puzzle icon in your browser.',
        },
        {
          question: 'Extension not connecting to dApps',
          answer:
            'Refresh the page, restart browser, and ensure correct network is selected.',
        },
        {
          question: '"Network not supported" errors',
          answer: 'Switch to a supported chain or enable it in settings.',
        },
        {
          question: 'Clearing cache & resetting the extension',
          answer: 'Browser → Settings → Clear Cache → Restart.',
        },
      ],
    },
    {
      title: '5. Advanced & Institutional Features',
      icon: Users,
      items: [
        {
          question: 'Multi-signature & shared wallets',
          answer: 'Create an M-of-N approval wallet for teams/DAOs.',
        },
        {
          question: 'Roles and approvals',
          answer: 'Available roles: Owner, Approver, and Viewer.',
        },
        {
          question: 'Advanced privacy tools',
          answer:
            'Transaction obfuscation (if available), stealth addresses, and private mode.',
        },
        {
          question: 'Introduction to Dark Pool trading',
          answer:
            'Private off-book trades for large-volume traders. Quotes (RFQs) are private and do not affect market prices.',
        },
        {
          question: 'Who can access Dark Pool mode',
          answer:
            'Cap Wallet Pro users, institutions, and high-volume traders (subject to KYC).',
        },
        {
          question: 'Compliance & analytics tools',
          answer:
            'Spend limits, audit logs, role-based access, and reporting dashboard.',
        },
      ],
    },
    {
      title: '6. Account, Devices & Settings',
      icon: Activity,
      items: [
        {
          question: 'Managing devices & sessions',
          answer: 'View and revoke active sessions from Settings → Devices.',
        },
        {
          question: 'Biometric unlock & PIN setup',
          answer:
            'Enable FaceID/TouchID or set a 6-digit PIN for quick access.',
        },
        {
          question: 'Language, currency & region settings',
          answer: 'Customize your experience from Settings → Preferences.',
        },
        {
          question: 'Notification preferences',
          answer:
            'Control price alerts, transaction confirmations, and security alerts.',
        },
        {
          question: 'How we protect your data (privacy overview)',
          answer:
            'No PII required, no seed phrases stored, minimal anonymous analytics, and strong encryption.',
        },
      ],
    },
  ];

  const systemStatus = [
    { service: 'Mobile App', status: 'operational' },
    { service: 'Browser Extension', status: 'operational' },
    { service: 'Swaps & Bridges', status: 'operational' },
    { service: 'On/Off-Ramp Partners', status: 'operational' },
    { service: 'Notifications', status: 'operational' },
  ];

  // Filter sections based on search query
  const filteredSections = helpCenterSections
    .map((section) => {
      if (!searchQuery.trim()) return section;

      const filteredItems = section.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return { ...section, items: filteredItems };
    })
    .filter((section) => section.items.length > 0);

  const quickHelp = [
    {
      question: 'How to create a wallet',
      answer:
        'To create a new wallet, click the "Create Wallet" button on the home screen. You\'ll be guided through setting up a secure password and backing up your recovery phrase. Never share your recovery phrase with anyone.',
    },
    {
      question: 'How to restore a wallet',
      answer:
        'Select "Restore Wallet" and enter your 12 or 24-word recovery phrase. Make sure to enter the words in the correct order. Your wallet and all assets will be restored automatically.',
    },
    {
      question: 'How to use AI Transaction Protection',
      answer:
        "AI Transaction Protection is enabled by default. Before each transaction, Cap Wallet will analyze it for risks and show you a safety score. You can proceed, modify, or cancel based on the AI's recommendations.",
    },
    {
      question: 'How to swap or bridge assets',
      answer:
        'Go to the Swap tab, select your source and destination chains, enter the amount, and the AI will find the best route. Review the fees and safety score, then confirm the transaction.',
    },
    {
      question: 'How to connect to dApps',
      answer:
        'Use WalletConnect or the built-in browser to connect to dApps. Cap Wallet will scan each dApp for security risks before connecting. Always review the permissions requested.',
    },
    {
      question: 'How to back up your wallet safely',
      answer:
        'Go to Settings > Security > Backup. Write down your recovery phrase on paper and store it in a secure location. Never take screenshots or store it digitally. Consider using multiple secure locations.',
    },
    {
      question: 'How to use multi-signature accounts',
      answer:
        'In Settings, select "Create Multi-Sig Wallet". Add co-signers and set the required number of signatures. All co-signers must approve transactions before they execute.',
    },
    {
      question: 'Troubleshooting failed transactions',
      answer:
        'Failed transactions are usually due to insufficient gas, network congestion, or slippage. Check your gas settings, increase slippage tolerance if swapping, or try again during off-peak hours.',
    },
  ];

  const contactMethods = [
    { method: 'Email', value: 'support@capwallet.com' },
    { method: 'Telegram Support', value: 't.me/CapWalletSupport' },
    { method: 'Discord Server', value: 'discord.gg/capwallet' },
    { method: 'Twitter Support', value: '@capwallet' },
  ];

  const securityIssues = [
    'Unauthorized access',
    'Phishing attempts',
    'A malicious dApp',
    'A suspicious transaction',
  ];

  const developerResources = [
    'API Documentation',
    'SDKs',
    'Integration Guides',
    'Web3 Connect Tools',
  ];

  const community = [
    { name: 'Telegram', icon: 'telegram.svg' },
    { name: 'Discord', icon: 'discord.svg' },
    { name: 'X (Twitter)', icon: 'x.svg' },
    { name: 'YouTube', icon: 'youtube.svg' },
    { name: 'Reddit', icon: 'reddit.svg' },
    { name: 'GitHub', icon: 'github.svg' },
  ];

  const statusItems = [
    'Live system status',
    'RPC health',
    'Outage alerts',
    'Release notes',
    'Upgrade announcements',
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <motion.section
        className="px-4 pt-24 sm:px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Heart className="text-primary size-20 mx-auto" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Need help with Cap Wallet?
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We're here to keep your crypto safe, your questions answered, and your
          experience smooth—24/7.
        </motion.p>
        {/* <motion.p
          className="text-lg text-gray-600 mb-8 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cap Wallet is your intelligent, non-custodial, AI-powered wallet for the open economy. Whether you're using the mobile app or the browser extension, this Support Hub helps you find answers, solve issues, and stay secure.
        </motion.p> */}

        {/* Search Bar */}
        <motion.div
          className="max-w-xl w-full mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-full border-2 border-gray-200 bg-white focus:border-primary focus:outline-none text-gray-700 placeholder-gray-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="size-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Search Results */}
        {searchQuery && (
          <motion.div
            className="mx-auto w-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {filteredSections.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-2">
                  No results found for "{searchQuery}"
                </p>
                <p className="text-gray-400">
                  Try different keywords or browse the categories below
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-gray-600 text-sm mb-4">
                  Found{' '}
                  {filteredSections.reduce(
                    (acc, section) => acc + section.items.length,
                    0
                  )}{' '}
                  result(s)
                </p>
                {filteredSections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-3">
                    <h3 className="text-xl font-semibold text-secondary flex items-center gap-2">
                      <section.icon className="size-5" />
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: itemIndex * 0.05 }}
                        >
                          <motion.button
                            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                            onClick={() =>
                              setExpandedQuestion(
                                expandedQuestion.section === sectionIndex &&
                                  expandedQuestion.index === itemIndex
                                  ? { section: null, index: null }
                                  : { section: sectionIndex, index: itemIndex }
                              )
                            }
                          >
                            <span className="text-lg font-medium text-secondary">
                              {item.question}
                            </span>
                            <motion.div
                              animate={{
                                rotate:
                                  expandedQuestion.section === sectionIndex &&
                                  expandedQuestion.index === itemIndex
                                    ? 180
                                    : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="size-5 text-gray-400 flex-shrink-0" />
                            </motion.div>
                          </motion.button>
                          <AnimatePresence>
                            {expandedQuestion.section === sectionIndex &&
                              expandedQuestion.index === itemIndex && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                                    {item.answer}
                                  </div>
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {!searchQuery && (
          <>
            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="/contact"
                className="btn btn-primary p-6"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.a>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4 justify-center text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#security"
                className="hover:text-primary transition-colors"
              >
                Security Desk
              </a>
              <span>•</span>
              <a
                href="#status"
                className="hover:text-primary transition-colors"
              >
                System Status
              </a>
              <span>•</span>
              <a
                href="#browser-extension"
                className="hover:text-primary transition-colors"
              >
                Browser Extension Help
              </a>
            </motion.div>
          </>
        )}
      </motion.section>

      {!searchQuery && (
        <>
          {/* Getting Started Section */}
          <motion.section
            id="getting-started"
            className="px-4 sm:px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Book className="text-primary size-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-medium text-secondary">
                  Getting Started
                </h2>
              </div>
              <p className="text-xl text-gray-600">
                New to Cap Wallet? Start with the basics.
              </p>
            </div>

            <div className="space-y-4">
              {filteredSections[0]?.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setExpandedQuestion({
                        section: 0,
                        index:
                          expandedQuestion.section === 0 &&
                          expandedQuestion.index === index
                            ? null
                            : index,
                      })
                    }
                  >
                    <h3 className="text-lg font-semibold text-secondary">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate:
                          expandedQuestion.section === 0 &&
                          expandedQuestion.index === index
                            ? 180
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400 size-5 shrink-0" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedQuestion.section === 0 &&
                      expandedQuestion.index === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Security, Safety & AI Protection */}
          <motion.section
            id="security"
            className="px-4 sm:px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="text-primary size-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-medium text-secondary">
                  Security, Safety & AI Protection
                </h2>
              </div>
              <p className="text-xl text-gray-600">
                Security is built into every layer. Your keys stay with you. Our
                AI checks everything.
              </p>
            </div>

            <div className="space-y-4">
              {filteredSections[1]?.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setExpandedQuestion({
                        section: 1,
                        index:
                          expandedQuestion.section === 1 &&
                          expandedQuestion.index === index
                            ? null
                            : index,
                      })
                    }
                  >
                    <h3 className="text-lg font-semibold text-secondary">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate:
                          expandedQuestion.section === 1 &&
                          expandedQuestion.index === index
                            ? 180
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400 size-5 shrink-0" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedQuestion.section === 1 &&
                      expandedQuestion.index === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Using Cap Wallet (Mobile + Web) */}
          <motion.section
            id="using-wallet"
            className="px-4 sm:px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="text-primary size-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-medium text-secondary">
                  Using Cap Wallet (Mobile + Web)
                </h2>
              </div>
              <p className="text-xl text-gray-600">
                Learn how to use your wallet across both the mobile app and the
                browser extension.
              </p>
            </div>

            <div className="space-y-4">
              {filteredSections[2]?.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setExpandedQuestion({
                        section: 2,
                        index:
                          expandedQuestion.section === 2 &&
                          expandedQuestion.index === index
                            ? null
                            : index,
                      })
                    }
                  >
                    <h3 className="text-lg font-semibold text-secondary">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate:
                          expandedQuestion.section === 2 &&
                          expandedQuestion.index === index
                            ? 180
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400 size-5 shrink-0" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedQuestion.section === 2 &&
                      expandedQuestion.index === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Browser Extension Support */}
          <motion.section
            id="browser-extension"
            className=" px-4 sm:px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Chrome className="text-primary size-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-medium text-secondary">
                  Browser Extension Support
                </h2>
              </div>
              <p className="text-xl text-gray-600">
                Use Cap Wallet directly from your browser—fast, simple, secure.
              </p>
            </div>

            <div className="space-y-4">
              {filteredSections[3]?.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setExpandedQuestion({
                        section: 3,
                        index:
                          expandedQuestion.section === 3 &&
                          expandedQuestion.index === index
                            ? null
                            : index,
                      })
                    }
                  >
                    <h3 className="text-lg font-semibold text-secondary">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate:
                          expandedQuestion.section === 3 &&
                          expandedQuestion.index === index
                            ? 180
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400 size-5 shrink-0" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedQuestion.section === 3 &&
                      expandedQuestion.index === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Advanced & Institutional Features */}
          <motion.section
            id="advanced"
            className="px-4 sm:px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="text-primary size-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-medium text-secondary">
                  Advanced & Institutional Features
                </h2>
              </div>
              <p className="text-xl text-gray-600">
                For Pro users, teams, and organizations.
              </p>
            </div>

            <div className="space-y-4">
              {filteredSections[4]?.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setExpandedQuestion({
                        section: 4,
                        index:
                          expandedQuestion.section === 4 &&
                          expandedQuestion.index === index
                            ? null
                            : index,
                      })
                    }
                  >
                    <h3 className="text-lg font-semibold text-secondary">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate:
                          expandedQuestion.section === 4 &&
                          expandedQuestion.index === index
                            ? 180
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400 size-5 shrink-0" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedQuestion.section === 4 &&
                      expandedQuestion.index === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Account, Devices & Settings */}
          <motion.section
            id="account-settings"
            className="px-4 sm:px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Activity className="text-primary size-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-medium text-secondary">
                  Account, Devices & Settings
                </h2>
              </div>
              <p className="text-xl text-gray-600">
                Manage your account, devices, and preferences.
              </p>
            </div>

            <div className="space-y-4">
              {filteredSections[5]?.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setExpandedQuestion({
                        section: 5,
                        index:
                          expandedQuestion.section === 5 &&
                          expandedQuestion.index === index
                            ? null
                            : index,
                      })
                    }
                  >
                    <h3 className="text-lg font-semibold text-secondary">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate:
                          expandedQuestion.section === 5 &&
                          expandedQuestion.index === index
                            ? 180
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-400 size-5 shrink-0" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {expandedQuestion.section === 5 &&
                      expandedQuestion.index === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Support */}
          <motion.section
            id="contact"
            className="px-4 sm:px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-4 py-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="text-accent size-10" />
                <h2 className="text-4xl font-montserrat font-medium text-secondary">
                  Contact Support
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Need more help? Talk to us.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                If you can't find what you're looking for, our team is here.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  className="p-6 bg-white rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <MessageCircle className="text-primary size-8 mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    In-App Chat
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Open Cap Wallet → Settings → Support → Chat with us
                  </p>
                  <button className="btn btn-primary btn-sm">Open Chat</button>
                </motion.div>

                <motion.div
                  className="p-6 bg-white rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="text-accent size-8 mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Email Support
                  </h3>
                  <p className="text-primary text-lg font-semibold mb-2">
                    support@capwallet.com
                  </p>
                  <p className="text-gray-600">
                    We try to respond within a few hours.
                  </p>
                </motion.div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-yellow-600 size-6 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Important Note
                    </p>
                    <p className="text-gray-700">
                      We will <strong>never</strong> ask for your recovery
                      phrase or private keys. If anyone asks for them claiming
                      to be Cap Wallet Support—it is a <strong>scam</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <h3 className="text-lg font-bold text-secondary mb-4">
                  For Browser Extension Issues
                </h3>
                <p className="text-gray-600 mb-3">Please include:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>Browser name (Chrome, Brave, Edge)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>Extension version</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>Website/dApp you were using</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>Screenshots or screen recording</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Security & Incident Desk */}
          <motion.section
            id="security"
            className="px-4 sm:px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-50 rounded-3xl p-4 py-8 md:p-12 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-red-600 size-10" />
                <h2 className="text-4xl font-montserrat font-medium text-secondary">
                  Security & Incident Desk
                </h2>
              </div>
              <p className="text-xl text-gray-700 mb-8">
                If you notice anything suspicious, please act fast.
              </p>

              <div className="bg-white rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Mail className="text-red-600 size-6" />
                  Report a Security Issue
                </h3>
                <p className="text-red-600 text-2xl font-bold mb-3">
                  security@capwallet.com
                </p>
                <p className="text-gray-700">
                  Include addresses involved, transaction hash, screenshots, and
                  a clear explanation.
                </p>
              </div>

              <div className="bg-red-600 text-white rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">
                  If You Suspect an Attack:
                </h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold shrink-0">1.</span>
                    <span>Disconnect from the internet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold shrink-0">2.</span>
                    <span>Stop signing transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold shrink-0">3.</span>
                    <span>
                      Move funds to a new wallet with a fresh recovery phrase
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold shrink-0">4.</span>
                    <span>Contact us immediately</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-secondary mb-2">
                  For Security Researchers
                </h3>
                <p className="text-gray-700">
                  We support responsible disclosure. Please give us time to
                  investigate before going public.
                </p>
              </div>
            </div>
          </motion.section>

          {/* System Status */}
          <motion.section
            id="status"
            className="px-4 sm:px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-3xl p-4 py-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="text-green-600 size-10" />
                <h2 className="text-4xl font-montserrat font-medium text-secondary">
                  System Status
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Real-time health of Cap Wallet services.
              </p>
              <div className="space-y-3">
                {systemStatus.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-gray-700 font-medium">
                      {item.service}
                    </span>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600 size-5" />
                      <span className="text-green-600 font-semibold">
                        Operational
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-gray-700">
                  <strong>Example:</strong> Swaps & Bridges – ⚠️ Slower than
                  usual.
                  <br />
                  Our team is working with infrastructure partners to fix this.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Community & Feedback */}
          <motion.section
            className="px-6 max-w-6xl mx-auto py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Globe className="text-accent size-10" />
              <h2 className="text-4xl font-montserrat font-bold text-secondary">
                Community
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of traders, devs, and Web3 explorers:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {community.map((platform, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-gray-200 text-center items-center justify-center flex flex-col hover:border-accent transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={platform.icon} alt="" className="w-20" />
                  <p className="text-gray-700 font-medium text-sm">
                    {platform.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            className="px-6 max-w-6xl mx-auto py-20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download Cap Wallet and experience secure crypto management.
            </p>
            <motion.a
              href="/download"
              className="inline-flex items-center gap-3 btn btn-primary px-8 py-4 text-lg"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Download Cap Wallet
            </motion.a>
          </motion.section>
        </>
      )}
    </div>
  );
};

export default Support;
