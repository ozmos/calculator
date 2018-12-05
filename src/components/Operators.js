import React from 'react';

const Operators = props => {
  return (
    <button className="operator" id={props.id} onClick={props.handleClick}>{props.value}</button>
  );
};

export default Operators;
