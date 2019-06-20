import React from 'react'
import propTypes from 'prop-types'

class MyButton extends React.Component {
  render() {
    return (
      <button style={{backgroundColor:this.context.color}}>{this.props.children}</button>
    )
  }
}
MyButton.contextTypes ={
  color:propTypes.string
}


class Message extends React.Component {
  render() {
    return (
      <div>{this.props.text}
        <MyButton>delete</MyButton>
      </div>
    )
  }
}
class Context extends React.Component {
  state = {
    msgs: ['msg1', 'msg2', 'msg3'],
    theme:'purple'
  }
  handleToggleTheme= () =>{
    this.setState({
      theme:'red'
    })
  }
  getChildContext() {
    return { color: this.state.theme }
  }
  render() {
    const msgNodes = this.state.msgs.map((msg, i) => {
      return (<Message text={msg} />)
    })
    return (
      <div>
        <button onClick={this.handleToggleTheme}>切换主题</button>
        {/* 让用户自定义内容 */}
        {this.props.children}
        {msgNodes}
      </div>
    )
  }
}
Context.childContextTypes = {
  color:propTypes.string
}
// react 提供了一个类型的npm 包
// cnpm i prop-types -S
export default Context