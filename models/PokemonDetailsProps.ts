export const types: any = {
  grass: '#537A5A',
  bug: '#F4D06F',
  fire: '#F02D3A',
  water: '#125E8A',
  normal: '#C2B8B2',
};

export interface PokemonStatsArr {
  stats: PokemonStats[];
}

export interface PokemonTypesArr {
  types: PokemonType[];
}

export interface PokemonStats {
  base_stat: number;
  stat: PokemonStat;
}

export interface PokemonStat {
  name: string;
  url: string;
}

export interface PokemonType {
  type: PokemonStat;
}
