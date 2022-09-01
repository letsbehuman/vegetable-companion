import React from 'react';
import './vegetableView.scss';

const VegetableView = ({ vegetable }) => {
  return (
    <div className="pop-up__content">
      <div className="vegetable__photo">
        <img src={vegetable.image} alt="vegetable" />
      </div>
      <div className="property">
        Type:
        <span className="property__desc"> {vegetable.type}</span>
      </div>
      <div className="property">
        Spacying: <span className="property__desc">{vegetable.spacying}</span>
      </div>
      <div className="property">
        Height: <span className="property__desc">{vegetable.height}</span>
      </div>
      <div className="property">
        Germination:{' '}
        <span className="property__desc">{vegetable.germination}</span>
      </div>
      <div className="property">
        Maturation:{' '}
        <span className="property__desc">{vegetable.maturation}</span>
      </div>
      <div className="property">
        Watch out for:
        <span className="property__desc"> {vegetable.watchOut}</span>
      </div>
      <div className="property">
        Favorite:
        <span className="property__desc"> {vegetable.favorite}</span>
      </div>
      <div className="plant-seed">{vegetable.plantSeeds}</div>
      <div className="harvest">{vegetable.harvest}</div>
    </div>
  );
};

export default VegetableView;
