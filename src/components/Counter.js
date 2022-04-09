import React, { Component } from 'react'


class Counter extends Component {
    constructor()
{
  super()
  this.state = {
     count:0
  }
}
increment()
{
    this.setState((prevState,props)=>({
        count:prevState.count + this.props.num
    })
    )
}
incrementFive()
{
    //console.log("I am inside the increment five fun")
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
  render() {
    return (
      <div>
          <h2>Counter - {this.state.count}</h2>
          <button onClick={ () => this.incrementFive()}>Increment</button>
          
          </div>
    )
  }
}

export default Counter