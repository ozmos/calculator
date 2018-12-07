import React from 'react';

const Correctors = props => {
  const coObj = {'Clear' : 'C', 'Backspace' : '\u2190'};
  const correctors = Object.keys(coObj).map((val) => {
    return (
      <button className={['button ', 'corrector ', 'corrector_'+val].join('')} id={val} value={coObj[val]} key={val} onClick={props.handleClick}>{coObj[val]}</button>
    );  
  });
  return (
    <div className="correctors">
      {correctors}
    </div>
  );

}

export default Correctors;