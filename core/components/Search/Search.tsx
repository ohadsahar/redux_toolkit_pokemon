import { useSearch } from 'hooks/useSearch';
import React from 'react';
import { SearchInput, SearchWrapper } from './Styled';

const Search = () => {
  const { onChangePokemonSearch } = useSearch();
  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search Pokemon by Name"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChangePokemonSearch(event.currentTarget.value.toLowerCase());
        }}
      />
    </SearchWrapper>
  );
};

export default Search;
