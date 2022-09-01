import React, { useState, useEffect } from 'react';
import VegetableView from '../VegetableView/VegetableView';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import './Feed.scss';
import { BsBasket } from 'react-icons/bs';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { CgExtensionAdd } from 'react-icons/cg';
import AddVegetable from '../VegetableView/AddVegetable';

const Vegetables = ({ vegetables, setVegetables, selectedCategory }) => {
  const [popUpContent, setPopUpContent] = useState([]);
  const [popUpToggle, setPopUpToggle] = useState(false);
  const [newVegetable, setNewVegetable] = useState(false);

  const changeContent = (vegetableObj) => {
    setPopUpContent([vegetableObj]);
    setPopUpToggle(!popUpToggle);
  };

  const addVegetable = (str) => {
    setNewVegetable(!newVegetable);
    console.log('click new');
  };
  const markFavorite = (id) => {
    console.log('Click', id);
    setVegetables((prevVegetable) => {
      const newVegetable = [];
      for (let i = 0; i < prevVegetable.length; i++) {
        const currVegetable = prevVegetable[i];
        if (currVegetable.id === id) {
          const updatedVegetable = {
            ...currVegetable,
            favorite: !currVegetable.favorite,
          };
          newVegetable.push(updatedVegetable);
        } else {
          newVegetable.push(currVegetable);
        }
      }
      return newVegetable;
    });
    console.log(vegetables.filter((vegetable) => vegetable.favorite === true));
  };

  return (
    <div className="main">
      <div className="main__results">
        {selectedCategory}{' '}
        <span>
          {'Vegetables '}
          <BsBasket />
        </span>
      </div>
      <div className="vegetables">
        <div
          className="vegetable-card--add vegetable-card"
          key="new"
          onClick={() => addVegetable('new')}
        >
          <h2 className="vegetable__name">Add vegetable</h2>
          <button className="vegetable__add">
            <CgExtensionAdd />
          </button>
        </div>
        {vegetables.map((veg) => {
          return (
            <div className="vegetable-card" key={veg.id}>
              <div className="vegetable__title">
                <h2 className="vegetable__name">{veg.name} </h2>
                {veg.favorite === false ? (
                  <MdFavoriteBorder
                    className="favorite-logo"
                    onClick={() => {
                      markFavorite(veg.id);
                    }}
                  />
                ) : (
                  <MdFavorite
                    className="favorite-logo"
                    onClick={() => {
                      markFavorite(veg.id);
                    }}
                  />
                )}
              </div>
              <div
                className="vegetable__body"
                onClick={() => changeContent(veg)}
              >
                <div className="vegetable__photo">
                  <img src={veg.image} alt="vegetable" />
                </div>
                <p className="plant-seed">{veg.plantSeeds}</p>
                <p className="harvest">{veg.harvest}</p>
              </div>
            </div>
          );
        })}

        {popUpToggle && (
          <div className="pop-up__container" onClick={changeContent}>
            <div className="pop-up__body" onClick={(e) => e.stopPropagation()}>
              <div className="pop_up__header">
                <button onClick={changeContent}>X</button>
              </div>
              <div>
                {popUpContent.map((vegetable) => {
                  return (
                    <VegetableView vegetable={vegetable} key={vegetable.id} />
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {newVegetable && (
          <div className="pop-up__container" onClick={addVegetable}>
            <div className="pop-up__body" onClick={(e) => e.stopPropagation()}>
              <div className="pop_up__header">
                <button onClick={addVegetable}>X</button>
              </div>
              <AddVegetable />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Vegetables;
