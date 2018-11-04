import React, {Component} from 'react'


class Tbody extends Component {
  render(){
    const {ingredients, total} = this.props
    
    let totalMl = 0
    let totalGr = 0
    let totalPercent = 0

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

    return (
      <tbody>
        {ingredients.base.map( (val, idx)=>{
          const name = val.name
          const percent = val.percent
          const type = name === 'VG' ? 'vg' : 'pg'
          const ml = calcMlFromPercent(total, percent)
          const gr = calcGrFromMl(ml, type)

          totalMl += parseFloat(ml)
          totalGr += parseFloat(gr)
          totalPercent += parseFloat(percent)

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
          <td>{totalMl} ml</td>
          <td>{totalGr} gr</td>
          <td>{totalPercent} %</td>
        </tr>
      </tbody>
    )
  }
}

export default Tbody
