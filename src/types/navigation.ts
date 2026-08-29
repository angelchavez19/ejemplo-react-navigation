import { NavigatorScreenParams } from '@react-navigation/native';
import { Product } from '../data/products';

/**
 * 1. PARÁMETROS DE LAS PESTAÑAS DENTRO DE "PRODUCTOS" (BOTTOM TABS)
 * - Todos: Catálogo completo
 * - Favoritos: Productos marcados como favoritos
 * - Ofertas: Productos con descuento especial
 */
export type ProductsTabParamList = {
  AllProductsTab: undefined;
  FavoritesTab: undefined;
  OffersTab: undefined;
};

/**
 * 2. PARÁMETROS DEL STACK DE "PRODUCTOS" (STACK NAVIGATION)
 * Permite navegar desde las pestañas (Tabs) hacia el detalle del producto
 */
export type ProductsStackParamList = {
  ProductsTabs: NavigatorScreenParams<ProductsTabParamList>;
  ProductDetail: { product: Product };
};

// Alias para compatibilidad
export type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

/**
 * PARÁMETROS DE CARRITO (STACK NAVIGATION EXTRA)
 */
export type CartStackParamList = {
  CartList: undefined;
  Checkout: { total: number; itemCount: number };
};

/**
 * 3. PARÁMETROS DEL MENÚ LATERAL (DRAWER NAVIGATION)
 * Estructura solicitada:
 * - Inicio
 * - Productos (Tabs: Todos, Favoritos, Ofertas + Stack Detalle)
 * - Pedidos
 * - Perfil
 */
export type RootDrawerParamList = {
  Inicio: undefined;
  Productos: NavigatorScreenParams<ProductsStackParamList>;
  Pedidos: undefined;
  Perfil: undefined;
};
