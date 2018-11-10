import React, {Component} from 'react'

class UserInput extends Component{
  render(){
    const {total, totalHandler} = this.props
    return (
      <div className="userInput">
        <div className="userInput_item">
          <input
            defaultValue={total}
            placeholder="{^,^}"
            onChange={totalHandler}
          />
          <label>ml</label>
        </div>
      </div>
    )
  }
}

export default UserInput
