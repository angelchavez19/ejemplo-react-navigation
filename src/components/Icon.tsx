import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type IconName =
  | 'home-outline'
  | 'home'
  | 'bag-handle-outline'
  | 'bag-handle'
  | 'receipt-outline'
  | 'receipt'
  | 'person-outline'
  | 'person'
  | 'grid-outline'
  | 'grid'
  | 'heart-outline'
  | 'heart'
  | 'flame-outline'
  | 'flame'
  | 'pricetag-outline'
  | 'pricetags-outline'
  | 'phone-portrait-outline'
  | 'laptop-outline'
  | 'headset-outline'
  | 'watch-outline'
  | 'cube-outline'
  | 'search-outline'
  | 'menu-outline'
  | 'arrow-back-outline'
  | 'chevron-forward-outline'
  | 'star'
  | 'checkmark-circle-outline'
  | 'cart-outline'
  | 'cart'
  | 'location-outline'
  | 'card-outline'
  | 'notifications-outline';

interface IconProps {
  name: IconName | string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 22,
  color = '#0f172a',
}) => {
  try {
    return <Ionicons name={name} size={size} color={color} />;
  } catch {
    return (
      <View
        style={{
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: size * 0.7, color }}>●</Text>
      </View>
    );
  }
};
