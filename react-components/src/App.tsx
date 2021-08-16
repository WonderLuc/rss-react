import React from 'react';
import Books from './Books/Books';
import Header from './Header/Header';
import Orders from './Orders/Orders';
import './style.scss';

export default function App(): JSX.Element {
  return (<div className="App">
    <Header />
    <Books />
    <Orders/>
  </div>);
}
