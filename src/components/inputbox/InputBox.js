import React, { Component } from 'react';

class InputBox extends Component {
  // parent function is passed down. handleEnter
  constructor(props) {
    super(props);

    // expecting as props: intial value and handleEnter
    this.state = {
      value: props.value,
      parentHandleEnter : props.handleEnter
    };

    // this is mandatory in React...don't know why yet
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // function that is called when the input box content changes
  handleChange = (event) => {
    this.setState({ value : event.target.value});
  }

  // function that is called when you press any key
  handleKeyPress = (event) => {
    
    if( this.state.value.length > 0 && event.key === 'Enter' ) {
      console.log('enter detected and value is:', this.state.value);
      this.state.parentHandleEnter(this.state.value);
      this.setState({value: ''});
    }
  }

  // function when you click the button
  handleClick = (event) => {
    console.log("inputbox clicked");
    if( this.state.value.length > 0) {
      this.state.parentHandleEnter(this.state.value);
      this.setState({value: ''});
    }
  }

  // this is the piece that generates the "view"
  render() {
    console.log('rendering input box. value:' , this.state.value)
    return (
      <div className="InputBox">
        <input
          type = "text"
          value = {this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          />
        <button className="InputBoxButton" onClick={this.handleClick}>Add Task</button>
      </div>
    );
  }
}

// this line names the component so you can import it later
export default InputBox;