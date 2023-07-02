import { useEffect } from 'react';
import { useAppDispatch } from 'appHooks';
import { addTechnologies } from './technologies-slice';
import { normalizeData } from 'utils/normalizeData';
import data from '../../mock/data.json';

export const useFetchTechnologies = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const normalizedTechnologies = normalizeData(data.technology);
    dispatch(addTechnologies(normalizedTechnologies));
  }, [dispatch]);
};
