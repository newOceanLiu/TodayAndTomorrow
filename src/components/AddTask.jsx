import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    alert(`Text field value is: ${this.state.value}`);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="good good study" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add task</button>
      </div>
    );
  }
}

export default AddTask;
