import React from 'react';
import ShopCart from './ShopCart'
import LoginStatus from './LoginStatus'
// import WithLogin from './WithLogin'
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus)
// const WithShopCart = WithLogin(ShopCart)
function App() {
  return (
    // <React.Fragment>
    <>
      {/* <WithLoginStatus></WithLoginStatus>
      <WithShopCart a="1" b="2"></WithShopCart> */}
      <LoginStatus></LoginStatus>
      <ShopCart></ShopCart>
    </>
    // </React.Fragment>
  );
}

export default App;
