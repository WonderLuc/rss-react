import React from 'react';
import Field from '../Field/Field';
import Search from '../Search/Search';
import './style.scss';

export default function Home(): JSX.Element {
  return (
    <main className="home">
      <Search />
      <Field />
    </main>
  );
}
