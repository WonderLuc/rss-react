import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { getCards } from '../state/middleware';
import { ICard, IState } from '../types';
import './style.scss';

export default function Cards(): JSX.Element {
  const state = useSelector((st: RootStateOrAny) => st.cardsState);
  const dispatch = useDispatch();

  useEffect(() => {
    (dispatch as ThunkDispatch<IState, unknown, AnyAction>)(getCards());
  }, []);

  return (
    <section className="cards">
      {state.isDownload && <Loader />}
      {state.cards.length ? state.cards.map((card: ICard) => <Card {...card} key={card.id} />) : ''}
      {!state.cards.length && <h2>Sorry, there is no cards...</h2>}
    </section>
  );
}
