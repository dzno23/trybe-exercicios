import React, { Component } from 'react'
import './App.css';

export class App extends Component {

  state = {
    isLoading: true,
    firstName: '',
    lastName: '',
    email: '',
  }

  async componentDidMount() {
    const urlApi = 'https://api.randomuser.me/';
    const response = await fetch(urlApi);
    const json = await (response).json();

    this.setState({
      firstName: json.results[0].name.first,
      lastName: json.results[0].name.last,
      email: json.results[0].email,
      isLoading: false,
    })

  }

  render() {
    const { isLoading } = this.state;
    return (
      <div >
        { isLoading ? <p>Loading...</p> : (
            <>
              <h1>{`${this.state.firstName} ${this.state.lastName}`}</h1>
              <p>{ this.state.email }</p>
            </>
          )
        }

      </div>
    )
  }
}

export default App