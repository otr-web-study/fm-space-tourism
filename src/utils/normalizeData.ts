import { Destination, LocalDestination } from 'types/destination';
import { ItemImages } from 'types/item-prototype';

export const normalizeData = (data: Destination[]): LocalDestination[] => {
  return data.map((item) => {
    return {
      ...item,
      slug: item.name.toLowerCase().replace(/\W+/, '-'),
      images: Object.fromEntries(
        Object.entries(item.images).map(([key, value]) => [key, value.replace(/^./, '')]),
      ) as ItemImages,
    };
  });
};
