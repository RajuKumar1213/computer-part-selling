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

      {/* Hero Section */}
      <section className="relative min-h-screen mt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-8 lg:px-12 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8">
                {/* Company Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200">
                  <ShoppingCart className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="font-semibold">OUR PRODUCTS</span>
                </motion.div>
                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Premium POS
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </motion.h1>{" "}
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Discover our premium collection of POS systems and billing
                  solutions designed to transform your business operations with
                  cutting-edge technology.
                </motion.p>
                {/* Product Range */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Billing Machine
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    Our product range includes a wide range of{" "}
                    <strong className="text-white">
                      POS Billing Machine Aspire Nukkad Shop
                    </strong>
                    ,{" "}
                    <strong className="text-white">
                      POS Billing Machine Pro 2 Nukkad Shop
                    </strong>{" "}
                    and{" "}
                    <strong className="text-white">
                      POS Billing Machine Elite A Nukkad Shop
                    </strong>
                    .
                  </p>
                </motion.div>{" "}
                {/* Feature Points */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-200">Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-200">Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-200">Expert Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-200">1 Year Warranty</span>
                  </div>
                </motion.div>
                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.indiamart.com/sagacious-globalservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit IndiaMART Store
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <button
                    onClick={() =>
                      document
                        .getElementById("products-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                    Browse Products
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            {" "}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of POS billing machines designed
              for modern businesses
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Product Image */}
                <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                        ★ Featured
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
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
                <div className="p-5">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {product.itemCode}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">4.8 (150+)</span>
                    </div>

                    {/* Key Specs Preview */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <span className="text-gray-600 text-xs block mb-1">
                          Brand
                        </span>
                        <span className="font-medium text-gray-900 text-xs">
                          {product.brand}
                        </span>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <span className="text-gray-600 text-xs block mb-1">
                          Model
                        </span>
                        <span className="font-medium text-gray-900 text-xs">
                          {product.model}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-blue-600">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => handleProductClick(product)}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg">
                        View More Details
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleWhatsAppEnquiry(product)}
                          className="flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium text-xs transition-all duration-300">
                          <MessageCircle className="w-3 h-3" />
                          WhatsApp
                        </button>

                        <a
                          href="https://www.indiamart.com/sagacious-globalservices/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium text-xs transition-all duration-300">
                          <ShoppingCart className="w-3 h-3" />
                          Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

     
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </>
  );
}
