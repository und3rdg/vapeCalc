import React, { Component } from 'react'
import './CalcTable.scss'
import './UserInput.scss'
import UserInput from './UserInput.js'
import Thead from './Thead.js'
import Tbody from './Tbody.js'


class CalcTable extends Component {
  state = {
    total: 50 
  }
  render(){
    const titles = [ 'Ingredient', 'Millilitre', 'Gram', 'Percent' ]
    const updateTotal = (event) => {
      this.setState({total: event.target.value})
    }

  
    let ingredients = {
      base: [
        { name: 'Nicotine' , percent: '7' },
        { name: 'PG'       , percent: '23' },
        { name: 'VG'       , percent: '60' },
      ],
      flavore: [
        { name: 'flav1'    , percent: 10 },
      ]
    }
    
    return (
      <div>
        <UserInput updateTotal={updateTotal} />
        <table className="calc_table">
          <Thead
            titles={titles}
          />
          <Tbody
            ingredients={ingredients}
            total={this.state.total}
          />
        </table>
      </div>
    )
  }
}






export default CalcTable
