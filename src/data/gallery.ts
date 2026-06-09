import { images } from './images';

export type GalleryMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster?: string; alt: string };

export type GallerySection = {
  id: string;
  title: string;
  description: string;
  items: GalleryMedia[];
};

export const galleryPage = {
  hero: {
    eyebrow: 'Portfolio',
    title: 'Event Gallery',
    description:
      'Browse our work across weddings, birthdays, corporate events, and catering showcases — organised by celebration type.',
  },
  sections: [
    {
      id: 'weddings',
      title: 'Weddings',
      description: 'Grand receptions, mandap setups, and multi-day wedding hospitality.',
      items: [
        { type: 'image', src: images.decorAsset, alt: 'Elegant wedding décor and table setup' },
        { type: 'image', src: images.boards, alt: 'Branded welcome board at celebration' },
        { type: 'image', src: images.heroEvent, alt: 'Grand wedding reception hall' },
        { type: 'image', src: images.weddingHall, alt: 'Elegant wedding dining setup' },
      ],
    },
    {
      id: 'birthdays',
      title: 'Birthdays & Celebrations',
      description: 'Themed birthday parties, anniversaries, and milestone celebrations.',
      items: [
        { type: 'image', src: images.boardSign, alt: 'Custom event signage and branding' },
        { type: 'image', src: images.stall, alt: 'Celebration food stall setup' },
        { type: 'image', src: images.birthdaySetup, alt: 'Birthday celebration setup' },
        { type: 'image', src: images.vegDessert, alt: 'Vegetarian dessert display' },
      ],
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Galas, conferences, product launches, and executive dining.',
      items: [
        { type: 'image', src: images.buffetStall, alt: 'Professional vegetarian buffet line' },
        { type: 'image', src: images.corporateEvent, alt: 'Corporate gala evening' },
        { type: 'image', src: images.conference, alt: 'Conference event setup' },
      ],
    },
    {
      id: 'catering',
      title: 'Catering Showcases',
      description: 'Buffet installations, live stations, chaat counters, and food presentations.',
      items: [
        { type: 'image', src: images.cutleryStall, alt: 'Cutlery and chaat counter stall' },
        { type: 'image', src: images.foodStall, alt: 'Live vegetarian food station' },
        { type: 'image', src: images.fruitStall, alt: 'Fresh fruit and dessert display' },
        { type: 'image', src: images.fruitStall1, alt: 'Fruit stall presentation' },
        { type: 'image', src: images.vegThali, alt: 'Pure vegetarian thali spread' },
        { type: 'image', src: images.vegIndianSpread, alt: 'Indian vegetarian catering spread' },
      ],
    },
  ] satisfies GallerySection[],
} as const;

// To add a photo: add to src/assets/, import in images.ts, then reference here.
