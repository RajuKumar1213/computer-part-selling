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
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  const achievements = [
    {
      value: `${new Date().getFullYear() - 2020}`,
      label: "Years Experience",
      desc: "Serving since 2020",
    },
    { value: "6", label: "States Coverage", desc: "Multi-state operations" },
    {
      value: "7+",
      label: "Projects Delivered",
      desc: "Successful completions",
    },
    { value: "5+", label: "Happy Clients", desc: "Trusted partnerships" },
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-20">
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
                  A team of professionals serving the IT industry since 2020,
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
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-8">
            {/* Mission Statement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mission Statement Content */}
              <div className="bg-blue-50 md:p-8 p-2 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-blue-600" />
                  Mission Statement
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Sagacious Global Services is a team of professionals who
                    have served the IT industry for a long time and now they are
                    contributing their skill and experiences in the field of
                    Data Processing, Database Administration, Software
                    Development, Software re-engineering/Testing, Web Designing,
                    Multimedia Production, E-Mailing Solutions, document imaging
                    and back office activities under a roof.
                  </p>
                  <p>
                    Although the company has formally started in year 2019 as
                    Sagacious Global Services but we are serving the IT industry
                    since 2020, in Chhattisgarh, Odisha, Uttar Pradesh,
                    Rajasthan, Bihar and Jharkhand. Our team has served many
                    companies in several projects from government &
                    non-government organizations to handle their IT/ITES
                    Operations.
                  </p>
                  <p>
                    We are a group of young, dynamic and committed individuals,
                    who have always delivered quality results on time. Work
                    ethics and integrity are our guiding principles in work.
                  </p>
                  <p>
                    Our organizational structure, operational efficiency and our
                    commitment to quality has fostered a healthy partnership
                    between our company and our clients. Such is our reputation
                    amongst our clients that Sagacious Global Services has
                    earned the title{" "}
                    <strong className="text-blue-800">'truly partnered'</strong>
                    .
                  </p>
                </div>
              </div>

              {/* Mission Statement Image */}
              <div className="relative">
                <div className="relative md:min-h-screen h-80 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Professional IT Team Image */}
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional IT Team Working"
                    className="w-full h-full object-cover"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-xl font-bold mb-2">
                      Professional Excellence
                    </h4>
                    <p className="text-blue-100 text-sm">
                      Delivering quality IT solutions with expertise and
                      integrity since 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manpower & Strength */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 md:p-8 p-2 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 mr-3 text-green-600" />
                  Manpower & Strength
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our dedicated team of professionals forms the backbone of our
                  success
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personnel Capabilities */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-green-600">
                        45+
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Personnel Capability
                    </h4>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Ability to employ highly skilled personnel within one
                        week
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Highly skilled and experienced personnel, well
                        conversant in English language
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Capable of processing data in multiple languages
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Qualified manual staff for proof reading</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Round the clock work in 3 shifts on 24/7 basis
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>In-house technical support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Possibility to deploy manpower at customer site
                      </span>
                    </div>
                  </div>
                </div>

                {/* Current Deployment */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-blue-600">
                        60+
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Current Deployment
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Experienced manpower currently deployed in different
                      projects across multiple states:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">Bihar</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">
                          Chhattisgarh
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">
                          Jharkhand
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">
                          Odisha
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">
                        Operations Support
                      </div>
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
                    Serving since 2020
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

      {/* Meet Our Team */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto md:px-8 p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals driving innovation and excellence in
              every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* CEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="flex items-center justify-center rounded-full ">
                  <Image
                    src="/team-head.jpg"
                    alt="CEO"
                    width={128}
                    height={128}
                    className="h-44 w-44 rounded-full items-center ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="px-3 py-1  bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                    CO-FOUNDER & TEAM HEAD
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Wasim Akram
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Innovative Team Head driving strategic growth in the IT
                  industry and business development.
                </p>
              </div>
            </motion.div>

            {/* project leader 1 */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="flex items-center justify-center rounded-full ">
                  <Image
                    src="/project-leader.jpg"
                    alt="Project Leader"
                    width={128}
                    height={128}
                    className="h-44 w-44 rounded-full items-center ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="px-3 py-1 text-center  bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                    PROJECT LEADER
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Manish Lathiya
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Visionary Project Leader driving innovation across the IT
                  industry and business development
                </p>
              </div>
            </motion.div>
            {/* Project Leader 2 */}
          </div>
          <h1 className="text-white text-3xl font-semibold mt-8 text-center">
            WFM Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="flex items-center justify-center rounded-full ">
                  <Image
                    src="/sushmita.jpg"
                    alt="Project Leader"
                    width={128}
                    height={128}
                    className="h-44 w-44 rounded-full items-center ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="px-3 py-1 text-center  bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                    WFM
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sushmita
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated WFM professional ensuring optimal workforce
                  management and operational efficiency.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="flex items-center justify-center rounded-full ">
                  <Image
                    src="/jyoti.jpg"
                    alt="Project Leader"
                    width={128}
                    height={128}
                    className="h-44 w-44 rounded-full items-center ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="px-3 py-1 text-center  bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                    WFM
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jyoti</h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated WFM professional ensuring optimal workforce
                  management and operational efficiency.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="flex items-center justify-center rounded-full ">
                  <Image
                    src="/lokeshwar.jpg"
                    alt="Project Leader"
                    width={128}
                    height={128}
                    className="h-44 w-44 rounded-full items-center ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="px-3 py-1 text-center  bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                    WFM
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Lokeshwar
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated WFM professional ensuring optimal workforce
                  management and operational efficiency.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Team Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <div className="text-3xl font-bold mb-2">45+</div>
                <div className="text-sm opacity-90">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-sm opacity-90">States Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* State-wise Teams Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Teams Across States
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated teams deployed across multiple states, delivering
              excellence in every project
            </p>
          </motion.div>

          {/* Two Teams Row */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-7xl mx-auto">
            {/* Team Ramgarh */}

            {/* Team A G Office Ranchi */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6">
              {/* Team Header */}
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-600 mb-4">
                  <Globe className="w-4 h-4 mr-2" />
                  <span className="font-semibold text-sm">TEAM A G OFFICE</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Ranchi Headquarters
                </h3>
                <p className="text-gray-600">
                  Administrative and coordination team
                </p>
              </div>

              {/* Two Images Grid */}
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-80 overflow-hidden group cursor-pointer">
                  <Image
                    src="https://scontent.fpat2-7.fna.fbcdn.net/v/t39.30808-6/470076772_464414946682383_2720910171639936896_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KyGbN06EjwsQ7kNvwF7GfCu&_nc_oc=Adl6XT_UwwEO5HLvJsjLWIx6fWI2O3KwMuF-d2gitM7XRfU7fsy4EjhWiYAfR08e033vggfM7rVUQbAjG_X6oWar&_nc_zt=23&_nc_ht=scontent.fpat2-7.fna&_nc_gid=s2Jg_HH_LqeJBft9sQGNxg&oh=00_AfNbqQmqQZdfp35gMj8gqdoTFxKilZLdgkR3j9aZvixcJg&oe=68640F9B"
                    alt="A G Office Team - Office Operations"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h5 className="font-semibold mb-1">Office Operations</h5>
                    <p className="text-xs text-gray-200">
                      Administrative coordination
                    </p>
                  </div>
                </div>

                <div className="relative h-80 overflow-hidden group cursor-pointer">
                  <Image
                    src="https://scontent.fpat2-4.fna.fbcdn.net/v/t39.30808-6/470120974_464414716682406_7699217653799957253_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AS8PG2uu4XIQ7kNvwHa0BcO&_nc_oc=AdkU34q19YoPyrjHSLe_dUp2xEMQM8kV32oiv_hxVEi-ETYQv2fafJUbLzkA6OsdrgKjkFe4fRH-xRpwLOvez5if&_nc_zt=23&_nc_ht=scontent.fpat2-4.fna&_nc_gid=s2Jg_HH_LqeJBft9sQGNxg&oh=00_AfPP2fRxWgGf-pqT5f8FJuRkh4wSNDEgbqnQ8WQWxm50jA&oe=6864062E"
                    alt="A G Office Team - Team Collaboration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h5 className="font-semibold mb-1">Team Collaboration</h5>
                    <p className="text-xs text-gray-200">
                      Strategic planning session
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Team Chhattisgarh - Full Width Row */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 ">
              {/* Team Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-green-500/30 rounded-full text-green-600 mb-4">
                  <Globe className="w-4 h-4 mr-2" />
                  <span className="font-semibold text-sm">
                    TEAM CHHATTISGARH
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Regional Operations
                </h3>
                <p className="text-gray-600">
                  Multi-state coordination and project management team
                </p>
              </div>

              {/* Three Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative h-64 overflow-hidden group cursor-pointer">
                  <Image
                    src="https://scontent.fpat2-2.fna.fbcdn.net/v/t39.30808-6/486852070_3051877818314705_8931193882290261326_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Z_4E4m7aXJ4Q7kNvwFAFqxT&_nc_oc=AdnZkjY03ULzxOlrZ4DP6QAlhBzSGBnWbx65-gDlQ5JJz6MbhWS5bcNY2NPGZhmaQsgCbpgIRQLwGWfxCk7irojk&_nc_zt=23&_nc_ht=scontent.fpat2-2.fna&_nc_gid=s2Jg_HH_LqeJBft9sQGNxg&oh=00_AfOrCBDNoA9vjPwjHY4u8qnbS0RwZEwMJ0t_A9XnD7RvrA&oe=686403E0"
                    alt="Team Chhattisgarh - Field Operations"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h5 className="font-semibold mb-1">Field Operations</h5>
                    <p className="text-xs text-gray-200">
                      Data collection and surveys
                    </p>
                  </div>
                </div>

                <div className="relative h-64 overflow-hidden group cursor-pointer">
                  <Image
                    src="https://scontent.fpat2-4.fna.fbcdn.net/v/t39.30808-6/487397164_3051877938314693_5880860208558751064_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bWEFxiS6rz8Q7kNvwFoXnqz&_nc_oc=AdnqbAYzyXZ7VwoXXIvMwGvWAagEYB0EdiMqgbbEnHX95i4it0OjkQon1c4ccB9zYjaumg95eodEG9KGB1qmOjv7&_nc_zt=23&_nc_ht=scontent.fpat2-4.fna&_nc_gid=s2Jg_HH_LqeJBft9sQGNxg&oh=00_AfOJaenL_N4bc5YyxVdzY46-NVDDzRc36ufBN8IoJ2Ca4Q&oe=6863FD7F"
                    alt="Team Chhattisgarh - Team Meeting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h5 className="font-semibold mb-1">Team Coordination</h5>
                    <p className="text-xs text-gray-200">
                      Project planning and execution
                    </p>
                  </div>
                </div>

                <div className="relative h-64 overflow-hidden group cursor-pointer">
                  <Image
                    src="https://scontent.fpat2-5.fna.fbcdn.net/v/t39.30808-6/470192634_466492003141344_7800479170594568180_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8n-k2ItT_ikQ7kNvwFrc2ff&_nc_oc=Adl_o1uBM-_KjBrHLESMf4iunmKQ9Yi0z5_VKwUgFAf5O4DGciYU60Ba99K7mAAAiA2vJ64_h6_HV5RvGCmcofhW&_nc_zt=23&_nc_ht=scontent.fpat2-5.fna&_nc_gid=ZPz5jDFXgDAIQLGSNua_8Q&oh=00_AfMn_vXdNuYnMxvGEj9LL42MbEVOyYHu5bVwMBmAe7hNVw&oe=6863FECD"
                    alt="Team Chhattisgarh - Strategic Planning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h5 className="font-semibold mb-1">Strategic Planning</h5>
                    <p className="text-xs text-gray-200">
                      Regional coordination
                    </p>
                  </div>
                </div>
                <div className="relative h-64 overflow-hidden group cursor-pointer">
                  <Image
                    src="/team-raipur.jpg"
                    alt="Team Chhattisgarh - Strategic Planning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h5 className="font-semibold mb-1">Strategic Planning</h5>
                    <p className="text-xs text-gray-200">
                      Regional coordination
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Team Bhubaneshwar - Full Width Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16  mx-auto">
            {/* Team Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-600 mb-4">
                <Globe className="w-4 h-4 mr-2" />
                <span className="font-semibold text-sm">TEAM BHUBANESHWAR</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Odisha Operations
              </h3>
              <p className="text-gray-600">
                Regional development and implementation team
              </p>
            </div>

            {/* Three Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative h-64 overflow-hidden group cursor-pointer">
                <Image
                  src="https://scontent.fpat2-4.fna.fbcdn.net/v/t39.30808-6/470073587_464416943348850_8810529119886131419_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kZZCSBZuJqUQ7kNvwG5Mr9f&_nc_oc=AdnJeu8VfIdxrX1dLnuiEZDcvE1rm6SaGhPz6SPbB_qNsk9szen2Ar6noPBeocLav78eQSA73D3Pbpxkt3UNS7YC&_nc_zt=23&_nc_ht=scontent.fpat2-4.fna&_nc_gid=RHTiuLVKL70Fa41djF-fqQ&oh=00_AfO_ziIUHkf_h_5e-LjBEOEVQAvqZe9VdDMukm41n19CEg&oe=6863F811"
                  alt="Team Bhubaneshwar - Project Management"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="font-semibold mb-1">Project Management</h5>
                  <p className="text-xs text-gray-200">
                    Strategic oversight and coordination
                  </p>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden group cursor-pointer">
                <Image
                  src="https://scontent.fpat2-1.fna.fbcdn.net/v/t39.30808-6/469896178_464417063348838_7430837654979796490_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=s6EJbDBfzTMQ7kNvwFAYE5t&_nc_oc=AdnVaoTQ5VtIYeAMBK3UUNqid7G6J03RJNETyy_mW4PmAsjldQQfeCmkOXhokt5CzThmtf9dG5htQlpnG1sWuejX&_nc_zt=23&_nc_ht=scontent.fpat2-1.fna&_nc_gid=URAqAOxGoFMsMCwPcHRE2w&oh=00_AfOgKo2x39-iUbHof2KbCjlSLKO7ieSxHX1HBxFk291yFA&oe=68640B98"
                  alt="Team Bhubaneshwar - Team Collaboration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="font-semibold mb-1">Team Collaboration</h5>
                  <p className="text-xs text-gray-200">
                    Cross-functional teamwork
                  </p>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden group cursor-pointer">
                <Image
                  src="https://scontent.fpat2-4.fna.fbcdn.net/v/t39.30808-6/470109815_464416926682185_8208749327283033721_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gZ9BtuX-6bYQ7kNvwGu1YW1&_nc_oc=AdlQsawn7SYi0fMytoh4M1z2gQe7QTlaQqvSUB16YkF3cj97FRDCcpUEvNM2f1MDsgNey1741nTSi1XXwN9fe9tr&_nc_zt=23&_nc_ht=scontent.fpat2-4.fna&_nc_gid=RHTiuLVKL70Fa41djF-fqQ&oh=00_AfMGrKeDLuZSfVjXa3zUqDi_kijU9xcOQ9B9K3KHIdOE4w&oe=68640976"
                  alt="Team Bhubaneshwar - Technical Implementation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="font-semibold mb-1">
                    Technical Implementation
                  </h5>
                  <p className="text-xs text-gray-200">
                    Solution development and deployment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Team Bhubaneshwar - Full Width Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16  mx-auto">
            {/* Team Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-600 mb-4">
                <Globe className="w-4 h-4 mr-2" />
                <span className="font-semibold text-sm">TEAM BAREILLY (UP)</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Bareilly Operations
              </h3>
              <p className="text-gray-600">
                Regional development and implementation team
              </p>
            </div>

            {/* Three Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative h-64 overflow-hidden group cursor-pointer">
                <Image
                  src="/team-bareilly.jpg"
                  alt="Team bareilly Project Management"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="font-semibold mb-1">Project Management</h5>
                  <p className="text-xs text-gray-200">
                    Strategic oversight and coordination
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
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

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Office Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at our professional offices for consultations and
              business discussions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Corporate Office */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Corporate Office
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    Primary Location
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Address:</p>
                    <p className="text-gray-700 leading-relaxed">
                      Shop No 08, 2nd Floor, Mukti Tower,
                      <br />
                      Opposite Ashoka Hotel, Circular Road,
                      <br />
                      Ranchi, Jharkhand - 834001
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-medium">Phone:</p>
                    <p className="text-gray-700">+91 9308899616</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-medium">Email:</p>
                    <p className="text-gray-700">info@sagaciousglobal.com</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Business Hours: Mon-Sat 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Branch Office */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Branch Office
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Regional Office
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Address:</p>
                    <p className="text-gray-700 leading-relaxed">
                      201,2nd floor,Suman Punj, Piller no-10, <br /> Jagdeo
                      Path,Patna-800014
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-medium">Phone:</p>
                    <p className="text-gray-700">+91 8969222014</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-medium">Email:</p>
                    <p className="text-gray-700">branch@sagaciousglobal.com</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Business Hours: Mon-Sat 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Have questions about our services? Ready to start your next
                project? Our team is here to help you achieve your business
                goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Us Now
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Email
                </button>
              </div>
            </div>
          </motion.div>
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
