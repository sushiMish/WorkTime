const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

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
      .push(task)
      .write()

    fetchTasks()
  }
}
