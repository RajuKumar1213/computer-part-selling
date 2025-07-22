"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/Button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white">
            {" "}
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Join government and corporate clients who trust our professional
              IT services. Get started with quality data processing, software
              development, and comprehensive back office solutions.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    Call Mr. Irfan Parvez
                  </div>
                  <div className="text-blue-100 text-sm">+91 9835 439 197</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Email us</div>
                  <div className="text-blue-100 text-sm">
                    sagaciousglobals@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Visit our office</div>
                  <div className="text-blue-100 text-sm">
                    Ranchi, Jharkhand & Patna, Bihar
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl">
            {" "}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Get Project Quote
            </h3>
            <form action="https://formsubmit.co/sagaciousglobals@gmail.com" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your business name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>{" "}
                <select name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                  <option>Select a service</option>
                  <option>Data Processing</option>
                  <option>Database Administration</option>
                  <option>Software Development</option>
                  <option>Web Designing</option>
                  <option>Multimedia Production</option>
                  <option>Back Office Activities</option>
                  <option>Other</option>
                </select>
              </div>

              <Button type="submit" className="w-full">Get My Quote</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
