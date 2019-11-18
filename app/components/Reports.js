// @flow
import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'

export default ({ sessions }) => {
  return (
    <div>
      Sessions
      <Paper>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell align='left'>Task</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='left'>Start Time</TableCell>
              <TableCell align='left'>End Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map(row => (
              <TableRow key={row.id}>
                <TableCell align='left' component='th' scope='row'>
                  {row.client}
                </TableCell>
                <TableCell align='left'>{row.task}</TableCell>
                <TableCell align='left'>{row.desc}</TableCell>
                <TableCell align='left'>{row.startTime}</TableCell>
                <TableCell align='left'>{row.endTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}
