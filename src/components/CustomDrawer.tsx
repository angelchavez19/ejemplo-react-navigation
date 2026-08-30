import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Icon } from './Icon';

export const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollContent}>
        {/* User Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>CM</Text>
          </View>
          <Text style={styles.userName}>Carlos Mendoza</Text>
          <Text style={styles.userEmail}>carlos.mendoza@eventify.com</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>⭐ Miembro VIP</Text>
          </View>
        </View>

        {/* Separator */}
        <View style={styles.divider} />

        {/* Default Drawer Navigation Items */}
        <View style={styles.itemListContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Footer / Quick Logout Info */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => props.navigation.navigate('MainTabs')}
        >
          <Icon name="ticket-confirmation-outline" size={20} color="#E63946" />
          <Text style={styles.logoutText}>Eventify App v2.4.0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
  },
  scrollContent: {
    paddingTop: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#2A2A3D',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#6C5CE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#A29BFE',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 2,
  },
  userEmail: {
    color: '#A0A0B2',
    fontSize: 13,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: 'rgba(108, 92, 231, 0.25)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6C5CE7',
  },
  badgeText: {
    color: '#A29BFE',
    fontSize: 12,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#b4b4baff',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  itemListContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#2A2A3D',
    backgroundColor: '#191924',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoutText: {
    color: '#8C8CA1',
    fontSize: 13,
    fontWeight: '500',
  },
});
