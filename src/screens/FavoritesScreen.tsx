import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions, NavigationProp } from '@react-navigation/native';
import { PRODUCTS, Product } from '../data/products';
import { Icon } from '../components/Icon';
import { ProductsStackParamList } from '../types/navigation';

export const FavoritesScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ProductsStackParamList>>();
  const favoriteProducts = PRODUCTS.filter((item) => item.isFavorite);

  const getProductIcon = (category: string) => {
    switch (category) {
      case 'Smartphones':
        return 'phone-portrait-outline';
      case 'Laptops':
        return 'laptop-outline';
      case 'Audio':
        return 'headset-outline';
      case 'Accesorios':
        return 'watch-outline';
      default:
        return 'cube-outline';
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <View style={[styles.imageContainer, { backgroundColor: item.color + '15' }]}>
        <Icon name={getProductIcon(item.category)} size={38} color={item.color} />
      </View>

      <View style={styles.info}>
        <View style={styles.categoryRow}>
          <Text style={styles.categoryText}>{item.category.toUpperCase()}</Text>
          <Icon name="heart" size={18} color="#ec4899" />
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toLocaleString()}</Text>
      </View>

      <View style={styles.arrowBox}>
        <Icon name="chevron-forward-outline" size={20} color="#94a3b8" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header con icono (izq) y Drawer (der) */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <View style={[styles.logoBadge, { backgroundColor: '#fdf2f8' }]}>
            <Icon name="heart" size={20} color="#ec4899" />
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Mis Favoritos</Text>
            <Text style={styles.headerSubtitle}>
              {favoriteProducts.length} productos guardados
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="menu-outline" size={24} color="#0f172a" />
        </TouchableOpacity>
      </View>

      {/* Banner explicativo */}
      <View style={styles.teachingBanner}>
        <Text style={styles.teachingTitle}>💖 Pestaña de Favoritos (Bottom Tab):</Text>
        <Text style={styles.teachingDesc}>
          Comparte el mismo <Text style={styles.bold}>Stack Navigator</Text> que la pestaña Todos. Tocar un producto favorito también abre su detalle.
        </Text>
      </View>

      <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />
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
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  logoBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    flexShrink: 0,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    marginRight: 8,
  },
  headerTitleContainer: {
    flex: 1,
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
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '800',
  },
  teachingBanner: {
    backgroundColor: '#fdf2f8',
    margin: 16,
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#ec4899',
  },
  teachingTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#be185d',
  },
  teachingDesc: {
    fontSize: 11,
    color: '#9d174d',
    marginTop: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 16,
    gap: 12,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 8,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 2,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: '#10b981',
    marginTop: 2,
  },
  arrowBox: {
    paddingHorizontal: 4,
  },
});
