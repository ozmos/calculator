import React from 'react';

const Clear = props => {
  return (
    <button className="clear" id="clear" onClick={props.handleClick}>C</button>
  );
}

export default Clear;