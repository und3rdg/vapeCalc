import React, { Component } from 'react'
import './App.scss'
import CalcTable from './Components/CalcTable/CalcTable'


class App extends Component {
  render() {
    return (
      <div className="container">
        <CalcTable />
      </div>
    )
  }
}

export default App
