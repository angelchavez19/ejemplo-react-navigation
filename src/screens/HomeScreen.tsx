import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types/navigation';
import { Icon } from '../components/Icon';
import { PRODUCTS } from '../data/products';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Inicio'>;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const offersCount = PRODUCTS.filter((p) => p.discount).length;
  const favCount = PRODUCTS.filter((p) => p.isFavorite).length;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.brandContainer}>
          <View style={styles.logoBadge}>
            <Icon name="storefront" size={20} color="#2563eb" />
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>TechStore</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu-outline" size={24} color="#0f172a" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Tarjeta pedagógica de la arquitectura */}
        <View style={styles.architectureCard}>
          <Text style={styles.cardHeader}>📐 Estructura de Navegación Activa</Text>
          <View style={styles.treeItem}>
            <Text style={styles.treeNode}>📂 Drawer (Nivel 1):</Text>
            <Text style={styles.treeDetail}>Inicio, Productos, Pedidos, Perfil</Text>
          </View>
          <View style={styles.treeItem}>
            <Text style={styles.treeNode}>📑 Tabs (Nivel 2 - dentro de Productos):</Text>
            <Text style={styles.treeDetail}>Todos, Favoritos, Ofertas</Text>
          </View>
          <View style={styles.treeItem}>
            <Text style={styles.treeNode}>📚 Stack (Nivel 3):</Text>
            <Text style={styles.treeDetail}>Detalle de Producto al seleccionar un item</Text>
          </View>
        </View>

        {/* Accesos directos a las pestañas de Productos */}
        <Text style={styles.sectionTitle}>Accesos Rápidos a Productos (Tabs)</Text>
        <View style={styles.grid}>
          {/* Card Todos */}
          <TouchableOpacity
            style={[styles.quickCard, { borderColor: '#3b82f6' }]}
            onPress={() => {}
              // navigation.navigate('Productos', {
              //   screen: 'ProductsTabs',
              //   params: { screen: 'AllProductsTab' },
              // })
            }
          >
            <View style={[styles.quickIconCircle, { backgroundColor: '#eff6ff' }]}>
              <Icon name="grid-outline" size={24} color="#3b82f6" />
            </View>
            <Text style={styles.quickTitle}>Todos</Text>
            <Text style={styles.quickCount}>{PRODUCTS.length} productos</Text>
          </TouchableOpacity>

          {/* Card Favoritos */}
          <TouchableOpacity
            style={[styles.quickCard, { borderColor: '#ec4899' }]}
            onPress={() =>{}
              // navigation.navigate('Productos', {
              //   screen: 'ProductsTabs',
              //   params: { screen: 'FavoritesTab' },
              // })
            }
          >
            <View style={[styles.quickIconCircle, { backgroundColor: '#fdf2f8' }]}>
              <Icon name="heart" size={24} color="#ec4899" />
            </View>
            <Text style={styles.quickTitle}>Favoritos</Text>
            <Text style={styles.quickCount}>{favCount} guardados</Text>
          </TouchableOpacity>

          {/* Card Ofertas */}
          <TouchableOpacity
            style={[styles.quickCard, { borderColor: '#f59e0b' }]}
            onPress={() =>{}
              // navigation.navigate('Productos', {
              //   screen: 'ProductsTabs',
              //   params: { screen: 'OffersTab' },
              // })
            }
          >
            <View style={[styles.quickIconCircle, { backgroundColor: '#fffbeb' }]}>
              <Icon name="flame" size={24} color="#f59e0b" />
            </View>
            <Text style={styles.quickTitle}>Ofertas</Text>
            <Text style={styles.quickCount}>{offersCount} en descuento</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  brandContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  logoBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    flexShrink: 0,
  },
  headerTitleContainer: {
    flex: 1,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#64748b',
  },
  badgeBanner: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '800',
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  heroBanner: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
  },
  heroTag: {
    fontSize: 12,
    color: '#38bdf8',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 26,
    marginBottom: 8,
  },
  heroDesc: {
    fontSize: 13,
    color: '#94a3b8',
    lineHeight: 20,
    marginBottom: 16,
  },
  boldWhite: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  heroButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  heroButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  architectureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 8,
  },
  cardHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  treeItem: {
    backgroundColor: '#f8fafc',
    padding: 10,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#3b82f6',
  },
  treeNode: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  treeDetail: {
    fontSize: 12,
    color: '#475569',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  grid: {
    flexDirection: 'row',
    gap: 10,
  },
  quickCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: 'center',
  },
  quickIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  quickCount: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 2,
  },
});
