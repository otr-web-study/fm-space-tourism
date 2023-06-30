import { useParams } from 'react-router-dom';
import { useAppSelector } from 'appHooks';
import { selectDestinationIds, selectDestinationById } from './destinations-selectors';
import { RootState } from 'store';

export const useDestinations = () => {
  const { slug } = useParams();
  const ids = useAppSelector(selectDestinationIds);

  const id = slug || ids.length ? ids[0] : '';

  const destination = useAppSelector((state: RootState) => selectDestinationById(state, id));

  return { ids, destination };
};
