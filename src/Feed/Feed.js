import React, { useState } from 'react';
import VegetableView from '../VegetableView/VegetableView';
import './Feed.scss';
import { BsBasket } from 'react-icons/bs';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { CgExtensionAdd } from 'react-icons/cg';
import AddVegetable from '../VegetableView/AddVegetable';

const Vegetables = ({ vegetables, setVegetables, selectedCategory }) => {
  const [popUpContent, setPopUpContent] = useState([]);
  const [popUpToggle, setPopUpToggle] = useState(false);
  const [newVegetable, setNewVegetable] = useState({});

  const changeContent = (vegetableObj) => {
    setPopUpContent([vegetableObj]);
    setPopUpToggle(!popUpToggle);
  };

  const addVegetable = (str) => {
    setNewVegetable(!newVegetable);
  };
  const markFavorite = (name) => {
    console.log('Click', name);
    setVegetables((prevVegetable) => {
      return prevVegetable.map((vegetable) => {
        return vegetable.name === name
          ? { ...vegetable, favorite: !vegetable.favorite }
          : vegetable;
      });
    });
  };

  const formatMonths = (veg) => {
    if (!veg) return;

    return veg.toString().replaceAll(',', ', ');
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
          className="vegetable-card--add"
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
                {!veg.favorite ? (
                  <MdFavoriteBorder
                    className="favorite-logo"
                    onClick={() => {
                      markFavorite(veg.name);
                    }}
                  />
                ) : (
                  <MdFavorite
                    className="favorite-logo"
                    onClick={() => {
                      markFavorite(veg.name);
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
                <p className="plant-seed">
                  Plant seeds: {formatMonths(veg.plantseeds)}
                </p>
                <p className="harvest">Harvest: {formatMonths(veg.harvest)}</p>
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
                    <VegetableView
                      vegetable={vegetable}
                      key={vegetable.id}
                      markFavorite={markFavorite}
                      formatMonths={formatMonths}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {!newVegetable && (
          <div className="pop-up__container" onClick={addVegetable}>
            <div className="pop-up__body" onClick={(e) => e.stopPropagation()}>
              <div className="pop_up__header">
                <button onClick={addVegetable}>X</button>
              </div>
              <AddVegetable
                setNewVegetable={setNewVegetable}
                addVegetable={addVegetable}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Vegetables;
