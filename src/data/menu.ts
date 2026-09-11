import { images } from './images';

export type MenuItem = {
  name: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
};

export const menuMoreDefault =
  'And many more — fully customisable for your event';

export const menuPage = {
  hero: {
    eyebrow: 'Our Menu',
    title: 'Curated Culinary Selections',
    description:
      'A curated sample of our pure vegetarian offerings for Kalyan, Thane, and Mumbai — every menu is tailored with many more dishes available on request.',
    image: images.foodStall,
    imageAlt: 'Live vegetarian food station by Ankit Caterers',
  },
  sections: [
    {
      id: 'starters',
      title: 'Starters & Appetizers',
      description: 'Tandoor grills, kebabs, and bite-sized openings — all pure vegetarian.',
      items: [
        { name: 'Paneer Tikka', note: 'Clay oven, house marinade' },
        { name: 'Hara Bhara Kebab' },
        { name: 'Corn & Cheese Balls' },
        { name: 'Vegetable Seekh Kebab' },
        { name: 'Stuffed Mushroom Tikka' },
        { name: 'Tandoori Platter' },
        { name: 'Paneer 65' },
        { name: 'Cheese & Corn Cigar Rolls' },
        { name: 'Veg Spring Rolls' },
        { name: 'Chilli Paneer' },
        { name: 'Dhokla & Farsan Platter' },
      ],
    },
    {
      id: 'soups',
      title: 'Soups & Shorbas',
      description: 'Light, comforting bowls to begin the meal.',
      items: [
        { name: 'Dal Shorba' },
        { name: 'Tom Yum Soup', note: 'Vegetarian' },
        { name: 'Cream of Mushroom' },
        { name: 'Sweet Corn Vegetable Soup' },
        { name: 'Manchow Soup', note: 'Vegetarian' },
        { name: 'Hot & Sour Soup', note: 'Vegetarian' },
      ],
    },
    {
      id: 'main-course',
      title: 'Main Course — Indian',
      description: 'Rich gravies, slow-cooked dals, and regional classics.',
      items: [
        { name: 'Paneer Butter Masala' },
        { name: 'Dal Makhani' },
        { name: 'Kadhai Paneer' },
        { name: 'Malai Kofta' },
        { name: 'Hyderabadi Veg Dum Biryani' },
        { name: 'Mix Vegetable Handi' },
        { name: 'Palak Paneer' },
        { name: 'Shahi Paneer' },
        { name: 'Assorted Indian Breads' },
        { name: 'Chole Bhature' },
        { name: 'Veg Kolhapuri' },
        { name: 'Dum Aloo' },
      ],
    },
    {
      id: 'live-stations',
      title: 'Live Counters — Indian',
      description: 'Interactive Indian stations crafted fresh for your guests.',
      items: [
        { name: 'Tandoor Live Counter' },
        { name: 'Chaat & Pani Puri Station' },
        { name: 'South Indian Dosa Counter' },
        { name: 'Idli & Vada Live Counter' },
        { name: 'Mocktail & Beverage Bar' },
        { name: 'Pasta Live Station' },
      ],
    },
    {
      id: 'indo-chinese',
      title: 'Indo-Chinese',
      description: 'Crowd-pleasing wok favourites — 100% vegetarian.',
      items: [
        { name: 'Indo-Chinese Wok Counter' },
        { name: 'Veg Manchurian' },
        { name: 'Gobi Manchurian' },
        { name: 'Hakka Noodles' },
        { name: 'Veg Chowmein' },
        { name: 'Schezwan Fried Rice' },
        { name: 'Triple Schezwan Rice' },
        { name: 'Chilli Paneer' },
        { name: 'Veg Spring Rolls' },
      ],
    },
    {
      id: 'desserts',
      title: 'Desserts',
      description: 'Indian mithai and continental sweets to finish on a high note.',
      items: [
        { name: 'Gulab Jamun' },
        { name: 'Rasmalai' },
        { name: 'Chocolate Mousse' },
        { name: 'Tiramisu', note: 'Eggless' },
        { name: 'Seasonal Fruit Platter' },
        { name: 'Ice Cream Assortment' },
        { name: 'Kulfi & Falooda' },
        { name: 'Motichoor Ladoo' },
      ],
    },
    {
      id: 'continental',
      title: 'Continental & Global',
      description: 'Global vegetarian plates for diverse palates.',
      items: [
        { name: 'Grilled Vegetable Stack with Pepper Sauce' },
        { name: 'Creamy Alfredo Pasta' },
        { name: 'Exotic Vegetable Risotto' },
        { name: 'Cheese Burst Pizza', note: 'Live station' },
        { name: 'Sizzling Brownie with Ice Cream' },
        { name: 'Garlic Bread & Cheesy Dip' },
        { name: 'Exotic Fruit Trifle' },
      ],
    },
  ] satisfies MenuSection[],
} as const;
