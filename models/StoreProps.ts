import { PokemonProps } from './PokemonProps';

export interface InitialState {
  initialPokemons: PokemonProps[];
  pokemons: PokemonProps[];
  favoritePokemons: any[];
  singlePokemon: any;
  loading: boolean;
  error: any;
}

export const initialState: InitialState = {
  initialPokemons: [],
  pokemons: [],
  favoritePokemons: [],
  singlePokemon: {},
  loading: false,
  error: null,
};
