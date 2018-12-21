// ------ Getting started with react redux

class DisplayMessages extends React.Component {
    // change code below this line
    constructor(props) {
      super(props);
  
      this.state = {
        input: '',
        messages: []
      }
    }
  
    // change code above this line
    render() {
      return <div />
    }
  };


  // ------- Manage state locally first

  class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // add handleChange() and submitMessage() methods here
  
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
  
    submitMessage(event) {
      event.preventDefault();
      this.setState({
        messages: this.state.messages.concat(this.state.input),
        input: ''
      });
    }
  
    render() {
      console.log(this.state.messages.map(i=><li>{i}</li>));
      const msgList = this.state.messages.map(i=><li>{i}</li>);
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
          <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
          <button type='submit' onClick={this.submitMessage.bind(this)}>Submit !</button>
          <ul>
            {msgList}
          </ul>
          { /* change code above this line */ }
        </div>
      );
    }
  };

  // -----  Extract State Logic to Redux

  // define ADD, addMessage(), messageReducer(), and store here:

// Action type
const ADD = 'ADD';

// Action Creator
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

// Reducer
const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return state.concat(action.message);
    default:
      return state;
  }
};

 // Store
const store = Redux.createStore(messageReducer);

// ----  Use provider to connect redux to react

// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React Code:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here
  constructor(props) {
      super(props);
  }

  render() {
      
      return (
        <Provider store={store}>
            <DisplayMessages />
        </Provider>
      );
  }
  // change code above this line
};

// ----- Map state to props

const state = [];

// change code below this line

const mapStateToProps = (state) => {
  return {messages: state}
}

// ----- Map dispatch to props
const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // change code below this line
  const mapDispatchToProps = (dispatch) => ({
      submitNewMessage: function(newMessage) {
          dispatch(addMessage(newMessage));
      }
  });
  
// ----- Connect Redux to React

const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  const mapStateToProps = (state) => {
    return {
      messages: state
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message));
      }
    }
  };
  
  class Presentational extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h3>This is a Presentational Component</h3>
    }
  };
  
  const connect = ReactRedux.connect;
  // change code below this line
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);

// ----- Connect Redux to the Messages App

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// define the Container component here:
// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//   }

// };

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // complete the return statement:
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};


// ----- Extract Local State into Redux

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState({
      input: ''
    });
    this.props.submitNewMessage(this.state.input) // Main challange
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};



const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};


// ----- Moving forward from here

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider, connect } from 'react-redux'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// import rootReducer from './redux/reducers'
// import App from './components/App'

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );

// change code below this line
console.log('Now I know React and Redux!');
