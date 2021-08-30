import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function About(): JSX.Element {
  return (
    <article className="about">
      <h2 className="about__header">Welcome to Magic The Gathering Search!</h2>
      <div className="about__text-wrapper">
        <p className="about__text">
          Here you can find your best cards and ideas for your collection.
          Filter cards by your favorite color, mana cost, or just ask for random cards.</p>
        <NavLink exact to="/">Try Now!</NavLink>
      </div>
    </article>
  );
}
