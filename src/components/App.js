import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import logo from '../logo.svg';
import '../App.css';

import reducer from '../ducks';
import CreatePoll from './CreatePoll';
import DisplayPolls from './DisplayPolls';
import DisplayPollsR from '../containers/DisplayPollsR';

let store = createStore(reducer);


export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      polls: []
    }
  }
  updatePolls(event) {
    const polls = [...this.state.polls];
    const size = polls.length;
    polls[size] = event;
    this.setState({
      polls: polls
    });
  }
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CreatePoll updatePolls={(e)=> this.updatePolls(e)}/>
        <DisplayPollsR state={this.state}/>
      </div>
      </Provider>
    );
  }
}
