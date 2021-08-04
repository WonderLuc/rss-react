import React from 'react';
import './style.scss';

const date = new Date().toISOString().substr(0, 10);

export default function BookRequestFrom(): JSX.Element {
  return (
    <form className="request-book">
      <h2>Request for the Interesting You Book Now!</h2>
      <fieldset className="request-form">
        <label htmlFor="book-name">
          What book do you want?
          <input className="request-form__book-name"
            type="text" name="book-name" placeholder="Book name" id="book-name"/>
        </label>
        <label htmlFor="date">
          Choose a comfortable date for getting a book
          <input className="request-form__date" type="date" name="date" id="date" min={date}/>
        </label>
        <label htmlFor="office">
          Choose a office:
          <input list="office-list" placeholder="Office" id="office"/>
          <datalist id="office-list">
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
            <option>Houston</option>
          </datalist>
        </label>
        <label htmlFor="pack">
          Pack a book
          <input type="checkbox" name="pack" id="pack" />
        </label>
        <label htmlFor="terms">
          <input type="checkbox" name="terms" id="terms" />
          I have read and accepted terms and conditions
        </label>
      </fieldset>
      <button>Request</button>
    </form>
  );
}
