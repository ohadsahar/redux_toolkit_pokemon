import { TextType } from '@/config/TextType';
import { RegularText } from '@/shared/Typography/Styled';
import Typography from '@/shared/Typography/Typography';
import { usePokemons } from 'hooks/usePokemons';
import { types } from 'models/PokemonDetailsProps';
import PokemonDetailsStatsList from '@/core/components/PokemonDetails/PokemonDetailsStatsList/PokemonDetailsStatsList';
import PokemonDetailsTypesList from '@/core/components/PokemonDetails/PokemonDetailsTypesList/PokemonDetailsTypesList';
import {
  GoBackActionWrapper,
  PokemonCardImage,
  PokemonCardImageWrapper,
  PokemonDetailsData,
  PokemonDetailsNavbar,
  PokemonDetailsWrapper,
} from './Styled';

const PokemonDetails = () => {
  const { pokemon, goBack } = usePokemons();
  return (
    pokemon &&
    pokemon.types && (
      <PokemonDetailsWrapper bgColor={types[pokemon.types[0].type.name]}>
        <PokemonDetailsNavbar>
          <RegularText>{pokemon?.name}</RegularText>
          <GoBackActionWrapper onClick={goBack}>
            <RegularText>Go Back</RegularText>
          </GoBackActionWrapper>
        </PokemonDetailsNavbar>
        <PokemonCardImageWrapper>
          <PokemonCardImage src={pokemon.sprites.front_default} />
        </PokemonCardImageWrapper>
        <PokemonDetailsData>
          <Typography type={TextType.REGULAR} text={`Power: ${pokemon?.base_experience}`} />
          <PokemonDetailsStatsList stats={pokemon.stats} />
          <PokemonDetailsTypesList types={pokemon.types} />
        </PokemonDetailsData>
      </PokemonDetailsWrapper>
    )
  );
};

export default PokemonDetails;
