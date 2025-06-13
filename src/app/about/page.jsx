
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, CheckCircle, Globe, Briefcase, Target, Star, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import {Header} from '@/components/Header';
import { companyInfo } from '@/data/products';

export default function AboutPage() {
  const [zoomState, setZoomState] = useState({
    isVisible: false,
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate the position relative to the image (accounting for padding)
    const imageRect = {
      left: 16, // p-4 = 16px
      top: 16,
      width: rect.width - 32,
      height: rect.height - 32
    };
    
    const offsetX = ((x - imageRect.left) / imageRect.width) * 100;
    const offsetY = ((y - imageRect.top) / imageRect.height) * 100;
    
    setZoomState({
      isVisible: true,
      x: e.clientX,
      y: e.clientY,
      offsetX: Math.max(0, Math.min(100, offsetX)),
      offsetY: Math.max(0, Math.min(100, offsetY))
    });
  };

  const handleMouseLeave = () => {
    setZoomState(prev => ({ ...prev, isVisible: false }));
  };

  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to know more about Sagacious Global Services and your offerings.";
    const url = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                About Sagacious Global Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Your trusted partner in digital transformation and IT solutions since 2007
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Established 2019 (Serving since 2007)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>Multi-State Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>MSME Certified</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    <strong>Sagacious Global Services</strong> is a team of professionals who have served the IT industry 
                    for a long time and are now contributing their skills and experiences in the field of 
                    digitization, data processing, software development, software re-engineering/testing, 
                    web designing, multimedia production, high volume document imaging/conversion, and back office activities.
                  </p>
                  <p>
                    Although the company formally started in 2019 as Sagacious Global Services, we have been 
                    serving the IT industry since 2007 across Chhattisgarh, Odisha, Uttar Pradesh, Rajasthan, 
                    Bihar, and Jharkhand.
                  </p>
                  <p>
                    Our team has successfully served many organizations in several projects such as MG-NREGA, 
                    UID, SECC 2011, NPR, Financial Inclusion, Aajeevika, and more from government and 
                    non-government organizations to handle their IT/ITES Operations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
                  <Image
                    src="https://5.imimg.com/data5/SELLER/Default/2025/6/518008699/WM/KQ/DX/246340611/tto-1000x1000.jpeg"
                    alt="Sagacious Global Services Office"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our organizational structure, operational efficiency, and commitment to quality has fostered 
                healthy partnerships with our clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  Proven Expertise & Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  With roots in the IT/ITES sector since 2007, we bring over a decade of hands-on 
                  experience across major government and private sector projects including MGNREGA, 
                  UID, SECC 2011, NPR, and more.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  Comprehensive Digital Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  From data processing, software development, and re-engineering/testing to web 
                  design, multimedia production, and document imaging—our full-service offerings 
                  ensure seamless digital transformation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  Client-Centric Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our structured operations, skilled team, and dedication to quality have earned 
                  us long-standing partnerships and the reputation of being a "truly partnered" 
                  service provider.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Gallery */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Company Gallery
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A glimpse into our office, infrastructure, and work environment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  src: "https://5.imimg.com/data5/NSDMERP/Board/2025/5/513843978/CM/ZV/OZ/246340611/246340611-board-1748264782072-1000x1000.png",
                  alt: "Company Board - Sagacious Global Services",
                  title: "Company Information Board"
                },
                {
                  src: "https://5.imimg.com/data5/NSDMERP/Board/2025/5/512547855/VU/LJ/LT/246340611/246340611-board-1747826228118-1000x1000.png",
                  alt: "Office Board Display",
                  title: "Office Information Display"
                },
                {
                  src: "https://5.imimg.com/data5/NSDMERP/Board/2025/6/515905549/DQ/VO/QS/246340611/246340611-board-1748937760196-1000x1000.png",
                  alt: "Corporate Board",
                  title: "Corporate Information"
                },
                {
                  src: "https://5.imimg.com/data5/NSDMERP/Location/2025/5/512547935/LW/PF/VO/246340611/246340611-location-1747826228128-1000x1000.png",
                  alt: "Office Location - Doranda, Ranchi",
                  title: "Office Location"
                },
                {
                  src: "https://5.imimg.com/data5/NSDMERP/Location/2025/5/512547928/KV/FH/YZ/246340611/246340611-location-1747826228125-1000x1000.png",
                  alt: "Business Location Map",
                  title: "Business Location"
                },
                {
                  src: "https://5.imimg.com/data5/NSDMERP/Location/2025/5/512547926/TM/CD/JL/246340611/246340611-location-1747826228122-1000x1000.png",
                  alt: "Office Address Details",
                  title: "Address Information"
                }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-80 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-heading font-semibold text-gray-900 dark:text-white">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Comprehensive IT solutions under one roof
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Billing Machine', count: '3 products', icon: '💻' },
                { name: 'Survey Service', count: '2 products', icon: '📊' },
                { name: 'Software Development', count: '1 product', icon: '⚙️' },
                { name: 'AMC Service', count: '1 product', icon: '🔧' },
                { name: 'Data Entry Projects', count: '1 product', icon: '📝' },
                { name: 'Scanning Service', count: '1 product', icon: '📄' },
                { name: 'HR Consultancy', count: '1 product', icon: '👥' },
                { name: 'Scanning Digitization', count: '1 product', icon: '🔄' },
              ].map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{service.count}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>        {/* Company Facts */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Business Profile & Registration Details
              </h2>
              <p className="text-xl opacity-90">
                Complete business information and statutory compliance details
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Nature of Business</h3>
                <p className="opacity-90">Service Provider & Others</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Team Size</h3>
                <p className="opacity-90">Up to 10 People</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">GST Registration</h3>
                <p className="opacity-90">25-08-2020</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Legal Status</h3>
                <p className="opacity-90">Proprietorship</p>
              </motion.div>
            </div>

            {/* Detailed Business Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Business Operations */}
                <div className="space-y-4">
                  <h4 className="text-lg font-heading font-semibold mb-4 border-b border-white/20 pb-2">
                    Business Operations
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Nature:</span>
                      <span className="font-medium text-right">Service Provider & Others</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Additional:</span>
                      <span className="font-medium text-right">Supplier of Services</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Type:</span>
                      <span className="font-medium text-right">Office/Sale Office</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Business:</span>
                      <span className="font-medium text-right">Retail Business</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Contract:</span>
                      <span className="font-medium text-right">Works Contract</span>
                    </div>
                  </div>
                </div>

                {/* Leadership & Finance */}
                <div className="space-y-4">
                  <h4 className="text-lg font-heading font-semibold mb-4 border-b border-white/20 pb-2">
                    Leadership & Finance
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">CEO:</span>
                      <span className="font-medium text-right">Irfan Parvez</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">GST Partner:</span>
                      <span className="font-medium text-right">Irfan Parvez</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Turnover:</span>
                      <span className="font-medium text-right">₹0 - 40 Lakhs</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Employees:</span>
                      <span className="font-medium text-right">Up to 10 People</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Banking:</span>
                      <span className="font-medium text-right">Indian Bank</span>
                    </div>
                  </div>
                </div>

                {/* Statutory Profile */}
                <div className="space-y-4">
                  <h4 className="text-lg font-heading font-semibold mb-4 border-b border-white/20 pb-2">
                    Statutory Profile
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">GST No:</span>
                      <span className="font-medium font-mono text-right text-xs">20BDGPP6667Q1ZV</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">GST Date:</span>
                      <span className="font-medium text-right">25-08-2020</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Legal Status:</span>
                      <span className="font-medium text-right">Proprietorship</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Banker:</span>
                      <span className="font-medium text-right">Indian Bank</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="opacity-80 flex-shrink-0 w-24">Net Banking:</span>
                      <span className="font-medium text-right">✓ Enabled</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Summary */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <h4 className="text-lg font-heading font-semibold mb-4">Business Summary</h4>
                  <p className="opacity-90 max-w-4xl mx-auto leading-relaxed">
                    Sagacious Global Services is a GST-registered proprietorship firm established in 2019, 
                    led by CEO <strong>Irfan Parvez</strong>. We operate as a comprehensive service provider 
                    with operations including office/sale office, retail business, and works contract. 
                    Our team of up to 10 professionals delivers quality IT solutions with an annual 
                    turnover of ₹0-40 Lakhs, supported by Indian Bank's banking services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Our Certifications
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Recognized and certified by government authorities
              </p>
            </motion.div>            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto relative"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-200 dark:border-gray-700">
                <div 
                  className="relative h-80 mb-6 bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden cursor-crosshair"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src="https://5.imimg.com/data5/SELLER/Default/2025/6/518008354/KI/VD/OM/246340611/saga-500x500.jpeg"
                    alt="MSME Certificate - Sagacious Global Services"
                    fill
                    className="object-contain p-4"
                    sizes="400px"
                  />
                  
                  {/* Hover instruction overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-lg text-sm font-medium text-gray-900 dark:text-white">
                      🔍 Move cursor to zoom
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                  MSME Certificate
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Certified Micro, Small & Medium Enterprise
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Hover over the certificate to see details
                </p>
              </div>

              {/* Magnifying Glass Zoom */}
              {zoomState.isVisible && (
                <div
                  className="fixed pointer-events-none z-[9999] w-48 h-48 border-4 border-blue-500 rounded-full shadow-2xl overflow-hidden bg-white dark:bg-gray-800"
                  style={{
                    left: zoomState.x - 96, // Center the 192px (w-48) magnifier
                    top: zoomState.y - 96,
                    transform: 'translate(20px, -20px)' // Offset to avoid cursor blocking
                  }}
                >
                  <div
                    className="w-[600px] h-[600px] relative"
                    style={{
                      backgroundImage: `url(https://5.imimg.com/data5/SELLER/Default/2025/6/518008354/KI/VD/OM/246340611/saga-500x500.jpeg)`,
                      backgroundSize: '600px 600px',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: `-${(zoomState.offsetX / 100) * 600 - 96}px -${(zoomState.offsetY / 100) * 600 - 96}px`,
                      transform: 'scale(2.5)' // 2.5x zoom
                    }}
                  />
                  
                  {/* Magnifier border glow */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 shadow-inner"></div>
                  
                  {/* Center crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border border-blue-500 rounded-full bg-blue-500/20"></div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our expertise can help transform your business with cutting-edge 
                digital solutions and reliable IT services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  onClick={handleWhatsAppContact}
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Contact on WhatsApp
                </button>
                
                <a
                  href="https://www.indiamart.com/sagacious-globalservices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  View on IndiaMART
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Ranchi, Jharkhand</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>+91 9234567890</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>irfan@sagaciousglobal.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}