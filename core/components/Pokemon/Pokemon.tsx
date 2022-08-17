import { TextType } from '@/config/TextType';
import Typography from '@/shared/Typography/Typography';
import { PokemonSprites } from 'models/PokemonProps';
import { PokemonActionsAndTextWrapper, PokemonImage, PokemonItemWrapper } from './Styled';
import { FaHeart } from 'react-icons/fa';

interface PokemonItemProps {
  name: string;
  like?: boolean;
  sprites: PokemonSprites;
  onPress: (name: string) => void;
  onPressFavorite: (name: string, imageUrl: string) => void;
}

const Pokemon = ({ name, like, sprites, onPress, onPressFavorite }: PokemonItemProps) => {
  return (
    <PokemonItemWrapper>
      <PokemonImage alt="pokemon" src={sprites?.back_default} onClick={() => onPress(name)} />
      <PokemonActionsAndTextWrapper>
        <Typography text={name} type={TextType.HINT} textAlign="center" />
        <FaHeart fontSize={'24px'} color={like ? 'red' : 'white'} onClick={() => onPressFavorite(name, sprites?.back_default)} />
      </PokemonActionsAndTextWrapper>
    </PokemonItemWrapper>
  );
};

export default Pokemon;
