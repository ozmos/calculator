import React from 'react';
import './App.css';
import Display from './components/Display';
/*
  todo:
    []Add git repository
    []refactor functions into different components
    []reverse order of numerical buttons
    []add backspace button
    []add modulus
    []add square root
    []link buttons to keyboard events
*/


const Digits = props => {
  return (
    <button className="digit" id={props.id} onClick={props.handleClick}>{props.value}</button>
  );
};

const Operators = props => {
  return (
    <button className="operator" id={props.id} onClick={props.handleClick}>{props.value}</button>
  );
};

const Clear = props => {
  return (
    <button className="clear" id="clear" onClick={props.handleClick}>C</button>
  );
}

const Equals = props => {
  return (
    <button className="equals" id="equals" className='equals' onClick={props.evaluate}>=</button>
  );
}
const Inputs = props => {
  const digObj = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'decimal': '.'};
  const digits = Object.keys(digObj).map((val, i) => {
    return (
      <Digits id={val} className={['digit ', 'digit_'+i].join('')}value={digObj[val]} key={val} handleClick={props.handleClick}/>
    );
  });
  const opObj = {'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/'};
  const operators = Object.keys(opObj).map((val, i) => {
    return (
      <Operators id={val} value={opObj[val]} key={val} handleClick={props.handleClick}/>
    );  
  });
  return (
    <div className="inputs">
      <div className='digits'>{digits}
        <Clear handleClick={props.handleClick}/>
      </div>
      <div className='operators'>{operators}</div>
        <Equals evaluate={props.evaluate}/>
      </div>
  );
}


const Container = props => {
  return (
    <div className="container">
      <Display 
        display={props.display}
        result={props.result}/>  
      <Inputs handleClick={props.handleClick} evaluate={props.evaluate}/>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      result: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.upDateInput = this.upDateInput.bind(this);
  }
    
  handleClick(event) {
    this.upDateInput(event.target.innerText);
  }
  
  upDateInput(btn) {
    const pressedBtn = btn;
    const currentInput = this.state.input;
    switch(pressedBtn) {
      case '0':
        currentInput === '0' ?
        this.setState({
      //change this
          input: '0' 
    })
        : this.setState({
          input: currentInput.concat(pressedBtn)
        });
      break;
      case '.':
        /\.\d*$/.test(currentInput) ? this.setState({
          input: currentInput
        }) : this.setState({
          input: currentInput.concat(pressedBtn)
        });
      break;
      case '+':
        /\+$/.test(currentInput) ? this.setState({
          input: currentInput
        }) : this.setState({
          input: currentInput.concat(pressedBtn)
        });
      break;
      case '-':
        /-$/.test(currentInput) ? this.setState({
          input: currentInput
        }) : this.setState({
          input: currentInput.concat(pressedBtn)
        });
      break;
      case '*':
        /\*$/.test(currentInput) ? this.setState({
          input: currentInput
        }) : this.setState({
          input: currentInput.concat(pressedBtn)
        });
      break;
      case '/':
        /\/$/.test(currentInput) ? this.setState({
          input: currentInput
        }) : this.setState({
          input: currentInput.concat(pressedBtn)
        });
      break;
      case 'C':
        this.setState({
           input: '0',
           result: ''
        });
      break;
      default:
        currentInput === '0' ?
          this.setState({
          input: pressedBtn
        }) : 
        this.setState({
          input: currentInput.concat(pressedBtn),
          result: ''
        });
        
    }
    
  }
  
  evaluate() {
    const result = calculateString(this.state.input);
    this.setState({
      result: result
    });
    this.setState({
      input: result.toString()
    });
  }
  
  render() {
    return (
    <div className="App">
        <Container 
          display={this.state.input}
          result={this.state.result}
          handleClick={this.handleClick}
          evaluate={this.evaluate}/>
    </div>
    );
  }
}

const mathOps = {
	'+': function(x,y) { return x + y },
	'-': function(x,y) { return x - y },
	'*': function(x,y) { return x * y },
	'/': function(x,y) { return x / y }
};

function calculateString(str) {
  
	const digits = str.split(/[^0-9\.]+/).map(val => Number(val));
	const operators = str.split(/\d+/)
		.filter(val => /[^0-9\.]/
		.test(val))
		.map(val => val.match(/.$/));
	let result = digits[0];
	for (let i = 0; i < operators.length; i++) {
		
		result = mathOps[operators[i]](result, digits[i+1]);
    	
	}
	return result;
}

export default App;
