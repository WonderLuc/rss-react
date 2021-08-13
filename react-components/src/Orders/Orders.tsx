import React, { useState } from 'react';
import BookRequestFrom from '../BookRequestFrom/BookRequestForm';
import { IOrder } from '../types';
import './style.scss';

export default function Orders(): JSX.Element {
  const initState: IOrder[] = [];
  const [orders, setOrders] = useState(initState);

  function addOrder(order: IOrder): void {
    setOrders([...orders, order]);
    console.log(order);
  }

  return (
    <section className="orders">
      <BookRequestFrom handler={addOrder} />
      <ul className="orders__list">
        {}
      </ul>
    </section>
  );
}
