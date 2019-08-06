import React, { Component } from 'react';
import Cell from "./Cell.js"
export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value = {val}/>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

// twoD = () =>
// {
//   let arr = [];
//   for (let i=0; i < 10; i++)
//   {
//     arr[i] = [];

//     for (let j=0; j < 10; j++)
//     {
//       arr[i][j] = "#F00";
//     }
//   }
//   return arr;
// }

// let arr = [];
//   for (let i=0; i < 10; i++)
//   {
//     arr[i] = [];

//     for (let j=0; j < 10; j++)
//     {
//       arr[i][j] = "#F00";
//     }
//   }

const redArr = () => 
{
  let arr = [];
  for (let i=0; i < 10; i++)
  {
    arr[i] = [];

    for (let j=0; j < 10; j++)
    {
      arr[i][j] = "#F00";
    }
  }
  return arr;
}

Matrix.defaultProps = 
{
  values: redArr()
}