import React from 'react';
import './vegetableView.scss';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const VegetableView = ({ vegetable, markFavorite, formatMonths }) => {
  const formatDays = (array) => {
    if (!array) return;
    const format = array.toString().replace(',', ', ');
    return format + ' days';
  };

  return (
    <div className="pop-up__content">
      <div className="vegetable__photo">
        <img src={vegetable.image} alt="vegetable" />
        {vegetable.favorite === false ? (
          <MdFavoriteBorder
            className="favorite-logo"
            onClick={() => {
              markFavorite(vegetable.id);
            }}
          />
        ) : (
          <MdFavorite
            className="favorite-logo"
            onClick={() => {
              markFavorite(vegetable.id);
            }}
          />
        )}
      </div>
      <div className="property">
        {'Type: '}
        <span className="property__desc"> {vegetable.type}</span>
      </div>
      <div className="property">
        {'Spacying: '}
        <span className="property__desc">{vegetable.spacying}</span>
      </div>
      <div className="property">
        {'Germination: '}
        <span className="property__desc">
          {formatDays(vegetable.germination)}
        </span>
      </div>
      <div className="property">
        {'Maturation: '}
        <span className="property__desc">
          {formatDays(vegetable.maturation)}
        </span>
      </div>
      <div className="property">
        {'Watch out for: '}
        <span className="property__desc"> {vegetable.watchOut}</span>
      </div>
      <div className="property">
        {'Favorite: '}
        <span className="property__desc"> {vegetable.favorite}</span>
      </div>
      <div className="property">
        {'Plant seeds: '}
        <span className="plant-seed">{formatMonths(vegetable.plantseeds)}</span>
      </div>{' '}
      <div className="property">
        {'Harvest: '}
        <span className="harvest">{formatMonths(vegetable.harvest)}</span>
      </div>
    </div>
  );
};

export default VegetableView;
