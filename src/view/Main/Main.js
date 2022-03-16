import React, { useEffect, useState } from 'react';
import './Main.css';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import fetchCountries from '../../services/countries';
import CountryCard from '../../components/CountryCard/CountryCard';
import Sort from '../../components/Sort/Sort';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState('All');
  const [sorted, setSort] = useState(false);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(
      (country) => country.continent === selected || selected === 'All'
    );
    setResults(filtered);
  }, [countries, selected]);

  if (loading) return <div>Loading....</div>;
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
        <Sort {...{ setSort, sorted, setResults }} />
      </div>
      <div className="country-container">
        {search(results).map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </div>
  );
}
