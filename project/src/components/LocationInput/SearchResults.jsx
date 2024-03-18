import React from 'react';

const SearchResults = ({ results, onPlaceSelect }) => {
  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.name} onClick={() => onPlaceSelect(result)}>
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
