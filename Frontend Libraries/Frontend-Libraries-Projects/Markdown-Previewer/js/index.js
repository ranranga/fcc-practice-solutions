var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Component = React.Component;
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

var UPDATE = 'UPDATE';

// Action Creator
var updateText = function updateText(text) {
  return { type: UPDATE, payload: text };
};

// Reducer
var initialState = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n\n *[Sachidanand Vaishnav](https://freecodecamp.com/scadyy)*';

var textReducer = function textReducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;var action = arguments[1];
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;}

};

// Presentational Component
var Input = function (_Component) {_inherits(Input, _Component);
  function Input(props) {_classCallCheck(this, Input);var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this,
    props));
    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(Input, [{ key: 'handleChange', value: function handleChange(
    event) {
      this.props.updateText(event.target.value);
      // console.log(event.target.value, this.props.text); 
      // lol somehow this happens with this method too?
    } }, { key: 'render', value: function render()
    {
      return React.createElement('div', { className: 'col-sm' },
        React.createElement('textarea', { rows: '20', className: 'form-control', onChange: this.handleChange, value: this.props.text }));

    } }]);return Input;}(Component);var


Output = function (_Component2) {_inherits(Output, _Component2);
  function Output(props) {_classCallCheck(this, Output);var _this2 = _possibleConstructorReturn(this, (Output.__proto__ || Object.getPrototypeOf(Output)).call(this,
    props));
    _this2.createMarkup = _this2.createMarkup.bind(_this2);return _this2;
  }_createClass(Output, [{ key: 'createMarkup', value: function createMarkup()
    {
      return {
        __html: marked(this.props.text, { sanitize: true }) };

    } }, { key: 'render', value: function render()
    {
      return React.createElement('div', { className: 'col-sm' },
        React.createElement('span', { dangerouslySetInnerHTML: this.createMarkup() }));

    } }]);return Output;}(Component);


var mapStateToProps = function mapStateToProps(state) {return { text: state };};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {return Redux.bindActionCreators({ updateText: updateText }, dispatch);};
var InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

var OutputContainer = connect(mapStateToProps, null)(Output);

var store = Redux.createStore(textReducer);

ReactDOM.render(
React.createElement(Provider, { store: store },
  React.createElement('div', null,
    React.createElement(InputContainer, null),
    React.createElement(OutputContainer, null))),


document.getElementById('app'));