import React, { Component } from 'react'

class Thead extends Component {
  render(){
    const {titles} = this.props
    return (
      <thead>
        <tr>
          {titles.map( (title, idx) => <th key={idx}>{title}</th> )}
        </tr>
      </thead>
    )
  }
}

export default Thead
