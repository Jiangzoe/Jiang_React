import {Component} from 'react'

class App extends Component{
  componentDidMount(){
    console.log('mount')
  }
  render(){
    return (
      <>
      <div>Header { layouts/indexedDB.js}</div>
      <hr/>
      <hr/>
      {children}
      </>
    )
  }
}

export default App