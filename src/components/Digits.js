import React from 'react';

const Digits = props => {
  return (
    <button className="digit" id={props.id} onClick={props.handleClick}>{props.value}</button>
  );
};

export default Digits;