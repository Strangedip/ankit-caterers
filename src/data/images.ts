import buffetStall from '../assets/buffet-stall.jpg';
import cutleryStall from '../assets/cutlery-stall.jpg';
import foodStall from '../assets/food-stall.jpg';
import fruitStall from '../assets/fruit-stall.jpg';
import fruitStall1 from '../assets/fruit-stall1.jpg';
import stall from '../assets/stall.jpg';
import boards from '../assets/boards.jpg';
import boardSign from '../assets/board.png';
import decorAsset from '../assets/decor-asset.jpeg';

/** Central image paths — local catering photos first, veg-only stock for fillers. */
export const images = {
  // Your catering & event photos
  buffetStall: buffetStall.src,
  cutleryStall: cutleryStall.src,
  foodStall: foodStall.src,
  fruitStall: fruitStall.src,
  fruitStall1: fruitStall1.src,
  stall: stall.src,
  boards: boards.src,
  boardSign: boardSign.src,
  decorAsset: decorAsset.src,

  // Event setups (no food focus)
  heroEvent:
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&auto=format&fit=crop&q=80',
  kitchenTeam:
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80',
  weddingHall:
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=80',
  weddingSetup:
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80',
  birthdaySetup:
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=80',
  corporateEvent:
    'https://images.unsplash.com/photo-1561715276-a2d087060f1d?w=600&auto=format&fit=crop&q=80',
  conference:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=80',
  stageEvent:
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80',
  intimateGathering:
    'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=80',

  // Pure vegetarian food (stock)
  vegThali:
    'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80',
  vegSaladBowl:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80',
  vegColorfulBowl:
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
  vegIndianSpread:
    'https://images.unsplash.com/photo-1626645731056-063adbfb636?w=800&auto=format&fit=crop&q=80',
  vegPlated:
    'https://images.unsplash.com/photo-1600808662014-d7cf62694fe9?w=800&auto=format&fit=crop&q=80',
  vegDessert:
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
} as const;
