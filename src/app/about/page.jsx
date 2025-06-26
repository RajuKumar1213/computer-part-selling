"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  Globe,
  Target,
  Award,
  Briefcase,
  Star,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  const services = [
    {
      name: "GIS Survey",
      icon: "🗺️",
      color: "bg-orange-500",
      image: "/products/i9-13900k.jpg",
      description:
        "Advanced GIS survey solutions for accurate geographical data collection and mapping",
    },
    {
      name: "Scanning Digitization",
      icon: "📱",
      color: "bg-orange-500",
      image: "/products/rtx-4090.jpg",
      description:
        "High-quality document scanning and digitization services for seamless data conversion",
    },
    {
      name: "Baseline Survey",
      icon: "📊",
      color: "bg-orange-500",
      image: "/products/samsung-980-pro.jpg",
      description:
        "Comprehensive baseline surveys for project planning and development",
    },
    {
      name: "AMC FMS",
      icon: "🔧",
      color: "bg-orange-500",
      image: "/products/cnf2mtmgpphphnkxhzxw.webp",
      description:
        "Annual Maintenance Contract and Facility Management Services",
    },
    {
      name: "Software Development",
      icon: "💻",
      color: "bg-orange-500",
      image: "/products/nscogempbmq9invpa0xz.webp",
      description:
        "Custom software development solutions tailored to your business needs",
    },
    {
      name: "HR Services",
      icon: "👥",
      color: "bg-orange-500",
      image: "/products/wvjyau3spijzdfmxtvpx.webp",
      description:
        "Professional HR services including recruitment, training, and management",
    },
  ];

  const achievements = [
    { value: "16+", label: "Years Experience", desc: "Serving since 2007" },
    { value: "6", label: "States Coverage", desc: "Multi-state operations" },
    {
      value: "500+",
      label: "Projects Delivered",
      desc: "Successful completions",
    },
    { value: "50+", label: "Happy Clients", desc: "Trusted partnerships" },
  ];

  const whyChooseUs = [
    {
      title: "Constant Growth",
      description:
        "Continuous expansion and innovation in digital transformation",
      icon: TrendingUp,
      color: "text-yellow-500",
    },
    {
      title: "Digital Transforming",
      description: "Leading the way in modernizing business processes",
      icon: Globe,
      color: "text-yellow-500",
    },
    {
      title: "Proven Excellence",
      description:
        "Track record of successful government and private sector projects",
      icon: Award,
      color: "text-blue-500",
    },
    {
      title: "Expert Team",
      description: "Skilled professionals with deep industry experience",
      icon: Users,
      color: "text-green-500",
    },
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen mt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
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
                className="space-y-8">
                

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-6xl lg:text-5xl font-bold text-white leading-tight">
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
                  className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  A team of professionals serving the IT industry since 2007,
                  specializing in digitalization, data processing, software
                  development, and comprehensive digital solutions.
                </motion.p>

                {/* Key Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-yellow-400 font-semibold mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-gray-400">
                        {achievement.desc}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center">
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-8">
            {/* Mission Statement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mission Statement Content */}
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-blue-600" />
                  Mission Statement
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Sagacious Global Services is a team of professionals who have served the IT industry for a long time and now they are contributing their skill and experiences in the field of Data Processing, Database Administration, Software Development, Software re-engineering/Testing, Web Designing, Multimedia Production, E-Mailing Solutions, document imaging and back office activities under a roof.
                  </p>
                  <p>
                    Although the company has formally started in year 2019 as Sagacious Global Services but we are serving the IT industry since 2007, in Chhattisgarh, Odisha, Uttar Pradesh, Rajasthan, Bihar and Jharkhand. Our team has served many companies in several projects such as MG-NREGA, UID, SECC 2011, NPR, FINANCIAL INCLUSION, AAJEEVIKA etc from government & non-government organizations to handle their IT/ITES Operations.
                  </p>
                  <p>
                    We are a group of young, dynamic and committed individuals, who have always delivered quality results on time. Work ethics and integrity are our guiding principles in work.
                  </p>
                  <p>
                    Our organizational structure, operational efficiency and our commitment to quality has fostered a healthy partnership between our company and our clients. Such is our reputation amongst our clients that Sagacious Global Services has earned the title <strong className="text-blue-800">'truly partnered'</strong>.
                  </p>
                </div>
              </div>

              {/* Mission Statement Image */}
              <div className="relative">
                <div className="relative h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Professional IT Team Image */}
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional IT Team Working"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Professional Excellence</h4>
                    <p className="text-blue-100 text-sm">
                      Delivering quality IT solutions with expertise and integrity since 2007
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manpower & Strength */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 mr-3 text-green-600" />
                  Manpower & Strength
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our dedicated team of professionals forms the backbone of our success
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personnel Capabilities */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-green-600">45+</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Personnel Capability</h4>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ability to employ highly skilled personnel within one week</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Highly skilled and experienced personnel, well conversant in English language</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Capable of processing data in multiple languages</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Qualified manual staff for proof reading</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Round the clock work in 3 shifts on 24/7 basis</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>In-house technical support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Possibility to deploy manpower at customer site</span>
                    </div>
                  </div>
                </div>

                {/* Current Deployment */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-blue-600">60+</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Current Deployment</h4>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Experienced manpower currently deployed in different projects across multiple states:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">Bihar</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">Chhattisgarh</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">Jharkhand</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">Odisha</span>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">Operations Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">
                    Established 2019
                  </div>
                  <div className="text-sm text-gray-600">
                    Serving since 2007
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Globe className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">6 States</div>
                  <div className="text-sm text-gray-600">
                    Multi-state operations
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  
      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
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
                className="text-center p-6 group">
                <div
                  className={`w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors`}>
                  <item.icon className={`w-10 h-10 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
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
            className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how Sagacious Global Services can help drive your
              digital transformation
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
