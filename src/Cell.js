import React, { Component } from 'react';



export default class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {
          color: this.props.value
        };
      }

    colorChange = () => {
        // let newColor;
        // if (this.state.color == "#F00"){
        //     newColor = "#0F0";
        // } else if (this.state.color == "#0F0") {
        //     newColor = "#00F";
        // } else {
        //     newColor = "#F00"
        // }
        // console.log('hello world');
        // this.setState({color:newColor});
        this.setState({color: "#333"})
        
    }
     

    render() {
       //console.log(this.props)
        return (
            <div className="cell" 
                style={{backgroundColor: this.state.color, border: "solid"}}
                onClick={this.colorChange}
                >
            </div>
        )
       
    }




}