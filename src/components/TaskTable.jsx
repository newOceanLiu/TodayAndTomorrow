import React from 'react';
import ItemRow from './TaskRow';

const TaskTable = () => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>Task</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
        <ItemRow description="ai jiajia" time="4" finish="false" />
        <ItemRow description="make cool app" time="3" finish="false" />
        <ItemRow description="learn japanese" time="2" finish="false" />
      </tbody>
    </table>
  </div>
);

export default TaskTable;
