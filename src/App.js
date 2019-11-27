import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from './redux/actions'
import Home from './components/Home';
import CreateIssue from './components/issues/CreateIssue.js';
import SignUp from './components/users/SignUp';
import Login from './components/users/Login';
import Bheader from './components/Bheader';
import PrimHeader from './components/PrimHead';
import SecHeader from './components/SecHead';
import PrimHome from './components/users/prim_admin/PrimHome';
import BoardHome from './components/users/board/BoardHome';
import SecHome from "./components/users/sec_admin/SecHome";
import './App.css';

function App(props) {
  console.log("App.js props: ", props);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("App.js L.S. user", user);
    props.setUser(user);

  }, [])


  return (
    <div className="App">
      {props.board &&
        <Bheader first_name={props.first_name} />
      }
      {props.primary_admin &&
        <PrimHeader first_name={props.first_name} />
      }
      {props.sec_admin &&
        <SecHeader first_name={props.first_name} />
      }

      <Route exact path="/" render={props => <Home {...props} />} />
      <Route exact path="/sign-up" render={props => <SignUp   {...props} />} />
      <Route exact path="/login" render={props => <Login   {...props} />} />

      {/* USER ROUTES */}
      <Route path='/primary-home' render={props => <PrimHome {...props} />} />
      <Route path='/sec-home' render={props => <SecHome {...props} />} />
      <Route path='/board-home' render={props => <BoardHome {...props} />} />


      <Route path="/create-issue" render={props => <CreateIssue {...props} />} />

    </div>
  );
}

const mapStateToProps = state => {
  return {
    board: state.userReducer.board,
    primary_admin: state.userReducer.primary_admin,
    sec_admin: state.userReducer.sec_admin,
    first_name: state.userReducer.first_name
  }
}

export default connect(mapStateToProps, { setUser })(App);
