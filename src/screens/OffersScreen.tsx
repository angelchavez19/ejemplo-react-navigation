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

export const OffersScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ProductsStackParamList>>();
  const offerProducts = PRODUCTS.filter((item) => item.discount);

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
        <View style={styles.discountTag}>
          <Text style={styles.discountTagText}>-{item.discount}%</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.categoryText}>{item.category.toUpperCase()}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>${item.price.toLocaleString()}</Text>
          {item.originalPrice && (
            <Text style={styles.originalPrice}>
              ${item.originalPrice.toLocaleString()}
            </Text>
          )}
        </View>
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
          <View style={[styles.logoBadge, { backgroundColor: '#fffbeb' }]}>
            <Icon name="flame" size={20} color="#f59e0b" />
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Ofertas Especiales</Text>
            <Text style={styles.headerSubtitle}>
              {offerProducts.length} promociones activas
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
        <Text style={styles.teachingTitle}>🔥 Pestaña de Ofertas (Bottom Tab):</Text>
        <Text style={styles.teachingDesc}>
          Muestra productos con descuento y permite acceder al <Text style={styles.bold}>Stack ProductDetail</Text> directamente.
        </Text>
      </View>

      <FlatList
        data={offerProducts}
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
    backgroundColor: '#fffbeb',
    margin: 16,
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  teachingTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#b45309',
  },
  teachingDesc: {
    fontSize: 11,
    color: '#92400e',
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
    position: 'relative',
  },
  discountTag: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ef4444',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
  },
  discountTagText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '900',
  },
  info: {
    flex: 1,
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
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 2,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: '#10b981',
  },
  originalPrice: {
    fontSize: 13,
    color: '#94a3b8',
    textDecorationLine: 'line-through',
  },
  arrowBox: {
    paddingHorizontal: 4,
  },
});
