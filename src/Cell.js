import React, { Component } from 'react';


export default class Cell extends Component 
{

    constructor(props)
    {
        super(props)
        this.state = 
        {
            color: this.props.value
        }
    }
    
    clickEvent = () => 
    {
        this.setState({
            color: `#333`
        })
    }
    render() 
    {
        console.log(this.props.value)
        return (
            <div onClick = {this.clickEvent} className = "cell" style= {{backgroundColor: this.state.color}} >

            </div>
        )
    }
}