
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootDrawerNavigator from './src/navigation/RootDrawerNavigator';

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
