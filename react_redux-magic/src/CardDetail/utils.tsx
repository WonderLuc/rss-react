import React from 'react';

export function manaCostCoverter(manaString: string | undefined): JSX.Element [] {
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
