import styled from 'styled-components';

interface PokemonDeatilsProps {
  bgColor: string;
}

export const PokemonDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props: PokemonDeatilsProps) => props.bgColor ?? 'grey'};
  padding: 1vh;
  position: relative;
`;

export const PokemonDetailsNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackActionWrapper = styled.div`
  cursor: pointer;
  > p {
    color: black;
  }
`;

export const PokemonCardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PokemonCardImage = styled.img`
  width: 350px;
  height: 350px;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const PokemonDetailsData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  grid-row-gap: 2vh;
`;

export const PokemonStatsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vw 0vw 0vw 3vw;
  grid-row-gap: 1vh;
`;
