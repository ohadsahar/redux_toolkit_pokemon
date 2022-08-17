import { TextType } from '@/config/TextType';
import Typography from '@/shared/Typography/Typography';
import { PokemonType, PokemonTypesArr } from 'models/PokemonDetailsProps';
import { PokemonStatsList } from '../Styled';

const PokemonDetailsTypesList = ({ types }: PokemonTypesArr) => {
  return (
    <>
      <Typography type={TextType.REGULAR} text="Types" />
      <PokemonStatsList>
        {types.map((pokemonType: PokemonType, index: number) => (
          <Typography key={index} textAlign="left" type={TextType.HINT} text={pokemonType.type.name} />
        ))}
      </PokemonStatsList>
    </>
  );
};

export default PokemonDetailsTypesList;
