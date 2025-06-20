"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  ShoppingCart,
  MessageCircle,
  Phone,
  Truck,
  Shield,
  Award,
  Star,
} from "lucide-react";
import { Product } from "@/types";
import { companyInfo } from "@/data/products";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const currentScrollY = window.scrollY;

      // Get the scrollbar width
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Apply scroll lock with position fixed to prevent background scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add("modal-open");

      return () => {
        // Restore scroll position and remove lock
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.paddingRight = "";
        document.body.classList.remove("modal-open");

        // Restore scroll position
        window.scrollTo(0, currentScrollY);
      };
    }
  }, [isOpen]);

  if (!product) return null;

  const handleWhatsAppEnquiry = () => {
    const message = `Hi! I'm interested in ${product.name} (${product.itemCode}). Could you please provide more details about pricing and availability?`;
    const url = `https://wa.me/${
      companyInfo.whatsappNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handlePhoneCall = () => {
    window.open(`tel:${companyInfo.whatsappNumber}`, "_self");
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const savings = product.originalPrice
    ? product.originalPrice - product.price
    : 0;
  const discountPercentage = product.originalPrice
    ? Math.round((savings / product.originalPrice) * 100)
    : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 items-end z-50 flex md:items-center md:justify-center md:p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          {" "}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-7xl h-[100vh] md:h-[90vh] bg-white dark:bg-gray-900 md:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="md:relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-2 flex flex-col h-full">
                {/* Main Image */}
                <div className="relative min-h-60 flex-1 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg mb-3">
                  <Image
                    src={product.images[selectedImageIndex]}
                    alt={product.name}
                    fill
                    className="object-contain md:p-2 p-0.5"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Navigation Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all hover:scale-110"
                      >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all hover:scale-110"
                      >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                      </button>
                    </>
                  )}

                  {/* Video Play Button */}
                  {product.videos && product.videos.length > 0 && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="md:absolute hidden md:block bottom-4 right-4 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-110"
                    >
                      <Play className="w-6 h-6" />
                    </button>
                  )}
                </div>
                {/* Thumbnail Gallery */}
                <div className="flex-shrink-0 hidden md:block h-24">
                  <div className="flex md:gap-3 gap-2 overflow-x-auto pb-2 h-full ">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                          selectedImageIndex === index
                            ? "border-blue-500 scale-105"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-400"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          fill
                          className="object-cover m-1"
                          sizes="80px"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Side - Product Details */}
              <div
                className="p-3 md:p-6 modal-content-scroll"
                style={{ maxHeight: "100%" }}
              >
                <div className="space-y-3 md:space-y-4">
                  {/* Product Title & Rating */}
                  <div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                        {product.category}
                      </span>
                      {product.featured && (
                        <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded text-xs">
                          ★ Featured
                        </span>
                      )}
                    </div>
                    <h1 className="text-lg md:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h1>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        (4.8/5) • 150+ Reviews
                      </span>
                    </div>
                  </div>{" "}
                  {/* Pricing */}{" "}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-3 md:p-4 rounded-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xl md:text-3xl font-heading font-bold text-green-600 dark:text-green-400">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                          /Piece
                        </span>
                        {product.originalPrice && (
                          <div className="space-y-1">
                            <span className="text-base md:text-lg text-gray-500 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs md:text-sm font-medium">
                              {discountPercentage}% OFF
                            </span>
                          </div>
                        )}
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:shadow-lg transition-all duration-300">
                        Get Latest Price
                      </button>
                    </div>
                    {savings > 0 && (
                      <p className="text-green-600 dark:text-green-400 font-medium mt-2 text-xs md:text-sm">
                        You save {formatPrice(savings)}!
                      </p>
                    )}
                  </div>
                  {/* Product Description */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Product Description
                    </h3>
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  {/* Product Info */}
                  {(product.brand || product.model || product.itemCode) && (
                    <div className="grid grid-cols-2 gap-4">
                      {product.brand && (
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Brand
                          </span>
                          <p className="font-semibold text-sm text-gray-900 dark:text-white">
                            {product.brand}
                          </p>
                        </div>
                      )}
                      {product.model && (
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Model
                          </span>
                          <p className="font-semibold text-sm text-gray-900 dark:text-white">
                            {product.model}
                          </p>
                        </div>
                      )}{" "}
                      {product.itemCode && (
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Item Code
                          </span>
                          <p className="font-semibold text-sm text-gray-900 dark:text-white">
                            {product.itemCode}
                          </p>
                        </div>
                      )}
                      {product.deliveryTime && (
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Delivery Time
                          </span>
                          <p className="font-semibold text-sm text-gray-900 dark:text-white">
                            {product.deliveryTime}
                          </p>
                        </div>
                      )}
                    </div>
                  )}{" "}
                  {/* Specifications */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      Technical Specifications
                    </h3>
                    {product.detailedSpecs &&
                    product.detailedSpecs.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.detailedSpecs.map((spec, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"
                          >
                            <span className="text-xs text-gray-600 dark:text-gray-400 block mb-1">
                              {spec.label}
                            </span>
                            <span className="font-semibold text-xs md:text-sm text-gray-900 dark:text-white">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid gap-3">
                        {product.specs.map((spec, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs md:text-sm text-gray-800 dark:text-gray-200">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <div>
                      <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                        Key Features
                      </h3>
                      <div className="space-y-3">
                        {product.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-xs md:text-sm text-gray-900 dark:text-white mb-1">
                                {feature.title}
                              </h4>
                              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Trust Indicators */}{" "}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto mb-2" />
                      <span className="text-xs font-medium text-green-800 dark:text-green-400">
                        Warranty
                      </span>
                    </div>
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Truck className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mx-auto mb-2" />
                      <span className="text-xs font-medium text-blue-800 dark:text-blue-400">
                        Fast Delivery
                      </span>
                    </div>
                    <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <Award className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mx-auto mb-2" />
                      <span className="text-xs font-medium text-purple-800 dark:text-purple-400">
                        Certified
                      </span>
                    </div>
                  </div>
                  {/* Action Buttons */}{" "}
                  <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t dark:border-gray-700">
                    {/* Product Brochure and Video Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-xs transition-all duration-300">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Product Brochure
                      </button>
                      <button
                        onClick={() =>
                          product.videos &&
                          product.videos.length > 0 &&
                          setIsPlaying(true)
                        }
                        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium text-xs transition-all duration-300"
                      >
                        <Play className="w-3 h-3" />
                        Watch Video
                      </button>
                    </div>

                    {/* Main Contact Buttons */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <button
                        onClick={handleWhatsAppEnquiry}
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all hover:scale-105 shadow-lg"
                      >
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden sm:inline">
                          WhatsApp Enquiry
                        </span>
                        <span className="sm:hidden">WhatsApp</span>
                      </button>
                      <button
                        onClick={handlePhoneCall}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all hover:scale-105 shadow-lg"
                      >
                        <Phone className="w-3 h-3 md:w-4 md:h-4" />
                        Call Now
                      </button>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2.5 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all hover:scale-105 shadow-lg">
                      <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
                      Get Best Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Video Modal */}
            {isPlaying && product.videos && product.videos[0] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 flex items-center justify-center z-20"
                onClick={() => setIsPlaying(false)}
              >
                <div className="relative w-full max-w-4xl aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${product.videos[0]}?autoplay=1`}
                    title={product.name}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
