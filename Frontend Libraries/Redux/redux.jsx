// Create a Redux Store


const reducer = (state = 5) => {
    return state;
    }
    
    // Redux methods are available from a Redux object
    // For example: Redux.createStore()
    // Define the store here:
    
    var store = Redux.createStore(reducer);

// Get State from the Redux Store

const store = Redux.createStore(
    (state = 5) => state
    );
    
    // change code below this line
    let currentState = store.getState();

// Define a Redux Action

// Define an action here:
let action = {
    type: 'LOGIN'
    };


// Define an Action Creator

const action = {
    type: 'LOGIN'
    }
    // Define an action creator here:
    
    function actionCreator() {
    return action;
    }

// Dispatch an Action Event

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction());

  //  Handle an action in the store

  const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // change code below this line
    if (action.type == 'LOGIN') {
      return state = {
        login: true
      }
    } else {
      return state
    }
    // change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };

  // Use a Switch Statement to Handle Multiple Actions

  const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // change code below this line
    switch (action.type) {
      case 'LOGIN':
        return {authenticated: true}
        break;
      case 'LOGOUT':
        return {authenticated: false}
        break;
      default:
        return state;
  
    }
    // change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };

  // Use const for action type

  // change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

// Register a store listener

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line
store.subscribe(() => count += 1);
// change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count); 