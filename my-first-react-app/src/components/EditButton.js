import React, { Component } from "react";

class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { taskID, editTaskID, onEditTask, onResubmitTask } = this.props;
    if (taskID === editTaskID) {
      return <button className="float-right" id={taskID} onClick={onResubmitTask}>Resubmit</button>;
    } else {
      return (
        <button className="float-right" id={taskID} onClick={onEditTask}>
          <i className="fas fa-edit"></i>
        </button>
      );
    }
  }
}

export default EditButton;
