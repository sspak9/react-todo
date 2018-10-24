
import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {

  // props to pass: title , tasks[] => { task , key } , deleteItem class
  render() {

    console.log('rendering task list:' , this.props.tasks);

    // show list title and items
    return (
      <div className="TaskList">
        <div className="TaskTitle">
          <span>{this.props.title}</span>
        </div>
          <ul>
            { this.props.tasks.map( (todo) => 
              {
                return <Task key={todo.id} task={todo} deleteItem={this.props.deleteItem} />
              }
            )}
          </ul>
      </div>
      
    );
  }
}

export default TaskList;