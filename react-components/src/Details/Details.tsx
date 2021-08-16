import React from 'react';
import { DetailType, IBook } from '../types';
import './style.scss';

export interface DetailsProps extends IBook{
  detail: DetailType;
}

export default function Details(props: DetailsProps): JSX.Element {
  return (
    <figure className={props.detail}>
      <img className={`${props.detail}__img`} src={`./assets/${props.detail}.png`}/>
      <figcaption>{props[props.detail]}</figcaption>
    </figure>
  );
}
