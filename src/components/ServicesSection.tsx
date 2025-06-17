'use client';

import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Cpu, HardDrive, Printer, Wifi } from 'lucide-react';
import { Button } from './ui/Button';

const services = [
  {
    icon: Monitor,
    title: 'POS Systems',
    description: 'Complete point-of-sale solutions with billing software, inventory management, and payment integration.',
    features: ['Touch Screen Displays', 'Barcode Scanners', 'Receipt Printers', 'Cash Drawers']
  },
  {
    icon: ShoppingCart,
    title: 'Billing Solutions',
    description: 'Advanced billing and invoicing software designed for retail, restaurants, and service businesses.',
    features: ['GST Compliance', 'Multi-Store Support', 'Cloud Backup', 'Real-time Reports']
  },
  {
    icon: Cpu,
    title: 'Computer Hardware',
    description: 'High-quality computer components and systems for business and personal use.',
    features: ['Latest Processors', 'Gaming Systems', 'Office Computers', 'Warranty Support']
  },
  {
    icon: HardDrive,
    title: 'Data Solutions',
    description: 'Secure data storage, backup solutions, and server systems for businesses.',
    features: ['Cloud Storage', 'Data Recovery', 'Server Setup', 'Network Security']
  },
  {
    icon: Printer,
    title: 'Peripherals',
    description: 'Complete range of computer peripherals and office equipment.',
    features: ['Printers & Scanners', 'Keyboards & Mice', 'Webcams & Speakers', 'Networking Gear']
  },
  {
    icon: Wifi,
    title: 'Network Setup',
    description: 'Professional network installation and configuration services.',
    features: ['WiFi Setup', 'LAN Configuration', 'Security Systems', 'Remote Support']
  }
];

export function ServicesSection() {
  return (    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-4">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Complete Business Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From POS systems to computer hardware, we provide everything your business needs to operate efficiently and grow successfully.
          </p>
        </motion.div>

        {/* Services Grid */}        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
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
                  <div key={idx} className="flex items-center text-sm text-gray-500">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
