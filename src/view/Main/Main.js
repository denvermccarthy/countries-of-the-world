import React from 'react';
import './Main.css';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';

export default function Main() {
  return (
    <div>
      <div className="controls">
        <Filter />
        <Search />
      </div>
      <div className="country-container">{/* map here */}</div>
    </div>
  );
}
