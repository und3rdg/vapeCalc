import React, {Component} from 'react'


class Tbody extends Component {
  baseRow = (name, idx)=>{
    return(
      <tr key={idx}>
        <td>{name.name}</td>
        <td>{name.ml} ml</td>
        <td>{name.gr} gr</td>
        <td>
          <input
            onChange={ (event) => this.props.percentHandler(event, idx, "base") }
            defaultValue={name.percent}
          /> %</td>
      </tr>
    )
  }

  flavourRow = (name, idx) => {
    const {percentHandler, nameHandler, delHandler} = this.props
    return(
      <tr key={idx}>
        <td>
          <div className="flavour_name__wrap">
            <input
              className="flavour_name"
              defaultValue={name.name}
              onChange={ (event) => nameHandler(event, idx) }
            />
            <button
              className="btn_del"
              type="button"
              onClick={(event) => delHandler(event, idx)}
            >X</button>
          </div>
        </td>
        <td>{name.ml} ml</td>
        <td>{name.gr} gr</td>
        <td>
          <input
            onChange={ (event) => percentHandler(event, idx, "flavour") }
            defaultValue={name.percent}
          /> %</td>
      </tr>
    )
  }

  render(){
    const { base, baseTotal, flavour, flavourTotal } = this.props
    return (
      <tbody>
        { base.map(this.baseRow.bind(this)) }
        <tr className="total base_total">
          <td>Total Base</td>
          <td>{baseTotal.ml} ml</td>
          <td>{baseTotal.gr} gr</td>
          <td>{baseTotal.percent} %</td>
        </tr>
        { flavour.map(this.flavourRow.bind(this)) }
        <tr className="total all_total">
          <td>Total</td>
          <td>{ (baseTotal.ml + flavourTotal.ml).toFixed(2) } ml</td>
          <td>{ (baseTotal.gr + flavourTotal.gr).toFixed(2) } gr</td>
          <td>{ (baseTotal.percent + flavourTotal.percent).toFixed(2) } %</td>
        </tr>
      </tbody>
    )
  }
}

export default Tbody
