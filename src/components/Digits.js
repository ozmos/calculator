import React from 'react';

const Digits = props => {
  const digObj = {'decimal': '.', 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
    const digits = Object.keys(digObj).reverse().map((val) => {
      return (
        <button id={val} className={['digit ', 'digit_'+val].join('')}value={digObj[val]} key={val} onClick={props.handleClick}>{digObj[val]}</button>
      );
    });
  return (
    <div className="digits">
      {digits}
    </div>
  );
};

export default Digits;