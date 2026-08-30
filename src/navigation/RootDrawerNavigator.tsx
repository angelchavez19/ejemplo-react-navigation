import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types/navigation';
import { MainTabNavigator } from './MainTabNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { SupportScreen } from '../screens/SupportScreen';
import { CustomDrawerContent } from '../components/CustomDrawer';
import { Icon } from '../components/Icon';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const renderCustomDrawer = (props: DrawerContentComponentProps) => (
  <CustomDrawerContent {...props} />
);

const MainTabsDrawerIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="ticket-confirmation-outline" color={color} size={size} />
);

const SettingsDrawerIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="cog-outline" color={color} size={size} />
);

const SupportDrawerIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="help-circle-outline" color={color} size={size} />
);

export const RootDrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      drawerContent={renderCustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#A29BFE',
        drawerInactiveTintColor: '#A0A0B2',
        drawerActiveBackgroundColor: '#2A2A3D',
        drawerStyle: {
          width: 280,
          backgroundColor: '#1E1E2C',
        },
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{
          drawerLabel: 'Inicio / Eventos',
          drawerIcon: MainTabsDrawerIcon,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerLabel: 'Ajustes',
          drawerIcon: SettingsDrawerIcon,
        }}
      />
      <Drawer.Screen
        name="Support"
        component={SupportScreen}
        options={{
          drawerLabel: 'Ayuda y Soporte',
          drawerIcon: SupportDrawerIcon,
        }}
      />
    </Drawer.Navigator>
  );
};

export default RootDrawerNavigator;
