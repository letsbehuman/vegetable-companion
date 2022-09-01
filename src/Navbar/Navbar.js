import React, { useState } from 'react';
import './navbarComponents.scss';
import SearchBar from './SearchBar';
import { FaCarrot } from 'react-icons/fa';

const Navbar = ({ searchTerm, setSearchTerm, setSelectedCategory }) => {
  return (
    <nav className="wellcome">
      <div className="wellcome__header">
        <h3 className="welcome__title">Welcome to</h3>
        <div className="title">
          {'Vegetable Companion '}
          <span>
            <FaCarrot />
          </span>
        </div>
      </div>
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setSelectedCategory={setSelectedCategory}
      />
    </nav>
  );
};

export default Navbar;
