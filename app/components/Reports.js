/* eslint react/prop-types: 0 */
// @flow
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Divider from '@material-ui/core/Divider';
import Moment from 'react-moment';

export default ({ sessions }) => (
  <div>
    <h4>Sessions</h4>
    <Divider />
    <Paper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell align="left">Task</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left" component="th" scope="row">
                {row.client}
              </TableCell>
              <TableCell align="left">{row.task}</TableCell>
              <TableCell align="left">{row.desc}</TableCell>
              <TableCell align="left">
                <Moment format="dddd, MMMM Do YYYY">{row.startTime}</Moment>
              </TableCell>
              <TableCell align="left">
                <Moment duration={row.startTime} date={row.endTime} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
