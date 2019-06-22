import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

/**
 * 进入页面之前 鉴权
 *  <PrivateRoute path = "/user" component={}
*/
function PrivateRoute(props){
  const {path,component:Component} = props
  return(
    <Route path={path} render={
      () => {
        return true ? <Component></Component> : 
        <Redirect to={{
          pathname:'/login'
        }}></Redirect>
      }
    }>
    </Route>
  )
}

function Login(){
  return(
    <div>Login</div>
  )
}
function Protect(){
  return(
    <div>Protect</div>
  )
}
function User(){
  return(
    <div>User</div>
  )
}
function About(){
  return(
    <div>About</div>
  )
}
function Index() {
  return (
    <div>Home</div>
  )
}
function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/protect">Protect Page</Link>
        </li>
      </ul>
      {
        true ?
        <Route path="/" exact component={Index}></Route> : <div>no router</div>
      }
       <Route path="/about" component={About}></Route>
       <PrivateRoute path="/user" component={User}></PrivateRoute>
       <Route path="/login" component={Login}></Route>
       <Route path="/protect" render={() => {
         return true ? 
         <Protect></Protect> : 
         <Redirect to={{pathname:'/login',
        state:{from:'/protect'}
      }}></Redirect>
       }}></Route>
    </Router>
  );
}

export default App;
