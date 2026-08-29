import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductsStackParamList } from '../types/navigation';
import { Icon } from '../components/Icon';

type Props = NativeStackScreenProps<ProductsStackParamList, 'ProductDetail'>;

export const ProductDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

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

  const handleAddToCart = () => {
    Alert.alert(
      '¡Producto añadido!',
      `Se agregó ${quantity}x ${product.name} al carrito.`,
      [{ text: 'Seguir comprando', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header superior con botón atrás */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" size={22} color="#0f172a" />
          <Text style={styles.backBtnText}>Atrás</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalle del Producto</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Banner de Producto */}
        <View style={[styles.heroImage, { backgroundColor: product.color + '15' }]}>
          <Icon name={getProductIcon(product.category)} size={110} color={product.color} />
        </View>

        <View style={styles.content}>
          {/* Categoría y Stock */}
          <View style={styles.metaRow}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{product.category}</Text>
            </View>
            <View style={styles.stockBadge}>
              <Icon name="checkmark-circle-outline" size={14} color="#10b981" />
              <Text style={styles.stockText}>{product.stock} en stock</Text>
            </View>
          </View>

          {/* Nombre y Precio */}
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>${product.price.toLocaleString()}</Text>
            <View style={styles.ratingBadge}>
              <Icon name="star" size={14} color="#eab308" />
              <Text style={styles.ratingText}>{product.rating} / 5.0</Text>
            </View>
          </View>

          {/* Explicación pedagógica para la clase */}
          <View style={styles.teachingCard}>
            <Text style={styles.teachingTitle}>🎓 Explicación para tus alumnos:</Text>
            <Text style={styles.teachingText}>
              • <Text style={styles.bold}>Paso de parámetros:</Text> Los datos de este producto se recibieron mediante <Text style={styles.code}>route.params.product</Text>.
            </Text>
            <Text style={styles.teachingText}>
              • <Text style={styles.bold}>Historial en Stack:</Text> Al presionar la flecha atrás se ejecuta <Text style={styles.code}>navigation.goBack()</Text> desapilando esta vista.
            </Text>
          </View>

          {/* Descripción */}
          <Text style={styles.sectionHeading}>Descripción del producto</Text>
          <Text style={styles.description}>{product.description}</Text>

          {/* Selector de cantidad */}
          <Text style={styles.sectionHeading}>Cantidad</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <Text style={styles.qtyButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{quantity}</Text>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => setQuantity((q) => Math.min(product.stock, q + 1))}
            >
              <Text style={styles.qtyButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.subtotalText}>
              Subtotal: ${(product.price * quantity).toLocaleString()}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Barra de acción inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" size={18} color="#475569" />
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Icon name="cart-outline" size={20} color="#ffffff" />
          <Text style={styles.addToCartText}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
  },
  backBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  heroImage: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  content: {
    padding: 20,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: '#eff6ff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryText: {
    color: '#3b82f6',
    fontWeight: '700',
    fontSize: 12,
  },
  stockBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  stockText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 26,
    fontWeight: '900',
    color: '#10b981',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#fef3c7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    color: '#b45309',
    fontWeight: 'bold',
    fontSize: 13,
  },
  teachingCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#6366f1',
  },
  teachingTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4338ca',
    marginBottom: 6,
  },
  teachingText: {
    fontSize: 12,
    color: '#334155',
    lineHeight: 18,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: '#0f172a',
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#e2e8f0',
    color: '#d946ef',
    fontWeight: 'bold',
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginTop: 10,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 22,
    marginBottom: 12,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 4,
  },
  qtyButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  qtyValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    minWidth: 20,
    textAlign: 'center',
  },
  subtotalText: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 'auto',
    fontWeight: '600',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    gap: 12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569',
  },
  addToCartButton: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#2563eb',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
  },
  addToCartText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
