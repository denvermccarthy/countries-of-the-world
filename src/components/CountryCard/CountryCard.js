import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  const path = iso2.toLowerCase();
  return (
    <div className="card">
      <img alt={name} src={`https://flagcdn.com/48x36/${path}.png`} />
      {name}
    </div>
  );
}
