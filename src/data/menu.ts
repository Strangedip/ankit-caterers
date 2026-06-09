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

export const menuPage = {
  hero: {
    eyebrow: 'Our Menu',
    title: 'Curated Culinary Selections',
    description:
      'Explore our multi-cuisine pure vegetarian offerings — from tandoor specials and live counters to Jain-friendly menus and artisan desserts.',
  },
  sections: [
    {
      id: 'starters',
      title: 'Starters & Appetizers',
      description: 'Perfect openings for any celebration.',
      items: [
        { name: 'Paneer Tikka', note: 'Clay oven, house marinade' },
        { name: 'Hara Bhara Kebab' },
        { name: 'Corn & Cheese Balls' },
        { name: 'Vegetable Seekh Kebab' },
        { name: 'Stuffed Mushroom Tikka' },
        { name: 'Tandoori Platter' },
        { name: 'Paneer 65' },
        { name: 'Cheese & Corn Cigar Rolls' },
      ],
    },
    {
      id: 'soups',
      title: 'Soups & Shorbas',
      items: [
        { name: 'Dal Shorba' },
        { name: 'Tom Yum Soup', note: 'Vegetarian' },
        { name: 'Cream of Mushroom' },
        { name: 'Sweet Corn Vegetable Soup' },
      ],
    },
    {
      id: 'main-course',
      title: 'Main Course — Indian',
      description: 'Rich gravies, slow-cooked curries, and regional classics.',
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
      ],
    },
    {
      id: 'continental',
      title: 'Continental & Global',
      items: [
        { name: 'Grilled Vegetable Stack with Pepper Sauce' },
        { name: 'Creamy Alfredo Pasta' },
        { name: 'Exotic Vegetable Risotto' },
        { name: 'Cheese Burst Pizza', note: 'Live station' },
        { name: 'Sizzling Brownie with Ice Cream' },
      ],
    },
    {
      id: 'live-stations',
      title: 'Live Counters',
      description: 'Interactive stations crafted fresh for your guests.',
      items: [
        { name: 'Tandoor Live Counter' },
        { name: 'Chaat & Pani Puri Station' },
        { name: 'Pasta Live Station' },
        { name: 'Indo-Chinese Wok Counter' },
        { name: 'South Indian Dosa Counter' },
        { name: 'Mocktail & Beverage Bar' },
      ],
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        { name: 'Gulab Jamun' },
        { name: 'Rasmalai' },
        { name: 'Chocolate Mousse' },
        { name: 'Tiramisu', note: 'Eggless' },
        { name: 'Seasonal Fruit Platter' },
        { name: 'Ice Cream Assortment' },
      ],
    },
  ] satisfies MenuSection[],
} as const;

// To add a section: copy a block above and add items to the items array.
// To add an item: { name: 'Dish Name', note: 'Optional detail' }
