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
}  from './../../Controlers/Calculate'
import { sendToApi } from './../../Controlers/api'

class CalcTable extends Component {
  constructor(){
    super()
    this.state = {
      recipeName: '',
      total: 50,
      theadTitles: [ 'Ingredient', 'Millilitre', 'Gram', 'Percent' ],
      base: [
        { name: 'Nicotine' , ml: 0, gr: 0, percent: 7  , type:''},
        { name: 'PG'       , ml: 0, gr: 0, percent: 23 , type:''},
        { name: 'VG'       , ml: 0, gr: 0, percent: 60 , type:''},
      ],
      baseTotal: {ml:0, gr:0, percent:0},
      flavour: [
        // sample data
        // { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
        // { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
        // { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
      ],
      flavourTotal: {ml:0, gr:0, percent:0},
      ratio: {
        vg: 60,
        pg: 40 
      }
    }

    const ingredients = updateIngredients(this.state.total, this.state.base, this.state.flavour)
    this.state = {
      ...this.state,
      base         : ingredients.base,
      baseTotal    : ingredients.baseTotal,
      flavour      : ingredients.flavour,
      flavourTotal : ingredients.flavourTotal,
    }
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
          onClick={this.addFlavourHandler}
        >Add flavour</button>
        <button
          type="button"
          onClick={this.saveHandler}
        >Save</button>
      </form>
    )
  }


  ratioHandler = (event) => {
    let state = { ...this.state }
    state.ratio.vg = +event.target.value
    state.ratio.pg = +(100 - event.target.value)

    state = { ...state, ...baseFromRatio(state) }
    this.setState(updateIngredients(state.total, state.base, state.flavour))
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
    state = { ...state, ...baseFromRatio(state) }
    this.setState(updateIngredients(state.total, state.base, state.flavour))
    this.setState({ state })
  }


  totalHandler = (event) => {
    let state = { ...this.state, total: +event.target.value }
    this.setState(updateIngredients(state.total, state.base, state.flavour))
    this.setState({state})
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
