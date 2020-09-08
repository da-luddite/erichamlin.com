import React, { Component } from 'react';
import MenuButton from './MenuButton.js';

export default class MainMenu extends Component {

  render() {
    return (
      <div id="main-menu">
        <MenuButton selection={"new"}/>
        <MenuButton selection={"categories"}/>
        <MenuButton selection={"bio"}/>
        <a href="http://erichamlin.com/wordpress/" target="_blank">Ephemera</a>
      </div>
    );
  }
}


