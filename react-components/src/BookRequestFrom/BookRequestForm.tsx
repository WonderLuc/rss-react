import React, { useEffect, useRef, useState } from 'react';
import { IOrder } from '../types';
import './style.scss';

interface IBookRequestProps {
  handler: (order: IOrder) => void;
}

const today = new Date().toISOString().substr(0, 10);

export default function BookRequestFrom(props: IBookRequestProps): JSX.Element {
  const [name, setName] = useState('');
  const [date, setDate] = useState(today);
  const [office, setOffice] = useState('');
  const [pack, setPack] = useState(false);
  const [agree, setAgree] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const packCheckbox = useRef<HTMLInputElement>(null);
  const agreeCheckbox = useRef<HTMLInputElement>(null);

  function isValid(): void {
    if (!name || !office || !agree) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }

  function clear():void {
    setName('');
    setDate(today);
    setOffice('');
    setPack(false);
    if (packCheckbox.current !== null) {
      packCheckbox.current.checked = false;
    }
    setAgree(false);
    if (agreeCheckbox.current !== null) {
      agreeCheckbox.current.checked = false;
    }
  }

  useEffect(() => {
    isValid();
  });

  return (
    <form className="request-book" onSubmit={(e) => {
      e.preventDefault();
      const order = {
        name,
        date,
        office,
        pack,
      };
      props.handler(order);
      clear();
    }}>
      <h2 className="request-book__title">Request For The Interesting You Book Now!</h2>
      <fieldset className="request-book__form">
        <label className="field" htmlFor="book-name">
          What book do you want?
          <input className="field__input" type="text"
            name="book-name"
            placeholder="Book name"
            id="book-name"
            value={name}
            onInput = {
              (e) => {
                setName(e.currentTarget.value);
              }
            }
            required/>
        </label>
        <label className="field" htmlFor="date">
          Choose a comfortable date for getting a book
          <input className="field__input" type="date"
            name="date"
            id="date"
            onInput = {
              (e) => {
                setDate(e.currentTarget.value);
              }
            }
            min={date}
            value={date}/>
        </label>
        <label className="field" htmlFor="office">
          Choose a office:
          <input className="field__input" list="office-list"
            placeholder="Office"
            id="office"
            value={office}
            onInput = {
              (e) => {
                setOffice(e.currentTarget.value);
              }
            }
            required/>
          <datalist id="office-list">
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
            <option>Houston</option>
          </datalist>
        </label>
        <label className="field field_selector" htmlFor="pack">
          Pack a book
          <div className={ `selector ${pack ? 'selector_active' : ''}` }>
            <div className="selector__circle"></div>
          </div>
          <input className="field__input" type="checkbox"
            name="pack"
            id="pack"
            ref={packCheckbox}
            onInput = {
              (e) => {
                setPack(e.currentTarget.checked);
              }
            }/>
        </label>
        <label className="field field_text-after field_checkbox"htmlFor="terms">
          <input className="field__input" type="checkbox"
            name="terms" id="terms"
            ref={agreeCheckbox}
            onInput = {
              (e) => {
                setAgree(e.currentTarget.checked);
              }
            }
            required/>
          I have read and accepted the terms and conditions
        </label>
        <button className="request-book__submit" disabled={!formValid}>Request</button>
      </fieldset>
    </form>
  );
}
