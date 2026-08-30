import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  price: number;
  image: string;
  description: string;
  organizer: string;
}

export interface TicketItem {
  id: string;
  eventTitle: string;
  date: string;
  location: string;
  quantity: number;
  totalPrice: number;
  purchaseDate: string;
  code: string;
}

// 1. Stack Navigator Params (Explorar Eventos)
export type EventsStackParamList = {
  EventList: undefined;
  EventDetail: { event: EventItem };
  Booking: { event: EventItem };
};

// 2. Bottom Tab Navigator Params (Pestañas inferiores)
export type MainTabParamList = {
  EventsTab: NavigatorScreenParams<EventsStackParamList>;
  FavoritesTab: undefined;
  MyTicketsTab: undefined;
};

// 3. Root Drawer Navigator Params (Menú lateral)
export type RootDrawerParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  Settings: undefined;
  Support: undefined;
};

// Types para las Pantallas del Stack
export type EventListProps = CompositeScreenProps<
  NativeStackScreenProps<EventsStackParamList, 'EventList'>,
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;

export type EventDetailProps = CompositeScreenProps<
  NativeStackScreenProps<EventsStackParamList, 'EventDetail'>,
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;

export type BookingProps = CompositeScreenProps<
  NativeStackScreenProps<EventsStackParamList, 'Booking'>,
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;
