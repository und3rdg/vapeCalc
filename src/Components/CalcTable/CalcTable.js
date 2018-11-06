import React, { Component } from 'react'
import './CalcTable.scss'
import './UserInput.scss'
import UserInput from './UserInput.js'
import Thead from './Thead.js'
import Tbody from './Tbody.js'


class CalcTable extends Component {
  state = {
    total: 50,
    theadTitles: [ 'Ingredient', 'Millilitre', 'Gram', 'Percent' ],
    ingredients: {
      base: [
        { name: 'Nicotine' , percent: '7' },
        { name: 'PG'       , percent: '23' },
        { name: 'VG'       , percent: '60' },
      ],
      flavour: [
        { name: 'flav1'    , percent: 10 },
      ]
    }
  }
  render(){
    const updateTotal = (event) => {
      this.setState({total: event.target.value})
    }
  
    
    return (
      <form onSubmit={e => e.preventDefault()}>
        <UserInput updateTotal={updateTotal} />
        <table className="calc_table">
          <Thead
            titles={this.state.theadTitles}
          />
          <Tbody
            ingredients={this.state.ingredients}
            total={this.state.total}
          />
        </table>
      </form>
    )
  }
}

export default CalcTable
