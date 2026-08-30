import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MainTabParamList, EventItem } from '../types/navigation';
import { MOCK_EVENTS } from '../data/events';
import { Icon } from '../components/Icon';

type Props = BottomTabScreenProps<MainTabParamList, 'FavoritesTab'>;

export const FavoritesScreen: React.FC<Props> = ({ navigation }) => {
  // Simular los dos primeros eventos como favoritos
  const favoriteEvents = MOCK_EVENTS.slice(0, 2);

  const renderFavoriteItem = ({ item }: { item: EventItem }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.categoryText}>{item.category}</Text>
          <Icon name="heart" size={20} color="#E63946" />
        </View>

        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDate}>📅 {item.date}</Text>
        <Text style={styles.cardPrice}>S/ {item.price.toFixed(2)}</Text>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            // Navegar al stack de eventos -> Detalle
            navigation.navigate('EventsTab', {
              screen: 'EventDetail',
              params: { event: item },
            });
          }}
        >
          <Text style={styles.actionButtonText}>Ver Evento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mis Favoritos</Text>
      </View>

      <FlatList
        data={favoriteEvents}
        keyExtractor={(item) => item.id}
        renderItem={renderFavoriteItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="heart-outline" size={48} color="#B2BEC3" />
            <Text style={styles.emptyText}>No tienes eventos guardados aún.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEFF5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1E1E2C',
  },
  listContent: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 14,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  cardImage: {
    width: 110,
    height: '100%',
  },
  cardContent: {
    flex: 1,
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 11,
    color: '#6C5CE7',
    fontWeight: '700',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    color: '#636E72',
    marginBottom: 6,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#2D3436',
    marginBottom: 8,
  },
  actionButton: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyText: {
    color: '#636E72',
    fontSize: 14,
    marginTop: 12,
  },
});
