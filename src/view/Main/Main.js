import React, { useEffect, useState } from 'react';
import './Main.css';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import fetchCountries from '../../services/countries';
import CountryCard from '../../components/CountryCard/CountryCard';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState('All');
  const [query, setQuery] = useState('');
  const continents = [
    'All',
    'Africa',
    'Asia',
    'Europe',
    'North America',
    'South America',
    'Oceania',
  ];
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  const filtered = countries.filter(
    (country) => country.continent === selected || selected === 'All'
  );

  // filter function search should push a true if country.name(lowercase) includes query
  const search = (arr) =>
    arr.filter((country) => {
      const name = country.name.toLowerCase();
      if (name.includes(query)) {
        return country;
      } else if (query === '') {
        return country;
      }
    });
  return (
    <div>
      <div className="controls">
        <Filter continents={continents} callback={setSelected} />
        <Search query={query} setQuery={setQuery} />
      </div>
      <div className="country-container">
        {search(filtered).map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </div>
  );
}
