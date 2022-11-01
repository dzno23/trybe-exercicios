import React, { Component } from 'react'
import Nome from './Nome';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      sobrenome: '',
      idade: 0,
      estado: '',
      recado: '',
      aceito: false,
    };

    this.alteraEstado = this.alteraEstado.bind(this);
  }

  alteraEstado({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <form className="form">
          <Nome value={ this.state.nome } alteraEstado={ this.alteraEstado }/>

          <label className="itemForm">
            Sobrenome:<input type="text" name="sobrenome" value={ this.state.sobrenome } onChange={ this.alteraEstado }></input>
          </label>

          <label className="itemForm">
            Idade:<input type="number" name="idade" value={ this.state.idade } onChange={ this.alteraEstado }></input>
          </label>

          <label className="itemForm">
            Estado:<select name="estado" value={ this.state.estado } onChange={ this.alteraEstado }>
              <option value="">–</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </label>

          <label className="itemForm">
            Deixe seu recado:<textarea name="recado" value={ this.state.recado } onChange={ this.alteraEstado }></textarea>
          </label>

          <label className='itemForm'>
            Termos de uso:
            <input type="checkbox" name="aceito" value={ this.state.aceito } onChange={ this.alteraEstado }></input>
          </label>
        </form>
      </div>
    )
  }
}

export default Form