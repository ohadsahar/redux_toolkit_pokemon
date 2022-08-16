import { usePokemons } from 'hooks/usePokemons';
import { PokemonProps } from 'models/PokemonProps';
import Pokemon from '@/core/components/Pokemon/Pokemon';
import { PokemonListWrapper, PokemonWrapper } from './Styled';

const PokemonList = () => {
  const { pokemons, handleSelectedPokemon, handleFavoritePokemon } =
    usePokemons();
  return (
    <PokemonListWrapper>
      {pokemons?.map((pokemon: PokemonProps, index: number) => (
        <PokemonWrapper key={index}>
          <Pokemon
            {...pokemon}
            onPress={handleSelectedPokemon}
            onPressFavorite={handleFavoritePokemon}
          />
        </PokemonWrapper>
      ))}
    </PokemonListWrapper>
  );
};

export default PokemonList;
