import { FavoritePokemonsStorageKey } from '@/config/ConstKeys';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoritePokemonProps } from 'models/FavoritePokemonProps';
import { PokemonProps } from 'models/PokemonProps';
import { InitialState } from 'models/StoreProps';
import { RootState } from 'redux/store';
import { LocalStorageService } from 'services/LocalStorage.service';
import { fetchPokemons, fetchSinglePokemon } from './pokemonSliceFunctions';
import { favoritePokemonFunc } from './pokemonSliceFunctions';

export const initialState: InitialState = {
  initialPokemons: [],
  pokemons: [],
  favoritePokemons: [],
  singlePokemon: { name: '', url: '', sprites: { back_default: '' } },
  loading: false,
  error: '',
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    searchPokemons: (state: InitialState, action: PayloadAction<string>) => {
      const filteredPokemons = state.initialPokemons.filter((pokemon: PokemonProps) => pokemon.name.includes(action.payload));
      state.pokemons = filteredPokemons;
    },
    handleFavoritePoke: (state: InitialState, action: PayloadAction<FavoritePokemonProps>) => {
      const { pokemons, stateFavoritePokemons } = favoritePokemonFunc(
        state.pokemons,
        state.favoritePokemons,
        action.payload.name
      );
      state.pokemons = pokemons;
      state.favoritePokemons = stateFavoritePokemons;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.pokemons = action.payload;
      state.initialPokemons = action.payload;
      state.favoritePokemons = LocalStorageService.getNameByKey(FavoritePokemonsStorageKey) ?? [];
    });
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
export const selectSinglePokemon = (state: RootState) => state.pokemons.singlePokemon;
export const selectAllFavoritesPokemons = (state: RootState) => state.pokemons.favoritePokemons;
export default pokemonSlice.reducer;
export const { searchPokemons, handleFavoritePoke } = pokemonSlice.actions;
