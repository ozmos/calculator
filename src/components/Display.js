import React from 'react';

const Display = props => {
  return (
    <div className="display" id="display_container">
      <div className='input_display' id='display'>
        <span className='input_span'>{props.display}</span></div>
      <div className='result' id='result'>
        <br/>
        <span className='result_span'>{props.result}</span>
          </div>
    </div>
  );
}

export default Display;