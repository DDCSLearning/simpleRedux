import React from 'react';

const CreatePoll = ({ onSubmit }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(input.value);
          if (!input.value.trim()) {
            return;
          }
          input.value = '';
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
};

export default CreatePoll;
