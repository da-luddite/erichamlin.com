import React, { Component } from 'react';
import './App.css';
import { switchPageActionWithDispatch } from "./actions.js";

import { Provider } from 'react-redux';
import store from './store.js';
import SideMenu from './SideMenu.js';


class App extends Component  {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header/>
          <MainMenu/>
          <Main/>
        </div>
        </Provider>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div id='header'>
        <div id="signature"><div>Signature image</div></div>
        Eric Hamlin
      </div>

    );
  }
}

class MainMenu extends Component {

  render() {
    return (
      <div>
        <MenuButton selection={"new"}/>
        <MenuButton selection={"categories"}/>
        <MenuButton selection={"bio"}/>
        <button>Sketch/Blog</button>
      </div>
    );
  }
}

class MenuButton extends Component {
  render() {
    return (
      <button onClick={() => switchPageActionWithDispatch(this.props.selection)}>{this.props.selection}</button>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <SideMenu/>
        <Content/>
      </div>
    );
  }
}




class Content extends Component {
  render() {
    return (
      <div>Content</div>
    )
  }
}

export default App;
