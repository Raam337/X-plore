import React, { useState } from 'react';
import './SearchInput.css';

const SearchInput = ({ onSearch, onPlaceSelect, setPostLocation, masterState }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=87616a2428dc4e6a83598a3919868f27&language=en&pretty=1`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      const locations = data.results.map(result => ({
        name: result.formatted,
        latitude: result.geometry.lat,
        longitude: result.geometry.lng,
      }));
      setSearchResults(locations);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handlePlaceSelect = (location) => {
    onPlaceSelect(location);
    setSelectedLocation(location);
    setSearchResults([]);
    setQuery('');
    setPostLocation({...masterState, place:location.name})
  };

  const handleRemoveTag = () => {
    setSelectedLocation(null);
    setPostLocation({...masterState, place:""});
  };

  return (
    <div className="search-input-container">
      <div className="search-input">
        <input
          type="text"
          className="form-control"
          placeholder="Tag a location"
          value={query}
          onChange={handleChange}
          onKeyDown={ (e)=> (e.key === "Enter")?handleSearch():null}
        />
        <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {selectedLocation && (
        <div className="selected-location">
          <span>{selectedLocation.name}</span>
          <button className="btn btn-link" onClick={handleRemoveTag}>Remove</button>
        </div>
      )}
      <div className={`search-results ${searchResults.length > 0 ? 'show' : ''}`}>
        {searchResults.map((result) => (
          <div key={result.id} onClick={() => handlePlaceSelect(result)}>
            {result.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
