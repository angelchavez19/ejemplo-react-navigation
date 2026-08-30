import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawerNavigator } from './src/navigation/RootDrawerNavigator';

/**
 * EVENTIFY APP ENTRY POINT:
 * Inicializa NavigationContainer y monta la arquitectura anidada:
 * RootDrawerNavigator (Drawer)
 *   ├── MainTabNavigator (Bottom Tabs)
 *   │     ├── EventsStackNavigator (Stack: EventList -> EventDetail -> Booking)
 *   │     ├── FavoritesScreen
 *   │     └── MyTicketsScreen
 *   ├── SettingsScreen (Drawer)
 *   └── SupportScreen (Drawer)
 */
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <RootDrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
