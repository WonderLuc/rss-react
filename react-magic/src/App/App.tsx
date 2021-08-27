import React from 'react';
import Home from '../Home/Home';
import { CardProvider } from '../state/state';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <CardProvider>
        <Home />
      </CardProvider>
    </React.Fragment>
  );
}
