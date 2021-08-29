import React from 'react';
import { api } from '../Api';
import Filters from '../Filters/Filters';
import { useCardsContext } from '../state/state';
import { Actions } from '../types';
import './style.scss';

export default function Search(): JSX.Element {
  const context = useCardsContext();

  async function requestCards(): Promise<void> {
    await api.downolad();
    context.dispacth({ type: Actions.CARDS_UPDATE, data: api.cards });
  }

  return (
    <article className="search">
      <img className="search__icon" src="" alt="search icon" />
      <input className="search__input" type="text"/>
      <button className="search__btn" onClick={(e) => {
        e.preventDefault();
        requestCards();
      }}>Search</button>
      <Filters />
    </article>
  );
}
