import { useEffect } from 'react';
import { useAppDispatch } from 'appHooks';
import { addCrew } from './crew-slice';
import { normalizeData } from 'utils/normalizeData';
import data from '../../mock/data.json';

export const useFetchCrew = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const normalizedCrew = normalizeData(data.crew);
    dispatch(addCrew(normalizedCrew));
  }, [dispatch]);
};
