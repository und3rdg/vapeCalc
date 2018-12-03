import React, { Component } from 'react'
import './CalcTable.scss'
import Title from './Title'
import UserInput from './UserInput'
import Thead from './Thead'
import Tbody from './Tbody'
import {
  calcIngredients,
  calcTotal,
  updateIngredients,
  baseFromRatio,
  ratioFromBase,
}  from './../../Controlers/Calculate'
import { sendToApi } from './../../Controlers/api'

class CalcTable extends Component {
  constructor(){
    super()
    let state = {
      recipeName: '',
      total: 50,
      theadTitles: [ 'Ingredient', 'Millilitre', 'Gram', 'Percent' ],
      base: [
        { name: 'Nicotine' , ml: 0, gr: 0, percent: 7  , type:'pg'},
        { name: 'PG'       , ml: 0, gr: 0, percent: 23 , type:'pg'},
        { name: 'VG'       , ml: 0, gr: 0, percent: 60 , type:'vg'},
      ],
      baseTotal: {ml:0, gr:0, percent:0},
      flavour: [
        // sample data
        /**/
        { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:'pg'},
        { name: 'Caramel (FA)' , ml: 2, gr: 10, percent: 10 , type:'pg'},
        { name: 'Kiwi (TPA)' , ml: 2, gr: 10, percent: 10 , type:'pg'},
        /**/
      ],
      flavourTotal: {ml:0, gr:0, percent:0},
      ratio: {
        vg: 60,
        pg: 40 
      }
    }
    
    state.base = baseFromRatio(state)
    // state.ratio = ratioFromBase(state)
    state = { ...state, ...updateIngredients(state.total, state.base, state.flavour) }
    this.state = state 
  }


  render(){
    return (
      <form
        onSubmit={e => e.preventDefault()}
      >
        <Title
          recipeName={this.state.recipeName}
          titleHandler={this.titleHandler}
        />
        <UserInput
          totalHandler={this.totalHandler}
          total={this.state.total}
          ratio={this.state.ratio.vg}
          ratioHandler={this.ratioHandler}
          
        />
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
            percentHandler={this.percentHandler}
            nameHandler={this.nameHandler}
            delFlavourHandler={this.delFlavourHandler}
          />
        </table>
        <button
          type="button"
          onClick={this.addFlavourHandler}
          tabIndex="500"
        >Add flavour</button>
        <button
          type="button"
          tabIndex="600"
          onClick={this.saveHandler}
        >Save</button>
      </form>
    )
  }


  ratioHandler = (event) => {
    let state = { ...this.state }
    state.ratio.vg = +event.target.value
    state.ratio.pg = +(100 - event.target.value)
    state.base = baseFromRatio(state)
    state = { ...state, ...updateIngredients(state.total, state.base, state.flavour) }
    this.setState({ state })
  }


  percentHandler = (event, idx, type) => {
    if(type !== "base" && type !== "flavour"){
      console.error(`type can only by 'base' or 'flavour' string. Inserted: [${type}]`)
      return
    }

    let variant = [ ...this.state[type] ]
    variant[idx].percent = +event.target.value
    variant = calcIngredients(variant, this.state.total)

    let state = {
      ...this.state,
      [type]: variant,
      [type+"Total"]: calcTotal(variant)
    }

    // if changed pg or vg update ratio, otherwise percent pg
    if(type === 'base' && idx > 0){
      state.ratio = ratioFromBase(state)
    } else {
      state.base = baseFromRatio(state)
    }
    state = { ...state, ...updateIngredients(state.total, state.base, state.flavour) }
    this.setState({ state })
  }


  totalHandler = (event) => {
    let state = { ...this.state, total: +event.target.value }

    state.base = baseFromRatio(state)
    state = { ...state, ...updateIngredients(state.total, state.base, state.flavour) }
    this.setState({ state })
  }


  saveHandler = () => {
    const data = this.state
    sendToApi(data, 'php', true)
  }


  titleHandler = (event) => {
    const recipeName = event.target.value
    this.setState({ recipeName })
  }


  nameHandler = (event, idx) => {
    const flavour = this.state.flavour
    flavour[idx].name = event.target.value
    this.setState({ flavour })
  }


  delFlavourHandler = (event, idx)=> {
    event.preventDefault()
    const flavour = this.state.flavour
      .filter( (item, i) => i !== idx )
    this.setState({ flavour })
  }


  addFlavourHandler = () => {
    const emptyFlavour = { name: '' , ml: 0, gr: 0, percent: 0 , type:''}
    const flavour = [
      ...this.state.flavour,
      emptyFlavour
    ]
    this.setState({flavour})
  }
}

export default CalcTable
