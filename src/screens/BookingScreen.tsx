import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { BookingProps } from '../types/navigation';
import { Icon } from '../components/Icon';

export const BookingScreen: React.FC<BookingProps> = ({
  route,
  navigation,
}) => {
  const { event } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = event.price * quantity;
  const serviceFee = 10.0;
  const total = subtotal + serviceFee;

  const handleIncrement = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleConfirmBooking = () => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <SafeAreaView style={styles.successContainer}>
        <View style={styles.successCard}>
          <Icon name="check-circle" size={64} color="#00B894" />
          <Text style={styles.successTitle}>¡Reserva Confirmada!</Text>
          <Text style={styles.successSubtitle}>
            Has reservado {quantity} entrada(s) para {event.title}.
          </Text>

          <View style={styles.ticketCodeBox}>
            <Text style={styles.ticketCodeLabel}>CÓDIGO DE ENTRADA</Text>
            <Text style={styles.ticketCodeValue}>EVT-2026-X99</Text>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              // Navegar al tab de mis entradas dentro del BottomTab
              navigation.navigate('MainTabs', {
                screen: 'MyTicketsTab',
              });
            }}
          >
            <Text style={styles.primaryButtonText}>Ver Mis Entradas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {
              // Regresar a la lista de eventos
              navigation.navigate('EventList');
            }}
          >
            <Text style={styles.secondaryButtonText}>Volver a Explorar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="chevron-left" size={24} color="#1E1E2C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirmar Reserva</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <View style={styles.content}>
        {/* Event Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventDate}>📅 {event.date}</Text>
          <Text style={styles.eventLocation}>📍 {event.location}</Text>
        </View>

        {/* Quantity Selector */}
        <View style={styles.quantityCard}>
          <Text style={styles.quantityLabel}>Cantidad de Entradas</Text>
          <View style={styles.counterRow}>
            <TouchableOpacity
              style={[styles.counterButton, quantity === 1 && styles.counterButtonDisabled]}
              onPress={handleDecrement}
              disabled={quantity === 1}
            >
              <Text style={styles.counterText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityNumber}>{quantity}</Text>

            <TouchableOpacity
              style={styles.counterButton}
              onPress={handleIncrement}
            >
              <Text style={styles.counterText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment Breakdown */}
        <View style={styles.breakdownCard}>
          <Text style={styles.breakdownTitle}>Resumen del Pago</Text>

          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownText}>
              Entrada x{quantity} (S/ {event.price.toFixed(2)})
            </Text>
            <Text style={styles.breakdownValue}>S/ {subtotal.toFixed(2)}</Text>
          </View>

          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownText}>Costo de servicio</Text>
            <Text style={styles.breakdownValue}>S/ {serviceFee.toFixed(2)}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.breakdownRow}>
            <Text style={styles.totalLabel}>Total a Pagar</Text>
            <Text style={styles.totalValue}>S/ {total.toFixed(2)}</Text>
          </View>
        </View>
      </View>

      {/* Action Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmBooking}
        >
          <Text style={styles.confirmButtonText}>
            Confirmar Reserva (S/ {total.toFixed(2)})
          </Text>
        </TouchableOpacity>
      </View>
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
  backButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#F0F3F8',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E1E2C',
  },
  headerPlaceholder: {
    width: 38,
  },
  content: {
    padding: 20,
    flex: 1,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 6,
  },
  eventDate: {
    fontSize: 13,
    color: '#636E72',
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 13,
    color: '#636E72',
  },
  quantityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2D3436',
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  counterButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#6C5CE7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonDisabled: {
    backgroundColor: '#B2BEC3',
  },
  counterText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D3436',
    minWidth: 20,
    textAlign: 'center',
  },
  breakdownCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
  },
  breakdownTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 12,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  breakdownText: {
    fontSize: 13,
    color: '#636E72',
  },
  breakdownValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2D3436',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F3F8',
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2D3436',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#6C5CE7',
  },
  footer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F3F8',
  },
  confirmButton: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  // Success state styles
  successContainer: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    justifyContent: 'center',
    padding: 20,
  },
  successCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 4,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2D3436',
    marginTop: 16,
    marginBottom: 6,
  },
  successSubtitle: {
    fontSize: 14,
    color: '#636E72',
    textAlign: 'center',
    marginBottom: 20,
  },
  ticketCodeBox: {
    backgroundColor: 'rgba(0, 184, 148, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
  },
  ticketCodeLabel: {
    fontSize: 11,
    color: '#00B894',
    fontWeight: '700',
    letterSpacing: 1,
  },
  ticketCodeValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#00B894',
    marginTop: 2,
  },
  primaryButton: {
    backgroundColor: '#6C5CE7',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryButton: {
    paddingVertical: 12,
  },
  secondaryButtonText: {
    color: '#636E72',
    fontSize: 14,
    fontWeight: '600',
  },
});
