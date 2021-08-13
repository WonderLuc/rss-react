import React, { useState } from 'react';
import BookRequestFrom from '../BookRequestFrom/BookRequestForm';
import Order from '../Order/Order';
import { IOrder } from '../types';
import './style.scss';

export default function Orders(): JSX.Element {
  const initState: IOrder[] = [];
  const [orders, setOrders] = useState(initState);

  function addOrder(order: IOrder): void {
    setOrders([...orders, order]);
  }

  return (
    <section className="orders">
      <BookRequestFrom handler={addOrder} />
      <ul className="orders__list">
        {
          orders.map((order, index) => <Order {...order} key={index + order.name}/>)
        }
      </ul>
    </section>
  );
}
