import React, {Component} from 'react'


class Tbody extends Component {
  render(){
    const {base, baseTotal} = this.props
    return (
      <tbody>
        {base.map((base, idx)=>{
          return(
            <tr key={idx}>
              <td>{base.name}</td>
              <td>{base.ml} ml</td>
              <td>{base.gr} gr</td>
              <td>{base.percent} %</td>
            </tr>
          )
        })}
        <tr className="sum">
          <td>Sum</td>
          <td>{baseTotal.ml} ml</td>
          <td>{baseTotal.gr} gr</td>
          <td>{baseTotal.percent} %</td>
        </tr>
      </tbody>
    )
  }
}

export default Tbody
