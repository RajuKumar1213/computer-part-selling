"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/Button";
import { heroSlides } from "@/data/hero-slides";

const stats = [
  { icon: Users, value: "5+", label: "Happy Clients" },
  { icon: Star, value: `${new Date().getFullYear() - 2020}`, label: "Years Experience" },
  { icon: Zap, value: "7+", label: "Projects Delivered" },
  { icon: Shield, value: "6", label: "States Served" },
];

const features = [
  "Data Processing & Administration",
  "Software Development & Testing",
  "Web Design & Multimedia",
  "Government IT Solutions",
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {" "}
      {/* Background Image Slider */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0">
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 lg:space-y-8 text-white">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-medium text-xs sm:text-sm">
                <Zap className="w-3 h-3 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Professional IT Services Since 2007</span>
                <span className="sm:hidden">IT Services Since 2007</span>
              </motion.div>
              {/* Dynamic Heading */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-2 sm:space-y-4">
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <h2 className="text-base sm:text-lg lg:text-xl text-blue-200 font-semibold">
                    {heroSlides[currentSlide].subtitle}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-2xl">
                    {heroSlides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
              {/* Features List - Hide on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="hidden sm:grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-white font-medium text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </motion.div>
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="group bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                  <span className="hidden sm:inline">Get Started Today</span>
                  <span className="sm:hidden">Get Started</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900 text-sm sm:text-base">
                  <span className="hidden sm:inline">View Our Services</span>
                  <span className="sm:hidden">Our Services</span>
                </Button>
              </motion.div>
              {/* Stats - Simplified for mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-4 sm:pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-1 sm:mb-2">
                      <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-white/30 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>{" "}
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-white/30 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
