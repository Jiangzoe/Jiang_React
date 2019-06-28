import React from 'react';
import LoginStatus from './LoginStatus';
import ExampleMobx from './ExampleMobx/index'
import ShopCart from './ShopCart';
// import WithLogin from './WithLogin';
import exampleBase from './exampleBase/index'
import ExampleBounce from './ExampleBounce/index'
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
    <>
      <LoginStatus />
      <ShopCart />
      <ExampleMobx></ExampleMobx>
      <ExampleBounce></ExampleBounce>
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2"/> */}
    </>
  )
}

export default App;
