import { TextType } from '@/config/TextType';
import React from 'react';
import { HintText, RegularText } from './Styled';

interface TypographyProps {
  text: string;
  type: TextType;
  textAlign?: string;
  color?: string;
}

const Typography = ({ text, type, color, textAlign }: TypographyProps) => {
  return (
    <>
      {type === TextType.HINT && (
        <HintText textAlign={textAlign} color={color}>
          {text}
        </HintText>
      )}
      {type === TextType.REGULAR && (
        <RegularText textAlign={textAlign} color={color}>
          {text}
        </RegularText>
      )}
    </>
  );
};

export default Typography;
