import React, { Component } from 'react';
import './App.css';

import reducers from './reducers.js';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const Q = gql`
  {
    pieces {
      title
      description
      date
      dimensions
      media
      thumbnail { 
        url 
      }
      images {
        url 
        description
      }
    }
  }
`;

const runQuery = useQuery(Q);

class App extends Component {

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
      <button onClick={() => this.props.onClick(this.props.selection)}>{this.props.selection}</button>
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
