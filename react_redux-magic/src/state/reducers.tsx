import { combineReducers } from 'redux';
import { api } from '../Api';
import { Action, Actions, IState } from '../types';

const initCardState: IState = {
  cards: [],
  isDownload: false,
};

function CardsReducer(state: IState = initCardState, action: Action) {
  switch (action.type) {
    case Actions.CARDS_UPDATE:
      return { ...state, cards: api.cards };
    case Actions.DOWNLOAD_START:
      return { ...state, isDownload: true };
    case Actions.DOWNLOAD_SUCCES:
      return { ...state, isDownload: false };
    case Actions.DOWNLOAD_FAIL:
      return { ...state, isDownload: false };
    case Actions.GET_CARD_WITH_ID:
      return { ...state, cards: state.cards.filter((card) => card.id === action.payload) };
    default:
      return state;
  }
}

export const reducer = combineReducers({ cardsState: CardsReducer });
