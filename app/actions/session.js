const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const uuidv4 = require('uuid/v4')
const moment = require('moment')

export const FETCH_SESSIONS = 'FETCH_SESSIONS'

export const getSessions = () => db.get('sessions').value()

const fetchSessions = () => {
  const sessions = getSessions()
  return {
    type: FETCH_SESSIONS,
    sessions
  }
}

export const saveSession = ({
  taskId,
  client,
  task,
  desc,
  startTime,
  endTime
}) => {
  return (dispatch: Dispatch) => {
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
      .write()

    dispatch(fetchSessions())
  }
}
