import React, { PropTypes } from 'react';

class TaskRow extends React.Component {
  getDescription() {
    if (this.props.finish) {
      return <span style={{ color: 'green' }}>{this.props.description}</span>;
    } else if (this.props.priority) {
      return <span style={{ color: 'red' }}>{this.props.description}</span>;
    }
    return this.props.description;
  }

  render() {
    const des = this.getDescription();
    return (
      <tr>
        <td><input type="checkbox" value={this.props.finish} checked={this.props.finish} />{' '}</td>
        <td>{des}</td>
        <td>{this.props.time}</td>
        <td><input type="checkbox" value={this.props.priority} checked={this.props.priority} />{' '}</td>
      </tr>
    );
  }
}

TaskRow.propTypes = {
  description: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  finish: PropTypes.bool.isRequired,
  priority: PropTypes.bool.isRequired,
};

export default TaskRow;
