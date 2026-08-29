import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsStackParamList } from '../types/navigation';
import { ProductsTabsNavigator } from './ProductsTabsNavigator';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';

const Stack = createNativeStackNavigator<ProductsStackParamList>();

/**
 * PRODUCTS STACK NAVIGATOR:
 * Administra el flujo de navegación de la sección Productos:
 * [1] ProductsTabs (Bottom Tabs: Todos, Favoritos, Ofertas)
 * [2] ProductDetail (Detalle del producto al presionar una tarjeta)
 */
export const ProductsStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductsTabs"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="ProductsTabs"
        component={ProductsTabsNavigator}
        options={{ title: 'Productos' }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Detalle del Producto' }}
      />
    </Stack.Navigator>
  );
};
