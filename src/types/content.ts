// Content types for the website

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author?: string;
  category: 'aktualnosci' | 'artykuly' | 'wydarzenia';
  image?: string;
  featured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  priceText?: string; // "Do ustalenia" etc.
  category: string;
  subcategory?: string;
  images: string[];
  period?: string; // e.g., "XIX wiek"
  dimensions?: string;
  condition?: string;
  sold?: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories?: string[];
}
