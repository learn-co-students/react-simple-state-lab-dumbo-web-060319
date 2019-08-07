import React, { Component} from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      color: this.props.value
    }
  }
  // <Cell value={val} />
  // <div className="cell"></div>
  grayOnClick = () => {
    let gray = '#333'
    this.setState({
      color: gray
    })
  }

  render () {
    return (
      <div onClick={this.grayOnClick} className="cell" style={{backgroundColor: `${this.state.color}`}}></div>
    )
  }

}