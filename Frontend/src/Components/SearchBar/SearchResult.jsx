// SearchResult.jsx
import React from 'react';
import './Search.css';

const SearchResult = ({ result, searchTerm }) => {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = result.name.split(regex);

  return (
    <div className="search-result">
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </div>
  );
};

export default SearchResult;
