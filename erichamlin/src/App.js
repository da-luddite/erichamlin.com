import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
        Eric Hamlin
      </div>

    );
  }
}

class MainMenu extends Component {
  render() {
    return (
      <div>New  Categories  Sketch/Blog</div>
    );
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
