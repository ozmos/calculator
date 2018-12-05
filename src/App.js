import React from 'react';
import './App.css';
import Container from './components/Container';
import calculateString from './functions/calculateString';
import formatString from './functions/formatString';
/*
  todo:
    [*]Add git repository
    [*]refactor functions into different components
    [*]reverse order of numerical buttons
    [*]add backspace button
    [*]add modulus
    []add square root
    []link buttons to keyboard events
*/


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
    switch (pressedBtn) {
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
      case 'back':
        if (currentInput !== '0' && currentInput.length > 1) {
          this.setState({
            input: currentInput.slice(0, currentInput.length - 1)
          });
        } else {
          this.setState({
            input: '0'
          });
        }
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
    const result = /&radic/.test(this.state.input) 
      ? calculateString(formatString(this.state.input))
      : calculateString(this.state.input);
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
          evaluate={this.evaluate} />
      </div>
    );
  }
}



export default App;
