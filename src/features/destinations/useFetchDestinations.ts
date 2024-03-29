import { useEffect } from 'react';
import { useAppDispatch } from 'appHooks';
import { addDestinations } from './destinations-slice';
import { normalizeData } from 'utils/normalizeData';
import data from '../../mock/data.json';

export const useFetchDestinations = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const normalizedDestinations = normalizeData(data.destinations);
    dispatch(addDestinations(normalizedDestinations));
  }, [dispatch]);
};
