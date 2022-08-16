import { TextType } from '@/config/TextType';
import Typography from '@/shared/Typography/Typography';
import { useTabs } from 'hooks/useTabs';
import React from 'react';
import { TabsWrapper, TabWrapper } from './Styled';
import { FaHeart, FaFilter } from 'react-icons/fa';

const Tabs = () => {
  const { handleNavigate, getCurrentSelectedTab } = useTabs();
  console.log(getCurrentSelectedTab());

  return (
    <TabsWrapper>
      <TabWrapper
        onClick={() => handleNavigate('/')}
        selected={getCurrentSelectedTab() !== '/favorites'}
      >
        <FaFilter color="black" fontSize={'24px'} />
        <Typography text={'All'} type={TextType.HINT} color="black" />
      </TabWrapper>
      <TabWrapper
        onClick={() => handleNavigate('/favorites')}
        selected={getCurrentSelectedTab() === '/favorites'}
      >
        <FaHeart color="red" fontSize={'24px'} />
        <Typography text={'Favorites'} type={TextType.HINT} color="black" />
      </TabWrapper>
    </TabsWrapper>
  );
};

export default Tabs;
