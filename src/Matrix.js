import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      backgroundColor: null
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} changeCl={this.state.backgroundColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  colorHandler = (colour) => {
    this.setState({
      backgroundColor: colour
    })
  }


  render() {
    return (
      <div id="app">
        <ColorSelector colourFunction={this.colorHandler} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
