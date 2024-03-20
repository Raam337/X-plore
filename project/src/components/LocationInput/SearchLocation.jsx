import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const SearchLocation = ({changeLocation, masterState}) => {
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearchResults = (results) => {
      setSearchResults(results);
    };
  
    const handlePlaceSelect = (place) => {
      console.log('Selected place:', place);
    };
  
    return (
      <div className>
        <SearchInput onSearch={handleSearchResults} onPlaceSelect={handlePlaceSelect} setPostLocation={changeLocation} masterState={masterState}/>
        <SearchResults results={searchResults} onPlaceSelect={handlePlaceSelect} />
      </div>
    );
  };

export default SearchLocation;