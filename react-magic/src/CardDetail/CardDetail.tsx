import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { ICardInfo } from '../types';
import './style.scss';

interface ICardPageParams {
  cardID: string;
}

export default function CardDetail(): JSX.Element {
  const { cardID } = useParams<ICardPageParams>();
  const [isDownloaded, setDownloading] = useState(false);
  const [cardInfo, setInfo] = useState<ICardInfo>({});

  function manaCostCoverter(manaString: string | undefined): JSX.Element [] {
    if (!manaString) return [];
    const manaArr = manaString.split(/[}{]/).filter((str) => !!str);
    const jsxArr = [];
    for (let i = 0; i < manaArr.length; i++) {
      if (manaArr[i].match(/\d/)) {
        jsxArr.push(<p className="mana mana_number" key={Math.random() * 99999999}>{manaArr[i]}</p>);
      } else {
        let path: string;
        switch (manaArr[i]) {
          case 'W':
            path = 'white.png';
            break;
          case 'G':
            path = 'green.png';
            break;
          case 'R':
            path = 'red.png';
            break;
          case 'U':
            path = 'blue.png';
            break;
          case 'B':
            path = 'black.png';
            break;
          default:
            path = '';
        }
        jsxArr.push(<img className="mana mana_color" key={Math.random() * 99999999} src={`./${path}`}/>);
      }
    }
    return jsxArr;
  }
  async function getUser(): Promise<void> {
    try {
      const req = await fetch(`https://api.magicthegathering.io/v1/cards?id=${cardID}`);
      if (req.ok) {
        const res = await req.json();
        setInfo(res.cards[0]);
        setDownloading(true);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <article className="card-detail">
      {!isDownloaded && <Loader />}
      <section className="detail">
        <h2 className="detail__name">{cardInfo.name}</h2>
        <div className="detail-wrapper">
          <div className="detail__card">
            <Card id={cardInfo.id || ''} name={cardInfo.name || ''} imageUrl={cardInfo.imageUrl || ''}/>
            <h4 className="detail__artist">Artist <span>{cardInfo.artist}</span></h4>
          </div>
          <div className="info">
            <div className="fields">
              <div className="field-line">
                <h3 className="field-line__header">Rarity</h3>
                <p className="field-line__text">{cardInfo.rarity}</p>
              </div>
              <div className="field-line">
                <h3 className="field-line__header">Type</h3>
                <p className="field-line__text">{cardInfo.type}</p>
              </div>
              <div className="field-line">
                <h3 className="field-line__header">Mana Cost</h3>
                <div className="field-line__mana">{manaCostCoverter(cardInfo.manaCost)}</div>
              </div>
              <div className="field-line">
                <h3 className="field-line__header">Release</h3>
                <p className="field-line__text">{cardInfo.setName}</p>
              </div>
            </div>
            <div className="textblock">
              {cardInfo.text?.split('\n').map((chunck) => <p key={chunck.slice(0, 5)}>{chunck}</p>)}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}