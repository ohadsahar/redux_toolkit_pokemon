import styled from 'styled-components';

export const PokemonItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5vw;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
`;

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const PokemonActionsAndTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
