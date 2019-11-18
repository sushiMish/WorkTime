// @flow
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import task from './task'

export default function createRootReducer (history: History) {
  return combineReducers({
    router: connectRouter(history),
    task
  })
}
