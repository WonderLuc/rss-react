import React, { useContext, useReducer } from 'react';
import {
  Action,
  Actions,
  ICard,
  IState,
} from '../types';

const initState: ICard [] = [{
  name: 'Oldrik',
  id: 1,
  img: '',
}];

const CardsContext = React.createContext<IState | undefined>(undefined);

function CardsReducer(state: ICard[], action: Action) {
  switch (action.type) {
    case Actions.CARDS_UPDATE:
      return state;
    default:
      return state;
  }
}

export function CardProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [state, dispacth] = useReducer(CardsReducer, initState);

  return (
    <CardsContext.Provider value={{ state, dispacth }}>
      { children }
    </CardsContext.Provider>
  );
}

export function useCardsContext(): IState {
  const context = useContext(CardsContext);

  if (!context) throw new Error('');

  return context;
}
