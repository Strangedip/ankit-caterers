import type { ImageMetadata } from 'astro';
import buffetStall from '../assets/buffet-stall.jpg';
import cutleryStall from '../assets/cutlery-stall.jpg';
import foodStall from '../assets/food-stall.jpg';
import foodCounter from '../assets/counter.png';
import fruitStall from '../assets/fruit-stall.jpg';
import fruitStall1 from '../assets/fruit-stall1.jpg';
import stall from '../assets/stall.jpg';
import boards from '../assets/boards.jpg';
import boardSign from '../assets/board.png';
import decorAsset from '../assets/decor-asset.jpeg';
import weddingHall from '../assets/wedding-hall.jpg';
import weddingSetup from '../assets/wedding-setup.jpg';
import birthdaySetup from '../assets/birthday-setup.jpg';
import conference from '../assets/conference.jpg';
import stageEvent from '../assets/stage-event.jpg';
import foodItem from '../assets/dishes/north-indian.jpg';

export type SiteImage = ImageMetadata;

export const images = {
  buffetStall,
  cutleryStall,
  foodStall,
  foodCounter,
  fruitStall,
  fruitStall1,
  stall,
  boards,
  boardSign,
  decorAsset,
  weddingHall,
  weddingSetup,
  birthdaySetup,
  conference,
  stageEvent,
  foodItem,
} as const satisfies Record<string, SiteImage>;
