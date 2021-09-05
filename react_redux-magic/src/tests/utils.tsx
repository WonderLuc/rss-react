import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStoreDev from '../state/configureStore.dev';

export const renderWithRedux = (component: JSX.Element) => {
  const store = configureStoreDev();
  return (render(
    <Provider store={ store }>
      { component }
    </Provider>,
  ));
};
