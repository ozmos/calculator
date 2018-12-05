import React from 'react';

const Equals = props => {
  return (
    <button className="equals" id="equals" onClick={props.evaluate}>=</button>
  );
}

export default Equals;