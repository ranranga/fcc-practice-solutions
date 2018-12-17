// <!--Bind 'this' to a Class Method-->

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemCount: 0
      };
      // change code below this line
      this.addItem = this.addItem.bind(this)
      // change code above this line
    }
    addItem() {
      this.setState({
        itemCount: this.state.itemCount + 1
      });
    }
    render() {
      return (
        <div>
          { /* change code below this line */ }
          <button onClick={this.addItem}>Click Me</button>
          { /* change code above this line */ }
          <h1>Current Item Count: {this.state.itemCount}</h1>
        </div>
      );
    }
  };

  // <!--Use State to Toggle an Element-->
  // <!--Solution 1-->
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // change code below this line
      this.toggleVisibility = this.toggleVisibility.bind(this);
      // change code above this line
    }
    // change code below this line
    toggleVisibility() {
      this.setState({
        visibility: !this.state.visibility 
      });
    }
    // change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };

  // <!--Solution 2-->
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // change code below this line
      this.toggleVisibility = this.toggleVisibility.bind(this);
      // change code above this line
    }
    // change code below this line
    toggleVisibility() {
      console.log(this.state.visibility);
      if (this.state.visibility) {
        this.setState({
          visibility: false
        });
      } else {
        this.setState({
          visibility: true
        });
      }
    }
  
    // change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };

  // <!--Write a Simple Counter-->

  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // change code below this line
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      // change code above this line
    }
    // change code below this line
    increment() {
      this.setState({
        count: this.state.count + 1
      });
    }
  
    decrement() {
      this.setState({
        count: this.state.count - 1
      });
    }
  
    reset() {
      this.setState({
        count: 0
      });
    }
    // change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };

  // <!--Create a controlled input-->

  class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    //this.handleChange = this.handleChange.bind(this);

    // change code above this line
  }
  // change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }


  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
        <input value={this.state.input} onChange = {this.handleChange.bind(this)}/> /*or {this.handle}*/
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

// <!--Create a Controlled Form-->

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // change code below this line
      event.preventDefault();
      this.setState({
        submit: this.state.input
      });
      // change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            { /* change code below this line */ }
            <h1>{this.state.submit}</h1>
            <input value={this.state.input} onChange={this.handleChange}/>
            { /* change code above this line */ }
            <button type='submit'>Submit!</button>
          </form>
          { /* change code below this line */ }
           
          { /* change code above this line */ }
        </div>
      );
    }
  };

  