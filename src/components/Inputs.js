import React from 'react';
import Equals from './Equals';

const Inputs = props => {
  const digObj = {'decimal': '.', 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
    const digits = Object.keys(digObj).reverse().map((val) => {
      return (
        <button id={val} className={['digit ', 'button ', val].join('')}value={digObj[val]} key={val} onClick={props.handleClick}>{digObj[val]}</button>
      );
    });

  const opObj = {'square_root' : '\u221A', 'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/', 'modulus': '%'};
  const operators = Object.keys(opObj).map((val) => {
    return (
      <button className={['button ', 'operator ', val].join('')} id={val} value={opObj[val]} key={val} onClick={props.handleClick}>{opObj[val]}</button>
    );  
  });

  const coObj = {'Clear' : 'C', 'Backspace' : '\u2190'};
  const correctors = Object.keys(coObj).map((val) => {
    return (
      <button className={['button ', 'corrector ', val].join('')} id={val} value={coObj[val]} key={val} onClick={props.handleClick}>{coObj[val]}</button>
    );  
  });
 
  return (
    <div className="inputs">
      {correctors}
      {operators}
      <Equals evaluate={props.evaluate}/>
      {digits}
    </div>
  );
}

export default Inputs;