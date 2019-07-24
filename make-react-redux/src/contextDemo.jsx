import React, { Component } from 'react';
const context = React.createContext()

class A extends Component {
  state = { 
    store:1
   }
  render() { 
    const { store } = this.state
    return ( 
      <context.Provider value={store}>
        <B /> 
      </context.Provider>
    );
  }
}

function B(){
  return(<C />)
}

class C extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        {/* 获取数据 */}
        <context.Consumer>
          {
            // 函数可以接收provider传来的数据
            (store) => {
              return (
                <h2>{store}</h2>
              )
            }
          }
        </context.Consumer>
      </div>
     );
  }
}
 

export default A;