import { PokemonProps } from './PokemonProps';

export interface InitialState {
  initialPokemons: PokemonProps[];
  pokemons: PokemonProps[];
  favoritePokemons: PokemonProps[];
  singlePokemon: PokemonProps;
  loading: boolean;
  error: string;
}
