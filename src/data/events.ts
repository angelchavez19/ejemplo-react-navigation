import { EventItem, TicketItem } from '../types/navigation';

export const MOCK_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Rock Fest 2026',
    category: 'Música',
    date: '15 de Octubre, 2026',
    time: '18:00 hrs',
    location: 'Estadio Nacional, Lima',
    price: 180.0,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800',
    description:
      'El festival de rock más grande del año con bandas internacionales estelares, luces de última generación y zonas gastronómicas increíbles.',
    organizer: 'LiveNation Perú',
  },
  {
    id: '2',
    title: 'Tech Summit LATAM',
    category: 'Tecnología',
    date: '22 de Noviembre, 2026',
    time: '09:00 hrs',
    location: 'Centro de Convenciones Jockey',
    price: 250.0,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    description:
      'Conferencia sobre Inteligencia Artificial, React Native, Cloud Architecture y el futuro de las Startups en América Latina.',
    organizer: 'Tech Hub Americas',
  },
  {
    id: '3',
    title: 'Sabor & Tradición: Expo Gourmet',
    category: 'Gastronomía',
    date: '05 de Diciembre, 2026',
    time: '11:30 hrs',
    location: 'Parque de la Exposición',
    price: 65.0,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
    description:
      'Disfruta de las mejores propuestas culinarias de la región, clases magistrales de chefs reconocidos y degustación de vinos y piscos.',
    organizer: 'Asociación Gastronómica',
  },
  {
    id: '4',
    title: 'Noche de Jazz & Cello',
    category: 'Cultura',
    date: '18 de Diciembre, 2026',
    time: '20:30 hrs',
    location: 'Teatro Gran Torre Taller',
    price: 120.0,
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800',
    description:
      'Una velada mágica con el cuarteto de Jazz Contemporáneo en un entorno acústico incomparable.',
    organizer: 'Cultura Libre',
  },
];

export const MOCK_MY_TICKETS: TicketItem[] = [
  {
    id: 't-101',
    eventTitle: 'Tech Summit LATAM',
    date: '22 de Noviembre, 2026',
    location: 'Centro de Convenciones Jockey',
    quantity: 2,
    totalPrice: 500.0,
    purchaseDate: '10 de Agosto, 2026',
    code: 'EVT-998231',
  },
  {
    id: 't-102',
    eventTitle: 'Sabor & Tradición: Expo Gourmet',
    date: '05 de Diciembre, 2026',
    location: 'Parque de la Exposición',
    quantity: 1,
    totalPrice: 65.0,
    purchaseDate: '25 de Agosto, 2026',
    code: 'EVT-441029',
  },
];
