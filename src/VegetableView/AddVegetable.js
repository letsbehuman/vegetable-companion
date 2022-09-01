import React from 'react';
import './vegetableView.scss';

const AddVegetable = () => {
  return (
    <div className="pop-up__content--add">
      <div> Adding vegetable</div>
      <form className="pop-up__form">
        <label>
          Name:
          <input type="text" placeholder="Name"></input>
        </label>
        <label>
          Type:
          <input type="text" placeholder="Type"></input>
        </label>
        <label>
          Harvest:
          <input type="text" placeholder="Months for harvest"></input>
        </label>
        <label>
          Plant seeds:
          <input type="text" placeholder="Months for plant seeds"></input>
        </label>
        <label>
          Photo:
          <input type="text" placeholder="Link address"></input>
        </label>
        <label>
          Germination:
          <input type="text" placeholder="Days of germination"></input>
        </label>

        <label>
          Maturation:
          <input type="text" placeholder="Days of maturation"></input>
        </label>
        <label>
          Height:
          <input type="text" placeholder="cm"></input>
        </label>
        <label>
          Spacing:
          <input type="text" placeholder="1-square-foot spacing"></input>
        </label>
        <label>
          Watch out for:
          <input type="text" placeholder="Special caution"></input>
        </label>
        <button type="submit">Add vegetable</button>
      </form>
    </div>
  );
};

export default AddVegetable;
