'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  services: [
    { name: 'GIS Survey', href: '/services/gis-survey' },
    { name: 'Scanning Digitization', href: '/services/scanning-digitization' },
    { name: 'Baseline Survey', href: '/services/baseline-survey' },
    { name: 'AMC FMC', href: '/services/amc-fmc' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'HR Services', href: '/services/hr-services' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'GSTIN: 20BDGPP6667Q1ZV', href: '#' }
  ]
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Corporate Office',
    details: ['1st Floor, Jainul Manzil', 'Near Jain Mandir, Doranda', 'Ranchi, Jharkhand']
  },
  {
    icon: Phone,
    title: 'Contact',
    details: ['+91 9835 439 197', 'Mr. Irfan Parvez (Proprietor)']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['sagaciousglobals@gmail.com']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Sat: 9:00 AM - 7:00 PM', '24/7 Operations (3 Shifts)']
  }
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/sgsrnc', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 ">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Sagacious Global Services
              </h3>              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                A team of professionals delivering quality IT solutions in Data Processing, Database Administration, 
                Software Development, Web Designing, and Back Office Activities since 2007. Truly Partnered in IT Excellence.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
                <div className='flex justify-between items-center px-4 bg-white rounded-md'>
                  <li>
                    <Image
                      src="/msme.jpg"
                      alt="Sagacious Global Services Logo"
                      width={30}
                      height={10}
                      className="h-8 w-auto"
                    />
                  </li>
                  <li><Image
                      src="/gem.jpg"
                      alt="Sagacious Global Services Logo"
                      width={50}
                      height={50}
                      className="h-8 w-auto"
                    /></li>

                </div>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">{info.title}</p>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-400">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">Get the latest updates on new products and services.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-300 flex items-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© 2024 Sagacious Global Services. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
