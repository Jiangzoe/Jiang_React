# redux
组件间的状态，兄弟组件，父子组件，多了很多语法的粉饰。当我们的项目是大型项目时，多组件，多个跨路由的组件共享状态。
- 状态管理 协同  
  dispatch(action {type:'',payload:''}) -> reducer(无差别的状态计算 switch case 协同) -> state

1. head body 两个函数组件，共享了单一的全局状态树
2. 状态全局，可以被随意的修改
3. dispatch 使状态的改变可控，任何改变都可以再dispatch中找到源头{type:'',payload}
4. 通知发生了状态改变，oldState newState，使用新的状态。subscribe