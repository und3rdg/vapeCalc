import React, {Component} from 'react'

class UserInput extends Component{
  handleChange(event){
    this.setState({totall: event.target.value})
  }
  render(){
    const {total, updateTotal} = this.props
    return (
      <form className="userInput">
        <div className="userInput_item">
          <input
            name="total"
            value={total}
            placeholder="50"
            onChange={updateTotal}
          />
          <label>ml</label>
        </div>
      </form>
    )
  }
}

export default UserInput
