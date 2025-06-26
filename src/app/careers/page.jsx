"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  GraduationCap,
  Target,
  Building,
  Globe,
  Heart,
  Shield,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "GIS Survey Specialist",
      department: "Technical Services",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      experience: "2-4 years",
      description: "Looking for experienced GIS professionals to join our survey team for government and private projects."
    },
    {
      title: "Data Processing Executive",
      department: "Data Services",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      experience: "1-3 years",
      description: "Responsible for high-volume data entry, processing, and quality assurance for various client projects."
    },
    {
      title: "Software Developer",
      department: "IT Department",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      experience: "2-5 years",
      description: "Develop and maintain custom software solutions for clients across various industries."
    },
    {
      title: "HR Executive",
      department: "Human Resources",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      experience: "1-3 years",
      description: "Support recruitment, training, and workforce management activities for large-scale projects."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "3-6 years",
      description: "Lead and manage large-scale data collection and survey projects across multiple states."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Opportunities for professional development and career advancement"
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Comprehensive training and skill development programs"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and supportive work environment"
    },
    {
      icon: Shield,
      title: "Job Security",
      description: "Stable employment with established company and growing client base"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs"
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Collaborative and inclusive workplace culture"
    }
  ];

  const companyHighlights = [
    "Established in 2007 with 15+ years of industry experience",
    "Successfully executed major government projects",
    "Multi-state operations with diverse project portfolio",
    "State-of-the-art 3000+ sq. ft. facility in Ranchi",
    "Team of 45+ skilled professionals",
    "Strong partnerships with government and private clients"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen mt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200"
                >
                  <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="font-semibold">JOIN OUR TEAM</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  Build Your Career
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    With Sagacious Global
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  Join a dynamic team of professionals working on cutting-edge projects across 
                  GIS, data processing, software development, and government initiatives.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <a
                    href="#job-openings"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
                  >
                    View Openings
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    Contact HR
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a company that values growth, innovation, and professional excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Sagacious Global</h2>
              <p className="text-lg text-gray-600 mb-8">
                We are a leading provider of data processing, GIS survey, and software development services 
                with a proven track record of successful project delivery.
              </p>
              
              <div className="space-y-4">
                {companyHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
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
                  src="/products/nscogempbmq9invpa0xz.webp"
                  alt="Team at Work"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Professional Team Environment</h3>
                  <p className="text-white/90">Collaborative workspace with modern facilities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="job-openings" className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Job Openings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and join our growing team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    {job.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    Experience: {job.experience}
                  </div>
                  <a
                    href="/contact"
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-purple-950">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Application Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Simple and transparent hiring process designed to find the best talent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your application through our contact form" },
              { step: "2", title: "Review", description: "Our HR team reviews your application and resume" },
              { step: "3", title: "Interview", description: "Technical and HR interviews with our team" },
              { step: "4", title: "Join", description: "Welcome to the Sagacious Global family!" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our team and be part of exciting projects that make a difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:hr@sagaciousglobal.com"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Email HR Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
