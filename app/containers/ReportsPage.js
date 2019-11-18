import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Reports from '../components/Reports';
import * as sessionActions from '../actions/session';

function mapStateToProps(state) {
  return {
    sessions: state.session.sessions === null ? sessionActions.getSessions() : state.session.sessions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(sessionActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
