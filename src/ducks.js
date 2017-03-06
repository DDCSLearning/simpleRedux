//actions
const ADD_POLL = 'ADD_POLL';

//actioncreators
export function createPoll (text) {
  return {
    type: ADD_POLL,
    text
  }
}

//reducers
export default function reducer ( state = [], action) {
  switch (action.type) {
    case ADD_POLL:
      return [
        ...state,
        {text: action.text}
      ];
    default:
      return state;
  }
}
