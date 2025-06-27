"use client";

import { motion } from "framer-motion";
import {
  Scan,
  FileDigit,
  Database,
  Cloud,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Archive,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ScanningDigitizationPage() {
  const features = [
    {
      icon: Scan,
      title: "High-Speed Scanning",
      description: "Advanced scanners capable of processing thousands of documents per day with exceptional quality"
    },
    {
      icon: FileDigit,
      title: "OCR Technology",
      description: "Optical Character Recognition for converting scanned documents into searchable digital formats"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with cloud storage platforms for easy access and management"
    },
    {
      icon: Database,
      title: "Data Indexing",
      description: "Comprehensive indexing and categorization for efficient document retrieval and management"
    }
  ];

  const services = [
    "Document Scanning & Conversion",
    "Microfilm/Microfiche Digitization",
    "Large Format Scanning",
    "Book & Bound Document Scanning",
    "Photo & Image Digitization",
    "Archive & Historical Document Preservation",
    "Medical Records Digitization",
    "Legal Document Processing"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Data Security",
      description: "Secure handling and encryption of sensitive documents"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast processing with industry-leading completion times"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Multi-level quality checks ensuring 99.9% accuracy"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Document Collection",
      description: "Secure pickup and inventory of physical documents"
    },
    {
      step: "02",
      title: "Preparation & Scanning",
      description: "Document preparation and high-resolution scanning"
    },
    {
      step: "03",
      title: "Quality Control",
      description: "Thorough quality checks and validation processes"
    },
    {
      step: "04",
      title: "Digital Delivery",
      description: "Secure delivery of digitized documents in required formats"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen mt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-900/20"></div>
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200"
                >
                  <Scan className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="font-semibold">SCANNING & DIGITIZATION</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  Document Scanning &
                  <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Digitization Services
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  Transform your physical documents into secure, searchable digital formats with our 
                  professional scanning and digitization services. Preserve, protect, and access your 
                  important documents with ease.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
                    Start Digitization
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                    View Samples
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Digitization Technology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art scanning equipment and software solutions for superior digital conversion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Digitization Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined, secure process ensuring the highest quality digital conversion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Document Scanning Process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Professional Equipment</h3>
                  <p className="text-purple-100">
                    Industrial-grade scanners for exceptional quality and speed
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Digitization Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive document digitization solutions for businesses, organizations, and institutions.
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-leading digitization services with uncompromising quality and security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Digital?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Transform your document management with our professional digitization services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300">
                Get Free Quote
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
