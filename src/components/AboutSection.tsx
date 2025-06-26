"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

const features = [
  "Data Processing & Database Administration",
  "Software Development & Re-engineering",
  "Web Designing & Multimedia Production",
  "Document Imaging & E-mailing Solutions",
  "Back Office Activities & Support",
  "24/7 Operations in 3 Shifts",
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}{" "}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left">
            {" "}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium text-sm mb-4 mx-auto lg:mx-0">
                About Sagacious Global Services
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                Truly Partnered in IT Excellence
              </h2>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 text-center lg:text-left">
                Sagacious Global Services is a team of professionals who served
                the IT industry for a long time. We contribute our skills and
                experiences in Data Processing, Database Administration,
                Software Development, Web Designing, and Back Office Activities.
              </p>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 text-center lg:text-left">
                Although formally started in <strong>2019</strong>, we have been
                serving the IT industry since <strong>2007</strong>
                across{" "}
                <strong>
                  Chhattisgarh, Odisha, Uttar Pradesh, Rajasthan, Bihar, and
                  Jharkhand
                </strong>
                .
              </p>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed text-center lg:text-left">
                We are a group of{" "}
                <strong>young, dynamic and committed individuals</strong> who
                have always delivered quality results on time.
                <strong>Work ethics and integrity</strong> are our guiding
                principles.
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
                  className="flex items-center space-x-3">
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
            className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {" "}
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional IT team working on data processing and software development"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-gray-900">
                      45+ Personnel
                    </div>
                    <div className="text-xs text-gray-600">
                      Skilled Professionals
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-white text-center">
                <div className="text-sm font-bold">2007</div>
                <div className="text-xs">Since</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
