export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "TechParts Pro",
  "description": "Your trusted partner for premium computer components and gaming hardware.",
  "url": "https://techpartspro.com",
  "logo": "https://techpartspro.com/logo.png",
  "image": "https://techpartspro.com/og-image.jpg",
  "telephone": "+1234567890",
  "email": "info@techparts.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Street",
    "addressLocality": "Silicon Valley",
    "addressRegion": "CA",
    "postalCode": "94088",
    "addressCountry": "US"
  },
  "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  "priceRange": "$50-$2000",
  "paymentAccepted": ["Cash", "Credit Card", "PayPal"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Computer Components",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Graphics Cards",
          "description": "High-performance graphics cards for gaming and professional work"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Processors",
          "description": "Latest Intel and AMD processors for maximum performance"
        }
      },
      {
        "@type": "Product",
        "itemOffered": {
          "@type": "Product",
          "name": "Storage",
          "description": "High-speed SSDs and storage solutions"
        }
      }
    ]
  }
};
