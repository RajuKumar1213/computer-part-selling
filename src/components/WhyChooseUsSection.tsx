"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Shield,
  Users,
  Headphones,
  Zap,
  CheckCircle,
} from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Work Ethics & Integrity",
    description:
      "Our guiding principles ensure transparent and honest business relationships with all clients.",
    stats: "Trusted Partner",
  },
  {
    icon: Clock,
    title: "Quick Team Building",
    description:
      "Proven ability to scale teams rapidly - built 3,500+ member team in just 2 months.",
    stats: "Rapid Scaling",
  },
  {
    icon: Shield,
    title: "Quality Results",
    description:
      "Young, dynamic, and committed individuals who have always delivered quality results on time.",
    stats: "On-Time Delivery",
  },
  {
    icon: Users,
    title: "Skilled Professionals",
    description:
      "Highly skilled, experienced, and multilingual professionals fluent in English.",
    stats: "45+ Personnel",
  },
  {
    icon: Headphones,
    title: "24/7 Operations",
    description:
      "Round-the-clock operations with three shifts to meet your project deadlines.",
    stats: "3 Shifts Coverage",
  },
  {
    icon: Zap,
    title: "Onsite Deployment",
    description:
      "Flexible onsite deployment capabilities with qualified staff for immediate project needs.",
    stats: "Flexible Deployment",
  },
];

export function WhyChooseUsSection() {
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
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 font-medium mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>{" "}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Truly Partnered in Excellence
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
            We are a group of young, dynamic and committed individuals who have
            always delivered quality results on time. Work ethics and integrity
            are our guiding principles.
          </p>
        </motion.div>
        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {advantage.description}
              </p>

              {/* Stats */}
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium text-sm">
                {advantage.stats}
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
          className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied businesses who chose SGS for their
              technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium">
                Get Free Consultation
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
