import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changeCell = () => {
    this.setState({
      color: this.props.changeCl
    })
  }
  
  render() {
    return (
      <div onClick={() => this.changeCell()} className="cell" style={{backgroundColor: this.state.color}}>
        
      </div>
    )
  }
  
}
