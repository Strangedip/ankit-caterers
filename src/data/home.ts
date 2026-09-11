import { images } from './images';

export const homeContent = {
  hero: {
    eyebrow: 'Premium Catering & Events',
    businessName: 'Ankit Caterers & Event Management',
    headline: 'Where Every Celebration Becomes a Masterpiece',
    headlineAccent: 'Every Celebration',
    subheadline:
      'Luxury pure vegetarian catering and end-to-end event management for weddings, corporate galas, and elite gatherings across Thane & Mumbai.',
    image: images.buffetStall,
    imageAlt: 'Pure vegetarian buffet setup by Ankit Caterers in Kalyan East',
  },
  stats: [
    { value: '2,500+', label: 'Events Executed' },
    { value: '30+', label: 'Years Experience' },
    { value: '100%', label: 'Pure Vegetarian' },
  ],
  intro: {
    eyebrow: 'Who We Are',
    title: 'Crafting Unforgettable Experiences Since 1995',
    paragraphs: [
      'Ankit Caterers & Event Management is based in Katemanivali, Kalyan East, and has grown into one of Thane and Mumbai\'s most trusted names for pure vegetarian wedding catering and full-scale event management.',
      'From intimate birthdays in Dombivli and Ulhasnagar to grand wedding receptions and corporate galas across Mumbai — we bring culinary excellence, Jain-friendly menus, and white-glove hospitality to every occasion.',
    ],
    image: images.buffetStall,
    imageAlt: 'Live vegetarian food station prepared by our catering team',
  },
  trust: [
    { label: 'Kalyan East HQ', detail: 'Katemanivali, Kalyan' },
    { label: 'Service area', detail: 'Thane · Mumbai · Dombivli' },
    { label: 'Jain & Satvik', detail: 'No onion-garlic menus' },
    { label: 'Since 1995', detail: '30+ years of events' },
  ],
  highlights: [
    {
      title: 'Our Services',
      description: 'Catering, event management, celebrity appearances & more.',
      href: '/services',
      image: images.foodStall,
    },
    {
      title: 'Our Menu',
      description: 'Multi-cuisine pure vegetarian selections for every occasion.',
      href: '/menu',
      image: images.foodItem,
    },
    {
      title: 'Event Gallery',
      description: 'Weddings, birthdays, corporate events & catering showcases.',
      href: '/gallery',
      image: images.fruitStall,
    },
  ],
} as const;
