"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/Button";
import dynamic from "next/dynamic";

// Dynamically import Globe to avoid SSR issues
const World = dynamic(
  () => import("./ui/globe").then((mod) => ({ default: mod.World })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    ),
  }
);

const stats = [
  { value: "45+", label: "Skilled Personnel" },
  { value: "2007", label: "Since Experience" },
  { value: "60+", label: "Deployed Staff" },
  { value: "3000+", label: "Sq. Ft. Facility" },
];

const features = [
  "Data Processing Excellence",
  "Database Administration",
  "Software Development",
  "24/7 Operations Support",
];

// Earth-like Globe configuration with natural colors from space
const globeConfig = {
  pointSize: 12,
  globeColor: "#0a1e2e", // Deep ocean blue
  showAtmosphere: true,
  atmosphereColor: "#4f9cff", // Natural Earth atmosphere blue
  atmosphereAltitude: 0.25,
  emissive: "#1a4d66",
  emissiveIntensity: 1.8,
  shininess: 0.9,
  polygonColor: "rgba(34, 139, 34, 0.8)", // Natural land green
  ambientLight: "#2d5aa0",
  directionalLeftLight: "#1e3a5f",
  directionalTopLight: "#2e5984",
  pointLight: "#87ceeb",
  arcTime: 2000,
  arcLength: 0.9,
  rings: 8,
  maxRings: 12,
  initialPosition: { lat: 25, lng: -20 }, // Cool tilted angle
  autoRotate: true,
  autoRotateSpeed: 0.2,
  width: 800,
  height: 800,
};

// Global connections with natural Earth-like colors
const globeData = [
  // India to Major World Cities
  {
    order: 1,
    startLat: 28.6139, // Delhi, India
    startLng: 77.209,
    endLat: 40.7128, // New York, USA
    endLng: -74.006,
    arcAlt: 0.4,
    color: "#4f9cff",
  },
  {
    order: 2,
    startLat: 19.076, // Mumbai, India
    startLng: 72.8777,
    endLat: 51.5074, // London, UK
    endLng: -0.1278,
    arcAlt: 0.3,
    color: "#6bb6ff",
  },
  {
    order: 3,
    startLat: 12.9716, // Bangalore, India
    startLng: 77.5946,
    endLat: 35.6762, // Tokyo, Japan
    endLng: 139.6503,
    arcAlt: 0.25,
    color: "#87ceeb",
  },
  {
    order: 4,
    startLat: 23.5204, // Ranchi, India (Company HQ)
    startLng: 85.3119,
    endLat: -33.8688, // Sydney, Australia
    endLng: 151.2093,
    arcAlt: 0.5,
    color: "#add8e6",
  },
  // Cross-Continental Connections
  {
    order: 5,
    startLat: 37.7749, // San Francisco, USA
    startLng: -122.4194,
    endLat: 55.7558, // Moscow, Russia
    endLng: 37.6176,
    arcAlt: 0.4,
    color: "#2d5aa0",
  },
  {
    order: 6,
    startLat: 52.52, // Berlin, Germany
    startLng: 13.405,
    endLat: -26.2041, // Johannesburg, South Africa
    endLng: 28.0473,
    arcAlt: 0.35,
    color: "#4f9cff",
  },
  {
    order: 7,
    startLat: 39.9042, // Beijing, China
    startLng: 116.4074,
    endLat: -23.5505, // São Paulo, Brazil
    endLng: -46.6333,
    arcAlt: 0.6,
    color: "#6bb6ff",
  },
  {
    order: 8,
    startLat: 1.3521, // Singapore
    startLng: 103.8198,
    endLat: 48.8566, // Paris, France
    endLng: 2.3522,
    arcAlt: 0.3,
    color: "#87ceeb",
  },
  // More Global Coverage
  {
    order: 9,
    startLat: 25.2048, // Dubai, UAE
    startLng: 55.2708,
    endLat: 43.6532, // Toronto, Canada
    endLng: -79.3832,
    arcAlt: 0.4,
    color: "#add8e6",
  },
  {
    order: 10,
    startLat: -34.6037, // Buenos Aires, Argentina
    startLng: -58.3816,
    endLat: 31.2304, // Shanghai, China
    endLng: 121.4737,
    arcAlt: 0.7,
    color: "#2d5aa0",
  },
  // African and European Connections
  {
    order: 11,
    startLat: 30.0444, // Cairo, Egypt
    startLng: 31.2357,
    endLat: 59.9139, // Oslo, Norway
    endLng: 10.7522,
    arcAlt: 0.25,
    color: "#4f9cff",
  },
  {
    order: 12,
    startLat: -1.2921, // Nairobi, Kenya
    startLng: 36.8219,
    endLat: 37.5665, // Seoul, South Korea
    endLng: 126.978,
    arcAlt: 0.45,
    color: "#6bb6ff",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">      {" "}
      {/* Natural Earth Globe - As Seen From Space */}
      <div className="absolute right-[-200px] top-1/2 transform -translate-y-1/2 z-0">
        <div className="w-[900px] h-[900px] relative flex items-center justify-center overflow-hidden">            {/* Natural Earth Atmosphere Glow Effects */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/30 via-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-8 bg-gradient-radial from-blue-300/40 via-blue-400/20 to-transparent rounded-full blur-2xl"></div>
          <div
            className="absolute inset-16 bg-gradient-radial from-blue-200/50 via-blue-300/25 to-transparent rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>{/* Globe Container - Big and Tilted (more visible, bottom hidden) */}
          <div className="w-[800px] h-[800px] relative transform rotate-12 translate-y-4">
            <div className="w-full h-full overflow-hidden rounded-full relative">
              <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>
              {/* Globe temporarily disabled for build */}
              <World data={globeData} globeConfig={globeConfig} />              <div className="w-full h-full bg-gradient-to-br from-blue-800/15 to-blue-900/15 rounded-full flex items-center justify-center">
                <div className="text-blue-200 text-center">
                  <div className="text-2xl font-bold mb-2">Global Reach</div>
                  <div className="text-sm">6 States Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Simple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10"></div>{" "}
      {/* Content - Simple and Clean */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-12 py-20">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-white"
            >
              {" "}
              {/* Small Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-xs"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                Professional IT Services
              </motion.div>
              {/* Simple Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Sagacious Global Services
                </h1>
                <h2 className="text-lg md:text-xl text-blue-300 font-semibold">
                  Truly Partnered in IT Excellence
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Professional IT solutions in Data Processing, Database
                  Administration, Software Development, Web Designing, and Back
                  Office Activities since 2007.
                </p>
              </motion.div>
              {/* Simple Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {features.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1"
                  >
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-white text-xs">{feature}</span>
                  </div>
                ))}
              </motion.div>
              {/* Simple CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-3"
              >
                {" "}
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm"
                >
                  Get Started
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 text-sm"
                >
                  Learn More
                </Button>
              </motion.div>
              {/* Simple Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-4 pt-4 border-t border-white/10"
              >
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-left">
                    <div className="text-lg font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Simple Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-6 left-8 bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-white/10"
          >
            {" "}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-xs">
                Active • 6 States Coverage
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
