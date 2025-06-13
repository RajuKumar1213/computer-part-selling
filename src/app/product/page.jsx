"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  MessageCircle,
  Phone,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import ProductDetailModal from "@/components/ProductDetailModal";
import { products, companyInfo } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleWhatsAppEnquiry = (product) => {
    const message = `Hi! I'm interested in ${product.name} from your products page. Could you please provide more details?`;
    const url = `https://wa.me/${
      companyInfo.whatsappNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Discover our premium collection of POS systems and billing
              solutions designed to transform your business operations.
            </motion.p>

            {/* IndiaMART Link */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <a
                href="https://www.indiamart.com/sagacious-globalservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Visit us on IndiaMART
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>1 Year Warranty</span>
              </div>
            </motion.div>
          </div>
        </div>{" "}
        {/* Products Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.featured && (
                      <span className="bg-gradient-to-r from-gold-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        ★ Featured
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                        {product.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {product.itemCode}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        (4.8) • 150+ Reviews
                      </span>
                    </div>

                    {/* Key Specs Preview */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
                          <span className="text-gray-600 dark:text-gray-400">
                            Brand:{" "}
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {product.brand}
                          </span>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
                          <span className="text-gray-600 dark:text-gray-400">
                            Model:{" "}
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {product.model}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-heading font-bold text-green-600 dark:text-green-400">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <button
                        onClick={() => handleProductClick(product)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                      >
                        View Details
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleWhatsAppEnquiry(product)}
                          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </button>

                        <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105">
                          <ShoppingCart className="w-4 h-4" />
                          Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}{" "}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-16 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Contact our experts for personalized recommendations and bulk
              pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyInfo.whatsappNumber}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://www.indiamart.com/sagacious-globalservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                IndiaMART Store
              </a>
            </div>
          </div>
        </div>
        {/* Product Detail Modal */}
        <ProductDetailModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
      <Footer />
    </>
  );
}
