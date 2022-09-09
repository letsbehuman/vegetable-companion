import React from 'react';
import { useState } from 'react';
import './navbarComponents.scss';
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = ({ setSearchTerm, setSelectedCategory }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setSelectedCategory('All');
  };
  const clearBtn = () => {
    setSearchTerm('');
    setSearchInput('');
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar--input"
        placeholder="Search by name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button>
        <BiSearchAlt style={{ cursor: 'pointer' }} onSubmit={handleSubmit} />
      </button>
      <button style={{ cursor: 'pointer' }} onClick={() => clearBtn()}>
        {'Clear'}
      </button>
    </form>
  );
};

export default SearchBar;
