import { connect } from 'react-redux';
import createPoll from '../ducks';
import DisplayPolls from '../components/DisplayPolls';

const mapStateToProps = state => {
  return {
    polls: state.polls
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(createPoll(text));
    }
  };
};

let DisplayPollsR = connect(mapStateToProps, mapDispatchToProps)(DisplayPolls);

export default DisplayPollsR;
