"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Target,
  FileText,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  Award,
  Globe,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BaselineSurveyPage() {
  const features = [
    {
      icon: BarChart3,
      title: "Comprehensive Data Collection",
      description: "Systematic collection of baseline data across multiple parameters and indicators"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Direct engagement with communities for accurate socio-economic data gathering"
    },
    {
      icon: Target,
      title: "Impact Measurement",
      description: "Establishing clear baselines for measuring project impact and outcomes"
    },
    {
      icon: FileText,
      title: "Detailed Reporting",
      description: "Comprehensive reports with analysis and recommendations for project planning"
    }
  ];

  const surveyTypes = [
    "Socio-Economic Baseline Surveys",
    "Agricultural & Livelihood Assessments",
    "Infrastructure & Asset Mapping",
    "Health & Education Status Surveys",
    "Environmental Impact Assessments",
    "Market & Economic Analysis",
    "Demographics & Population Studies",
    "Government Scheme Assessments"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Actionable insights for informed project planning and implementation"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient survey completion within agreed timelines"
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Adherence to national and international survey standards"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Survey Design",
      description: "Custom survey design based on project requirements and objectives"
    },
    {
      step: "02",
      title: "Field Preparation",
      description: "Team training, tool preparation, and community coordination"
    },
    {
      step: "03",
      title: "Data Collection",
      description: "Systematic data collection using standardized protocols"
    },
    {
      step: "04",
      title: "Analysis & Reporting",
      description: "Data analysis, validation, and comprehensive report preparation"
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
          <div className="container mx-auto md:px-8 px-4 lg:px-12 py-20">
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
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="font-semibold">BASELINE SURVEY SERVICES</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  Comprehensive Baseline
                  <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Survey Solutions
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  Professional baseline surveys for development projects, impact assessments, and 
                  socio-economic research. Establish clear benchmarks for measuring project success 
                  and community impact.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="md:px-8 px-4 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
                    Start Survey Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="md:px-8 px-4 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                    View Case Studies
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Survey Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive baseline survey services designed to capture accurate data for informed decision making
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

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Survey Methodology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring reliable, accurate, and actionable baseline data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{method.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Survey Types We Conduct</h2>
              <p className="text-lg text-gray-600 mb-8">
                Specialized baseline surveys covering various sectors and development areas.
              </p>
              
              <div className="space-y-4">
                {surveyTypes.map((survey, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{survey}</span>
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
                  src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Baseline Survey Field Work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Field Research</h3>
                  <p className="text-orange-100">
                    Comprehensive field surveys with trained enumerators and researchers
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Survey Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional expertise and proven methodologies for reliable baseline data
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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Survey Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering measurable results across multiple development projects and initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Surveys Completed", desc: "Across various sectors" },
              { number: "50K+", label: "Households Covered", desc: "Comprehensive data collection" },
              { number: "15", label: "States Covered", desc: "Pan-India presence" },
              { number: "95%", label: "Client Satisfaction", desc: "Quality delivery guarantee" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Baseline Survey Services?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get accurate baseline data for your development projects with our professional survey services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="md:px-8 px-4 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300">
                Request Proposal
              </button>
              <button className="md:px-8 px-4 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Discuss Requirements
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
