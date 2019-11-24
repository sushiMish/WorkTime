import uuidv4 from 'uuid/v4';
import moment from 'moment';
import { saveSession } from './session';
import db from '../db';

export const FETCH_TASKS = 'FETCH_TASKS';

export const getTasks = () => db.get('tasks').value();

const fetchTasks = () => {
  const tasks = getTasks();
  return {
    type: FETCH_TASKS,
    tasks
  };
};

export const saveTask = task => (dispatch: Dispatch) => {
  db.get('tasks')
    .push({ ...task, id: uuidv4() })
    .write();

  dispatch(fetchTasks());
};

export const startTask = taskId => {
  const startTime = moment().format();
  return (dispatch: Dispatch) => {
    db.get('tasks')
      .find({ id: taskId })
      .assign({ startTime, endTime: null })
      .write();

    dispatch(fetchTasks());
  };
};

export const stopTask = taskId => {
  const endTime = moment().format();
  return (dispatch: Dispatch) => {
    const { startTime, client, task, desc } = db
      .get('tasks')
      .find({ id: taskId })
      .value();

    db.get('tasks')
      .find({ id: taskId })
      .assign({ startTime: undefined, endTime: undefined })
      .write();

    dispatch(saveSession({ taskId, client, task, desc, startTime, endTime }));

    dispatch(fetchTasks());
  };
};

export const deleteTask = id => (dispatch: Dispatch) => {
  db.get('tasks')
    .remove({ id })
    .write();

  dispatch(fetchTasks());
};
