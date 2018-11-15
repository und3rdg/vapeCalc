import React, {Component} from 'react'

class UserInput extends Component{
  render(){
    const { total, totalHandler, ratio, ratioHandler } = this.props
    return (
      <div className="userInput">
        <div className="userInput_item total">
          <input
            type="text"
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
            min="0"
            max="100"
            step="5"
            value={ratio}
            onChange={ratioHandler}
          />
          <label>PG / VG</label>
        </div>

      </div>
    )
  }
}

export default UserInput
