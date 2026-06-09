import { images } from './images';

export const homeContent = {
  hero: {
    eyebrow: 'Premium Catering & Events',
    businessName: 'Ankit Caterers & Event Management',
    headline: 'Where Every Celebration Becomes a Masterpiece',
    headlineAccent: 'Every Celebration',
    subheadline:
      'Luxury pure vegetarian catering and end-to-end event management for weddings, corporate galas, and elite gatherings across Thane & Mumbai.',
    image: images.heroEvent,
    imageAlt: 'Luxury event setup with elegant table scaping',
    primaryCta: { label: 'Plan Your Event', href: '/contact' },
    secondaryCta: { label: 'Explore Services', href: '/services' },
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
      'Ankit Caterers & Event Management began as a boutique pure vegetarian catering service and has grown into one of Thane and Mumbai\'s most trusted luxury event agencies.',
      'From intimate birthday celebrations to grand wedding receptions and corporate galas — we bring culinary excellence, flawless execution, and white-glove hospitality to every occasion.',
    ],
    image: images.kitchenTeam,
    imageAlt: 'Our culinary team preparing an elegant spread',
  },
  highlights: [
    {
      title: 'Our Services',
      description: 'Catering, event management, celebrity appearances & more.',
      href: '/services',
      image: images.buffetStall,
    },
    {
      title: 'Our Menu',
      description: 'Multi-cuisine pure vegetarian selections for every occasion.',
      href: '/menu',
      image: images.foodStall,
    },
    {
      title: 'Event Gallery',
      description: 'Weddings, birthdays, corporate events & catering showcases.',
      href: '/gallery',
      image: images.fruitStall,
    },
  ],
} as const;
