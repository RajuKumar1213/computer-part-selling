"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  BarChart3,
  Satellite,
  Users,
  Shield,
  Scan,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    shortDescription: "Custom software solutions with modern technologies.",
    fullDescription:
      "Comprehensive software development services including web applications, mobile apps, API development, and quality assurance testing using cutting-edge technologies and agile methodologies.",
    features: [
      "Web Application Development",
      "Mobile App Development",
      "API Development & Integration",
      "Quality Assurance & Testing",
      "Agile Development Process",
      "Modern Tech Stack",
    ],
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    href: "/services/software-development",
    category: "Development",
  },
  {
    icon: BarChart3,
    title: "Baseline Survey",
    shortDescription:
      "Comprehensive baseline surveys for development projects.",
    fullDescription:
      "Professional baseline survey services for development projects, impact assessments, and policy planning with detailed data collection and analysis methodologies.",
    features: [
      "Socio-Economic Surveys",
      "Community Assessments",
      "Environmental Studies",
      "Impact Evaluations",
      "Data Collection & Analysis",
      "Policy Planning Support",
    ],
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    href: "/services/baseline-survey",
    category: "Survey",
  },
  {
    icon: Satellite,
    title: "GIS Survey",
    shortDescription: "Advanced Geographic Information System surveys.",
    fullDescription:
      "High-precision GIS surveys using advanced satellite imagery and GPS technology for accurate geographical data collection, mapping, and spatial analysis.",
    features: [
      "Topographical Surveys",
      "Land Use Mapping",
      "Infrastructure Mapping",
      "Environmental Monitoring",
      "GPS Technology",
      "Spatial Analysis",
    ],
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
    href: "/services/gis-survey",
    category: "Survey",
  },
  {
    icon: Users,
    title: "HR Services",
    shortDescription: "Complete human resource solutions for businesses.",
    fullDescription:
      "Comprehensive HR services including talent acquisition, training and development, performance management, and HR consulting to optimize your workforce.",
    features: [
      "Talent Acquisition",
      "Training & Development",
      "Performance Management",
      "HR Consulting",
      "Workforce Planning",
      "Employee Relations",
    ],
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    href: "/services/hr-services",
    category: "Consulting",
  },
  {
    icon: Shield,
    title: "AMC & FMS",
    shortDescription: "Annual Maintenance Contracts and Facility Management.",
    fullDescription:
      "Professional maintenance contracts and facility management services ensuring optimal operations, preventive maintenance, and 24/7 support for your infrastructure.",
    features: [
      "Preventive Maintenance",
      "Emergency Support",
      "Facility Management",
      "24/7 Monitoring",
      "Asset Management",
      "Compliance Management",
    ],
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    href: "/services/amc-fmc",
    category: "Maintenance",
  },
  {
    icon: Scan,
    title: "Scanning & Digitization",
    shortDescription: "Digital transformation and document management.",
    fullDescription:
      "Advanced document scanning and digitization services for digital transformation, archive management, and paperless operations with OCR processing capabilities.",
    features: [
      "Document Scanning",
      "Data Digitization",
      "Archive Management",
      "OCR Processing",
      "Digital Transformation",
      "Document Management",
    ],
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
    href: "/services/scanning-digitization",
    category: "Digital",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of professional services designed
            to meet your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white rounded-3xl border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-4 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50">
              {/* Card Content */}
              <div
                className={`relative bg-gradient-to-br ${service.bgGradient} group-hover:opacity-80 transition-all duration-500 ease-out`}>
                {/* Collapsed Content */}
                <div className="p-8 min-h-[350px] flex flex-col group-hover:pb-4 transition-all duration-500">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-blue-100/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 group-hover:from-blue-200/40 group-hover:to-indigo-200/30 transition-all duration-700"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-600 group-hover:bg-white/90 transition-all duration-300">
                    {service.category}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors duration-300"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description - Always Visible */}
                  <p className="text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Expanded Content - Slides up from bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-2 border-blue-200/60 px-8 pt-12 pb-6 min-h-[280px] transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out rounded-b-3xl shadow-lg mt-2">

                  {/* Spacer line for visual separation */}
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-6"></div>
                  
                  {/* Full Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {service.fullDescription}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-sm text-gray-700 group-hover:text-gray-800">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link href={service.href}>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-xl">
                      <span>Read Full Details</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>

                {/* Gradient Overlay for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-100/30 via-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
