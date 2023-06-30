import { useEffect } from 'react';
import { useAppDispatch } from 'appHooks';
import { addDestinations } from './destinations-slice';
import { slugifyData } from 'utils/slugifyData';
import data from '../../mock/data.json';

export const useFetchDestinations = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const slugifiedDestinations = slugifyData(data.destinations);
    dispatch(addDestinations(slugifiedDestinations));
  }, [dispatch]);
};
