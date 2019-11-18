// @flow
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import task from './task'
import session from './session'

export default function createRootReducer (history: History) {
  return combineReducers({
    router: connectRouter(history),
    task,
    session
  })
}
