'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield, TrendingUp, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '45+',
    label: 'Skilled Personnel',
    description: 'Highly qualified professionals'
  },
  {
    icon: Award,
    number: '2007',
    label: 'Experience Since',
    description: 'Years of industry expertise'
  },
  {
    icon: TrendingUp,
    number: '60+',
    label: 'Deployed Staff',
    description: 'Across multiple states'
  },
  {
    icon: Shield,
    number: '3000+',
    label: 'Sq. Ft. Facility',
    description: 'State-of-the-art infrastructure'
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Operations',
    description: 'Three shift coverage'
  },
  {
    icon: Globe,
    number: '6',
    label: 'States Coverage',
    description: 'Chhattisgarh, Odisha, UP, Rajasthan, Bihar, Jharkhand'
  }
];

export function StatsSection() {
  return (    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Infrastructure & Capabilities
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
            With our state-of-the-art facilities and skilled manpower, we deliver quality IT solutions 
            across multiple states with 24/7 operational capability.
          </p>
        </motion.div>

        {/* Stats Grid */}        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              {/* Number */}
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
