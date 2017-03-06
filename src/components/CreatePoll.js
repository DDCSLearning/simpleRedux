import React, { Component } from 'react';
let input;
export default class CreatePoll extends Component {
  handleSumbit(e) {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    this.props.updatePolls(input.value);
    input.value = '';
  }
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.handleSumbit(e);
          }}
        >
          <h2>Add your Poll</h2>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
