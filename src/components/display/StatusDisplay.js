import React, { Component } from 'react';

class StatusDisplay extends Component {

  // this is the piece that generates the "view"
  render() {
    console.log('rendering status display:' , this.props.value )
    return (
      <div className="StatusDisplay">
        <span>{this.props.value}</span>
      </div>
    );
  }
}

// this line names the component so you can import it later
export default StatusDisplay;