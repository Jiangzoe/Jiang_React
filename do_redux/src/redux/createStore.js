
export const createStore = (state,storeChange) =>{
  const listeners = []  //组件
  const store = state || {};
  const subscribe = (listen) => listeners.push(listen)
  //发布订阅者
  const dispatch = (action) => {
    const newStore = storeChange(store,action)
    // 新的
    listeners.forEach(item => {
      item(newStore,store)
    })
  }
  return {store,dispatch,subscribe};
}
