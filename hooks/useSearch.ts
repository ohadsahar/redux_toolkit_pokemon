import { useCallback, useRef } from 'react';
import { searchPokemons } from 'redux/features/pokemonSlice';
import { useAppDispatch } from 'redux/store';

export const useSearch = () => {
  const dispatch = useAppDispatch();

  const onChangePokemonSearch = useCallback(
    (value: string) => {
      dispatch(searchPokemons(value));
    },
    [dispatch]
  );

  return { onChangePokemonSearch };
};
