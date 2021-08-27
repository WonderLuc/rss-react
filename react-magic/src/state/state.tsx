import React, { useContext, useReducer } from 'react';
import {
  Action,
  Actions,
  ICard,
  IState,
  UpdateAction,
} from '../types';

const initState: ICard [] = [];

const CardsContext = React.createContext<IState | undefined>(undefined);

function CardsReducer(state: ICard[], action: Action) {
  switch (action.type) {
    case Actions.CARDS_UPDATE:
      return action.data;
    default:
      return state;
  }
}

// ACTIONS
export function UpdateCardAction(data: ICard[]): UpdateAction {
  return {
    type: Actions.CARDS_UPDATE,
    data,
  };
}

// PROVIDER FOR COMPONENTS
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
