import React from 'react';
import Inputs from './Inputs';
import Display from './Display';

const Container = props => {
  return (
    <div className="container">
      <Display
        display={props.display}
        result={props.result} />
      <Inputs handleClick={props.handleClick} evaluate={props.evaluate} />
    </div>
  );
}

export default Container;