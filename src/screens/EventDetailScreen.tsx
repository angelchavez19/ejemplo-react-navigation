import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { EventDetailProps } from '../types/navigation';
import { Icon } from '../components/Icon';

export const EventDetailScreen: React.FC<EventDetailProps> = ({
  route,
  navigation,
}) => {
  const { event } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Image & Custom Back Header */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: event.image }} style={styles.image} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-left" size={24} color="#1E1E2C" />
          </TouchableOpacity>
        </View>

        {/* Content Details */}
        <View style={styles.content}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{event.category}</Text>
          </View>

          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.organizerText}>Organizado por {event.organizer}</Text>

          {/* Quick Info Grid */}
          <View style={styles.infoBox}>
            <View style={styles.infoRow}>
              <Icon name="calendar-search" size={20} color="#6C5CE7" />
              <View>
                <Text style={styles.infoTitle}>Fecha y Hora</Text>
                <Text style={styles.infoValue}>
                  {event.date} • {event.time}
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Icon name="map-marker-outline" size={20} color="#E63946" />
              <View>
                <Text style={styles.infoTitle}>Ubicación</Text>
                <Text style={styles.infoValue}>{event.location}</Text>
              </View>
            </View>
          </View>

          {/* Description Section */}
          <Text style={styles.sectionTitle}>Acerca del Evento</Text>
          <Text style={styles.description}>{event.description}</Text>
        </View>
      </ScrollView>

      {/* Bottom Bar Action */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.priceLabel}>Precio por entrada</Text>
          <Text style={styles.priceValue}>S/ {event.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate('Booking', { event })}
        >
          <Text style={styles.bookButtonText}>Reservar Entrada</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    position: 'relative',
    height: 240,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(108, 92, 231, 0.12)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6C5CE7',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2D3436',
    marginBottom: 4,
  },
  organizerText: {
    fontSize: 13,
    color: '#B2BEC3',
    fontWeight: '500',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#F7F9FC',
    borderRadius: 14,
    padding: 16,
    gap: 14,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoTitle: {
    fontSize: 12,
    color: '#636E72',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3436',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#636E72',
    marginBottom: 30,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F3F8',
  },
  priceLabel: {
    fontSize: 12,
    color: '#B2BEC3',
  },
  priceValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2D3436',
  },
  bookButton: {
    backgroundColor: '#6C5CE7',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
