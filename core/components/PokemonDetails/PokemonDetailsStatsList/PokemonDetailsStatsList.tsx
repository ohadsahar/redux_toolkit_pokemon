import { TextType } from '@/config/TextType';
import Typography from '@/shared/Typography/Typography';
import { PokemonStats, PokemonStatsArr } from 'models/PokemonDetailsProps';
import React from 'react';
import { PokemonStatsList } from '../Styled';

const PokemonDetailsStatsList = ({ stats }: PokemonStatsArr) => {
  return (
    <>
      <Typography type={TextType.REGULAR} text="Stats" />
      <PokemonStatsList>
        {stats?.map((pokemonStats: PokemonStats, index: number) => (
          <Typography
            key={index}
            textAlign="left"
            type={TextType.HINT}
            text={`${pokemonStats.base_stat} ${pokemonStats.stat.name}`}
          />
        ))}
      </PokemonStatsList>
    </>
  );
};

export default PokemonDetailsStatsList;
