import React from 'react';
import { IOrder } from '../types';
import './style.scss';

export default function Order({
  pack, id, name, date, office,
}: IOrder): JSX.Element {
  return (
    <li className={pack ? 'order order_packed' : 'order'}>
      {pack && <img src="./assets/gift.png" alt="" className="order__pack" /> }
      <p className="order__id">
        Order
        {id}
      </p>
      <p className="order__name">{name}</p>
      <p className="order__date">{date}</p>
      <p className="order__office">{office}</p>
    </li>
  );
}
