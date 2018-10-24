import React, { Component } from 'react';
import InputBox from '../inputbox/InputBox';
import StatusDisplay from '../display/StatusDisplay';
import TaskList from '../list/TaskList';

class TodoApp extends Component {

  constructor() {
    // no props
    super();
    this.state = {
      
      log : 'this is the initial log message',
      tasks : [
        { task: 'read book' , id : 1},
        { task: 'walk' , id: 2}
      ]
    }

    this.handleEnter = this.handleEnter.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.createNewTask = this.createNewTask.bind(this);
  }

  // remove existing task
  handleDeleteItem = (id) => {
    let logMessage = 'Removing task with id: ' + id;

    console.log(logMessage);
    this.setState( {log : logMessage});
    
    let newTasks = this.state.tasks.filter( e => e.id !== id );
    console.log('new task:' , newTasks);

    this.setState( {tasks : newTasks} );
  }

  // you want to create new task
  handleEnter = (value) => {
    console.log('parent handleEnter. value =', value);

    let logMessage = 'The entered value: ' + value;
    
    
    this.setState({log : logMessage});
    this.createNewTask(value);
  }

  // adds new task using the text in value
  createNewTask(value) {
    let maxid = Math.max.apply( Math, this.state.tasks.map( t => t.id)) + 1;
    console.log('new max id:', maxid);

    let newTask = { task : value , id: maxid};
    console.log('new task:' , newTask);

    let newList = [ ...this.state.tasks , newTask];

    console.log(newList);

    this.setState( { tasks : newList});

  }

  render() {
    return (
      <div className="App">

        <StatusDisplay value={this.state.log} />
        <p />
        <InputBox value='initial value' handleEnter={this.handleEnter} />
        <p />
        <TaskList title='my task list' tasks={this.state.tasks} deleteItem={this.handleDeleteItem}/>
        
      </div>
      
    );
  }
}

export default TodoApp;
