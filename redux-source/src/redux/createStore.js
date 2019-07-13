const createStore = (reducer,preloadState) =>{
  const listeners = []  //组件
  let store = preloadState;
  const subscribe = (listen) => listeners.push(listen)
  //发布订阅者
  const dispatch = (action) => {
    store = reducer(store,action)
    listeners.forEach(item => {
      item()
    })
  }
  const getState = () => {
    return store
  }
  dispatch({type:'@@redux/INIT'})
  return {
    store,
    dispatch,
    subscribe,
    getState
  };
}
export default createStore
