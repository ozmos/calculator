import React from 'react';

const Correctors = props => {
  const opObj = {'Clear' : 'C', 'Backspace' : '\u2190'};
  const correctors = Object.keys(opObj).map((val) => {
    return (
      <button className={['corrector ', 'corrector_'+val].join('')} id={val} value={opObj[val]} key={val} onClick={props.handleClick}>{opObj[val]}</button>
    );  
  });
  return (
    <div className="correctors">
      {correctors}
    </div>
  );

}

export default Correctors;