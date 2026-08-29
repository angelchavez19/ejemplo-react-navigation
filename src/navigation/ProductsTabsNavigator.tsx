import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductsTabParamList } from '../types/navigation';
import { AllProductsScreen } from '../screens/AllProductsScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { OffersScreen } from '../screens/OffersScreen';
import { Icon } from '../components/Icon';

const Tab = createBottomTabNavigator<ProductsTabParamList>();

/**
 * PRODUCTS TABS NAVIGATOR:
 * Pestañas inferiores dentro de la sección "Productos":
 * [1] Todos
 * [2] Favoritos
 * [3] Ofertas
 */
export const ProductsTabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="AllProductsTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#e2e8f0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="AllProductsTab"
        component={AllProductsScreen}
        options={{
          tabBarLabel: 'Todos',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'grid' : 'grid-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              size={22}
              color={focused ? '#ec4899' : color}
            />
          ),
          tabBarActiveTintColor: '#ec4899',
        }}
      />
      <Tab.Screen
        name="OffersTab"
        component={OffersScreen}
        options={{
          tabBarLabel: 'Ofertas',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'flame' : 'flame-outline'}
              size={22}
              color={focused ? '#f59e0b' : color}
            />
          ),
          tabBarActiveTintColor: '#f59e0b',
        }}
      />
    </Tab.Navigator>
  );
};
