import React from 'react';

const Operators = props => {
  const opObj = {'square_root' : '\u221A', 'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/', 'modulus': '%'};
  const operators = Object.keys(opObj).map((val) => {
    return (
      <button className={['button ', 'operator ', 'operator_'+val].join('')} id={val} value={opObj[val]} key={val} onClick={props.handleClick}>{opObj[val]}</button>
    );  
  });
  return (
    <div className="operators">
      {operators}
    </div>
  )
};

export default Operators;
