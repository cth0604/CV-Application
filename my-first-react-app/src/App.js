import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
      editTaskID: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat({ task: this.state.task, id: uniqid() }),
      task: "",
    });
  };

  onEditTask = (e) => {
    this.setState({
      editTaskID: e.currentTarget.id,
    })
  }

  onResubmitTask = (e) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        return (e.currentTarget.id !== task.id) ? task : {task: document.querySelector('.taskEdit').value, id: task.id};
      }),
      editTaskID: null,
    })
  }

  deleteTask = (e) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== e.currentTarget.id),
    });
  }

  render() {
    const { task, tasks, editTaskID } = this.state;
    return (
      <div className="col-6 mx-auto mt-5">
        <form onSubmit={this.onSubmitTask}>
          <div className="form-group">
            <label htmlFor="taskInput">Enter task</label>
            <input
              onChange={this.handleChange}
              value={this.state.task}
              type="text"
              id="taskInput"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
        </form>
        <Overview tasks={tasks} editTaskID={editTaskID} onEditTask={this.onEditTask} deleteTask={this.deleteTask} onResubmitTask={this.onResubmitTask} />
      </div>
    );
  }
}

export default App;
