import React from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { api } from '../Api';
import { getCards } from '../state/middleware';
import { IState } from '../types';
import './style.scss';

export default function Filters(): JSX.Element {
  const dispatch = useDispatch();

  function onSpecificColor(e: React.ChangeEvent<HTMLSelectElement>): void {
    const color = e.target.value;
    if (color === 'none') {
      api.setOptions({
        colors: '',
      });
    } else {
      api.setOptions({
        colors: color,
      });
    }
    (dispatch as ThunkDispatch<IState, unknown, AnyAction>)(getCards());
  }

  function onRandomCards(e: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target;
    api.setOptions({
      random: checked,
    });
    (dispatch as ThunkDispatch<IState, unknown, AnyAction>)(getCards());
  }

  function onManaCost(e: React.ChangeEvent<HTMLInputElement>) {
    const cost = parseInt(e.target.value, 10);
    if (!cost || cost < 0) {
      if (api.options.cmc) {
        delete api.options.cmc;
      }
    } else {
      api.setOptions({
        cmc: cost,
      });
    }
    (dispatch as ThunkDispatch<IState, unknown, AnyAction>)(getCards());
  }

  return (
    <section className="filters">
      <label className="color" htmlFor="color">
       Specific color
        <select id="color" onChange={ (e) => onSpecificColor(e)}>
          <option value="none">None</option>
          <option value="black">Black</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="white">White</option>
        </select>
      </label>
      <label className="cmc" htmlFor="cmc">
        Mana costs:
        <input id="cmc" type="number" min="0" onChange={(e) => onManaCost(e)}/>
      </label>
      <label className="random" htmlFor="random">
        Random Cards
        <input type="checkbox" id="random" checked={api.options.random} onChange={(e) => onRandomCards(e)}/>
      </label>
    </section>
  );
}
