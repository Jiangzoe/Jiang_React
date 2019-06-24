## render
组件 需要渲染的页面

## jsx
react 自己的语法就是 js + html

# 生命周期
16.x
![16.x](https://raw.githubusercontent.com/shunwuyu/lesson_md/master/react/life-cycle/src/new.jpg) 
15.x
![15.x](https://raw.githubusercontent.com/shunwuyu/lesson_md/master/react/life-cycle/src/old.png);
## 挂载阶段
第一次渲染  
componentWillMount  
componentDidMount
## 更新阶段
shouldComponentUpdate  
true 更新
Flase 不更新  


componentWillMount  
清理  
定时器  
全局事件绑定

# context
```
<!-- parent  state-->
{
  theme:'red'
}
```

theme从最外面的父组件 -> 子组件 -> 孙组件  
- 父组件通过getChildContext 返回提供的 context 内容
- 父组件 .childContextTypes 定义提供的context的类型
- 子组件获取的时候， .contextTypes 定义接受的类型 this.context 获取

**15.x问题：**  
跨层级传递的时候，假如中间某一组件 shouldComponentUpdate return false 了之后 导致后代不会更新 context 的数据不能同步  
**16.xxx步骤**  
1. 构造 Provider Consumer
2. 父组件 `<Provider value={} /> `提供数据
3. 后代组件`<Consumer>{ () => {}}</Consumer>` 获取数据
4. 
    ```
    state = {
        theme: 'puple',
        toggle: this.handleToggletheme
      }
    ```
    静态属性无法获取实例的this

# function & class
- function component (dumb component) 根据props 渲染 不会依赖任何东西  
- class component (smart component) 负责状态管理 复杂，依赖于其他属性
