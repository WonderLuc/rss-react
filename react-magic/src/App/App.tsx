import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import { CardProvider } from '../state/state';
import './style.scss';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <HashRouter >
        <CardProvider>
          {/* {Header} */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* {About} */}
            <Route path='/'>
              <p>404</p>
            </Route>
          </Switch>
        </CardProvider>
      </HashRouter>
    </React.Fragment>
  );
}
