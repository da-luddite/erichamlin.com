import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>Yoda
        <MainMenu/>
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
      <div>Sidemenu</div>
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
