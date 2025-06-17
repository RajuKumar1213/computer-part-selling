'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Factory, 
  GraduationCap, 
  Heart, 
  Truck, 
  Utensils, 
  Store,
  Briefcase,
} from 'lucide-react';

const industries = [
  {
    icon: Store,
    title: 'Retail & Commerce',
    description: 'POS systems, inventory management, and e-commerce solutions for retail businesses.',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Utensils,
    title: 'Restaurants & Hospitality',
    description: 'Complete billing solutions for restaurants, cafes, and hospitality services.',
    color: 'from-emerald-600 to-teal-600'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Specialized billing and management systems for clinics and healthcare providers.',
    color: 'from-red-600 to-pink-600'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Student management systems and educational institution billing solutions.',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Industrial billing systems and supply chain management solutions.',
    color: 'from-orange-600 to-red-600'
  },
  {
    icon: Building2,
    title: 'Corporate Offices',
    description: 'Enterprise-grade IT solutions and corporate billing management.',
    color: 'from-gray-600 to-slate-600'
  },
  {
    icon: Truck,
    title: 'Logistics & Transport',
    description: 'Fleet management and transportation billing solutions.',
    color: 'from-yellow-600 to-orange-600'
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Billing and management systems for consultants and service providers.',
    color: 'from-indigo-600 to-purple-600'
  }
];

export function IndustrySection() {
  return (    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Industry Verticals
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that every industry has unique requirements. Our tailored solutions help businesses across diverse sectors achieve operational excellence.
          </p>
        </motion.div>

        {/* Industries Grid */}        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <p className="text-sm text-gray-500 mt-3">Learn more about our solutions</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don&apos;t See Your Industry?
            </h3>
            <p className="text-gray-600 mb-6">
              We work with businesses across all sectors. Contact us to discuss your specific requirements.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium">
              Contact Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
