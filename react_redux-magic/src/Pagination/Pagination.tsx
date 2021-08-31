import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { api } from '../Api';
import { getCards } from '../state/middleware';
import { IState } from '../types';
import './style.scss';

interface IPagainationProps {
  children: JSX.Element;
}

export default function Pagination(props: IPagainationProps): JSX.Element {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  function flipPage(e: React.MouseEvent<HTMLButtonElement>, n: number): void {
    e.preventDefault();
    const currentPage = page + n;
    if (currentPage < 1) return;
    api.setOptions({
      page: currentPage,
    });
    setPage(currentPage);
    (dispatch as ThunkDispatch<IState, unknown, AnyAction>)(getCards());
  }

  function changeCardsOnPage(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = parseInt(e.target.value, 10);
    if (!value || value < 12 || value > 100) return;
    api.setOptions({
      pageSize: value,
    });
    (dispatch as ThunkDispatch<IState, unknown, AnyAction>)(getCards());
  }

  return (
    <div className="pagination">
      <label className="pagination__pageSize" htmlFor="pageSize">
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
        <p className="page-counter__number">{ page }</p>
        <button className="page-counter__next" onClick={ (e) => flipPage(e, 1) }>Next Page</button>
      </div>
    </div>
  );
}
