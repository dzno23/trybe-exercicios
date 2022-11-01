import React, { Component } from 'react'

class Nome extends Component {
  render() {
    const { value, alteraEstado } = this.props;
    return (
      <div>
          <label className="itemForm">
            Nome:<input type="text" name="nome" value={ value } onChange={ alteraEstado }></input>
          </label>
      </div>
    )
  }
}

export default Nome