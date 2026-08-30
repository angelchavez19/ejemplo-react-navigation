import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../types/navigation';
import { EventsStackNavigator } from './EventsStackNavigator';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { MyTicketsScreen } from '../screens/MyTicketsScreen';
import { Icon } from '../components/Icon';

const Tab = createBottomTabNavigator<MainTabParamList>();

const EventsTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="calendar-search" color={color} size={size} />
);

const FavoritesTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="heart-outline" color={color} size={size} />
);

const MyTicketsTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="ticket-account" color={color} size={size} />
);

export const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="EventsTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6C5CE7',
        tabBarInactiveTintColor: '#A0A0B2',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#EBEFF5',
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="EventsTab"
        component={EventsStackNavigator}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: EventsTabIcon,
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: FavoritesTabIcon,
        }}
      />
      <Tab.Screen
        name="MyTicketsTab"
        component={MyTicketsScreen}
        options={{
          tabBarLabel: 'Mis Entradas',
          tabBarIcon: MyTicketsTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};
