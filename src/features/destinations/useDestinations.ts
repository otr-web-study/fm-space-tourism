import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'appHooks';
import { selectDestinationIds, selectDestinationById } from './destinations-selectors';
import { RootState } from 'store';
import { EntityId } from '@reduxjs/toolkit';

export const useDestinations = () => {
  const { slug } = useParams();
  const ids = useAppSelector(selectDestinationIds);
  const [id, setId] = useState<EntityId>('');

  useEffect(() => {
    setId(slug || (ids.length ? ids[0] : ''));
  }, [slug, ids]);

  const destination = useAppSelector((state: RootState) => selectDestinationById(state, id));

  return { ids, destination, slug: id };
};
