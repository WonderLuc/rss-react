import React, { useState } from 'react';
import { api } from '../Api';

interface IPagainationProps {
  children: JSX.Element;
}

export default function Pagination(props: IPagainationProps): JSX.Element {
  const [page, setPage] = useState(1);

  return (
    <div className="pagination">
      <label htmlFor="pageSize">
        Cards on page
        <input type="number" max="100" min="10" id="pageSize" value={api.options.pageSize} />
      </label>
      { props.children }
      <div className="page-counter">
        <button className="page-counter__prev">-</button>
        <p>{ page }</p>
        <button className="page-counter__next">+</button>
      </div>
    </div>
  );
}
