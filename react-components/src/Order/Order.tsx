import React from 'react';
import { IOrder } from '../types';
import './style.scss';

export default function Order(props: IOrder): JSX.Element {
  return (
    <li className={props.pack ? 'order order_packed' : 'order'}>
      <p className="order__name">{props.name}</p>
      <p className="order__date">{props.date}</p>
      <p className="order__office">{props.office}</p>
    </li>
  );
}
