"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ClientSection() {
  const clients = [
    {
      name: "Neel Data It Solutions",
      logo: "/neeldata.png",
      description: "A Morpho Company",
      color: "from-blue-500 to-blue-600",
      desktopSize: { width: 320, height: 180 },
      mobileSize: { width: 160, height: 120 }
    },
    {
      name: "Bhaskar",
      logo: "/bhaskar.png",
      description: "Leading Technology Solutions",
      color: "from-orange-500 to-red-500",
      desktopSize: { width: 220, height: 120 },
      mobileSize: { width: 180, height: 140 }
    },
    {
      name: "Smart Chip",
      logo: "/smartchip.jpg",
      description: "Biometric Solutions",
      color: "from-green-500 to-teal-500",
      desktopSize: { width: 200, height: 140 },
      mobileSize: { width: 140, height: 100 }
    },
    {
      name: "Techinfy",
      logo: "/techinfy_logo.jpg",
      description: "Digital Innovation",
      color: "from-purple-500 to-indigo-500",
      desktopSize: { width: 220, height: 180 },
      mobileSize: { width: 180, height: 130 }
    },
    {
      name: "Nukkad Shop",
      logo: "/nukkad.jpg",
      description: "Nukkad Shop",
      color: "from-purple-500 to-indigo-500",
      desktopSize: { width: 240, height: 180 },
      mobileSize: { width: 180, height: 130 }
    },
  ];

  // Auto-scroll carousel

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re proud to partner with industry leaders who trust us with their
            most critical projects
          </p>
        </motion.div>

        {/* Client Logos Row - Desktop & Tablet */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex justify-between items-center gap-8 md:gap-12 lg:gap-16">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center  group">
                  <div className="flex items-center justify-center mb-4 transition-colors duration-300 overflow-hidden">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={client.desktopSize.width}
                      height={client.desktopSize.height}
                      className="object-contain p-2"
                      style={{ 
                        width: `${client.desktopSize.width}px`,
                        height: `${client.desktopSize.height}px`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Grid - Vertical Layout */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4 transition-colors duration-300 overflow-hidden">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={client.mobileSize.width}
                    height={client.mobileSize.height}
                    className="object-contain"
                    style={{ 
                      width: `${client.mobileSize.width}px`,
                      height: `${client.mobileSize.height}px`
                    }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        

      
      </div>
    </section>
  );
}
