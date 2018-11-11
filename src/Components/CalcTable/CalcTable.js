import React, { Component } from 'react'
import './CalcTable.scss'
import Title from './Title'
import UserInput from './UserInput'
import Thead from './Thead'
import Tbody from './Tbody'
import {
  updateBase,
  total as calcTotal
}  from './../../Controlers/Calculate'

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
        // test data
        // { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
        // { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
        // { name: 'Apple Fuji (FA)' , ml: 2, gr: 10, percent: 10 , type:''},
      ],
      flavourTotal: {ml:0, gr:0, percent:0},
    }

    this.state.base = updateBase(this.state.base, this.state.total)
    this.state.baseTotal = calcTotal(this.state.base)

    this.state.flavour = updateBase(this.state.flavour, this.state.total)
    this.state.flavourTotal = calcTotal(this.state.flavour)
  }


  saveHandler = () => {
    const data = this.state
    console.log(data)
  }


  titleHandler = (event) => {
    const recipeName = event.target.value
    this.setState({ recipeName })
  }

  totalHandler = (event) => {
    const total = event.target.value

    const base = updateBase(this.state.base, total)
    const baseTotal = calcTotal(this.state.base)

    const flavour = updateBase(this.state.flavour, total)
    const flavourTotal = calcTotal(this.state.flavour)

    this.setState({ total, base, baseTotal, flavour, flavourTotal })
  }

  
  percentHandler = (event, idx, type) => {
    switch(type){
      case 'flavour': 
        let flavour = [ ...this.state.flavour ]
        flavour[idx].percent = event.target.value
        this.setState({ flavour })
        flavour = updateBase(this.state.flavour, this.state.total)
        const flavourTotal = calcTotal(flavour)
        this.setState({ flavour, flavourTotal })
        break
      case 'base': 
        let base = [ ...this.state.base ]
        base[idx].percent = event.target.value
        this.setState({ base })
        base = updateBase(this.state.base, this.state.total)
        const baseTotal = calcTotal(base)
        this.setState({ base, baseTotal })
        break
      default: console.error('wrong type in totalHandler()')
    }
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
}

export default CalcTable
