import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { CardProvider } from '../state/state';
import './style.scss';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <HashRouter >
        <CardProvider>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {/* {About} */}
              <Route path='/'>
                <p>404</p>
              </Route>
            </Switch>
          </React.Fragment>
        </CardProvider>
      </HashRouter>
    </React.Fragment>
  );
}
