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
import StartIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  }
}))

export default function Home ({
  tasks,
  saveTask,
  fetchTasks,
  startTask,
  stopTask
}) {
  const classes = useStyles()

  const [client, setClient] = useState('')
  const [task, setTask] = useState('')
  const [desc, setDesc] = useState('')

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
        value={client}
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
        value={task}
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
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <Fab
        color='primary'
        aria-label='add'
        className={classes.fab}
        onClick={e => {
          saveTask({ client, task, desc })
          setClient('')
          setTask('')
          setDesc('')
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
              <TableCell align='left'>Task</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='left'>Status</TableCell>
              <TableCell align='left'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map(row => (
              <TableRow key={row.id}>
                <TableCell align='left' component='th' scope='row'>
                  {row.client}
                </TableCell>
                <TableCell align='left'>{row.task}</TableCell>
                <TableCell align='left'>{row.desc}</TableCell>
                <TableCell align='left'>
                  {row.startTime && !row.endTime
                    ? 'In Progress'
                    : 'Yet to Start'}
                </TableCell>
                <TableCell align='left'>
                  {row.startTime && !row.endTime ? (
                    <Fab
                      color='primary'
                      size='small'
                      onClick={e => stopTask(row.id)}
                    >
                      <StopIcon />
                    </Fab>
                  ) : (
                    <Fab
                      color='primary'
                      size='small'
                      onClick={e => startTask(row.id)}
                    >
                      <StartIcon />
                    </Fab>
                  )}
                  &nbsp;
                  <Fab color='secondary' size='small'>
                    <DeleteIcon />
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}
