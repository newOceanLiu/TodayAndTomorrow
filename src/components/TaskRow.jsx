import React, { PropTypes } from 'react';

const TaskRow = props => (
  <tr>
    <td>{props.description}</td>
    <td>{props.time}</td>
    <td>{props.finish}</td>
  </tr>
);

TaskRow.propTypes = {
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  finish: PropTypes.string.isRequired,
};

export default TaskRow;
