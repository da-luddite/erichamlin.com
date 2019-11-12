import React, { Component } from 'react';
import MenuButton from './MenuButton.js';

export default class MainMenu extends Component {

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


