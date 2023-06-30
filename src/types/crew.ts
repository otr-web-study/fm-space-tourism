import { ItemPrototype } from './item-prototype';

export interface Crew extends ItemPrototype {
  role: string;
  bio: string;
}

export interface LocalCrew extends Crew {
  slug: '';
}
