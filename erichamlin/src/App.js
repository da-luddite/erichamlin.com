import React, { Component } from 'react';
import './App.css';
import reducers from './reducers.js';
import { switchPageAction } from "./actions.js";
import { createStore } from 'redux';
import './queries.js';

const store = createStore(reducers);


class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: 'new'
    };
  }

  handleMenuSelection(selection) {
    console.log(selection);
    this.setState({selectedSection: selection});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <MainMenu onClick={(selection) => this.handleMenuSelection(selection)}/>
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
        <MenuButton onClick={this.props.onClick} selection={"new"}/>
        <MenuButton onClick={this.props.onClick} selection={"categories"}/>
        <MenuButton onClick={this.props.onClick} selection={"bio"}/>
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
