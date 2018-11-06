import React, {Component} from 'react'

class UserInput extends Component{
  render(){
    const {total, updateTotal} = this.props
    return (
      <div className="userInput">
        <div className="userInput_item">
          <input
            name="total"
            value={total}
            placeholder="50"
            onChange={updateTotal}
          />
          <label>ml</label>
        </div>
      </div>
    )
  }
}

export default UserInput
