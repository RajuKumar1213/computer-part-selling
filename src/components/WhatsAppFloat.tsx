'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/products';

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your computer parts. Can you help me?";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-colors group"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(34, 197, 94, 0.7)',
            '0 0 0 10px rgba(34, 197, 94, 0)',
            '0 0 0 20px rgba(34, 197, 94, 0)',
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </motion.button>
    </motion.div>
  );
}
