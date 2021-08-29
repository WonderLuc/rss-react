import React from 'react';
import Home from '../Home/Home';
import { CardProvider } from '../state/state';
import './style.scss';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <CardProvider>
        <Home />
      </CardProvider>
    </React.Fragment>
  );
}
