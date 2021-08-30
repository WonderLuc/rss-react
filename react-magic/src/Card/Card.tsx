import React from 'react';
import { NavLink } from 'react-router-dom';
import { ICard } from '../types';
import './style.scss';

export default function Card(props: ICard): JSX.Element {
  return (
    <figure className="card">
      <img src={props.imageUrl} alt={props.name} className="card__image" />
      <figcaption className="card__caption">
        <NavLink to={`/details/${props.id}`} className="caption__name">{props.name}</NavLink>
      </figcaption>
    </figure>
  );
}
