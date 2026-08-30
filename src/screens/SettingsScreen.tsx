import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types/navigation';
import { Icon } from '../components/Icon';

type Props = DrawerScreenProps<RootDrawerParamList, 'Settings'>;

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.iconButton}
        >
          <Icon name="menu" size={24} color="#1E1E2C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ajustes y Configuración</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionHeader}>PREFERENCIAS</Text>

        <View style={styles.settingRow}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Notificaciones Push</Text>
            <Text style={styles.settingSubtitle}>
              Recibe alertas de tus eventos próximos y ofertas
            </Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: '#6C5CE7' }}
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Modo Oscuro</Text>
            <Text style={styles.settingSubtitle}>
              Cambiar interfaz a tonos oscuros
            </Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#767577', true: '#6C5CE7' }}
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Ubicación GPS</Text>
            <Text style={styles.settingSubtitle}>
              Mostrar eventos cercanos según tu posición
            </Text>
          </View>
          <Switch
            value={locationServices}
            onValueChange={setLocationServices}
            trackColor={{ false: '#767577', true: '#6C5CE7' }}
          />
        </View>

        <Text style={styles.sectionHeader}>CUENTA</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Editar Perfil</Text>
          <Icon name="chevron-left" size={20} color="#B2BEC3" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Cambiar Contraseña</Text>
          <Icon name="chevron-left" size={20} color="#B2BEC3" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Privacidad y Términos</Text>
          <Icon name="chevron-left" size={20} color="#B2BEC3" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEFF5',
  },
  iconButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#F0F3F8',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E1E2C',
  },
  headerPlaceholder: {
    width: 38,
  },
  content: {
    padding: 16,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#B2BEC3',
    letterSpacing: 1,
    marginTop: 16,
    marginBottom: 10,
    marginLeft: 4,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  settingTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2D3436',
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#636E72',
    marginTop: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2D3436',
  },
});
