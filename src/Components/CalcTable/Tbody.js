import React, {Component} from 'react'


class Tbody extends Component {

  ingredientRow = (name, idx)=>{
    return(
      <tr key={idx}>
        <td>{name.name}</td>
        <td>{name.ml} ml</td>
        <td>{name.gr} gr</td>
        <td>{name.percent} %</td>
      </tr>
    )
  }
  render(){
    const {base, baseTotal, flavour, flavourTotal} = this.props
    return (
      <tbody>
        {base.map(this.ingredientRow)}
        <tr className="total base_total">
          <td>Total Base</td>
          <td>{baseTotal.ml} ml</td>
          <td>{baseTotal.gr} gr</td>
          <td>{baseTotal.percent} %</td>
        </tr>
        {flavour.map(this.ingredientRow)}
        <tr className="total all_total">
          <td>Total</td>
          <td>{+(baseTotal.ml + flavourTotal.ml).toFixed(2)} ml</td>
          <td>{+(baseTotal.gr + flavourTotal.gr).toFixed(2)} gr</td>
          <td>{+(baseTotal.percent + flavourTotal.percent).toFixed(2)} %</td>
        </tr>
      </tbody>
    )
  }
}

export default Tbody
