import React from 'react';
import Filters from '../Filters/Filters';
import './style.scss';

export default function Search(): JSX.Element {
  return (
    <article className="search">
      <img className="search__icon" src="" alt="search icon" />
      <input className="search__input" type="text"/>
      <button className="search__btn">Search</button>
      <Filters />
    </article>
  );
}
