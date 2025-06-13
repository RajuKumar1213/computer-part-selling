'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SGS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
                  Sagacious Global Services
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Advanced POS Solutions
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/product" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Desktop Get Quote Button */}
            <Link href="/contact" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Quote
              </motion.button>
            </Link>

            {/* Mobile Hamburger Menu */}
            <motion.button
              className="md:hidden relative z-60 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    translateY: isMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full mt-1"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full mt-1"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    translateY: isMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />
            
            {/* Mobile Navigation Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">SGS</span>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                          SGS
                        </h2>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Menu
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={closeMenu}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href="/"
                        onClick={closeMenu}
                        className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-lg font-medium">Home</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        href="/product"
                        onClick={closeMenu}
                        className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span className="text-lg font-medium">Products</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link
                        href="/about"
                        onClick={closeMenu}
                        className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-lg font-medium">About</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-lg font-medium">Contact</span>
                      </Link>
                    </motion.div>
                  </div>
                </nav>

                {/* Mobile Get Quote Button */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <Link href="/contact" onClick={closeMenu}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      <span>Get Quote</span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
