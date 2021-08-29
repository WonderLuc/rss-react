import React, { useContext, useReducer } from 'react';
import {
  Action,
  Actions,
  DownloadUpdateAction,
  ICard,
  IState,
  IStateContext,
  UpdateAction,
} from '../types';

const initState: IState = {
  cards: [],
  isDownload: false,
};

const CardsContext = React.createContext<IStateContext | undefined>(undefined);

function CardsReducer(state: IState, action: Action) {
  switch (action.type) {
    case Actions.CARDS_UPDATE:
      return {...state , ...{cards: action.data}};
    case Actions.DOWNLOAD_CHANGE:
      return {...state, isDownload: action.data};
    default:
      return state;
  }
}

// ACTIONS
export function UpdateCard(data: ICard[]): UpdateAction {
  return {
    type: Actions.CARDS_UPDATE,
    data,
  };
}

export function UpdateDownload(status: boolean): DownloadUpdateAction {
  return {
    type: Actions.DOWNLOAD_CHANGE,
    data: status,
  }
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

export function useCardsContext(): IStateContext {
  const context = useContext(CardsContext);

  if (!context) throw new Error('');

  return context;
}
