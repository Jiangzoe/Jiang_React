import React from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    CommentLists:[]
  }
  handleSubmit = (val) => {
    console.log('从子组件',val);
    let CommentLists = this.state.CommentLists.slice(0);
    CommentLists.push(val)
    this.setState({
      CommentLists
    })
  }
  render(){
  const {CommentLists} =this.state
  return (
    <div>
      <CommentInput onSubmit={this.handleSubmit} />
      <CommentList CommentLists={CommentLists} />
    </div>
  );
}
}

export default App;
