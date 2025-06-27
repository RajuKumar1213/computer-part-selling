"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  CheckCircle,
  ArrowRight,
  Layers,
  Clock,
  Award,
  Users,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SoftwareDevelopmentPage() {
  const features = [
    {
      icon: Code,
      title: "Custom Software Solutions",
      description: "Tailor-made software applications designed to meet your specific business requirements"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms"
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Responsive web applications with modern frameworks and technologies"
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "Efficient database architecture and management solutions for optimal performance"
    }
  ];

  const technologies = [
    { name: "Java", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Flutter", category: "Mobile" },
    { name: "React Native", category: "Mobile" },
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" }
  ];

  const services = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Software Re-engineering",
    "API Development & Integration",
    "Database Design & Optimization",
    "Quality Assurance & Testing",
    "Software Maintenance & Support"
  ];

  const benefits = [
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business needs"
    },
    {
      icon: Clock,
      title: "Agile Development",
      description: "Fast delivery with iterative development and regular feedback"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for bug-free software"
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Understanding your business needs and technical requirements"
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Creating detailed system architecture and project roadmap"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment and ongoing maintenance support"
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
                  <Code className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="font-semibold">SOFTWARE DEVELOPMENT</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  Custom Software
                  <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Development Services
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  Transform your business ideas into powerful software solutions with our expert 
                  development team. We create scalable, efficient, and user-friendly applications 
                  tailored to your specific needs.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                    View Portfolio
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services using cutting-edge technologies and best practices
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern technology stack for building robust and scalable software solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <h4 className="font-bold text-gray-900 mb-1">{tech.name}</h4>
                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Structured approach ensuring quality delivery and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Full-spectrum software development services from concept to deployment and beyond.
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
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
              <div className="relative h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Software Development Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Expert Developers</h3>
                  <p className="text-indigo-100">
                    Experienced development team with proven track record
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Development Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional software development with focus on quality, performance, and client satisfaction
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
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl"
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
              Ready to Build Your Software Solution?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss your project requirements and create a custom software solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300">
                Start Your Project
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
