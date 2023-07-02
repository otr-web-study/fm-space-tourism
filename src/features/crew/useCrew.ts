import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'appHooks';
import { selectCrewIds, selectCrewById } from './crew-selectors';
import { RootState } from 'store';
import { EntityId } from '@reduxjs/toolkit';

export const useCrew = () => {
  const { slug } = useParams();
  const ids = useAppSelector(selectCrewIds);
  const [id, setId] = useState<EntityId>('');

  useEffect(() => {
    setId(slug || (ids.length ? ids[0] : ''));
  }, [slug, ids]);

  const crew = useAppSelector((state: RootState) => selectCrewById(state, id));

  return { ids, crew, slug: id };
};
