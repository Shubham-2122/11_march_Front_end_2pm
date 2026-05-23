// State : it's varibale 
// State : we can change data 
// State : Same File use
// Class and Function 
// Class : this.state fix as object 
// class : this.setstate() function inbuilt use 

import React, { Component } from 'react'
import ImageData from './ImageData';

class ClassState extends Component {
    constructor(){
        super();
        this.state = {
            name : "shubham",
            count : 0,
            isImage : true
        }
    }
  render() {
    // console.log(this.state)
    return (
      <div>
            <h1>Hello Name : {this.state.name}</h1>
            <button onClick={()=>this.setState({name : "sujal jadav"})}>Change Name</button>
            <button onClick={()=>this.setState({name : "rishi patel"})}>Change Name 2</button>

            <h2>Count : {this.state.count}</h2>
            <button onClick={()=>this.setState({count : this.state.count + 1})}>Increment</button>
            <button onClick={()=>this.setState({count : this.state.count - 1})}>Decrement</button>

            <button onClick={()=>this.setState({count : 0})}>Reset</button>
            {/* sum = this.state.sum + 1 */}
                <br /> <br />

                <button onClick={()=>this.setState({isImage : false})}>Hide</button>
                <button onClick={()=>this.setState({isImage : true})}>Show</button>
                <button onClick={()=>this.setState({isImage : !this.state.isImage})}>Toggle</button>
                
                <br />
            {
                (this.state.isImage)? <ImageData /> : false
            }

      </div>
    )
  }
}

export default ClassState
