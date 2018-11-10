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
      base: [
        { name: 'Nicotine' , ml: 0, gr: 0, percent: 7  , type:''},
        { name: 'PG'       , ml: 0, gr: 0, percent: 23 , type:''},
        { name: 'VG'       , ml: 0, gr: 0, percent: 60 , type:''},
      ],
      baseTotal: {ml:0, gr:0, percent:0},
      flavour: [
        { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
      ],
      flavourTotal: {ml:0, gr:0, percent:0},
    }

    this.state.base = updateBase(this.state.base, this.state.total)
    this.state.baseTotal = calcTotal(this.state.base)
    this.state.flavour = updateBase(this.state.flavour, this.state.total)
    this.state.flavourTotal = calcTotal(this.state.flavour)
  }

  addFlavorHandler = () => {
    const emptyFlavor = { name: '' , ml: 0, gr: 0, percent: 0 , type:''}
    const flavour = [
      ...this.state.flavour,
      emptyFlavor
    ]
    this.setState({flavour})
  }

  render(){
    const updateTotalHandler = (event) => {
      const total = event.target.value

      const base = updateBase(this.state.base, total)
      const baseTotal = calcTotal(this.state.base)

      const flavour = updateBase(this.state.flavour, total)
      const flavourTotal = calcTotal(this.state.flavour)

      this.setState({ total, base, baseTotal, flavour, flavourTotal })
    }

    return (
      <form onSubmit={e => e.preventDefault()}>
        <UserInput updateTotalHandler={updateTotalHandler} />
        <table className="calc_table">
          <Thead
            titles={this.state.theadTitles}
          />
          <Tbody
            total={this.state.total}
            base={this.state.base}
            baseTotal={this.state.baseTotal}
            flavour={this.state.flavour}
            flavourTotal={this.state.flavourTotal}
          />
        </table>
        <button onClick={this.addFlavorHandler}>Add flavour</button>
      </form>
    )
  }
}

export default CalcTable
