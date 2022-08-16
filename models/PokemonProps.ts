export interface PokemonProps {
  name: string;
  url: string;
  sprites: PokemonSprites;
  like?: boolean;
}

export interface PokemonSprites {
  back_default: string;
}
