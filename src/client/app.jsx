import React from 'react';
import ReactDOM from 'react-dom';
import TasksView from '../components/TasksView';
import FakeTasks from '../shared/FakeTasks';

ReactDOM.render(<TasksView name="Tomorrow" tasks={FakeTasks} />, document.querySelector('.app'));
