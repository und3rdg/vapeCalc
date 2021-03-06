import React, {Component} from 'react'


class Tbody extends Component {
  baseRow(name, idx){
    return(
      <tr key={idx}>
        <td>{name.name}</td>
        <td>{name.ml} ml</td>
        <td>{name.gr} gr</td>
        <td>
          <input
            type="number"
            step="1"
            tabIndex={100 + idx}
            onChange={ (event) => this.props.percentHandler(event, idx, "base") }
            value={name.percent}
          /> %</td>
      </tr>
    )
  }

  flavourRow(name, idx){
    const {percentHandler, nameHandler, delFlavourHandler} = this.props
    return(
      <tr key={idx}>
        <td>
          <div className="flex_wrap">
            <input
              type="text"
              tabIndex={300+idx}
              className="flavour_name"
              value={name.name}
              placeholder="Flavour name"
              onChange={ (event) => nameHandler(event, idx) }
            />
            <button
              className="btn_del"
              type="button"
              onClick={(event) => delFlavourHandler(event, idx)}
            >X</button>
          </div>
        </td>
        <td>{name.ml} ml</td>
        <td>{name.gr} gr</td>
        <td>
          <input
            type="number"
            step="0.5"
            tabIndex={200+idx}
            onChange={ (event) => percentHandler(event, idx, "flavour") }
            value={name.percent}
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
