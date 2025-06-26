"use client";

import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  Briefcase,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Target,
  FileText,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HRServicesPage() {
  const features = [
    {
      icon: UserCheck,
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions from sourcing to onboarding of qualified professionals"
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Comprehensive training programs to enhance skills and professional development"
    },
    {
      icon: Briefcase,
      title: "Workforce Management",
      description: "Efficient workforce planning, deployment, and management across multiple locations"
    },
    {
      icon: FileText,
      title: "HR Administration",
      description: "Complete HR administrative support including payroll, compliance, and documentation"
    }
  ];

  const services = [
    "Recruitment & Selection",
    "Employee Training Programs",
    "Payroll Management",
    "Performance Evaluation",
    "HR Policy Development",
    "Compliance Management",
    "Employee Relations",
    "Benefits Administration",
    "Onboarding & Orientation",
    "Workforce Planning",
    "Contract Management",
    "Background Verification"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Expertise",
      description: "Specialized HR professionals with industry knowledge"
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Streamlined processes for faster HR operations"
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "100% adherence to labor laws and regulations"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Flexible solutions that grow with your business"
    }
  ];

  const achievements = [
    "3,500+ professionals recruited for major government projects",
    "Multi-state workforce deployment experience",
    "Proven track record in large-scale team building",
    "Expertise in rapid scaling and training programs"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen mt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
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
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200"
                >
                  <Users className="w-5 h-5 mr-2 text-purple-400" />
                  <span className="font-semibold">HR SERVICES</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  Comprehensive HR
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  Professional human resources services including recruitment, training, workforce management, 
                  and HR administration to support your organization's growth and success.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <a
                    href="https://www.indiamart.com/sagacious-global-services/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center"
                  >
                    Get HR Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                    Learn More
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our HR Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive human resources services powered by experienced professionals and proven methodologies
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
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">HR Services We Offer</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive range of HR services covers all aspects of human resource management and development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/products/wvjyau3spijzdfmxtvpx.webp"
                  alt="HR Services Team"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Professional HR Team</h3>
                  <p className="text-white/90">Experienced professionals delivering quality HR solutions</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our HR Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of partnering with our professional HR team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-purple-950 to-indigo-950">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our HR Achievements</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven track record in large-scale HR operations and workforce management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white text-lg leading-relaxed">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Enhance Your HR Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with us for comprehensive HR solutions that drive your business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.indiamart.com/sagacious-global-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Get HR Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
