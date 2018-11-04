import React, { Component } from 'react'
import './CalcTable.scss'
import './UserInput.scss'
import UserInput from './UserInput.js'
import Thead from './Thead.js'
import Tbody from './Tbody.js'


class CalcTable extends Component {
  render(){
    const titles = [ 'Ingredient', 'Gram', 'Millilitre', 'Percent' ]

  
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
        <UserInput />
        <table className="calc_table">
          <Thead
            titles={titles}
          />
          <Tbody
            ingredients={ingredients}
            total="50"
          />
        </table>
      </div>
    )
  }
}






export default CalcTable
