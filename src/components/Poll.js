import React from 'react';

const Poll = props => {
  return (
    <div>
      {Object.keys(props.state.polls).map(key => (
        <h3 key={key}>{props.state.polls[key]}</h3>
      ))}
    </div>
  );
};

export default Poll;
