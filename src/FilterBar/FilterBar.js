import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import './FilterBar.scss';
import { AiOutlineFilter } from 'react-icons/ai';

const FilterBar = ({ setSelectedCategory, setSearchTerm }) => {
  const [vegetableType, setvegetableType] = useState('');

  useEffect(() => {
    fetchFromAPI(`vegetables/`).then((data) => setvegetableType(data));
  }, []);
  if (!vegetableType) return 'loading... vegetables';

  const allFilters = [
    'All',
    'Favorite',
    ...new Set(vegetableType.map((item) => item.type)),
  ];

  const filterHandle = (filter) => {
    setSelectedCategory(filter);
    setSearchTerm('');
  };

  return (
    <div className="filterbar">
      <div className="filterbar__content">
        <div className="filterbar__title">
          <span>Filters </span>
          <AiOutlineFilter />
        </div>

        {allFilters.map((filter, index) => {
          return (
            <button
              key={index}
              className="category-btn"
              onClick={() => filterHandle(filter)}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
