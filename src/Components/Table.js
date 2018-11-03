import React, { Component } from 'react'
import _ from 'lodash'


class CalcTable extends Component {
  render(){
    return (
      <table className="calc_table">
        <Thead />
        <Tbody />
      </table>
    )
  }
}


class Thead extends Component {
  state = {
    thead: [ 'Ingredient', 'Gram', 'Millilitre', 'Percent' ]
  }
  render(){
    return (
      <thead>
        <tr>
          {this.state.thead.map( (title, idx) => <th key={idx}>{title}</th>)}
        </tr>
      </thead>
    )
  }
}

// calc mililitres from grams
// eslint-disable-next-line
function calcGr(ml, type){ 
  let gr
  switch(type){
    case 'pg':
      gr = ml * 103.6 / 100
      break
    case 'vg':
      gr = ml * 126.1 / 100
      break
    default:
      console.error('wrong type')
  }
  return gr 
}

class Tbody extends Component {
  state = {
    ingredients: {
      base: {
        nicotine: {
          name: 'Nicotine',
          gr: '3.60',
          ml: '3.00',
          percent: '5'
        },
        pg: {
          name: 'PG',
          // |--------|--------|
          // | 100ml  | 103.6g |
          // | 96.52% | 103.6% |
          // |--------|--------|
          gr: '3.60',
          ml: '3.00',
          percent: '5'
        },
        vg: {
          name: 'VG',
          // |--------|--------|
          // | 100ml  | 126.1g |
          // | 79.17% | 126.1% |
          // |--------|--------|
          gr: '3.60',
          ml: '3',
          percent: '5'
        },
      }
    }
  }
  render(){
    return (
      <tbody>
        {_.map(this.state.ingredients.base, (value, name)=>{
          return(
        <tr key={name}>
          <td>{value.name}</td>
          <td>{value.ml} ml</td>
          <td>{value.gr} gr</td>
          <td>{value.percent} %</td>
        </tr>
          )
        })}
        <tr>
          <td>Sum</td>
          <td>x ml</td>
          <td>x gr</td>
          <td>x %</td>
        </tr>
      </tbody>
    )
  }
}



export default CalcTable
