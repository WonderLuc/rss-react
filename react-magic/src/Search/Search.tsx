import React, { useState } from 'react';
import { api } from '../Api';
import Filters from '../Filters/Filters';
import { useCardsContext } from '../state/state';
import { Actions } from '../types';
import './style.scss';

export default function Search(): JSX.Element {
  const context = useCardsContext();
  const [name, setName] = useState('');

  async function requestCards(): Promise<void> {
    await api.downolad();
    context.dispacth({ type: Actions.CARDS_UPDATE, data: api.cards });
  }

  return (
    <article className="search">
      <form className="search__form">
        <div className="search-bar">
          <img className="search-bar__icon" src="./search.png" alt="search icon" />
          <input className="search-bar__input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button className="search__btn" onClick={(e) => {
          e.preventDefault();
          if (name) {
            api.setOptions({
              name
            });
          }
          else {
            if (api.options.name) delete api.options.name
          }
          requestCards();
        }}>Search</button>
      </form>
      <Filters />
    </article>
  );
}
