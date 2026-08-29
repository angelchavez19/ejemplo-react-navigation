import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types/navigation';
import { Icon } from '../components/Icon';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Pedidos'>;
};

const MOCK_ORDERS = [
  {
    id: 'ORD-9821',
    date: '28 Feb 2026',
    items: 'iPhone 15 Pro Max',
    total: 1199,
    status: 'En camino',
    statusColor: '#3b82f6',
  },
  {
    id: 'ORD-7612',
    date: '15 Feb 2026',
    items: 'Sony WH-1000XM5 + AirPods Pro',
    total: 648,
    status: 'Entregado',
    statusColor: '#10b981',
  },
  {
    id: 'ORD-5401',
    date: '02 Ene 2026',
    items: 'MacBook Air M3',
    total: 1299,
    status: 'Entregado',
    statusColor: '#10b981',
  },
];

export const OrdersScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <View style={[styles.logoBadge, { backgroundColor: '#eff6ff' }]}>
            <Icon name="receipt" size={20} color="#2563eb" />
          </View>
          <Text style={styles.headerTitle}>Mis Pedidos</Text>
        </View>

        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu-outline" size={24} color="#0f172a" />
        </TouchableOpacity>
      </View>

      <View style={styles.teachingBanner}>
        <Text style={styles.teachingTitle}>📂 Pantalla de Drawer (Menú Lateral):</Text>
        <Text style={styles.teachingDesc}>
          Esta sección pertenece al <Text style={styles.bold}>Drawer Navigation</Text>. No interfiere con el historial ni el estado de las pestañas principales (Tabs).
        </Text>
      </View>

      <FlatList
        data={MOCK_ORDERS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <View style={styles.idRow}>
                <Icon name="receipt-outline" size={16} color="#3b82f6" />
                <Text style={styles.orderId}>{item.id}</Text>
              </View>
              <Text style={styles.orderDate}>{item.date}</Text>
            </View>
            <Text style={styles.orderItems}>{item.items}</Text>
            <View style={styles.orderFooter}>
              <View style={styles.statusBox}>
                <Icon
                  name={
                    item.status === 'Entregado'
                      ? 'checkmark-circle-outline'
                      : 'cube-outline'
                  }
                  size={14}
                  color={item.statusColor}
                />
                <Text style={[styles.orderStatus, { color: item.statusColor }]}>
                  {item.status}
                </Text>
              </View>
              <Text style={styles.orderTotal}>${item.total.toLocaleString()}</Text>
            </View>
          </View>
        )}
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
  menuBtn: {
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
  teachingBanner: {
    backgroundColor: '#eff6ff',
    margin: 16,
    padding: 12,
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
    color: '#1e3a8a',
    marginTop: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 16,
    gap: 12,
  },
  orderCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  idRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  orderId: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  orderDate: {
    fontSize: 12,
    color: '#94a3b8',
  },
  orderItems: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 12,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 8,
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  orderStatus: {
    fontSize: 12,
    fontWeight: '700',
  },
  orderTotal: {
    fontSize: 15,
    fontWeight: '800',
    color: '#10b981',
  },
});
