import { usePokemons } from 'hooks/usePokemons';
import { PokemonProps } from 'models/PokemonProps';
import { LayoutWrapper } from '@/core/components/Layout/Styled';
import Pokemon from '@/core/components/Pokemon/Pokemon';
import {
  PokemonListWrapper,
  PokemonWrapper,
} from '@/core/components/PokemonList/Styled';
import Tabs from '@/core/components/Tabs/Tabs';

const PokemonFavoriteList = () => {
  const { favoritesPokemons, handleSelectedPokemon, handleFavoritePokemon } =
    usePokemons();

  return (
    <>
      <Tabs />
      <LayoutWrapper>
        <PokemonListWrapper>
          {favoritesPokemons?.map((pokemon: PokemonProps, index: number) => (
            <PokemonWrapper key={index}>
              <Pokemon
                {...pokemon}
                onPress={handleSelectedPokemon}
                onPressFavorite={handleFavoritePokemon}
              />
            </PokemonWrapper>
          ))}
        </PokemonListWrapper>
      </LayoutWrapper>
    </>
  );
};

export default PokemonFavoriteList;
