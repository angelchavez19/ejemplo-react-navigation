import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions, NavigationProp } from '@react-navigation/native';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { Icon } from '../components/Icon';
import { ProductsStackParamList } from '../types/navigation';

export const AllProductsScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const navigation = useNavigation<NavigationProp<ProductsStackParamList>>();

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <Icon name={getProductIcon(item.category)} size={44} color={item.color} />
        {item.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountBadgeText}>-{item.discount}%</Text>
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.categoryBadge}>{item.category.toUpperCase()}</Text>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>${item.price.toLocaleString()}</Text>
        <View style={styles.ratingRow}>
          <View style={styles.ratingBox}>
            <Icon name="star" size={12} color="#eab308" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <Text style={styles.stockText}>{item.stock} disp.</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header con icono (izq) y Drawer (der) */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <View style={styles.logoBadge}>
            <Icon name="grid" size={20} color="#2563eb" />
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Todos los Productos</Text>
            <Text style={styles.headerSubtitle}>Catálogo completo</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="menu-outline" size={24} color="#0f172a" />
        </TouchableOpacity>
      </View>

      {/* Buscador */}
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={18} color="#94a3b8" />
        <TextInput
          placeholder="Buscar producto..."
          placeholderTextColor="#94a3b8"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Categorías */}
      <View style={styles.categoriesWrapper}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(cat) => cat}
          contentContainerStyle={styles.categoriesList}
          renderItem={({ item }) => {
            const isSelected = item === selectedCategory;
            return (
              <TouchableOpacity
                style={[
                  styles.categoryPill,
                  isSelected && styles.categoryPillActive,
                ]}
                onPress={() => setSelectedCategory(item)}
              >
                <Text
                  style={[
                    styles.categoryPillText,
                    isSelected && styles.categoryPillTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Explicación de navegación para la clase */}
      <View style={styles.teachingBanner}>
        <Text style={styles.teachingTitle}>⚡ Tab 'Todos' ➔ Stack 'Detalle':</Text>
        <Text style={styles.teachingDesc}>
          Al tocar un producto, se navega al <Text style={styles.bold}>Stack ProductDetail</Text> enviando el objeto como parámetro.
        </Text>
      </View>

      {/* Lista de productos */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.productsList}
        showsVerticalScrollIndicator={false}
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
    backgroundColor: '#eff6ff',
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
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    height: 42,
    color: '#0f172a',
  },
  categoriesWrapper: {
    marginVertical: 10,
  },
  categoriesList: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  categoryPillActive: {
    backgroundColor: '#0f172a',
    borderColor: '#0f172a',
  },
  categoryPillText: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: '600',
  },
  categoryPillTextActive: {
    color: '#ffffff',
  },
  teachingBanner: {
    backgroundColor: '#eff6ff',
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  teachingTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  teachingDesc: {
    fontSize: 11,
    color: '#334155',
    marginTop: 2,
  },
  bold: {
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  productsList: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 4,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  imageContainer: {
    height: 95,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#ef4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  infoContainer: {
    gap: 2,
  },
  categoryBadge: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#10b981',
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 11,
    color: '#0f172a',
    fontWeight: '600',
  },
  stockText: {
    fontSize: 10,
    color: '#94a3b8',
  },
});
