import { useEffect } from 'react';
import { useAppDispatch } from 'appHooks';
import { addDestinations } from './destinations-slice';
import { normalizeData } from 'utils/normalizeData';
import data from '../../mock/data.json';

export const useFetchDestinations = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const slugifiedDestinations = normalizeData(data.destinations);
    dispatch(addDestinations(slugifiedDestinations));
  }, [dispatch]);
};
