import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EventListProps, EventItem } from '../types/navigation';
import { MOCK_EVENTS } from '../data/events';
import { Icon } from '../components/Icon';

const CATEGORIES = ['Todos', 'Música', 'Tecnología', 'Gastronomía', 'Cultura'];

export const EventListScreen: React.FC<EventListProps> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredEvents =
    selectedCategory === 'Todos'
      ? MOCK_EVENTS
      : MOCK_EVENTS.filter((e) => e.category === selectedCategory);

  const renderEventItem = ({ item }: { item: EventItem }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate('EventDetail', { event: item })}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>

        <View style={styles.infoRow}>
          <Icon name="calendar-search" size={16} color="#6C5CE7" />
          <Text style={styles.infoText}>{item.date}</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="map-marker-outline" size={16} color="#E63946" />
          <Text style={styles.infoText} numberOfLines={1}>
            {item.location}
          </Text>
        </View>

        <View style={styles.cardFooter}>
          <Text style={styles.priceText}>S/ {item.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => navigation.navigate('EventDetail', { event: item })}
          >
            <Text style={styles.detailButtonText}>Ver Detalle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.iconButton}
        >
          <Icon name="menu" size={26} color="#1E1E2C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explorar Eventos</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Category Pills */}
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryPill,
                  isSelected && styles.categoryPillSelected,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryPillText,
                    isSelected && styles.categoryPillTextSelected,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Events List */}
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
  placeholder: {
    width: 38,
  },
  categoriesContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  categoryPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F0F3F8',
    marginRight: 8,
  },
  categoryPillSelected: {
    backgroundColor: '#6C5CE7',
  },
  categoryPillText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#636E72',
  },
  categoryPillTextSelected: {
    color: '#FFFFFF',
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardContent: {
    padding: 16,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(108, 92, 231, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6C5CE7',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 13,
    color: '#636E72',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F3F8',
  },
  priceText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2D3436',
  },
  detailButton: {
    backgroundColor: '#6C5CE7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  detailButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
});
