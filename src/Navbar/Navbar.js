import React from 'react';
import './navbarComponents.scss';
import SearchBar from './SearchBar';
import { FaCarrot } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const Navbar = ({ setSearchTerm, setSelectedCategory, user, logOut }) => {
  return (
    <nav className="wellcome">
      <div className="wellcome__header">
        <h3 className="wellcome__message">Welcome to</h3>
        <div className="title">
          {'Vegetable Companion '}
          <span>
            <FaCarrot />
          </span>
        </div>
      </div>
      {user.userName && (
        <>
          <SearchBar
            setSearchTerm={setSearchTerm}
            setSelectedCategory={setSelectedCategory}
          />
          <button onClick={() => logOut()} style={{ marginLeft: '1em' }}>
            <FiLogOut />
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
