import { compose, createStore, Store } from 'redux';
import DevTools from './DevTool';
import { middleware } from './middleware';
import { reducer } from './reducers';

const enhancer = compose(
  middleware,
  DevTools.instrument(),
);

export default function configureStoreDev(): Store {
  const store = createStore(reducer, enhancer);

  return store;
}
