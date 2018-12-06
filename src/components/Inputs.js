import React from 'react';
import Digits from './Digits';
import Operators from './Operators';
import Equals from './Equals';
import Correctors from './Correctors';

const Inputs = props => {
  return (
    <div className="inputs">
      <Correctors handleClick={props.handleClick} />
      <Operators handleClick={props.handleClick} />
      <Digits handleClick={props.handleClick} />
      <Equals evaluate={props.evaluate}/>
    </div>
  );
}

export default Inputs;