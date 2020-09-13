// libs
import React, { Component } from 'react';
// custom components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// styles
import classes from './App.module.scss'

export default class App extends Component {
  render(){
    return (
      <div className={classes.Container}>
        <Header />
        <Main />
      </div>
    )
  }
}
