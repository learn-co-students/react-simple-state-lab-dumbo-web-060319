import React, { Component } from 'react';

export default class Cell extends Component {
    
    constructor(value) {
        console.log(value.value)
        super(value)
        this.state = {
            color: value.value
        }
    }

    change = () => {
        console.log(typeof this.state.color)
        this.setState({
            color: '#333'
        })
    }
    
    render() {
       
        return (
            <div 
            className='cell' 
            style={{backgroundColor: this.state.color}}
            onClick={this.change}
            >
                
            </div>
        )
    }

}