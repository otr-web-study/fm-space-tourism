import { Destination, LocalDestination } from 'types/destination';

export const slugifyData = (data: Destination[]): LocalDestination[] => {
  return data.map((item) => {
    return {
      ...item,
      slug: item.name.replace(' ', '-'),
    };
  });
};
