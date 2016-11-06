import React, { PropTypes } from 'react';
import ItemRow from './TaskRow';

const TaskTable = (props) => {
  const rows = props.tasks.map((task, index) =>
    <ItemRow
      key={index}
      description={task.des}
      time={task.len}
      finish={task.status}
      priority={task.priority}
    />
  );
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Status</th>
            <th>Task</th>
            <th>Time</th>
            <th>Priority</th>
          </tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

TaskTable.propTypes = {
  tasks: PropTypes.arrayOf(React.PropTypes.object),
};

export default TaskTable;
