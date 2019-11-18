import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Fab from '@material-ui/core/Fab'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'

import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
const uuidv4 = require('uuid/v4')

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  }
}))

export default function Home ({ tasks, saveTask, fetchTasks }) {
  const classes = useStyles()

  const [client, setClient] = useState('')
  const [task, setTask] = useState('')
  const [desc, setDesc] = useState('')

  fetchTasks();

  return (
    <div>
      <TextField
        id='wt-client'
        label='Client'
        type='text'
        margin='normal'
        variant='outlined'
        autoComplete='wt-client'
        className={classes.fab}
        onChange={e => setClient(e.target.value)}
      />
      &nbsp;
      <TextField
        id='wt-task'
        label='Task'
        type='text'
        margin='normal'
        variant='outlined'
        autoComplete='wt-task'
        className={classes.fab}
        onChange={e => setTask(e.target.value)}
      />
      &nbsp;
      <TextField
        id='wt-desc'
        label='Description'
        type='text'
        margin='normal'
        variant='outlined'
        autoComplete='wt-desc'
        className={classes.fab}
        onChange={e => setDesc(e.target.value)}
      />
      <Fab
        color='primary'
        aria-label='add'
        className={classes.fab}
        onClick={e => {
          saveTask({ id: uuidv4(), client, task, desc });
          setClient('');
          setTask('');
          setDesc('');
        }}
      >
        <AddIcon />
      </Fab>
      <Divider />
      <Paper className={classes.fab}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell align='right'>Task</TableCell>
              <TableCell align='right'>Description</TableCell>
              <TableCell align='right'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map(row => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>
                  {row.client}
                </TableCell>
                <TableCell align='right'>{row.task}</TableCell>
                <TableCell align='right'>{row.desc}</TableCell>
                <TableCell align='right' />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}
