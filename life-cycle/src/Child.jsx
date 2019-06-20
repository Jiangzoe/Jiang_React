import React from 'react';
class Child extends React.Component{
    state = {
        childCount: 0
    }
    handleChileCountChange = () => {
        let {childCount} = this.state;
        childCount ++;
        this.setState({
            childCount
        })
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.interval=setInterval(() => {
            console.log('child setInterval')
        },1000)
    }
    // props 更新的流程
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    // 可以控制组件是否更新  这个生命周期是组件性能优化的时候需要的，可控制不必要的更新
    shouldComponentUpdate(nextProps, nextState){ //return true/false  更新与否
        if (nextProps.count !== this.props.count){ //nextProps 为新的props  this.props为老的props  当新的props不等于老的props更新
            return true
        }
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        clearInterval(this.interval)
        console.log('componentWillUnmount')
    }
    render(){
        const { count } = this.props;
        const { childCount } = this.state
        console.log('render')
        return(
            <div>
            <button onClick={this.handleChileCountChange}>
                child state change
            </button>
            child Component
            count:{count}
            childCound:{childCount}
            </div>
        )
    }
}
export default Child
