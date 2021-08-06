import React, { useEffect, useState } from 'react';
import './style.scss';

const today = new Date().toISOString().substr(0, 10);

export default function BookRequestFrom(): JSX.Element {
  const [name, setName] = useState('');
  const [date, setDate] = useState(today);
  const [office, setOffice] = useState('');
  const [pack, setPack] = useState(false);
  const [agree, setAgree] = useState(false);
  const [formValid, setFormValid] = useState(false);

  function isValid(): void {
    if (!name || !office || !agree) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }

  useEffect(() => {
    isValid();
  });

  return (
    <form className="request-book">
      <h2>Request For The Interesting You Book Now!</h2>
      <fieldset className="request-form">
        <label htmlFor="book-name">
          What book do you want?
          <input type="text"
            name="book-name"
            placeholder="Book name"
            id="book-name"
            onInput = {
              (e) => {
                setName(e.currentTarget.value);
              }
            }
            required/>
        </label>
        <label htmlFor="date">
          Choose a comfortable date for getting a book
          <input type="date"
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
        <label htmlFor="office">
          Choose a office:
          <input list="office-list"
            placeholder="Office"
            id="office"
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
        <label htmlFor="pack">
          Pack a book
          <input type="checkbox"
            name="pack"
            id="pack"
            onInput = {
              (e) => {
                setPack(e.currentTarget.checked);
              }
            }/>
        </label>
        <label htmlFor="terms">
          <input type="checkbox"
            name="terms" id="terms"
            onInput = {
              (e) => {
                setAgree(e.currentTarget.checked);
              }
            }
            required/>
          I have read and accepted the terms and conditions
        </label>
      </fieldset>
      <button disabled={!formValid}>Request</button>
    </form>
  );
}
