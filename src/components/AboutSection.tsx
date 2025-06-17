'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const features = [
  'Complete POS system integration',
  'GST compliant billing software',
  'Real-time inventory management',
  'Multi-location support',
  'Cloud-based data backup',
  '24/7 technical support'
];

export function AboutSection() {
  return (    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          ><div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-4 mx-auto lg:mx-0">
                About Sagacious Global Services
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                We help businesses grow with technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center lg:text-left">
                Sagacious Global Services is a leading provider of POS systems, billing solutions, and computer hardware. 
                We specialize in helping businesses streamline their operations with cutting-edge technology solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                With over 15 years of experience in the industry, we have successfully served 500+ businesses across 
                50+ cities in India, providing them with reliable, efficient, and cost-effective solutions.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Our Team
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office environment with POS systems"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+ Cities</div>
                    <div className="text-sm text-gray-600">Pan India Presence</div>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-white text-center">
                <div className="text-lg font-bold">15+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
