import React, { Component } from 'react';


export default class Matrix extends Component {

  constructor(props){
    super(props)
    this.state={color:this.props.value}
  }

  change=()=>{
    this.setState({
      color:"#333"
    })
  }

  render() {
      return (
        <div onClick={this.change} className="cell" style={{backgroundColor: this.state.color}}></div>
      )
    }
    
  }
  