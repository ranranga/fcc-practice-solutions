
// <!--componentWillMount-->

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // change code below this line
      console.log('---');
      // change code above this line
    }
    render() {
      return <div />
    }
  };

  // <!--Use the Lifecycle Method componentDidMount-->

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout( () => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          <h1>Active Users: { this.state.activeUsers }</h1>
        </div>
      );
    }
  };

  // <!--ComponentWillUnmount-->

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // change code below this line
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
    // change code above this line
    handleEnter() {
      this.setState({
        message: this.state.message + 'You pressed the enter key! '
      });
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };

  // <!--Manage Updates with Lifecycle Methods-->

  class Dialog extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillUpdate() {
      console.log('Component is about to update...');
    }
    // change code below this line
    componentWillReceiveProps(nextProps) {
      console.log('props---',this.props);
      console.log('next props---',nextProps);
    }
  
    componentDidUpdate() {
      console.log('the component has updated');
    }
    // change code above this line
    render() {
      return <h1>{this.props.message}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'First Message'
      };
      this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage() {
      this.setState({
        message: 'Second Message'
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.changeMessage}>Update</button>
          <Dialog message={this.state.message}/>
        </div>
      );
    }
  };

  // <!--shouldComponentUpdate-->

  class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
       // change code below this line
       return (nextProps.value % 2 == 0) ? true : false;
       // change code above this line
    }
    componentWillReceiveProps(nextProps) {
      console.log('Receiving new props...');
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState({
        value: this.state.value + 1
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value}/>
        </div>
      );
    }
  };

  