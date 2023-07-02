import { Destination, LocalDestination } from 'types/destination';
import { Crew, LocalCrew } from 'types/crew';
import { Technology, LocalTechnology } from 'types/technology';

function normalizeData(data: Technology[]): LocalTechnology[];
function normalizeData(data: Crew[]): LocalCrew[];
function normalizeData(data: Destination[]): LocalDestination[];
function normalizeData(data: any[]): any[] {
  return data.map((item) => {
    return {
      ...item,
      slug: item.name.toLowerCase().replace(/\W+/, '-'),
      images: Object.fromEntries(
        Object.entries(item.images).map(([key, value]) => [
          key,
          (value as string).replace(/^./, ''),
        ]),
      ),
    };
  });
}

export { normalizeData };
