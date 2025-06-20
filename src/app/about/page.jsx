'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Calendar, Globe, Target, Award, Briefcase, Star, TrendingUp } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  const services = [
    { name: 'GIS Survey', icon: '🗺️', color: 'bg-orange-500' },
    { name: 'Scanning Digitization', icon: '📱', color: 'bg-orange-500' },
    { name: 'Baseline Survey', icon: '📊', color: 'bg-orange-500' },
    { name: 'AMC FMS', icon: '🔧', color: 'bg-orange-500' },
    { name: 'Software Development', icon: '💻', color: 'bg-orange-500' },
    { name: 'HR Services', icon: '👥', color: 'bg-orange-500' }
  ];

  const achievements = [
    { value: '16+', label: 'Years Experience', desc: 'Serving since 2007' },
    { value: '6', label: 'States Coverage', desc: 'Multi-state operations' },
    { value: '500+', label: 'Projects Delivered', desc: 'Successful completions' },
    { value: '50+', label: 'Happy Clients', desc: 'Trusted partnerships' }
  ];

  const whyChooseUs = [
    {
      title: 'Constant Growth',
      description: 'Continuous expansion and innovation in digital transformation',
      icon: TrendingUp,
      color: 'text-yellow-500'
    },
    {
      title: 'Digital Transforming',
      description: 'Leading the way in modernizing business processes',
      icon: Globe,
      color: 'text-yellow-500'
    },
    {
      title: 'Proven Excellence',
      description: 'Track record of successful government and private sector projects',
      icon: Award,
      color: 'text-blue-500'
    },
    {
      title: 'Expert Team',
      description: 'Skilled professionals with deep industry experience',
      icon: Users,
      color: 'text-green-500'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-8 lg:px-12 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Company Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-200"
                >
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="font-semibold">SAGACIOUS GLOBAL SERVICES</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                >
                  Driving Digital
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Transformation
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  A team of professionals serving the IT industry since 2007, specializing in digitalization, 
                  data processing, software development, and comprehensive digital solutions.
                </motion.p>

                {/* Key Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                >
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">{achievement.value}</div>
                      <div className="text-sm text-yellow-400 font-semibold mb-1">{achievement.label}</div>
                      <div className="text-xs text-gray-400">{achievement.desc}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center">
                    Explore Our Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                    Contact Us Today
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Company</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Sagacious Global Services</strong> is a team of professionals 
                    who have served the IT industry for a long time and are now contributing their skill and 
                    experiences in the field of digitalization, data processing, software development, 
                    software re-engineering/testing, web designing, multimedia production, high volume 
                    document imaging/conversion and back office activities under a roof.
                  </p>
                  
                  <p>
                    Although the company formally started in year 2019 as Sagacious Global Services but we 
                    are serving the IT industry since 2007 in Chhattisgarh, Odisha, Uttar Pradesh, Rajasthan, 
                    Bihar and Jharkhand. Our team has served many company in several projects such as 
                    MG-NREGA, UID, SECC 2011, NPR, FINANCIAL INCLUSION, AAJEEVIKA, NIC etc from government 
                    & Non-government organization to handle their IT/ITES Operations.
                  </p>

                  <p>
                    Our organizational structure, operational efficiency and our commitment to quality has 
                    fostered into a healthy partnership between our company and our clients. Such is our 
                    reputation amongst our clients the Sagacious Global Services has earned the title 
                    <strong className="text-gray-900">"Truly partnered"</strong>.
                  </p>
                </div>
              </div>

              {/* Company Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Established 2019</div>
                    <div className="text-sm text-gray-600">Serving since 2007</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <Globe className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">6 States</div>
                    <div className="text-sm text-gray-600">Multi-state operations</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Globe className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
                    <p className="text-blue-100">Connecting businesses across multiple states</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced POS Billing Machines designed to streamline your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* POS Billing Machine Aspire */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-4xl">💻</span>
                    </div>
                    <h3 className="text-2xl font-bold">POS Aspire</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">POS Billing Machine Aspire</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">₹39,999/Piece</div>
                  <p className="text-gray-600 mb-4">Advanced 11.6" touchscreen POS system with Android 9, perfect for small to medium businesses.</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>11.6" Capacitive Touch Display (1366 x 768)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>RK 3288 Chipset, 2GB RAM, 8GB Storage</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Built-in 2" Thermal Printer</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Android 9, WiFi, USB & RS232 Ports</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </motion.div>

            {/* POS Billing Machine Elite A */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 bg-gradient-to-br from-purple-500 to-purple-700">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-4xl">🖥️</span>
                    </div>
                    <h3 className="text-2xl font-bold">POS Elite-A</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">POS Billing Machine Elite-A</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">₹57,200/Piece</div>
                  <p className="text-gray-600 mb-4">Premium dual-screen POS system with Android 13, ideal for high-volume retail operations.</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>14" Dual Display (Each Screen 14")</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>RK 3399 Chipset, 4GB RAM, 16GB Storage</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Android 13, 4 USB Ports, RS232</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Cash Drawer Port, Bluetooth, WiFi</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </motion.div>

            {/* POS Billing Machine Pro 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 bg-gradient-to-br from-green-500 to-green-700">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-4xl">📱</span>
                    </div>
                    <h3 className="text-2xl font-bold">POS Pro 2</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">POS Billing Machine Pro 2</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">₹50,200/Piece</div>
                  <p className="text-gray-600 mb-4">Professional 15.6" Full HD POS system with Android 11, designed for modern retail environments.</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>15.6" Full HD Display (1920x1080)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>RK 3288 Chipset, 2GB RAM, 16GB Storage</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Android 11, 4 USB Ports, RJ45, RJ11</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Bluetooth, WiFi, Capacitive Touch</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </motion.div>

            {/* Retail Billing Machine */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 bg-gradient-to-br from-orange-500 to-orange-700">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-4xl">🏪</span>
                    </div>
                    <h3 className="text-2xl font-bold">Retail Billing</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Retail Billing Machine</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-4">₹57,200/Piece</div>
                  <p className="text-gray-600 mb-4">Complete retail billing solution with advanced features for comprehensive business management.</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Complete Billing & Cash Management</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Advanced Inventory Management</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Sales Reports & Analytics</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Multiple Counter Support</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </motion.div>
          </div>

          {/* Key Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features of Our POS Systems</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💳</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Billing & Cash Management</h4>
                  <p className="text-gray-600 text-sm">Streamline billing process, generate physical or e-receipts and manage cash efficiently</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Inventory Management</h4>
                  <p className="text-gray-600 text-sm">Smart inventory tracking with alerts, purchase orders, and goods receiving notes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Sales Analytics</h4>
                  <p className="text-gray-600 text-sm">Comprehensive sales reports, financial projections, and business analytics</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Smart Suggestions</h4>
                  <p className="text-gray-600 text-sm">AI-powered up-sell and cross-sell suggestions based on customer behavior</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💖</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Loyalty Programs</h4>
                  <p className="text-gray-600 text-sm">Enable customer loyalty programs to improve retention and engagement</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Online Store Front</h4>
                  <p className="text-gray-600 text-sm">Create mobile store front and sell online instantly with integrated solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to meet your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-white"
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl text-white">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <p className="text-gray-600">Professional {service.name.toLowerCase()} services tailored to your requirements</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and proven track record sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 group"
              >
                <div className={`w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors`}>
                  <item.icon className={`w-10 h-10 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how Sagacious Global Services can help drive your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}