import { AnyAction, applyMiddleware } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { api } from '../Api';
import { IState } from '../types';
import { StartDownload, SuccesDownload, UpdateCard } from './actions';

export function getCards() {
  return async (dispatch: ThunkDispatch<void, IState, AnyAction>): Promise<void> => {
    dispatch(StartDownload());
    await api.downolad();
    dispatch(UpdateCard());
    dispatch(SuccesDownload());
  };
}

export const middleware = applyMiddleware(thunk);
