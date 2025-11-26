import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  Shield,
  Users,
  Code,
  Globe,
  MapPin,
  Phone,
} from 'lucide-react';
import PhoneIcon from '../components/Phone';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <Mail className="size-10 text-accent" />,
      title: 'General Inquiries',
      description: 'For general questions about Cap Wallet:',
      contact: 'info@capwallet.app',
    },
    {
      icon: <MessageCircle className="size-10 text-accent" />,
      title: 'Technical & User Support',
      description: 'Need help with your wallet?',
      contact: 'support@capwallet.app',
      note: 'We typically respond within 5 minutes.',
    },
    {
      icon: <Shield className="size-10 text-accent" />,
      title: 'Security & Fraud Alerts',
      description:
        'If you believe you encountered a scam, phishing attack, or suspicious dApp:',
      contact: 'security@capwallet.app',
      note: 'We take all security reports seriously.',
    },
    {
      icon: <Users className="size-10 text-accent" />,
      title: 'Partnerships',
      description:
        'Interested in collaborating or integrating with Cap Wallet?',
      contact: 'partnerships@capwallet.app',
    },
    {
      icon: <Mail className="size-10 text-accent" />,
      title: 'Media & Press',
      description: 'For journalists, podcasts, or event organizers:',
      contact: 'media@capwallet.app',
    },
    {
      icon: <img src="/telegram.svg" alt="Telegram" className="size-10" />,
      title: 'Telegram Community',
      description:
        'Join our Telegram to connect with other users and the team:',
      contact: 'https://t.me/cap_announcements',
    },
  ];

  const community = [
    { name: 'Telegram', icon: 'telegram.svg' },
    // { name: 'Discord', icon: 'discord.svg' },
    // { name: 'X (Twitter)', icon: 'x.svg' },
    // { name: 'YouTube', icon: 'youtube.svg' },
    // { name: 'Reddit', icon: 'reddit.svg' },
    // { name: 'GitHub', icon: 'github.svg' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="px-6 max-w-6xl mx-auto min-h-[400px] flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      >
        <motion.div
          className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Phone className="text-primary size-20" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We're here to help—whether you have questions, need support, or want
          to partner with us.
        </motion.p>
      </motion.section>

      {/* Contact Methods Grid */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: '#00C9A7' }}
            >
              <div className="mb-4">{method.icon}</div>
              <h3 className="text-2xl font-semibold text-secondary mb-3">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-4">{method.description}</p>

              {method.contact && (
                <p className="text-lg font-semibold text-accent mb-2">
                  {method.contact}
                </p>
              )}

              {method.contacts && (
                <div className="space-y-1 mb-4">
                  {method.contacts.map((contact, idx) => (
                    <p key={idx} className="text-gray-700">
                      {contact}
                    </p>
                  ))}
                </div>
              )}

              {method.note && (
                <p className="text-sm text-gray-500 italic">{method.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Community Section */}

      {/* Headquarters */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-primary/10 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-primary size-10" />
            <h2 className="text-4xl font-montserrat font-bold text-secondary">
              Headquarter
            </h2>
          </div>
          <p className="text-xl text-gray-700 mb-2">Cap Wallet Inc.</p>
          <p className="text- text-gray-600 mb-1">
            Level 39, Marina Bay Financial Centre
          </p>
          <p className="text- text-gray-600 mb-1">
            Tower 2, 10 Marina Boulevard,
          </p>
          <p className="text- text-gray-600 mb-1">Singapore 018983</p>
        </div>
      </motion.section>

      {/* Contact Form */}
      {/* <motion.section
        className="px-4 sm:px-6 max-w-4xl mx-auto py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-3xl p-4 sm:p-8 py-8 md:p-12 border border-gray-200">
          <h2 className="text-4xl font-montserrat font-bold text-secondary mb-8 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>
            
            <motion.button
              type="submit"
              className="btn btn-primary p-6 w-full"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.section> */}

      {/* CTA */}
      <motion.section
        className="px-6 max-w-6xl mx-auto py-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Download Cap Wallet and experience secure, intelligent crypto
          management.
        </p>
        <motion.a
          href="/download"
          className="btn btn-primary p-6"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Join the Waitlist
        </motion.a>
      </motion.section>
    </div>
  );
};

export default Contact;
