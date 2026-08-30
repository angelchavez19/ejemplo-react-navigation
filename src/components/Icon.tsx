import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

// Mapeo de respaldo por si el icono vectorial no estuviera instalado en Android/iOS native assets
const ICON_FALLBACKS: Record<string, string> = {
  'ticket-confirmation-outline': '🎫',
  'ticket-account': '🎫',
  'calendar-search': '📅',
  'star-outline': '⭐',
  'star': '⭐',
  'cog-outline': '⚙️',
  'help-circle-outline': '❓',
  'menu': '☰',
  'chevron-left': '‹',
  'magnify': '🔍',
  'map-marker-outline': '📍',
  'clock-outline': '⏰',
  'account-circle': '👤',
  'share-variant': '🔗',
  'heart-outline': '🤍',
  'heart': '❤️',
  'check-circle': '✅',
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#333' }) => {
  try {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  } catch {
    const symbol = ICON_FALLBACKS[name] || '📌';
    return (
      <View style={[styles.container, { width: size, height: size }]}>
        <Text style={{ fontSize: size * 0.7 }}>{symbol}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
