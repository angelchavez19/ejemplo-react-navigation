import { RootDrawerParamList } from '../types/navigation';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '../components/Icon';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { OrdersScreen } from '../screens/OrdersScreen';
import { ProductsStackNavigator } from './ProductsStackNavigator';


const Drawer = createDrawerNavigator<RootDrawerParamList>();

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <View style={styles.logoCircle}>
          <Icon name="storefront" size={28} color="#2563eb" />
        </View>
        <Text style={styles.drawerTitle}>TechStore App</Text>
        <Text style={styles.drawerSubtitle}>Drawer ➔ Tabs ➔ Stack</Text>
      </View>

      <View style={styles.itemsContainer}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.drawerFooter}>
        <Text style={styles.footerVersion}>Sesión 10: Navegación en React Native</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export const RootDrawerNavigator: React.FC = () => {
    return <Drawer.Navigator
        initialRouteName="Inicio"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerActiveTintColor: '#2563eb',
        drawerInactiveTintColor: '#475569',
        drawerActiveBackgroundColor: '#eff6ff',
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          marginLeft: -10,
        },
        drawerItemStyle: {
          borderRadius: 10,
          paddingHorizontal: 8,
          marginVertical: 4,
        },
      }}
    >
        <Drawer.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          drawerLabel: 'Inicio',
          drawerIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Productos"
        component={ProductsStackNavigator}
        options={{
          drawerLabel: 'Productos',
          drawerIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'bag-handle' : 'bag-handle-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pedidos"
        component={OrdersScreen}
        options={{
          drawerLabel: 'Pedidos',
          drawerIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'receipt' : 'receipt-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Perfil',
          drawerIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

    </Drawer.Navigator>
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 0,
  },
  drawerHeader: {
    backgroundColor: '#f8fafc',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    marginBottom: 12,
  },
  logoCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  drawerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  drawerSubtitle: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  itemsContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  footerVersion: {
    fontSize: 11,
    color: '#94a3b8',
    textAlign: 'center',
  },
});

export default RootDrawerNavigator;
