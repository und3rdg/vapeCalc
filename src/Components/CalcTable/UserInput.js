import React, {Component} from 'react'

class UserInput extends Component{
  render(){
    const { total, totalHandler, ratio, ratioHandler } = this.props
    return (
      <div className="userInput">
        <div className="userInput_item total">
          <input
            type="number"
            tabIndex="2"
            step="5"
            defaultValue={ total }
            placeholder="{^,^}"
            onChange={ totalHandler }
            name="total"
          />
          <label>ml</label>
        </div>
        <div className="userInput_item slider">
          <input
            type="range"
            tabIndex="3"
            min="0"
            max="100"
            step="5"
            defaultValue={ ratio }
            onChange={ ratioHandler }
          />
          <label>PG / VG</label>
        </div>

      </div>
    )
  }
}

export default UserInput
