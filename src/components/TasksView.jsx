import React, { PropTypes } from 'react';
import AddTask from './AddTask';
import TaskTable from './TaskTable';

const TasksView = (props) => {
  const title = `Tasks of ${props.name}`;
  let addTask = null;
  if (props.name === 'Tomorrow') {
    addTask = <AddTask />;
  }
  return (<div>
    <h1>{title}</h1>
    {addTask}
    <TaskTable />
  </div>);
};

TasksView.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TasksView;
