import React from 'react';
import './Search.css';

export default function Search({ query, setQuery }) {
  // on change filter array of countries

  return (
    <input
      placeholder="Search for a country here..."
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
}
