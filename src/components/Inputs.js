import React from 'react';
import Digits from './Digits';
import Operators from './Operators';
import Clear from './Clear';
import Equals from './Equals';
import Decimal from './Decimal';
import Backspace from './Backspace';

const Inputs = props => {
  const digObj = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
  const digits = Object.keys(digObj).reverse().map((val, i) => {
    return (
      <Digits id={val} className={['digit ', 'digit_'+i].join('')}value={digObj[val]} key={val} handleClick={props.handleClick}/>
    );
  });
  const opObj = {'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/', 'modulus': '%', };
  const operators = Object.keys(opObj).map((val) => {
    return (
      <Operators id={val} value={opObj[val]} key={val} handleClick={props.handleClick}/>
    );  
  });
  return (
    <div className="inputs">
      <div className='digits'>
        {digits}
        <Decimal handleClick={props.handleClick} />
        <Clear handleClick={props.handleClick}/>
        <Backspace handleClick={props.handleClick} />
      </div>
      <div className='operators'>{operators}</div>
        <button className="square_root" id="square_root" value="&#x0221A;">&radic;</button>
        <Equals evaluate={props.evaluate}/>
      </div>
  );
}

export default Inputs;