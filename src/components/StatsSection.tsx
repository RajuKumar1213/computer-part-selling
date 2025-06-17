'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield, TrendingUp, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Happy Customers',
    description: 'Businesses trust us'
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years Experience',
    description: 'In the industry'
  },
  {
    icon: TrendingUp,
    number: '1000+',
    label: 'Projects Completed',
    description: 'Successfully delivered'
  },
  {
    icon: Shield,
    number: '99.9%',
    label: 'Uptime Guarantee',
    description: 'Reliable systems'
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Support Available',
    description: 'Always here to help'
  },
  {
    icon: Globe,
    number: '50+',
    label: 'Cities Covered',
    description: 'Pan India presence'
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
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over the years, we have built a strong reputation in the industry with our commitment to quality and customer satisfaction.
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
