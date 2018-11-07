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
    ingredients: {
      base: [
        { name: 'Nicotine' , percent: 7  , ml: 0, gr: 0, type:''},
        { name: 'PG'       , percent: 23 , ml: 0, gr: 0, type:''},
        { name: 'VG'       , percent: 60 , ml: 0, gr: 0, type:''},
      ],
      flavour: [
        { name: 'flav1'    , percent: 10 },
      ]
    }
  }

  render(){
    const updateTotal = (event) => {
      const total = event.target.value
      this.setState({total: total})
      updateBase(total)
    }

    const updateBase = (total) => {
      const base = this.state.ingredients.base
        .map((base, idx) => {
          base.type = base.name === 'VG' ? 'vg' : 'pg'
          base.ml = calcMl(total, base.percent)
          base.gr = calcGr(base.ml, base.type)
          return base
        })
      this.setState({ base })
    }

    // updateBase()

    return (
      <form onSubmit={e => e.preventDefault()}>
        <UserInput updateTotal={updateTotal} />
        <table className="calc_table">
          <Thead
            titles={this.state.theadTitles}
          />
          <Tbody
            base={this.state.ingredients.base}
            total={this.state.total}
          />
        </table>
      </form>
    )
  }
}

export default CalcTable
