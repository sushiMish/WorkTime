// @flow
import { FETCH_SESSIONS } from '../actions/session';
import type { Action } from './types';

export default function counter(state = { sessions: null }, action: Action) {
  switch (action.type) {
    case FETCH_SESSIONS:
      return {
        ...state,
        sessions: Array.from(action.sessions)
      };
    default:
      return state;
  }
}
