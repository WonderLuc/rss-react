import React from 'react';
import { api } from '../Api';
import { useCardsContext } from '../state/state';
import { Actions } from '../types';
import './style.scss';

export default function Filters(): JSX.Element {
  const context = useCardsContext();
  
  async function requestCards(): Promise<void> {
    await api.downolad();
    context.dispacth({ type: Actions.CARDS_UPDATE, data: api.cards });
  }

  function onSpecificColor(e: React.ChangeEvent<HTMLSelectElement>): void {
    const color = e.target.value;
    if (color == 'none') {
      api.setOptions({
        colors: '',
      });
    }
    else {
      api.setOptions({
        colors: color,
      });
    }
    requestCards();
  }
  
  function onRandomCards(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    api.setOptions({
      random: checked,
    });
    requestCards();
  }

  function onManaCost(e: React.ChangeEvent<HTMLInputElement>) {
    const cost = parseInt(e.target.value);
    if (!cost || cost < 0) {
      if (api.options.cmc) {
        delete api.options.cmc;
      }
    }
    else {
      api.setOptions({
        cmc: cost,
      });
    }
    requestCards();
  }

  return (
    <section className="search">
      <label htmlFor="color">
       Specific color
        <select id="color" onChange={ (e) => onSpecificColor(e)}>
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
        <input id="cmc" type="number" min="0" onChange={(e) => onManaCost(e)}/>
      </label>
      <label htmlFor="random">
        Random Cards
        <input type="checkbox" id="random" onChange={(e) => onRandomCards(e)}/>
      </label>
    </section>
  );
}
