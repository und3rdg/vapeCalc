import React, { Component } from 'react'
import './CalcTable.scss'
import './UserInput.scss'
import UserInput from './UserInput.js'
import Thead from './Thead.js'
import Tbody from './Tbody.js'
import {calcGrFromMl as calcGr, calcMlFromPercent as calcMl}  from './../../Controlers/Calculate.js'


class CalcTable extends Component {
  state = {
    total: 50,
    theadTitles: [ 'Ingredient', 'Millilitre', 'Gram', 'Percent' ],
    base: [
      { name: 'Nicotine' , ml: 0, gr: 0, percent: 7  , type:''},
      { name: 'PG'       , ml: 0, gr: 0, percent: 23 , type:''},
      { name: 'VG'       , ml: 0, gr: 0, percent: 60 , type:''},
    ],
    flavour: [
      { name: 'flav1'    , percent: 10 },
    ]
  }

  render(){
    const updateTotal = (event) => {
      const total = event.target.value
      this.setState({ total })
      updateBase(total)
    }

    const updateBase = (total) => {
      const base = this.state.base
        .map((base, idx) => {
          base.type = base.name === 'VG' ? 'vg' : 'pg'
          base.ml = calcMl(total, base.percent)
          base.gr = calcGr(base.ml, base.type)
          return base
        })
      this.setState({ base })
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
            total={this.state.total}
          />
        </table>
      </form>
    )
  }
}

export default CalcTable
