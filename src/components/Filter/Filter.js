import React from 'react';
import './Filter.css';

export default function Filter({ continents, callback }) {
  return (
    <select onChange={(e) => callback(e.target.value)}>
      {continents.map((continent) => (
        <option key={continent} value={continent}>
          {continent}
        </option>
      ))}
    </select>
  );
}
