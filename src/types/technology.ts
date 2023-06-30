import { ItemPrototype } from './item-prototype';

interface TechnologyImages {
  portrait: string;
  landscape: string;
}

export interface Technology extends Omit<ItemPrototype, 'images'> {
  images: TechnologyImages;
  description: string;
}

export interface LocalTechnology extends Technology {
  slug: string;
}
