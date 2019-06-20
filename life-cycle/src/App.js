import React from 'react';
import Child from './Child';
import Child1 from './Child1';
import Context from './Context'
import Context1 from './Context1'
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.objRef = React.createRef()
  }
  state = {
    count: 0,
    showChild: true
  }
  handleToggleChild = () => {
    const { showChild } = this.state;
    this.setState({
      showChild: !showChild
    })
  }
  handleChildPropsChange = () => {
    let { count } = this.state;
    // count ++;
    this.setState({
      count
    })
  }
  componentDidMount() {
    this.refs.stringRef.innerHTML = ' new string ref'
    this.methodRef.innerHTML = 'new Method Ref'
    this.objRef.current.innerHTML = 'new Object Ref'
  }
  render() {
    const { count, showChild } = this.state;
    return (
      <div>
        <Context></Context>
        <p ref="stringRef">react ref</p>
        <p ref={(ref) => this.methodRef = ref}> method ref</p>
        <p ref={this.objRef}> Objeec ref</p>

        {/* innerHTML */}
        <div dangerouslySetInnerHTML={{
          __html:`<strong>strong</strong>`
        }}></div>

        <button onClick={this.handleChildPropsChange}>
          child component props change
        </button>
        <button onClick={this.handleToggleChild}>toggle Child</button>
        {
          !showChild ?
            <Child count={count} /> : <Child1 count={count} />
        }

        {/* <Context>小华</Context> */}
        <Context1>
          <p>react 16.x.x</p>
        </Context1>
      </div>
    )
  }
}
export default App;
