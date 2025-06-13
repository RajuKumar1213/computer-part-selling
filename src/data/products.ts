import { Product, ContactInfo } from '@/types';

export const products: Product[] = [  {
    id: '1',
    name: 'Nukkad Shops Aspire',
    description: 'Complete billing solution with 11.6" capacitive touch display. Perfect for small to medium businesses with integrated inventory management.',
    price: 39999,
    originalPrice: 45000,
    image: 'https://5.imimg.com/data5/ANDROID/Default/2025/5/512940460/XD/HL/IH/246340611/product-jpeg-500x500.jpeg',
    category: 'POS Systems',
    itemCode: 'NUKKAD-ASPIRE-001',
    deliveryTime: '3-5 business days',
    brand: 'Nukkad Shop',    model: 'Aspire',
    featured: true,
    specs: [
      'Brand: Nukkad Shop',
      'Model: Aspire',
      'Chipset: RK 3288',
      'Processor: 1.8 GHz ARM Quad-Core Cortex - A17',
      'ROM: 8GB',
      'Display: 11.6" Capacitive Touch',
      'Resolution: 1366 x 768',
      'Warranty: 1 YEAR',
      'Easy & Simple invoicing',
      'Inventory Management',
      'Customer Engagement',
      'Reporting / Operations',
      'Sales reports',
      'Dynamic, Static UPI integration'
    ],
    inStock: true,
    images: [
      'https://5.imimg.com/data5/ANDROID/Default/2025/5/512940460/XD/HL/IH/246340611/product-jpeg-500x500.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2025/5/512739599/QF/NK/UU/246340611/nukkad-shops-aspire-125x125.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2025/5/512739515/VW/VG/NE/246340611/nukkad-shops-aspire-125x125.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2025/5/512719111/UG/EZ/OM/246340611/nukkad-shops-aspire-billing-machine-125x125.png',
      'https://5.imimg.com/data5/SELLER/Default/2025/5/512524403/GQ/HK/LL/246340611/nukkad-shops-aspire-billing-machine-125x125.png'
    ],
    videos: [
      'https://img.youtube.com/vi/MvTHH-A_Krk/hqdefault.jpg'
    ]
  },  {
    id: '2',
    name: 'Nukkad Shop Pro 2',
    description: 'Advanced billing solution with 15.6" capacitive touch display. Enhanced performance for growing businesses with comprehensive management features.',
    price: 50200,
    originalPrice: 55000,
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/512713333/PV/WQ/OE/246340611/nukkad-shop-pro-2-500x500.jpg',
    category: 'POS Systems',
    itemCode: 'NUKKAD-PRO2-002',
    deliveryTime: '3-5 business days',
    brand: 'Nukkad Shop',    model: 'Pro 2',
    specs: [
      'Model: Pro 2',
      'Chipset: RK 3288',
      'Processor: 1.8 GHz ARM Quad-Core Cortex - A17',
      'ROM: 8GB',
      'Display: 15.6" Capacitive Touch',
      'Resolution: 1366 x 768',
      'Warranty: 1 YEAR',
      'Easy & Simple invoicing',
      'Inventory Management',
      'Customer Engagement',
      'Reporting / Operations',
      'Sales reports',
      'Dynamic, Static UPI integration'
    ],
    inStock: true,
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2025/5/512713333/PV/WQ/OE/246340611/nukkad-shop-pro-2-500x500.jpg',
      'https://5.imimg.com/data5/ANDROID/Default/2025/5/512458216/GQ/XN/KH/246340611/prod-20250521-1351035309321248398424527-jpg-125x125.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2025/5/512720175/JQ/UN/XQ/246340611/nukkad-shops-aspire-125x125.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2025/5/512726968/LN/FI/WT/246340611/nukkad-shop-elite-a-125x125.jpg'
    ],
    videos: [
      'https://img.youtube.com/vi/MvTHH-A_Krk/hqdefault.jpg'
    ]
  },  {
    id: '3',
    name: 'Nukkad Shop Elite A',
    description: 'Premium billing solution with 14" capacitive touch LCD. Top-tier performance with advanced chipset for enterprise-level businesses.',
    price: 57200,
    originalPrice: 62000,
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/512726513/YN/PL/KE/246340611/nukkad-shop-elite-a-500x500.jpeg',
    category: 'POS Systems',
    itemCode: 'NUKKAD-ELITE-003',
    deliveryTime: '3-5 business days',
    brand: 'Nukkad Shop',
    model: 'Elite A',    featured: true,
    specs: [
      'Model: Elite-A',
      'Chipset: RK 3399',
      'Processor: 1.8 GHz Dual Cortex - A72 + 1.4 Quad Cortex-A53',
      'ROM: 16GB',
      'Display: 14" Capacitive Touch LCD',
      'Resolution: 1366 x 768',
      'Warranty: 1 YEAR',
      'Easy & Simple invoicing',
      'Inventory Management',
      'Customer Engagement',
      'Reporting / Operations',
      'Sales reports',
      'Dynamic, Static UPI integration'
    ],
    inStock: true,
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2025/5/512726513/YN/PL/KE/246340611/nukkad-shop-elite-a-500x500.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2025/5/512726968/LN/FI/WT/246340611/nukkad-shop-elite-a-125x125.jpg',
      'https://5.imimg.com/data5/SELLER/PDFImage/2025/5/512716476/HV/GE/LU/246340611/nukkad-shop-elite-a-125x125.png',
      'https://5.imimg.com/data5/SELLER/PDFImage/2025/5/512716426/GF/BF/MH/246340611/nukkad-shop-elite-a-125x125.png'
    ],
    videos: [
      'https://img.youtube.com/vi/MvTHH-A_Krk/hqdefault.jpg'
    ]
  }
];

export const contactInfo: ContactInfo = {
  phone: '+919234567890',
  email: 'irfan@sagaciousglobal.com',
  address: 'Ward No-45, First Floor, C/O Mrs. Neshat Parveen, Jainul Lodge, Near Jain Mandir, Doranda, Dr Khalid Clinic, Ranchi-834002, Jharkhand, India',
  workingHours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM'
};

export const companyInfo = {
  name: 'Sagacious Global Services',
  description: 'Your trusted partner for premium billing solutions and POS systems. Complete inventory management with expert support.',
  whatsappNumber: '+919234567890',
  socialMedia: {
    facebook: 'https://facebook.com/sagaciousglobal',
    twitter: 'https://twitter.com/sagaciousglobal',
    instagram: 'https://instagram.com/sagaciousglobal'
  }
};
