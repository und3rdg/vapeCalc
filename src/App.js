import React, { Component } from 'react'
import './App.scss'
import CalcTable from './Components/Table/CalcTable.js'


class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>Title of recipes</h1>
        </header>
        <CalcTable />
      </div>
    )
  }
}

export default App
