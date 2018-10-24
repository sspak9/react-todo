
import React, { Component } from 'react';

class Task extends Component {

  constructor(props) {
    super(props);
    
    // have to do this for function inside of component. don't know why yet.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteItem(this.props.task.id);
  }

  // props to pass: task, deleteItem function
  render() {
    console.log('rendering task', this.props.task);

    // show one record
    return (
      <div className="Task">
        <li key={this.props.task.id}>
          <button onClick={this.handleClick}>delete ({this.props.task.id})</button>
          &nbsp;
          {this.props.task.task}
        </li>
      </div>
      
    );
  }
}

export default Task;