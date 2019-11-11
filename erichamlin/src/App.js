import React, { Component } from 'react';
import './App.css';
import reducers from './reducers.js';
import { switchPageAction, storePiecesAction } from "./actions.js";
import { createStore } from 'redux';
import { queryAllPieces } from './queries.js';

const store = createStore(reducers);

queryAllPieces().then(function (response) {
  // response is originally response.data of query result
  store.dispatch(storePiecesAction(response.pieces));
}).catch(function (error) {
  // response is originally response.errors of query result
  console.log(error)
});


class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: 'new'
    };
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <MainMenu/>
        <Main/>
      </div>
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
      <button onClick={() => store.dispatch(switchPageAction(this.props.selection))}>{this.props.selection}</button>
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

class SideMenu extends Component {
  render() {
    return (
      <div>
        <div>2019</div>
        <div>2018</div>
        <div>etc.</div>
      </div>
  )
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
