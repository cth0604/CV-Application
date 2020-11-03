import React, { Component } from "react";
import uniqid from "uniqid";
import EditButton from "./EditButton";
import TaskName from "./TaskName";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, editTaskID, onEditTask, deleteTask, onResubmitTask } = this.props;
    return (
      <div className="Overview">
        <ul className="list-unstyled">
          {tasks.map((task, i) => {
            return (
              <div className="mb-2" key={uniqid()}>
                <TaskName task={task} editTaskID={editTaskID} index={i} />
                <button
                  className="float-right"
                  id={task.id}
                  onClick={deleteTask}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
                <EditButton taskID={task.id} editTaskID={editTaskID} onEditTask={onEditTask} onResubmitTask={onResubmitTask} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
