import React, { useEffect } from 'react';
import { api } from '../Api';
import Card from '../Card/Card';
import { useCardsContext } from '../state/state';
import { Actions } from '../types';
import './style.scss';

export default function Cards(): JSX.Element {
  const context = useCardsContext();

  async function requestCards(): Promise<void> {
    await api.downolad();
    context.dispacth({ type: Actions.CARDS_UPDATE, data: api.cards });
  }

  useEffect(() => {
    if (!api.isDownloaded) {
      requestCards();
    }
  });

  return (
    <section className="cards">
      {context.state.length ? context.state.map((card) => <Card {...card} key={card.id} />) : ''}
      {!context.state.length && <h2>Sorry, there is no cards...</h2>}
    </section>
  );
}
