import { FavoritePokemonProps } from 'models/FavoritePokemonProps';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import {
  handleFavoritePoke,
  selectAllFavoritesPokemons,
  selectAllPokemons,
  selectSinglePokemon,
} from 'redux/features/pokemonSlice';
import { fetchPokemons, fetchSinglePokemon } from 'redux/features/pokemonSliceFunctions';
import { useAppDispatch, useAppSelector } from 'redux/store';

export const usePokemons = () => {
  const router = useRouter();
  const favoritesPokemons = useAppSelector(selectAllFavoritesPokemons);
  const pokemons = useAppSelector(selectAllPokemons);
  const pokemon = useAppSelector(selectSinglePokemon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (router.query.slug) {
      dispatch(fetchSinglePokemon(router.query.slug.toString()));
    } else {
      dispatch(fetchPokemons());
    }
  }, [dispatch, router.query.slug]);

  const handleSelectedPokemon = useCallback(
    (name: string) => {
      dispatch(fetchSinglePokemon(name));
      router.push(`/pokemon/${name}`);
    },
    [router, dispatch]
  );

  const handleFavoritePokemon = useCallback(
    (name: string, imageUrl: string) => {
      const pokemonData: FavoritePokemonProps = { name, imageUrl };
      dispatch(handleFavoritePoke(pokemonData));
    },
    [dispatch]
  );

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return {
    favoritesPokemons,
    pokemons,
    pokemon,
    handleFavoritePokemon,
    handleSelectedPokemon,
    goBack,
  };
};
