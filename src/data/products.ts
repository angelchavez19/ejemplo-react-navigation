export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isFavorite?: boolean;
  rating: number;
  description: string;
  stock: number;
  color: string;
}

export const CATEGORIES = ['Todos', 'Smartphones', 'Laptops', 'Audio', 'Accesorios'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    category: 'Smartphones',
    price: 1199,
    originalPrice: 1299,
    discount: 10,
    isFavorite: true,
    rating: 4.9,
    description: 'Diseño de titanio aeroespacial, chip A17 Pro, botón de acción personalizable y sistema de cámaras Pro más potente.',
    stock: 12,
    color: '#34495e',
  },
  {
    id: '2',
    name: 'MacBook Air M3',
    category: 'Laptops',
    price: 1299,
    isFavorite: false,
    rating: 4.8,
    description: 'Increíblemente delgada y rápida con el chip M3. Hasta 18 horas de batería y pantalla Liquid Retina de 13.6 pulgadas.',
    stock: 8,
    color: '#2c3e50',
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    category: 'Audio',
    price: 339,
    originalPrice: 399,
    discount: 15,
    isFavorite: true,
    rating: 4.7,
    description: 'Cancelación de ruido líder en la industria con dos procesadores y 8 micrófonos. Calidad de audio excepcional.',
    stock: 20,
    color: '#7f8c8d',
  },
  {
    id: '4',
    name: 'Apple Watch Ultra 2',
    category: 'Accesorios',
    price: 799,
    isFavorite: true,
    rating: 4.9,
    description: 'El reloj de deportes y aventura definitivo. Caja de titanio de 49 mm, GPS de doble frecuencia y batería de hasta 72 horas.',
    stock: 15,
    color: '#e67e22',
  },
  {
    id: '5',
    name: 'iPad Pro 11" M4',
    category: 'Laptops',
    price: 899,
    originalPrice: 999,
    discount: 10,
    isFavorite: false,
    rating: 4.9,
    description: 'Rendimiento escandaloso con el chip M4, pantalla Ultra Retina XDR con tecnología OLED en tándem.',
    stock: 7,
    color: '#8e44ad',
  },
  {
    id: '6',
    name: 'AirPods Pro 2da Gen',
    category: 'Audio',
    price: 199,
    originalPrice: 249,
    discount: 20,
    isFavorite: true,
    rating: 4.8,
    description: 'Hasta 2x más cancelación activa de ruido, audio adaptativo y audio espacial personalizado.',
    stock: 25,
    color: '#16a085',
  },
];
