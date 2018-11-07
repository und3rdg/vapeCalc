import React, {Component} from 'react'


class Tbody extends Component {
  render(){
    const {base} = this.props
    
    let totalMl = 0
    let totalGr = 0
    let totalPercent = 0

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
          <td>{totalMl} ml</td>
          <td>{totalGr} gr</td>
          <td>{totalPercent} %</td>
        </tr>
      </tbody>
    )
  }
}

export default Tbody
