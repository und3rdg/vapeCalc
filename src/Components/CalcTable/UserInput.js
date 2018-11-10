import React, {Component} from 'react'

class UserInput extends Component{
  render(){
    const {total, updateTotalHandler} = this.props
    return (
      <div className="userInput">
        <div className="userInput_item">
          <input
            name="total"
            value={total}
            placeholder="{^,^}"
            onChange={updateTotalHandler}
          />
          <label>ml</label>
        </div>
      </div>
    )
  }
}

export default UserInput
