import React, { useState } from 'react';
import { api } from '../Api';
import { useCardsContext } from '../state/state';
import { Actions } from '../types';

interface IPagainationProps {
  children: JSX.Element;
}

export default function Pagination(props: IPagainationProps): JSX.Element {
  const [page, setPage] = useState(1);
  const context = useCardsContext();

  function flipPage (e: React.MouseEvent<HTMLButtonElement>, n: number): void {
    e.preventDefault();
    const currentPage = page + n;
    if (currentPage < 1 ) return;
    api.setOptions({
      page: currentPage,
    });
    api.setStatus(false);
    requestCards();
    setPage(currentPage);
  }

  async function requestCards(): Promise<void> {
    api.setStatus(false);
    await api.downolad();
    context.dispacth({ type: Actions.CARDS_UPDATE, data: api.cards });
  }

  function changeCardsOnPage (e: React.ChangeEvent<HTMLInputElement>): void {
    const value = parseInt(e.target.value);
    if (!value || value < 12 || value > 100) return;
    api.setOptions({
      pageSize: value,
    });
    requestCards();
  }

  return (
    <div className="pagination">
      <label htmlFor="pageSize">
        Cards on page
        <input type="number" max="100" min="10" id="pageSize"
          defaultValue={api.options.pageSize}
          onChange={
            (e) => {
              e.preventDefault();
              changeCardsOnPage(e);
            }
          }
          />
      </label>
      { props.children }
      <div className="page-counter">
        <button className="page-counter__prev" onClick={ (e) => flipPage(e, -1) }>Previous Page</button>
        <p>{ page }</p>
        <button className="page-counter__next" onClick={ (e) => flipPage(e, 1) }>Next Page</button>
      </div>
    </div>
  );
}
