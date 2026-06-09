import { images } from './images';

export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  priceLabel?: string;
  image: string;
  inquirySubject: string;
};

export type CuisineItem = {
  name: string;
  description: string;
  icon: 'north' | 'south' | 'gujarati' | 'jain' | 'continental' | 'live';
};

export const servicesPage = {
  hero: {
    eyebrow: 'What We Do',
    title: 'Complete Event & Catering Solutions',
    description:
      'From multi-cuisine pure vegetarian feasts to full-scale event production — weddings, corporate events, celebrity appearances, and every celebration in between.',
  },
  categories: [
    {
      id: 'catering',
      title: 'Luxury Catering',
      description: 'Multi-cuisine pure vegetarian menus crafted for discerning palates.',
    },
    {
      id: 'events',
      title: 'Event Management',
      description: 'End-to-end planning, décor, coordination & on-site execution.',
    },
    {
      id: 'celebrations',
      title: 'Celebrations',
      description: 'Weddings, birthdays, anniversaries, housewarmings & social galas.',
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Conferences, product launches, award nights & executive dining.',
    },
  ] as const,
  cuisines: [
    { name: 'North Indian', description: 'Rich gravies, tandoor specials & royal thali spreads', icon: 'north' },
    { name: 'South Indian', description: 'Dosas, idlis, uttapam & authentic filter coffee stations', icon: 'south' },
    { name: 'Gujarati & Rajasthani', description: 'Traditional farsan, dhokla & festive thali experiences', icon: 'gujarati' },
    { name: 'Jain & Satvik', description: 'Strict no onion-garlic menus with uncompromising flavour', icon: 'jain' },
    { name: 'Continental & Fusion', description: 'Global vegetarian cuisine with modern presentation', icon: 'continental' },
    { name: 'Live Stations', description: 'Chaat, pasta, tandoor, chaat & interactive cooking counters', icon: 'live' },
  ] satisfies CuisineItem[],
  packages: [
    {
      title: 'The Culinary Masterpiece',
      description: 'Our flagship catering experience for weddings and grand celebrations.',
      priceLabel: 'From ₹850 / Plate',
      image: images.buffetStall,
      inquirySubject: 'Culinary Masterpiece Package Inquiry',
      features: [
        'Bespoke Pure Vegetarian & Jain Menus',
        'Interactive Live Cooking Stations',
        'Artisan Dessert & Beverage Installations',
        'Premium Silver Service Personnel',
      ],
    },
    {
      title: 'Corporate & Gala Execution',
      description: 'Full-scale production for corporate events and formal galas.',
      priceLabel: 'Custom Quoted',
      image: images.corporateEvent,
      inquirySubject: 'Corporate & Gala Package Inquiry',
      features: [
        'High-Tea & Formal Banquet Catering',
        'Complete Venue Layout & Stage Design',
        'AV, Lighting & Technical Vendor Management',
        'Dedicated On-Site Event Directors',
      ],
    },
    {
      title: 'Intimate Elite Gatherings',
      description: 'Curated experiences for private estates and exclusive celebrations.',
      priceLabel: 'From ₹600 / Plate',
      image: images.stall,
      inquirySubject: 'Intimate Gathering Package Inquiry',
      features: [
        'Curated Multi-Course Tasting Menus',
        'Elegant Table Scaping & Floral Design',
        'Post-Event Breakdown & Logistics',
        'Scalable for Private Estates (Min 50 Guests)',
      ],
    },
  ] satisfies ServiceItem[],
  eventTypes: [
    {
      title: 'Weddings & Receptions',
      description: 'Multi-day ceremonies, sangeet, reception & guest hospitality.',
      features: ['Mandap décor coordination', 'Guest meal planning', 'Live counters & dessert bars'],
      image: images.weddingSetup,
      inquirySubject: 'Wedding Event Inquiry',
    },
    {
      title: 'Birthdays & Anniversaries',
      description: 'Themed celebrations with custom menus and elegant setups.',
      features: ['Theme-based décor', 'Custom cake & dessert tables', 'Entertainment coordination'],
      image: images.birthdaySetup,
      inquirySubject: 'Birthday / Anniversary Inquiry',
    },
    {
      title: 'Corporate & Product Launches',
      description: 'Professional events that reflect your brand with precision.',
      features: ['Stage & branding setup', 'Executive dining', 'Registration & guest flow management'],
      image: images.conference,
      inquirySubject: 'Corporate Event Inquiry',
    },
    {
      title: 'Celebrity & Artist Appearances',
      description: 'Celebrity invitations, artist bookings & VIP guest management.',
      features: ['Celebrity coordination', 'Backstage & green room setup', 'Security & protocol management'],
      image: images.stageEvent,
      inquirySubject: 'Celebrity Appearance Inquiry',
    },
  ] satisfies (ServiceItem & { image: string })[],
} as const;
