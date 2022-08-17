import { API_URL } from '@/config/Config';
import { FavoritePokemonsStorageKey } from '@/config/ConstKeys';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { FavoritePokemonProps } from 'models/FavoritePokemonProps';
import { PokemonProps } from 'models/PokemonProps';
import { InitialState } from 'models/StoreProps';
import { RootState } from 'redux/store';
import { LocalStorageService } from 'services/LocalStorage.service';

export const initialState: InitialState = {
  initialPokemons: [],
  pokemons: [],
  favoritePokemons: [],
  singlePokemon: { name: '', url: '', sprites: { back_default: '' } },
  loading: false,
  error: '',
};

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async () => {
    const favoritePokemons = LocalStorageService.getNameByKey(
      FavoritePokemonsStorageKey
    );
    let result = await axios.get(`${API_URL}/pokemon?offset=0&limit=151"`);
    const pokemons = result.data.results;
    const finalResult = pokemons.map(async (pokemon: PokemonProps) => {
      result = (await axios.get(pokemon.url)).data;
      return { pokemon, ...result };
    });
    return Promise.all(finalResult).then((data) => {
      const pokemonsFields = data.map((pokemon: any) => {
        const index = favoritePokemons?.findIndex(
          (currentPokemon: PokemonProps) =>
            currentPokemon.name.includes(pokemon.name)
        );
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
  }
);

export const fetchSinglePokemon = createAsyncThunk(
  'pokemons/fetchSinglePokemons',
  async (name: string) => {
    const result = await axios.get(`${API_URL}/pokemon/${name}`);
    return result.data;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    searchPokemons: (state: InitialState, action: PayloadAction<string>) => {
      const filteredPokemons = state.initialPokemons.filter(
        (pokemon: PokemonProps) => pokemon.name.includes(action.payload)
      );
      state.pokemons = filteredPokemons;
    },
    handleFavoritePoke: (
      state: InitialState,
      action: PayloadAction<FavoritePokemonProps>
    ) => {
      const favoritePokemons =
        LocalStorageService.getNameByKey(FavoritePokemonsStorageKey) ?? [];
      const favoritePokemonIndex = favoritePokemons?.findIndex(
        (currentPokemon: PokemonProps) =>
          currentPokemon.name === action.payload.name
      );
      const index = state.pokemons?.findIndex(
        (pokemon: PokemonProps) => pokemon.name === action.payload.name
      );

      if (favoritePokemonIndex < 0) {
        state.pokemons[index].like = true;
        state.favoritePokemons = [
          ...state.favoritePokemons,
          state.pokemons[index],
        ];
      } else {
        const favoriteIndex = state.favoritePokemons?.findIndex(
          (pokemon: PokemonProps) => pokemon.name === action.payload.name
        );
        state.pokemons[index].like = false;
        state.favoritePokemons.splice(favoriteIndex, 1);
      }
      LocalStorageService.setByKeyName(
        FavoritePokemonsStorageKey,
        state.favoritePokemons
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPokemons.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.pokemons = action.payload;
        state.initialPokemons = action.payload;
        state.favoritePokemons =
          LocalStorageService.getNameByKey(FavoritePokemonsStorageKey) ?? [];
      }
    );
    builder.addCase(fetchPokemons.rejected, (state) => {
      state.loading = false;
      state.error = 'Something happend when fetching pokemons';
    });
    builder.addCase(fetchSinglePokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSinglePokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.singlePokemon = action.payload;
    });
    builder.addCase(fetchSinglePokemon.rejected, (state) => {
      state.loading = false;
      state.error = 'Something happend when fetching your pokemon';
    });
  },
});

export const selectAllPokemons = (state: RootState) => state.pokemons.pokemons;
export const selectSinglePokemon = (state: RootState) =>
  state.pokemons.singlePokemon;
export const selectAllFavoritesPokemons = (state: RootState) =>
  state.pokemons.favoritePokemons;

export default pokemonSlice.reducer;
export const { searchPokemons, handleFavoritePoke } = pokemonSlice.actions;
