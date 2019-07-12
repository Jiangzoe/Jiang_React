import {state} from './redux/state'
import {storeChange} from './redux/storeChange'
import {createStore} from './redux/createStore' 
const{store,dispatch,subscribe} = createStore(
  state,
  storeChange
)
//管理状态 修改

function renderHead(state){
  console.log('render head')
  // 模拟两个单独的函数组件
  const head = document.getElementById('head');
  head.innerText = state.text;
  head.style.color = state.color;
}
function renderBody(state) {
  console.log('render body')
   const body = document.getElementById('body');
   body.innerText = state.text;
   body.style.color = state.color;
  //  state.body.text= '我是经过修改的body'
 
}

function renderApp(store,oldstore={}){
  if( store === oldstore) return
  store.head !== oldstore.head && renderHead(store.head);//newstore
  store.body !== oldstore.body && renderBody(store.body); //oldstate
}
subscribe((store,oldstore) => renderApp(store,oldstore))
renderApp(store);
dispatch({
  type: 'BODY_TEXT',
  text: '我是经过head修改的body'
})
// renderApp(store);
