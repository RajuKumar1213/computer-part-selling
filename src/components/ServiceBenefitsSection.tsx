'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingDown, Target, Users, Zap, Shield } from 'lucide-react';

const serviceBenefits = [
  {
    icon: TrendingDown,
    title: 'Lower Cost',
    description: 'Cost-effective solutions that reduce operational expenses'
  },
  {
    icon: Target,
    title: 'Increased Efficiency',
    description: 'Streamlined processes for better administrative efficiency'
  },
  {
    icon: Users,
    title: 'Focus on Core Business',
    description: 'Let us handle IT operations while you focus on growth'
  },
  {
    icon: Zap,
    title: 'Faster Results',
    description: 'Quick delivery using proven practices and methodologies'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Maintain competitive edge with superior service levels'
  },
  {
    icon: CheckCircle,
    title: 'Skilled Professionals',
    description: 'Access to qualified experts at affordable rates'
  }
];

export function ServiceBenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 font-medium text-sm mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Service Benefits
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Benefits to Our Clients
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
            Our clients experience significant advantages through our comprehensive IT solutions 
            and professional services that drive business growth.
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Additional Value Proposition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
