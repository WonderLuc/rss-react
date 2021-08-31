import { Store } from 'redux';
import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

let storeTemp: Store;

if (process.env.NODE_ENV === 'production') {
  storeTemp = configureStoreProd();
} else {
  storeTemp = configureStoreDev();
}

export const store = storeTemp;
