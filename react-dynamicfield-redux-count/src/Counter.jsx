import React from 'react'

class Counter extends React.Component{
  render(){
    const {value,onIncrement,onDecrement } = this.props
    return(
      <div>
        { value}
        <div>
          <button onClick={onIncrement}>+</button>
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
        </div>
      </div>
    )
  }
}
export default Counter