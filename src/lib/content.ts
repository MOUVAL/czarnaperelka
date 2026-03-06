import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, Category, Product } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'src/content');

// Blog Posts
export function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(contentDirectory, 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        slug: file.replace('.md', ''),
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        content,
        date: data.date || new Date().toISOString(),
        author: data.author,
        category: data.category || 'aktualnosci',
        image: data.image,
        featured: data.featured || false,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Categories
export function getCategories(): Category[] {
  const categoriesPath = path.join(contentDirectory, 'categories.json');
  
  if (!fs.existsSync(categoriesPath)) {
    return getDefaultCategories();
  }
  
  const fileContent = fs.readFileSync(categoriesPath, 'utf8');
  return JSON.parse(fileContent);
}

function getDefaultCategories(): Category[] {
  return [
    {
      id: 'meble',
      name: 'Meble',
      description: 'Antyczne meble z różnych epok',
      image: '/placeholder-furniture.jpg',
      subcategories: ['Stoły', 'Krzesła', 'Szafy', 'Komody', 'Łóżka'],
    },
    {
      id: 'porcelana',
      name: 'Porcelana',
      description: 'Porcelana i ceramika artystyczna',
      image: '/placeholder-porcelain.jpg',
      subcategories: ['Wazy', 'Serwisy', 'Figurki', 'Talerze'],
    },
    {
      id: 'srebra',
      name: 'Srebra',
      description: 'Srebra i wyroby z metali szlachetnych',
      image: '/placeholder-silver.jpg',
      subcategories: ['Zastawy', 'Biżuteria', 'Świeczniki', 'Puchary'],
    },
    {
      id: 'obrazy',
      name: 'Obrazy',
      description: 'Malarstwo i grafika',
      image: '/placeholder-paintings.jpg',
      subcategories: ['Olejne', 'Akwarele', 'Grafiki', 'Ikony'],
    },
    {
      id: 'zegary',
      name: 'Zegary',
      description: 'Antyczne zegary i czasomierze',
      image: '/placeholder-clocks.jpg',
      subcategories: ['Zegary ścienne', 'Zegary kominkowe', 'Zegarki'],
    },
    {
      id: 'inne',
      name: 'Inne',
      description: 'Różne przedmioty kolekcjonerskie',
      image: '/placeholder-other.jpg',
      subcategories: ['Lustra', 'Dywany', 'Książki', 'Mapy'],
    },
  ];
}

// Products (placeholder for now - can be extended to use a CMS or database)
export function getProducts(): Product[] {
  const productsPath = path.join(contentDirectory, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return [];
  }
  
  const fileContent = fs.readFileSync(productsPath, 'utf8');
  return JSON.parse(fileContent);
}

export function getProductsByCategory(category: string): Product[] {
  const products = getProducts();
  return products.filter(product => product.category === category);
}

export function getProduct(id: string): Product | null {
  const products = getProducts();
  return products.find(product => product.id === id) || null;
}
