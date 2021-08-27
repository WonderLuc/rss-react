import React from 'react';
import Cards from '../Cards/Cards';
import './style.scss';

export default function Field(): JSX.Element {
  return (
    <article className="field">
      {/* Loader */}
      <Cards />
    </article>
  );
}
