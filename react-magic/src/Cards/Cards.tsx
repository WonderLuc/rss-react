import React, { useEffect } from 'react';
import { api, requestCards } from '../Api';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { useCardsContext } from '../state/state';
import './style.scss';

export default function Cards(): JSX.Element {
  const context = useCardsContext();

  useEffect(() => {
    requestCards(context, api);
  }, []);

  return (
    <section className="cards">
      {context.state.isDownload && <Loader />}
      {context.state.cards.length ? context.state.cards.map((card) => <Card {...card} key={card.id} />) : ''}
      {!context.state.cards.length && <h2>Sorry, there is no cards...</h2>}
    </section>
  );
}
