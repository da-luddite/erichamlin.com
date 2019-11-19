import React, { Component } from 'react';
import store from '../store.js';

import { Provider } from 'react-redux';
import MainMenu from './MainMenu.js';
import MainBody from './MainBody.js';



export default class App extends Component  {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div id='header'>
            <img id="signature" src="http://localhost:4000/images/site/signature.png" />
            Eric Hamlin
          </div>
          <MainMenu/>
          <MainBody/>
        </div>
        </Provider>
    );
  }
}
