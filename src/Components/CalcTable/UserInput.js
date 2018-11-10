import React, {Component} from 'react'

class UserInput extends Component{
  render(){
    const {total, updateFromTotalHandler} = this.props
    return (
      <div className="userInput">
        <div className="userInput_item">
          <input
            name="total"
            defaultValue={total}
            placeholder="{^,^}"
            onChange={updateFromTotalHandler}
          />
          <label>ml</label>
        </div>
      </div>
    )
  }
}

export default UserInput
