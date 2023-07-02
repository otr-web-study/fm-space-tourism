import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'appHooks';
import { selectTechnologiesIds, selectTechnologyById } from './technologies-selectores';
import { RootState } from 'store';
import { EntityId } from '@reduxjs/toolkit';

export const useTechnologies = () => {
  const { slug } = useParams();
  const ids = useAppSelector(selectTechnologiesIds);
  const [id, setId] = useState<EntityId>('');

  useEffect(() => {
    setId(slug || (ids.length ? ids[0] : ''));
  }, [slug, ids]);

  const technology = useAppSelector((state: RootState) => selectTechnologyById(state, id));

  return { ids, technology, slug: id };
};
