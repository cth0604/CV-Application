import React, { Component } from "react";

class TaskName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task.task,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }

  render() {
    const { task, editTaskID, index } = this.props;
    if (task.id === editTaskID) {
      return (
        <li className="d-inline">
          {index + 1}.{" "}
          <input
            value={this.state.task}
            type="text"
            onChange={this.handleChange}
            className="taskEdit"
          />
        </li>
      );
    } else {
      return (
        <li className="d-inline">
          {index + 1}. {task.task}
        </li>
      );
    }
  }
}

export default TaskName;
