import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sagacious Global Services - Advanced POS Solutions for Modern Retail",
  description: "Transform your retail business with our comprehensive Nukkad Shop POS systems. Complete billing solutions, inventory management, UPI integration, and expert support. Trusted by retailers across India.",
  keywords: "POS systems, point of sale, retail POS, Nukkad Shop, billing software, inventory management, UPI payments, retail solutions, POS hardware, business automation",
  authors: [{ name: "Sagacious Global Services" }],
  creator: "Sagacious Global Services",
  publisher: "Sagacious Global Services",
  metadataBase: new URL('https://sagaciousglobal.com'),
  openGraph: {
    title: "Sagacious Global Services - Advanced POS Solutions",
    description: "Transform your retail business with our comprehensive Nukkad Shop POS systems. Complete solutions for modern retailers with expert support.",
    url: "https://sagaciousglobal.com",
    siteName: "Sagacious Global Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sagacious Global Services - Advanced POS Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagacious Global Services - Advanced POS Solutions",
    description: "Transform your retail business with our comprehensive Nukkad Shop POS systems and expert support.",
    images: ["/og-image.jpg"],
    creator: "@sagaciousglobal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme and Viewport */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Additional Meta */}
        <meta name="application-name" content="Sagacious Global Services" />
        <meta name="apple-mobile-web-app-title" content="SGS" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
