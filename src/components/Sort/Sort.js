import React from 'react';

export default function Sort({ setSort, sorted, setResults }) {
  const toggleSort = () => {
    setSort((sorted) => !sorted);
    if (sorted) setResults((prevState) => prevState.sort());
  };

  return (
    <div>
      <button type="radio" onClick={toggleSort}>
        A-Z
      </button>
    </div>
  );
}
