import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import CreatePoll from './CreatePoll';
import DisplayPolls from './DisplayPolls';


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
    console.info(event, this.state.polls);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CreatePoll updatePolls={(e)=> this.updatePolls(e)}/>
        <DisplayPolls state={this.state}/>
      </div>
    );
  }
}
