'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { contactInfo, companyInfo } from '@/data/products';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-2"
          >            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>              <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {companyInfo.name}
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <motion.a
                href={companyInfo.socialMedia.facebook}
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={companyInfo.socialMedia.twitter}
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={companyInfo.socialMedia.instagram}
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{contactInfo.workingHours}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#warranty" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Warranty
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 {companyInfo.name}. All rights reserved. | Built with ❤️ for tech enthusiasts.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
