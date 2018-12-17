// <!--Review using props with stateless functional components-->

class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };
  // change code below this line
  const Camper = (props) => {
    return (
      <p>{props.name}</p>
    );
  };
  
  Camper.defaultProps = {
    name: 'CamperBot'
  };
  
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  };

  // <!--Create a Stateful Component-->

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        // initialize state here
        this.state = {
            name: "Name"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};

// <!--Render state in the user interface-->

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        return (
            <div>
                { /* change code below this line */ }
                <h1>{this.state.name}</h1>
                { /* change code above this line */ }
            </div>
        );
    }
};

// <!--Render State in the User Interface Another Way-->

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        // change code below this line
        const name = this.state.name;
        // change code above this line
        return (
            <div>
                { /* change code below this line */ }
                <h1>{name}</h1>
                { /* change code above this line */ }
            </div>
        );
    }
};

// <!--Set State with this.setState-->

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        // change code below this line
        this.setState({
            name: 'React Rocks!'
        });
        // change code above this line
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};

// <!--Advanced props usage-->

// <!--Pass State as Props to Child Components-->

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           <Navbar name={this.state.name}/* your code here */ />
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        <h1>Hello, my name is: {this.props.name}/* your code here */ </h1>
      </div>
      );
    }
  };

// <!--Pass a Callback as Props-->

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* change code below this line */ }
          <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
          <RenderInput input={this.state.inputValue}/>
          { /* change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };

  