import React, { Component } from 'react'
import './CalcTable.scss'
import UserInput from './UserInput.js'
import './UserInput.scss'


class CalcTable extends Component {
  render(){
    return (
      <div>
        <UserInput />
        <table className="calc_table">
          <Thead />
          <Tbody />
        </table>
      </div>
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

function calcGrFromMl(ml, type){ 
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
  return gr.toFixed(2) 
}

// eslint-disable-next-line
function calcMlFromPercent(total, percent){
  let ml = total * percent / 100
  return ml.toFixed(2)
}

class Tbody extends Component {
  state = {
    ingredients: {
      base: [
        {
          name: 'Nicotine',
          gr: '3.60',
          ml: '3.00',
          percent: '5'
        },
        {
          name: 'PG',
          // |--------|--------|
          // | 100ml  | 103.6g |
          // | 96.52% | 103.6% |
          // |--------|--------|
          gr: '3.60',
          ml: '3.00',
          percent: '5'
        },
        {
          name: 'VG',
          // |--------|--------|
          // | 100ml  | 126.1g |
          // | 79.17% | 126.1% |
          // |--------|--------|
          gr: '3.60',
          ml: '3',
          percent: '5'
        },
      ]
    }
  }
  render(){
    return (
      <tbody>
        {this.state.ingredients.base.map( (val, idx)=>{
          let name = val.name
          let type = name === 'VG' ? 'vg' : 'pg'
          let ml = val.ml
          let gr = calcGrFromMl(ml, type)
          let percent = val.percent
          return(
            <tr key={idx}>
              <td>{name}</td>
              <td>{ml} ml</td>
              <td>{gr} gr</td>
              <td>{percent} %</td>
            </tr>
          )
        })}
        <tr className="sum">
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
