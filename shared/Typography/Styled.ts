import styled from 'styled-components';

interface TypographyProps {
  textAlign?: string;
  color?: string;
}

export const HintText = styled.p<TypographyProps>`
  font-size: 18px;
  color: ${(props: TypographyProps) => props.color ?? 'white'};
  text-align: ${(props: TypographyProps) => props.textAlign ?? 'left'};
  font-weight: 400;
`;

export const RegularText = styled.p<TypographyProps>`
  letter-spacing: 8px;
  font-size: 24px;
  color: ${(props: TypographyProps) => props.color ?? 'white'};
  font-weight: 500;
  text-align: ${(props: TypographyProps) => props.textAlign ?? 'left'};
`;
