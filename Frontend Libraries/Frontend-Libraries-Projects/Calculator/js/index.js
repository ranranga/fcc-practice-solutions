class Buttons extends React.Component {
  render() {
    return (
      <div id="buttons">
        <button id="clear"    value='AC' onClick={this.props.keyClicked}>AC</button>
        <button id="divide"   value='/'  onClick={this.props.keyClicked}>&divide;</button>
        <button id="multiply" value='*'  onClick={this.props.keyClicked}>x</button>

        <button id="seven"    value='7'  onClick={this.props.keyClicked}>7</button>
        <button id="eight"    value='8'  onClick={this.props.keyClicked}>8</button>
        <button id="nine"     value='9'  onClick={this.props.keyClicked}>9</button>
        <button id="subtract" value='-'  onClick={this.props.keyClicked}>-</button>

        <button id="four"     value='4'  onClick={this.props.keyClicked}>4</button>
        <button id="five"     value='5'  onClick={this.props.keyClicked}>5</button>
        <button id="six"      value='6'  onClick={this.props.keyClicked}>6</button>
        <button id="add"      value='+'  onClick={this.props.keyClicked}>+</button>

        <button id="one"      value='1'  onClick={this.props.keyClicked}>1</button>
        <button id="two"      value='2'  onClick={this.props.keyClicked}>2</button>
        <button id="three"    value='3'  onClick={this.props.keyClicked}>3</button>

        <button id="zero"     value='0'  onClick={this.props.keyClicked}>0</button>
        <button id="decimal"  value='.'  onClick={this.props.keyClicked}>.</button>
        <button id="equals"   value='='  onClick={this.props.keyClicked}>=</button>        
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prevKeyType: 'NULL',
      decimal: false,
      history: '0',
      display: '0',
      result: 0,
    }
    //this.allClear = this.allClear.bind(this);
    this.keyClicked = this.keyClicked.bind(this);
    this.evalResult = this.evalResult.bind(this);
    this.operatorClicked = this.operatorClicked.bind(this);
    this.operandClicked = this.operandClicked.bind(this);
  }
  
  allClear() {
    //console.log('Clear Screen');
    this.setState ({
      prevKeyType: 'NULL',
      decimal: false,
      history: '0',
      display: '0',
      result: 0,
    });
  }
  
  evalResult() {
    //console.log('in evalResult');
    const calcValue = Math.round(10000 * eval(this.state.history)) / 10000;
    this.setState ({
      prevKeyType: 'COMPUTE',
      display: calcValue,
      history: this.state.history + '=' + calcValue,
      decimal: false,
      result: calcValue
    });
  }
  
  operatorClicked(operator) {
    const previousKeyType = this.state.prevKeyType;
    this.setState ({
      prevKeyType: 'OPERATOR',
      display: operator,
      history: previousKeyType === 'OPERATOR' ? 
                 this.state.history.substring(0, this.state.history.length-1) + operator :
                 previousKeyType === 'COMPUTE' ? 
                   this.state.result + operator :
                   this.state.history + operator,
      decimal: false
    });
  }

  operandClicked(operand) {
    const previousKeyType = this.state.prevKeyType;
    if (this.state.history.length > 0 && this.state.display.length >= 10) {
      //console.log(this.state.display.length);
      this.setState( {
        prevKeyType: 'NULL',
        decimal: false,
        result: 0,
        display: 'Out of Memory',
        history: ''
      })
      return;
    }
    switch (previousKeyType) {
      case 'NULL': // first op
      case 'COMPUTE':
      case 'OPERATOR':
        //console.log('in null');
        this.setState ({
          prevKeyType: 'OPERAND',
          display: operand,
          history: previousKeyType === 'OPERATOR' ? this.state.history + operand : operand
        });
        break;
         
      case 'OPERAND':
        //console.log('in operand');
        if (operand === '.' && this.state.decimal) { break; }
        if (operand === '0' && this.state.display === '0') { break; }
        this.setState ({
          previousKeyType: 'OPERAND',
          display: this.state.display === '0' ? operand : this.state.display + operand,
          history: this.state.history === '0' ? operand : this.state.history + operand,
        });
        if (operand === '.') { this.setState ({ decimal: true }); }
        break;
      default:
        break;
    }
  }

  keyClicked(e){
    const currKeyVal = e.target.value;
    const prevKeyTyp = this.state.prevKeyType;
    //console.log(currKeyVal, prevKeyTyp);

    switch (currKeyVal) {
      case 'AC':
        this.allClear();
        break;
      case '=':
        this.evalResult();
        break;
      case '0': case '1': case '2': case '3': case '4':
      case '5': case '6': case '7': case '8': case '9': case '.':
        this.operandClicked(currKeyVal);
        break;
      case '+': case '-': case '*': case '/':
        this.operatorClicked(currKeyVal);
        break;
      default:
        break;
    }
  }
  render() {
    // trim string to prevent overflow of history
    const histLength = this.state.history.length;
    const histString = this.state.history.substring(histLength-14, histLength);
    return (
      <div id="calculator">
        <div id="title">Calculator</div>
        <DisplayScreen 
          history={histString} 
          display={this.state.display} />
        <Buttons keyClicked={this.keyClicked} />
        <footer>Scadyy © 2018</footer>
      </div>
    );
  }
}

function DisplayScreen(props) {
  //console.log(props);
  return (
    <div id="screen">
      <div id="history">{props.history}</div>
      <div id="display">{props.display}</div>
    </div>
  );
}

ReactDOM.render(<Calculator />, document.getElementById('root'));