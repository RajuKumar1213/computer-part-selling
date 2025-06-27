'use client';

import { motion } from 'framer-motion';
import { Building, Wifi, Shield, Monitor, Coffee } from 'lucide-react';

const facilities = [
  {
    icon: Building,
    title: 'Carpet Area',
    description: 'More than 3,000 sq. ft.',
    detail: 'State-of-the-art workspace'
  },
  {
    icon: Monitor,
    title: 'Technical Support',
    description: 'In-house software and tech support',
    detail: 'Dedicated IT infrastructure'
  },
  {
    icon: Shield,
    title: 'Secure Storage',
    description: 'Adequate secure storage facilities',
    detail: 'Data security compliance'
  },
  {
    icon: Coffee,
    title: 'Recreation',
    description: 'In-house recreation facilities',
    detail: 'Employee well-being focus'
  },
  {
    icon: Wifi,
    title: 'Connectivity',
    description: 'High-speed broadband internet',
    detail: 'Reliable network infrastructure'
  }
];



export function InfrastructureSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-blue-800 font-medium text-sm mb-4">
            <Building className="w-4 h-4 mr-2" />
            Infrastructure & Capabilities
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            State-of-the-Art Facilities
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
            Our infrastructure combines modern facilities with tight security to ensure business continuity 
            and optimal working environment for our skilled professionals.
          </p>
        </motion.div>

        {/* Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <facility.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {facility.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                {facility.description}
              </p>
              <p className="text-xs text-blue-600 font-medium">
                {facility.detail}
              </p>
            </motion.div>
          ))}
        </div>

      

      </div>
    </section>
  );
}
