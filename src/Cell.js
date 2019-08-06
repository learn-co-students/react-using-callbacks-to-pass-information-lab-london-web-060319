import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  changeColor = (color) => {
    this.setState({
      color: color
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => {this.changeColor(this.props.colorNow())}}>
      </div>
    )
  }
  
}
