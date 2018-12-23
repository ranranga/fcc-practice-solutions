import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://talaikis.com/api/quotes/random/',
      quote: '',
      author: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleTweetClick = this.handleTweetClick.bind(this);
  }

  componentDidMount() {
    fetch(this.state.url).then(function(res) {
      return res.json();
    }).then(function(data) {
      this.setState({
        quote: data.quote,
        author: data.author
      });
    }.bind(this));
  }

  handleClick() {
    fetch(this.state.url).then(function(res) {
      return res.json();
    }).then(function(data) {
      this.setState({
        quote: data.quote,
        author: data.author
      });
    }.bind(this));
  }

  handleTweetClick() {
    window.open(`https://twitter.com/intent/tweet?text="${this.state.quote}" -${this.state.author}`);
  }

  render() {
    const quoteStyle = {
      backgroundColor: '#fff',
      border: '1px solid #dddfe2',
      borderRadius: 4,
      padding: 15
    }

    return (
      <div className="App container center-div" align="center" id="wrapper">
        <div className="row">
          <div>
            <blockquote style={quoteStyle} className="text-center my-5">
              <q>{this.state.quote}</q>
              <p>- {this.state.author}</p>
            </blockquote>
            <div className="mb-5 mx-auto d-block btn-group" role="group">
              <button 
                onClick={this.handleTweetClick}
                className="btn btn-primary">
                <i className="fab fa-twitter"></i>
                &nbsp;Tweet
              </button>
              <button 
                onClick={this.handleClick}
                className="btn btn-primary">
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
