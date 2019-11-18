// @flow
import { FETCH_TASKS } from '../actions/task';
import type { Action } from './types';

export default function tasks(state = {tasks: []}, action: Action) {
  switch (action.type) {
    case FETCH_TASKS:
      return {
          ...state,
          tasks: action.tasks
      };
    default:
      return state;
  }
}
