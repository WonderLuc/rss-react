import React from 'react';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import './style.scss';

export default function Field(): JSX.Element {
  return (
    <article className="field">
      <Pagination>
        <Cards />
      </Pagination>
    </article>
  );
}
