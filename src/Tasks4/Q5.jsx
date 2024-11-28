// . Explain pure/impure components.
import React, { Component, PureComponent } from 'react'

export default class Q5 extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    add=()=>{
        this.setState({count:this.state.count+1})
       
    }
  render() {
    console.log("Render")

    return (
      <div>
        <div className="count">{this.state.count}</div>
        <input type="button" value="+" onClick={this.add}/>
      </div>
    )
  }
}
