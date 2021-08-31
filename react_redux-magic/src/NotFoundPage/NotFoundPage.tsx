import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function NotFoundPage(): JSX.Element {
  return (
    <article className="notpage">
      <h2 className="notpage__header">Sorry, there is no page...</h2>
      <NavLink exact to="/" className="notpage__btn">Find it!</NavLink>
    </article>
  );
}
