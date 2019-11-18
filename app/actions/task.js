const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const uuidv4 = require('uuid/v4')
const moment = require('moment')

export const FETCH_TASKS = 'FETCH_TASKS'

export const getTasks = () => db.get('tasks').value()

const fetchTasks = () => {
  const tasks = getTasks();
  return {
    type: FETCH_TASKS,
    tasks
  }
}

export const saveTask = task => {
  return (dispatch: Dispatch) => {
    db.get('tasks')
      .push({ ...task, id: uuidv4() })
      .write()

    dispatch(fetchTasks())
  }
}

export const startTask = taskId => {
  const startTime = moment().format()
  return (dispatch: Dispatch) => {
    db.get('tasks')
      .find({ id: taskId })
      .assign({ startTime, endTime: null })
      .write()

    dispatch(fetchTasks())
  }
}

export const stopTask = taskId => {
  const endTime = moment().format()
  return (dispatch: Dispatch) => {
    const { startTime, task, desc } = db
      .get('tasks')
      .find({ id: taskId })
      .value()

    db.get('tasks')
      .find({ id: taskId })
      .assign({ startTime: undefined, endTime: undefined })
      .write()

    db.get('sessions')
      .push({
        id: uuidv4(),
        taskId,
        startTime,
        endTime,
        task,
        desc
      })
      .write()

    dispatch(fetchTasks())
  }
}
