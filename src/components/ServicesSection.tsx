"use client";

import { motion } from "framer-motion";
import {
  Code,
  BarChart3,
  Satellite,
  Users,
  Shield,
  Scan,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/Button";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions with modern technologies and agile development practices.",
    features: [
      "Web Application Development",
      "Mobile App Development", 
      "API Development & Integration",
      "Quality Assurance & Testing",
    ],
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    href: "/services/software-development"
  },
  {
    icon: BarChart3,
    title: "Baseline Survey",
    description: "Comprehensive baseline surveys for development projects and impact assessments.",
    features: [
      "Socio-Economic Surveys",
      "Community Assessments", 
      "Environmental Studies",
      "Impact Evaluations",
    ],
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    href: "/services/baseline-survey"
  },
  {
    icon: Satellite,
    title: "GIS Survey",
    description: "Advanced Geographic Information System surveys with high-precision mapping technology.",
    features: [
      "Topographical Surveys",
      "Land Use Mapping",
      "Infrastructure Mapping", 
      "Environmental Monitoring",
    ],
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
    href: "/services/gis-survey"
  },
  {
    icon: Users,
    title: "HR Services",
    description: "Complete human resource solutions for recruitment, training, and workforce management.",
    features: [
      "Talent Acquisition",
      "Training & Development",
      "Performance Management",
      "HR Consulting",
    ],
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    href: "/services/hr-services"
  },
  {
    icon: Shield,
    title: "AMC & FMS",
    description: "Annual Maintenance Contracts and Facility Management Services for optimal operations.",
    features: [
      "Preventive Maintenance",
      "Emergency Support",
      "Facility Management",
      "24/7 Monitoring",
    ],
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    href: "/services/amc-fmc"
  },
  {
    icon: Scan,
    title: "Scanning & Digitization",
    description: "Digital transformation services for document management and archival solutions.",
    features: [
      "Document Scanning",
      "Data Digitization",
      "Archive Management",
      "OCR Processing",
    ],
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
    href: "/services/scanning-digitization"
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16">
          {" "}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-blue-700 font-medium text-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional IT & Survey Solutions
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering comprehensive IT solutions, survey services, and digital transformation 
            expertise to help businesses thrive in the modern digital landscape.
          </p>
        </motion.div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative bg-gradient-to-br ${service.bgGradient} border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Link Button */}
              <Button 
                variant="ghost" 
                className="w-full group-hover:bg-white/80 group-hover:text-blue-600 transition-all duration-300 font-semibold border border-gray-200 group-hover:border-blue-200 group-hover:shadow-md"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
}
