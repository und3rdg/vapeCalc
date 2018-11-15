import React, { Component } from 'react'
import './CalcTable.scss'
import Title from './Title'
import UserInput from './UserInput'
import Thead from './Thead'
import Tbody from './Tbody'
import {
  calcIngredients,
  calcTotal,
  updateIngredients
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
        { name: 'VG'       , ml: 0, gr: 0, percent: 61 , type:''},
      ],
      baseTotal: {ml:0, gr:0, percent:0},
      flavour: [
        // sample data
        // { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
        // { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
        // { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
      ],
      flavourTotal: {ml:0, gr:0, percent:0},
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
    
    const ratio = this.vgRatio(this.state.base)
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
          ratio={ratio}
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

  vgRatio = (base) => base.filter(el => el.type === "vg")[0].percent

  ratioHandler = (event) => {
    const base = this.state.base.map( el => {
      el.percent = (el.type === "vg") ? event.target.value : el.percent
      return el
    })
    this.setState({ base })
    this.setState(updateIngredients(this.state.total, this.state.base, this.state.flavour))
  }

  totalHandler = (event) => {
    const total = event.target.value
    this.setState({ total })
    this.setState(updateIngredients(total, this.state.base, this.state.flavour))
  }


  percentHandler = (event, idx, type) => {
    if(type !== "base" && type !== "flavour"){
      console.error(`type can only by 'base' or 'flavour' string. Inserted: [${type}]`)
      return
    }
    let variant = [ ...this.state[type] ]
    variant[idx].percent = event.target.value
    variant = calcIngredients(variant, this.state.total)
    const variantTotal = calcTotal(variant)
    this.setState({ [type]: variant, [type+"Total"]: variantTotal })
    
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
