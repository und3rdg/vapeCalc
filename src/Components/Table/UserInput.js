import React, {Component} from 'react'

class UserInput extends Component{
  state = {
    total: ''
  }
  handleChange(event){
    this.setState({total: event.target.value})
  }
  render(){
    return (
      <form className="userInput">
        <div className="userInput_item">
          <input
            type="text"
            name="total"
            value={this.state.total}
            onChange={this.handleChange.bind(this)}
          />
          <label>ml</label>
        </div>
      </form>
    )
  }
}

export default UserInput
