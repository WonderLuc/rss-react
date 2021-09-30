import { createStore, Store } from 'redux';
import { middleware } from './middleware';
import { reducer } from './reducers';

export default function configureStoreProd(): Store {
  return createStore(reducer, middleware);
}
