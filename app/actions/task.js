const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const uuidv4 = require('uuid/v4')
const moment = require('moment')

export const FETCH_TASKS = 'FETCH_TASKS'

export const fetchTasks = () => {
  return (dispatch: Dispatch) => {
    const tasks = db.get('tasks').value()
    dispatch({
      type: FETCH_TASKS,
      tasks
    })
  }
}

export const saveTask = task => {
  return (dispatch: Dispatch) => {
    db.get('tasks')
      .push({ ...task, id: uuidv4() })
      .write()

    fetchTasks()
  }
}

export const startTask = taskId => {
  const startTime = moment().format()
  return (dispatch: Dispatch) => {
    db.get('tasks')
      .find({ id: taskId })
      .assign({ startTime, endTime: null })
      .write()

    fetchTasks()
  }
}

export const stopTask = taskId => {
  const endTime = moment().format()
  return (dispatch: Dispatch) => {
    const startTime = db
      .get('tasks')
      .find({ id: taskId })
      .value().startTime

    db.get('tasks')
      .find({ id: taskId })
      .assign({ startTime: null, endTime: null })
      .write()

    db.get('sessions')
      .push({
        id: uuidv4(),
        taskId,
        startTime,
        endTime
      })
      .write()

    fetchTasks()
  }
}
