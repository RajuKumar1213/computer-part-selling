export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image?: string;
  category: string;
  specs: string[];
  inStock: boolean;
  featured?: boolean;
  images: string[];
  videos?: string[];
  itemCode?: string;
  deliveryTime?: string;
  brand?: string;
  model?: string;
  detailedSpecs?: DetailedSpecification[];
  features?: Feature[];
}

export interface DetailedSpecification {
  label: string;
  value: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}
