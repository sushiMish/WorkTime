import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home'
import * as taskActions from '../actions/task'

function mapStateToProps (state) {
  return {
    tasks: state.task.tasks === null ? taskActions.getTasks() : state.task.tasks
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(taskActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
