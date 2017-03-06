import React, { Component } from 'react';

import Poll from './Poll';

export default class DisplayPolls extends Component {
  render() {
    return (
      <div>
        <ul>
          <Poll state={this.props.state} />
        </ul>
      </div>
    );
  }
}
