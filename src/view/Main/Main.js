import React, { useEffect, useState } from 'react';
import './Main.css';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import fetchCountries from '../../services/countries';
import CountryCard from '../../components/CountryCard/CountryCard';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState('All');
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
        console.log(resp);
        setCountries(resp);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  const filter = () =>
    countries.filter((country) => country.continent === selected || selected === 'All');

  return (
    <div>
      <div className="controls">
        <Filter continents={continents} callback={setSelected} />
        <Search />
      </div>
      <div className="country-container">
        {filter().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </div>
  );
}
