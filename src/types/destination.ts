import { ItemPrototype } from './item-prototype';

export interface Destination extends ItemPrototype {
  description: string;
  distance: string;
  travel: string;
}

export interface LocalDestination extends Destination {
  slug: string;
}
