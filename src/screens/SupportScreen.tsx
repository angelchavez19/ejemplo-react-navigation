import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../types/navigation';
import { Icon } from '../components/Icon';

type Props = DrawerScreenProps<RootDrawerParamList, 'Support'>;

export const SupportScreen: React.FC<Props> = ({ navigation }) => {
  const faqs = [
    {
      q: '¿Cómo recibo mis entradas?',
      a: 'Una vez confirmada la reserva, tus entradas aparecerán instantáneamente en la sección "Mis Entradas" con su código QR.',
    },
    {
      q: '¿Puedo solicitar reembolso?',
      a: 'Los reembolsos se procesan hasta 48 horas antes del inicio del evento desde la sección de soporte.',
    },
    {
      q: '¿Qué hago si no llega mi código QR?',
      a: 'Puedes presionar el botón "Soporte en Vivo" para que un agente revise la transacción de inmediato.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.iconButton}
        >
          <Icon name="menu" size={24} color="#1E1E2C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ayuda y Soporte</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Contact Hero Banner */}
        <View style={styles.heroCard}>
          <Icon name="help-circle-outline" size={48} color="#FFFFFF" />
          <Text style={styles.heroTitle}>¿En qué te podemos ayudar?</Text>
          <Text style={styles.heroSubtitle}>
            Estamos disponibles 24/7 para asistirte con tus entradas.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>💬 Chat en Vivo</Text>
          </TouchableOpacity>
        </View>

        {/* FAQs */}
        <Text style={styles.sectionTitle}>PREGUNTAS FRECUENTES</Text>
        {faqs.map((faq, idx) => (
          <View key={idx} style={styles.faqCard}>
            <Text style={styles.faqQuestion}>{faq.q}</Text>
            <Text style={styles.faqAnswer}>{faq.a}</Text>
          </View>
        ))}
      </ScrollView>
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
  headerPlaceholder: {
    width: 38,
  },
  content: {
    padding: 16,
  },
  heroCard: {
    backgroundColor: '#6C5CE7',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 13,
    color: '#E0DFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  contactButtonText: {
    color: '#6C5CE7',
    fontWeight: '700',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#B2BEC3',
    letterSpacing: 1,
    marginBottom: 12,
    marginLeft: 4,
  },
  faqCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 6,
  },
  faqAnswer: {
    fontSize: 13,
    color: '#636E72',
    lineHeight: 18,
  },
});
