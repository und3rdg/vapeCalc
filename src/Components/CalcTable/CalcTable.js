import React, { Component } from 'react'
import './CalcTable.scss'
import './UserInput.scss'
import UserInput from './UserInput.js'
import Thead from './Thead.js'
import Tbody from './Tbody.js'
import {
  updateBase,
  total as calcTotal
}  from './../../Controlers/Calculate.js'

class CalcTable extends Component {
  constructor(){
    super()
    this.state = {
      total: 10,
      theadTitles: [ 'Ingredient', 'Millilitre', 'Gram', 'Percent' ],
      baseTotal: {ml:0, gr:0, percent:0},
      base: [
        { name: 'Nicotine' , ml: 0, gr: 0, percent: 7  , type:''},
        { name: 'PG'       , ml: 0, gr: 0, percent: 23 , type:''},
        { name: 'VG'       , ml: 0, gr: 0, percent: 60 , type:''},
      ],
      flavour: [
        { name: 'flav1'    , percent: 10 },
      ]
    }

    this.state.base = updateBase(this.state.base, this.state.total)
    this.state.baseTotal = calcTotal(this.state.base)
  }

  render(){
    const updateTotal = (event) => {
      const total = event.target.value
      const base = updateBase(this.state.base, total)
      const baseTotal = calcTotal(this.state.base)

      this.setState({ total, base, baseTotal })
    }

    return (
      <form onSubmit={e => e.preventDefault()}>
        <UserInput updateTotal={updateTotal} />
        <table className="calc_table">
          <Thead
            titles={this.state.theadTitles}
          />
          <Tbody
            base={this.state.base}
            baseTotal={this.state.baseTotal}
            total={this.state.total}
          />
        </table>
      </form>
    )
  }
}

export default CalcTable
