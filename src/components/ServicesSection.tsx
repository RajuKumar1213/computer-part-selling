"use client";

import { motion } from "framer-motion";
import {
  Database,
  Server,
  Code,
  RefreshCw,
  Globe,
  Video,
  Mail,
  FileText,
  Users,
} from "lucide-react";
import { Button } from "./ui/Button";

const services = [
  {
    icon: Database,
    title: "Data Processing",
    description:
      "Comprehensive data processing solutions with high accuracy and quick turnaround time.",
    features: [
      "High-volume data entry",
      "Data cleansing & validation",
      "Digital conversion",
      "Multi-language support",
    ],
  },
  {
    icon: Server,
    title: "Database Administration",
    description:
      "Professional database management and administration services for optimal performance.",
    features: [
      "Database optimization",
      "Performance monitoring",
      "Backup & recovery",
      "24/7 support",
    ],
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software development solutions tailored to your business requirements.",
    features: [
      "Web applications",
      "Mobile apps",
      "Desktop software",
      "API integration",
    ],
  },
  {
    icon: RefreshCw,
    title: "Software Re-engineering",
    description:
      "Legacy system modernization and comprehensive software testing services.",
    features: [
      "System migration",
      "Code optimization",
      "Automated testing",
      "Security audits",
    ],
  },
  {
    icon: Globe,
    title: "Web Designing",
    description:
      "Modern, responsive web design solutions that enhance user experience.",
    features: [
      "Responsive design",
      "UI/UX design",
      "E-commerce solutions",
      "SEO optimization",
    ],
  },
  {
    icon: Video,
    title: "Multimedia Production",
    description:
      "Creative multimedia solutions for effective communication and marketing.",
    features: [
      "Video production",
      "Graphic design",
      "Interactive presentations",
      "Brand identity",
    ],
  },
  {
    icon: Mail,
    title: "E-Mailing Solutions",
    description:
      "Professional email solutions and communication systems for businesses.",
    features: [
      "Email server setup",
      "Bulk campaigns",
      "Security solutions",
      "Analytics & reporting",
    ],
  },
  {
    icon: FileText,
    title: "Document Imaging",
    description:
      "Digital document management and imaging solutions for paperless operations.",
    features: [
      "Document scanning",
      "OCR technology",
      "Archiving systems",
      "Workflow automation",
    ],
  },
  {
    icon: Users,
    title: "Back Office Activities",
    description:
      "Comprehensive back office support to streamline your business operations.",
    features: [
      "Administrative support",
      "Customer service",
      "Accounting support",
      "Process optimization",
    ],
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
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium text-sm mb-4">
            <Server className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional IT Solutions
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering quality IT solutions in Data Processing, Database
            Administration, Software Development, and comprehensive Back Office
            Activities since 2007.
          </p>
        </motion.div>
        {/* Services Grid */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Link */}
              <Button variant="ghost" className="w-full group-hover:bg-blue-50">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
}
