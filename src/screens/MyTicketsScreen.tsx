import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TicketItem } from '../types/navigation';
import { MOCK_MY_TICKETS } from '../data/events';
import { Icon } from '../components/Icon';

export const MyTicketsScreen: React.FC = () => {
  const renderTicketItem = ({ item }: { item: TicketItem }) => (
    <View style={styles.ticketCard}>
      {/* Top Header of Ticket */}
      <View style={styles.ticketHeader}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>ENTRADA ACTIVA</Text>
        </View>
        <Text style={styles.ticketCode}>{item.code}</Text>
      </View>

      {/* Main Body */}
      <View style={styles.ticketBody}>
        <Text style={styles.eventTitle}>{item.eventTitle}</Text>

        <View style={styles.infoRow}>
          <Icon name="calendar-search" size={16} color="#6C5CE7" />
          <Text style={styles.infoText}>{item.date}</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="map-marker-outline" size={16} color="#E63946" />
          <Text style={styles.infoText}>{item.location}</Text>
        </View>

        {/* Dashed Line Decorator */}
        <View style={styles.dashedDivider} />

        <View style={styles.ticketFooter}>
          <View>
            <Text style={styles.footerLabel}>CANTIDAD</Text>
            <Text style={styles.footerValue}>{item.quantity} Entrada(s)</Text>
          </View>

          <View>
            <Text style={styles.footerLabel}>PAGO TOTAL</Text>
            <Text style={styles.footerValue}>S/ {item.totalPrice.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.qrButton}>
            <Text style={styles.qrButtonText}>Ver QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mis Entradas</Text>
      </View>

      <FlatList
        data={MOCK_MY_TICKETS}
        keyExtractor={(item) => item.id}
        renderItem={renderTicketItem}
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
  ticketCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EBEFF5',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },
  ticketHeader: {
    backgroundColor: '#1E1E2C',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: 'rgba(0, 184, 148, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  statusText: {
    color: '#00B894',
    fontSize: 11,
    fontWeight: '700',
  },
  ticketCode: {
    color: '#A29BFE',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  ticketBody: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    color: '#636E72',
  },
  dashedDivider: {
    height: 1,
    borderWidth: 1,
    borderColor: '#DFE6E9',
    borderStyle: 'dashed',
    marginVertical: 12,
  },
  ticketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLabel: {
    fontSize: 10,
    color: '#B2BEC3',
    fontWeight: '700',
  },
  footerValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2D3436',
    marginTop: 2,
  },
  qrButton: {
    backgroundColor: '#6C5CE7',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  qrButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
