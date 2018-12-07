import React from 'react';
import './styles/App.css';
import './styles/Container.css';
import './styles/Inputs.css'
import './styles/variables.css';
import './styles/gridAreas.css';
import './styles/resets.css';
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
    [*]add square root
    [*]link buttons to keyboard events
*/


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      result: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.upDateInput = this.upDateInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleClick(event) {
    this.upDateInput(event.target.innerHTML);
  }

  handleKeyPress(event) {
    const keys = ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "C", "Backspace", "+", "-", "*", "/",  "%", "=", "Enter"];
    if (keys.includes(event.key)) {
      this.upDateInput(event.key);
    } else return;
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
      case 'Backspace':
      case '\u2190' :
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
      case '=':
      case 'Enter':
      this.evaluate();
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
        console.log(btn);  
    }

  }

  evaluate() {
    const result = /\u221A/.test(this.state.input) //omit '0' from unicode U+0221A 
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
