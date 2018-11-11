import React, { Component } from 'react'
import './App.scss'
import CalcTable from './Components/CalcTable/CalcTable.js'


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
