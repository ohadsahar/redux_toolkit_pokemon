import { API_URL } from '@/config/Config';
import { FavoritePokemonsStorageKey } from '@/config/ConstKeys';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonProps } from 'models/PokemonProps';
import { LocalStorageService } from 'services/LocalStorage.service';

export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', async () => {
  const favoritePokemons = LocalStorageService.getNameByKey(FavoritePokemonsStorageKey);
  let result = await axios.get(`${API_URL}/pokemon?offset=0&limit=151"`);
  const pokemons = result.data.results;
  const finalResult = pokemons.map(async (pokemon: PokemonProps) => {
    result = (await axios.get(pokemon.url)).data;
    return { pokemon, ...result };
  });
  return Promise.all(finalResult).then((data) => {
    const pokemonsFields = data.map((pokemon: any) => {
      const index = favoritePokemons?.findIndex((currentPokemon: PokemonProps) => currentPokemon.name.includes(pokemon.name));
      return {
        name: pokemon.name,
        base_experience: pokemon.base_experience,
        pokemon: pokemon.pokemon,
        sprites: pokemon.sprites,
        stats: pokemon.stats,
        types: pokemon.types,
        abilities: pokemon.abilities,
        like: index >= 0 ? true : false,
      };
    });
    return pokemonsFields;
  });
});

export const fetchSinglePokemon = createAsyncThunk('pokemons/fetchSinglePokemons', async (name: string) => {
  const result = await axios.get(`${API_URL}/pokemon/${name}`);
  return result.data;
});

export const favoritePokemonFunc = (pokemons: PokemonProps[], stateFavoritePokemons: PokemonProps[], name: string) => {
  const favoritePokemons = LocalStorageService.getNameByKey(FavoritePokemonsStorageKey) ?? [];
  const favoritePokemonIndex = favoritePokemons?.findIndex((currentPokemon: PokemonProps) => currentPokemon.name === name);
  const index = pokemons?.findIndex((pokemon: PokemonProps) => pokemon.name === name);

  if (favoritePokemonIndex < 0) {
    pokemons[index].like = true;
    stateFavoritePokemons = [...stateFavoritePokemons, pokemons[index]];
  } else {
    const favoriteIndex = stateFavoritePokemons?.findIndex((pokemon: PokemonProps) => pokemon.name === name);
    pokemons[index].like = false;
    stateFavoritePokemons.splice(favoriteIndex, 1);
  }
  LocalStorageService.setByKeyName(FavoritePokemonsStorageKey, stateFavoritePokemons);
  return { pokemons, stateFavoritePokemons };
};
