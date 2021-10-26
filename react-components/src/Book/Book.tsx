import React from 'react';
import Details from '../Details/Details';
import Preview from '../Preview/Preview';
import { DetailType, IBook } from '../types';
import './style.scss';

const price: DetailType = 'price';
const likes: DetailType = 'likes';
const comments: DetailType = 'comments';

export default function Book(props: IBook): JSX.Element {
  return (
    <div className="book">
      <Preview {...props} />
      <div className="book__details">
        <Details {...({ ...props, detail: likes })} />
        <Details {...({ ...props, detail: comments })} />
        <Details {...({ ...props, detail: price })} />
      </div>
      <button className="book__button">More</button>
    </div>
  );
}
