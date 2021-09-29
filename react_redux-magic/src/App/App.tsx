import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import CardDetail from '../CardDetail/CardDetail';
import Header from '../Header/Header';
import Home from '../Home/Home';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import DevTools from '../state/DevTool';
import './style.scss';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <HashRouter >
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/details/:cardID" >
              <CardDetail />
            </Route>
            <Route path='*'>
              <NotFoundPage />
            </Route>
          </Switch>
        </React.Fragment>
      </HashRouter>
    </React.Fragment>
  );
}
