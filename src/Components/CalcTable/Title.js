import React, { Component } from 'react'

class Title extends Component{
  render(){
    const { recipeName, titleHandler } = this.props
    return (
      <div className="recipe_name">
        <input
          type="text"
          defaultValue={ recipeName }
          placeholder="Add title"
          onChange={titleHandler}
        />
      </div>
    )
  }

}
export default Title
