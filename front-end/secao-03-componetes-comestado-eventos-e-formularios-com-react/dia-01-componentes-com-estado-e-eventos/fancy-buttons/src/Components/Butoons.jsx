import React, { Component } from 'react'

class Butoons extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      numeroDeCliques: 0,
    }
  }

  handleClick () {
    this.setState((prevState, _props) => ({
      numeroDeCliques: prevState.numeroDeCliques + 1
    }))
  }
  
  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      </>
    )
  }
}

export default Butoons