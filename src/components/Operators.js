import React from 'react';

const Operators = props => {
  const opObj = {'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/', 'modulus': '%', 'square_root' : '\u221A'};
  const operators = Object.keys(opObj).map((val) => {
    return (
      <button className={['operator ', 'operator_'+val].join('')} id={val} value={opObj[val]} key={val} onClick={props.handleClick}>{opObj[val]}</button>
    );  
  });
  return (
    <div className="operators">
      {operators}
    </div>
  )
};

export default Operators;
