"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";

const navItems = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    submenu: [
      { name: "Scanning Digitization", href: "/services/scanning-digitization" },
      { name: "GIS Survey", href: "/services/gis-survey" },
      { name: "Baseline Survey", href: "/services/baseline-survey" },
      { name: "AMC FMC", href: "/services/amc-fmc" },
      { name: "Software Development", href: "/services/software-development" },
      { name: "HR Services", href: "/services/hr-services" },
    ],
  },
  { name: "Products", href: "/products" },

  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gray-900 text-white py-1.5 px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>+917879518211 </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span>sagaciousglobals@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-xs">
              Professional IT Services | Since 2007
            </span>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=" bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">SGS</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 leading-tight">
                    Sagacious Global Services
                  </h1>{" "}
                  <p className="text-xs text-blue-600 font-medium -mt-1">
                    Truly Partnered in IT Excellence
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.submenu && setActiveSubmenu(item.name)
                  }
                  onMouseLeave={() => setActiveSubmenu(null)}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-bold transition-colors duration-200 py-2">
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-lg rounded-xl  py-2  z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="container mx-auto px-6 lg:px-8 py-6">
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-gray-500 hover:text-blue-600 py-1 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}>
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-gray-200">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Get Quote
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="w-full">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
