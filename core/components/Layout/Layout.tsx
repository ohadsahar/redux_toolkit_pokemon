import React from 'react';
import Search from '@/core/components/Search/Search';
import { LayoutWrapper } from './Styled';
import PokemonList from '@/core/components/PokemonList/PokemonList';
import Tabs from '@/core/components/Tabs/Tabs';

const Layout = () => {
  return (
    <>
      <Tabs />
      <LayoutWrapper>
        <Search />
        <PokemonList />
      </LayoutWrapper>
    </>
  );
};

export default Layout;
