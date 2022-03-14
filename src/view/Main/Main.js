import React, { useEffect, useState } from 'react';
import './Main.css';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import fetchCountries from '../../services/countries';

export default function Main() {
  const [countries, setCountries] = useState([]);
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
