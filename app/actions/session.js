import db from '../db';

const uuidv4 = require('uuid/v4');

export const FETCH_SESSIONS = 'FETCH_SESSIONS';

export const getSessions = () => db.get('sessions').value();

const fetchSessions = () => {
  const sessions = getSessions();
  return {
    type: FETCH_SESSIONS,
    sessions
  };
};

export const saveSession = ({
  taskId,
  client,
  task,
  desc,
  startTime,
  endTime
}) => {
  db.get('sessions')
    .push({
      id: uuidv4(),
      taskId,
      startTime,
      endTime,
      client,
      task,
      desc
    })
    .write();

  return fetchSessions();
};
