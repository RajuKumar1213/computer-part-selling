"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Shield,
  Clock,
  Wrench,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Award,
  Building,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AMCFMCPage() {
  const features = [
    {
      icon: Settings,
      title: "Preventive Maintenance",
      description: "Regular scheduled maintenance to prevent equipment failures and ensure optimal performance"
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency response services"
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Certified and experienced technicians for all types of equipment and systems"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Guaranteed response times for critical issues and emergency situations"
    }
  ];

  const services = [
    "IT Equipment Maintenance",
    "Network Infrastructure Support",
    "Server & Database Management",
    "Hardware Troubleshooting",
    "Software Updates & Patches",
    "Security System Maintenance",
    "Backup & Recovery Services",
    "Performance Monitoring"
  ];

  const benefits = [
    {
      icon: Calendar,
      title: "Planned Maintenance",
      description: "Scheduled maintenance programs to minimize downtime"
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "Immediate response for critical system failures"
    },
    {
      icon: Award,
      title: "SLA Compliance",
      description: "Guaranteed service level agreements and performance metrics"
    }
  ];

  const packages = [
    {
      title: "Basic AMC",
      features: [
        "Quarterly maintenance visits",
        "Basic troubleshooting support",
        "Phone support during business hours",
        "Replacement of consumables",
        "Basic performance reports"
      ],
      suitable: "Small businesses and startups"
    },
    {
      title: "Standard AMC",
      features: [
        "Monthly maintenance visits",
        "Priority technical support",
        "Extended support hours",
        "Predictive maintenance alerts",
        "Detailed performance analytics"
      ],
      suitable: "Growing businesses and SMEs"
    },
    {
      title: "Premium AMC",
      features: [
        "Weekly monitoring & maintenance",
        "24/7 emergency support",
        "On-site engineer availability",
        "Advanced security monitoring",
        "Comprehensive reporting & analytics"
      ],
      suitable: "Large enterprises and critical systems"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen mt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20"></div>
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
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-200"
                >
                  <Settings className="w-5 h-5 mr-2 text-emerald-400" />
                  <span className="font-semibold">AMC & FMS SERVICES</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  Annual Maintenance Contract &
                  <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                    Facility Management
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  Comprehensive maintenance and facility management services to ensure your IT infrastructure 
                  and systems operate at peak performance with minimal downtime and maximum efficiency.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center">
                    Get AMC Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                    View Packages
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Maintenance Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proactive maintenance strategies designed to prevent issues before they impact your business
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
                className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AMC Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our flexible maintenance packages designed to meet different business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.title}</h3>
                <p className="text-emerald-600 font-medium mb-6">{pkg.suitable}</p>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Choose Package
                </button>
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
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Services We Cover</h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive maintenance and support services for all your IT infrastructure needs.
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IT Maintenance Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Expert Technicians</h3>
                  <p className="text-emerald-100">
                    Certified professionals ensuring optimal system performance
                  </p>
                </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AMC Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reliable maintenance services with guaranteed performance and professional support
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
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ensure System Reliability with AMC
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Protect your IT investments with our comprehensive annual maintenance contracts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300">
                Get Custom Quote
              </button>
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Schedule Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
