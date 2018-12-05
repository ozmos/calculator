import React from 'react';

const Decimal = props => {
  return (
    <button className="decimal" id="decimal" onClick={props.handleClick}>.</button>
  );
}

export default Decimal;