import React from 'react';
import './style.scss';

export default function Filters(): JSX.Element {
  return (
    <section className="search">
      <label htmlFor="color">
       Specific color
        <select id="color">
          <option value="none">None</option>
          <option value="black">Black</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="white">White</option>
        </select>
      </label>
      <label htmlFor="cmc">
        Mana costs:
        <input id="cmc" type="number" min="0"/>
      </label>
      <label htmlFor="random">
        Random Cards
        <input type="checkbox" id="random" />
      </label>
    </section>
  );
}
