import { images, type SiteImage } from './images';

export type GalleryMedia = {
  src: SiteImage;
  alt: string;
};

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
    image: images.decorAsset,
    imageAlt: 'Elegant wedding décor and catering setup',
  },
  sections: [
    {
      id: 'weddings',
      title: 'Weddings',
      description: 'Grand receptions, mandap setups, and multi-day wedding hospitality.',
      items: [
        { src: images.decorAsset, alt: 'Elegant wedding décor and table setup' },
        { src: images.boards, alt: 'Branded welcome board at celebration' },
        { src: images.buffetStall, alt: 'Grand wedding reception buffet' },
        { src: images.weddingHall, alt: 'Elegant wedding dining setup' },
      ],
    },
    {
      id: 'birthdays',
      title: 'Birthdays & Celebrations',
      description: 'Themed birthday parties, anniversaries, and milestone celebrations.',
      items: [
        { src: images.boardSign, alt: 'Custom event signage and branding' },
        { src: images.stall, alt: 'Celebration food stall setup' },
        { src: images.birthdaySetup, alt: 'Birthday celebration setup' },
        { src: images.fruitStall1, alt: 'Fresh fruit stall at a birthday celebration' },
      ],
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Galas, conferences, product launches, and executive dining.',
      items: [
        { src: images.buffetStall, alt: 'Professional vegetarian buffet line' },
        { src: images.foodCounter, alt: 'Corporate event food station' },
        { src: images.conference, alt: 'Conference event setup' },
      ],
    },
    {
      id: 'catering',
      title: 'Catering Showcases',
      description: 'Buffet installations, live stations, chaat counters, and pure vegetarian food presentations.',
      items: [
        { src: images.cutleryStall, alt: 'Cutlery and chaat counter stall' },
        { src: images.foodStall, alt: 'Live vegetarian food station' },
        { src: images.fruitStall, alt: 'Fresh fruit and dessert display' },
        { src: images.fruitStall1, alt: 'Fruit stall presentation' },
      ],
    },
  ] satisfies GallerySection[],
} as const;
