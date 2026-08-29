import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Icon } from '../components/Icon';

export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <View style={[styles.logoBadge, { backgroundColor: '#eff6ff' }]}>
            <Icon name="person" size={20} color="#2563eb" />
          </View>
          <Text style={styles.headerTitle}>Mi Perfil</Text>
        </View>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="menu-outline" size={24} color="#0f172a" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarCircle}>
            <Icon name="person" size={44} color="#2563eb" />
          </View>
          <Text style={styles.userName}>Profesor React Native</Text>
          <Text style={styles.userEmail}>profesor@tecnologia.edu.pe</Text>
          <View style={styles.memberBadge}>
            <Icon name="star" size={12} color="#b45309" />
            <Text style={styles.memberText}>Cliente VIP</Text>
          </View>
        </View>

        {/* Explicación Drawer desde Tab */}
        <View style={styles.teachingBanner}>
          <Text style={styles.teachingTitle}>🚀 Conectando Tab con Drawer:</Text>
          <Text style={styles.teachingDesc}>
            Desde cualquier pestaña de los Tabs podemos disparar acciones globales del Drawer con <Text style={styles.bold}>navigation.dispatch(DrawerActions.openDrawer())</Text>.
          </Text>
          <TouchableOpacity
            style={styles.openDrawerBtn}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Icon name="menu-outline" size={18} color="#ffffff" />
            <Text style={styles.openDrawerBtnText}>Abrir Menú Lateral (Drawer)</Text>
          </TouchableOpacity>
        </View>

        {/* Opciones */}
        <View style={styles.menuCard}>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="location-outline" size={20} color="#64748b" />
            <Text style={styles.menuText}>Direcciones guardadas</Text>
            <Icon name="chevron-forward-outline" size={16} color="#94a3b8" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Icon name="card-outline" size={20} color="#64748b" />
            <Text style={styles.menuText}>Métodos de pago</Text>
            <Icon name="chevron-forward-outline" size={16} color="#94a3b8" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Icon name="notifications-outline" size={20} color="#64748b" />
            <Text style={styles.menuText}>Notificaciones de ofertas</Text>
            <Icon name="chevron-forward-outline" size={16} color="#94a3b8" />
          </TouchableOpacity>
        </View>
      </View>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
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
  content: {
    padding: 16,
    gap: 16,
  },
  avatarSection: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  userEmail: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  memberBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#fef3c7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 10,
  },
  memberText: {
    color: '#b45309',
    fontWeight: 'bold',
    fontSize: 12,
  },
  teachingBanner: {
    backgroundColor: '#f5f3ff',
    padding: 14,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#8b5cf6',
  },
  teachingTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6d28d9',
  },
  teachingDesc: {
    fontSize: 12,
    color: '#4c1d95',
    marginTop: 4,
    marginBottom: 10,
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  openDrawerBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#8b5cf6',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  openDrawerBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  menuCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    gap: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#0f172a',
  },
});
