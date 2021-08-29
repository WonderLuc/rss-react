import React from 'react';
import { ICard } from '../types';
import './style.scss';

export default function Card(props: ICard): JSX.Element {
  return (
    <figure className="card">
      <img src={props.imageUrl} alt={props.name} className="card__image" />
      <figcaption className="card__caption">
        <h4 className="caption__name">{props.name}</h4>
      </figcaption>
    </figure>
  );
}
