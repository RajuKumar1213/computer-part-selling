'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, MessageCircle, Star, Truck, Shield } from 'lucide-react';
import { Product } from '@/types';
import { companyInfo } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hi! I'm interested in ${product.name} (${product.itemCode}). Could you please provide more details?`;
    const url = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const discountPercentage = product.originalPrice ? Math.round((savings / product.originalPrice) * 100) : 0;

  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-heading font-semibold shadow-lg">
          ⭐ Featured
        </div>
      )}

      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          -{discountPercentage}%
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={() => onViewDetails(product)}
            className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={handleWhatsAppEnquiry}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Stock Status */}
        <div className="absolute bottom-4 left-4">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
            product.inStock 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6 space-y-4">
        {/* Category & Brand */}
        <div className="flex items-center justify-between">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-medium">
            {product.category}
          </span>
          {product.brand && (
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{product.brand}</span>
          )}
        </div>

        {/* Product Name */}        <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">(4.8)</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Key Specs */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {product.specs.slice(0, 3).map((spec, index) => (
              <span key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                {spec}
              </span>
            ))}
            {product.specs.length > 3 && (
              <span className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                +{product.specs.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            <span>1 Year Warranty</span>
          </div>
          <div className="flex items-center gap-1">
            <Truck className="w-4 h-4" />
            <span>{product.deliveryTime || 'Fast Delivery'}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          {savings > 0 && (
            <p className="text-green-600 dark:text-green-400 text-sm font-medium">
              Save {formatPrice(savings)}!
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <button
            onClick={() => onViewDetails(product)}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-md"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button
            onClick={handleWhatsAppEnquiry}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export { ProductCard };
