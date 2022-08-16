import styled from 'styled-components';

interface TabProps {
  selected: boolean;
}

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const TabWrapper = styled.div<TabProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: TabProps) =>
    props.selected ? '#0098ff ' : 'white'};
  width: 50%;
  height: 100%;
  grid-column-gap: 1vw;
  cursor: pointer;
`;
